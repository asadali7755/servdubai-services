"""
add-hero-metadata.py
====================
Adds EXIF/IPTC metadata to the 5 hero images for servedubai.com.

Usage:
  python scripts/add-hero-metadata.py

Requirements:
  pip install pillow piexif

Notes:
  - Backups are created as <filename>.backup before any modification.
  - JPEG files:  full EXIF via piexif (XPTitle, XPSubject, XPKeywords,
                 XPComment, Rating, RatingPercent, ImageDescription).
  - WebP files:  EXIF bytes built with piexif and embedded via Pillow's
                 WebP save (Pillow >= 7.1 required).
  - Two hero images are .webp format despite the original brief listing
    them as .jpg — the script uses the actual filenames present on disk.
"""

import os
import shutil
import struct
import piexif
from PIL import Image

# ── Path configuration ────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
HERO_DIR = os.path.join(PROJECT_ROOT, "uae-service-hub", "public", "images", "hero")

# ── Metadata definitions ──────────────────────────────────────────────────────
IMAGE_METADATA = [
    {
        "filename": "cleaning-services-UAE.webp",
        "title": "Cleaning Services UAE",
        "subject": "Cleaning Services UAE - Professional cleaning across all Emirates",
        "rating": 5,
        "tags": [
            "cleaning services UAE",
            "professional cleaning UAE",
            "Al Haya Cleaning",
            "Dubai cleaning services",
            "Abu Dhabi cleaning",
            "deep cleaning services UAE",
            "cleaning services",
            "UAE",
        ],
        "comment": (
            "Cleaning Services UAE by Al Haya - Professional cleaning solutions across all seven "
            "Emirates of UAE including Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. "
            "Expert cleaning services with eco-friendly products and trained professionals."
        ),
    },
    {
        "filename": "marble-polishing-dubai.jpg",
        "title": "Marble Polishing Dubai",
        "subject": "Marble Polishing Dubai - Professional marble and floor polishing services",
        "rating": 5,
        "tags": [
            "marble polishing Dubai",
            "floor polishing Dubai",
            "marble restoration Dubai",
            "stone polishing UAE",
            "Al Haya polishing services",
            "professional marble polishing",
            "Dubai marble polishing",
        ],
        "comment": (
            "Marble Polishing Dubai services by Al Haya - Expert marble and natural stone floor "
            "polishing in Dubai. Al Haya restores shine and beauty to marble polishing surfaces "
            "using diamond polishing pads and advanced marble polishing techniques."
        ),
    },
    {
        "filename": "professional-cleaning-services-UAE.webp",
        "title": "Professional Cleaning Services UAE",
        "subject": "Professional Cleaning Services UAE - Comprehensive cleaning for homes and offices",
        "rating": 5,
        "tags": [
            "professional cleaning services UAE",
            "professional cleaning",
            "cleaning services",
            "Al Haya Cleaning",
            "villa cleaning UAE",
            "office cleaning UAE",
            "residential cleaning",
            "commercial cleaning UAE",
        ],
        "comment": (
            "Professional Cleaning Services UAE by Al Haya - Comprehensive professional cleaning "
            "solutions for villas, apartments, and offices across UAE. Al Haya offers deep "
            "professional cleaning, sanitization, and maintenance with trained staff."
        ),
    },
    {
        "filename": "sofa-carpet-cleaning.webp",
        "title": "Sofa Carpet Cleaning",
        "subject": "Sofa Carpet Cleaning - Professional upholstery and carpet deep cleaning services",
        "rating": 5,
        "tags": [
            "sofa carpet cleaning",
            "sofa cleaning UAE",
            "carpet cleaning Dubai",
            "upholstery cleaning",
            "Al Haya cleaning",
            "professional sofa carpet cleaning",
            "Dubai carpet cleaning",
        ],
        "comment": (
            "Sofa Carpet Cleaning by Al Haya - Professional sofa and carpet deep cleaning services "
            "across UAE. Our expert sofa carpet cleaning technicians use eco-friendly steam cleaning "
            "equipment to remove stains, odors, and allergens from all fabric types."
        ),
    },
    {
        "filename": "villa-apartment-cleaning-services.jpg",
        "title": "Villa Apartment Cleaning Services",
        "subject": "Villa Apartment Cleaning Services - Professional residential cleaning solutions",
        "rating": 5,
        "tags": [
            "villa apartment cleaning services",
            "villa cleaning UAE",
            "apartment cleaning Dubai",
            "residential cleaning",
            "Al Haya cleaning",
            "professional villa cleaning",
            "villa apartment cleaning",
        ],
        "comment": (
            "Villa Apartment Cleaning Services by Al Haya - Professional cleaning solutions for "
            "villas and apartments across UAE. Our villa apartment cleaning services include deep "
            "cleaning, sanitization, and maintenance for all residential properties."
        ),
    },
]

# ── Helpers ───────────────────────────────────────────────────────────────────

RATING_TO_PERCENT = {0: 0, 1: 1, 2: 25, 3: 50, 4: 75, 5: 99}


def utf16le(text: str) -> bytes:
    """Encode string as UTF-16LE for Windows XP EXIF tags."""
    return text.encode("utf-16-le")


def build_exif_bytes(meta: dict) -> bytes:
    """Build a piexif EXIF dict and return the dumped bytes."""
    keywords_str = "; ".join(meta["tags"])
    rating = meta["rating"]

    exif_dict: dict = {"0th": {}, "Exif": {}, "GPS": {}, "1st": {}}

    # Standard description (ASCII)
    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = meta["title"].encode("ascii", errors="replace")

    # Windows XP extended tags (UTF-16LE)
    exif_dict["0th"][piexif.ImageIFD.XPTitle] = utf16le(meta["title"])
    exif_dict["0th"][piexif.ImageIFD.XPSubject] = utf16le(meta["subject"])
    exif_dict["0th"][piexif.ImageIFD.XPKeywords] = utf16le(keywords_str)
    exif_dict["0th"][piexif.ImageIFD.XPComment] = utf16le(meta["comment"])

    # Rating (Microsoft Photo / Windows Explorer)
    exif_dict["0th"][piexif.ImageIFD.Rating] = rating
    exif_dict["0th"][piexif.ImageIFD.RatingPercent] = RATING_TO_PERCENT.get(rating, 99)

    # Software tag
    exif_dict["0th"][piexif.ImageIFD.Software] = b"Al Haya Cleaning Services / piexif"

    return piexif.dump(exif_dict)


def backup(filepath: str) -> str:
    backup_path = filepath + ".backup"
    if not os.path.exists(backup_path):
        shutil.copy2(filepath, backup_path)
        print(f"  [backup]  {os.path.basename(backup_path)}")
    else:
        print(f"  [backup]  {os.path.basename(backup_path)} (already exists — skipped)")
    return backup_path


def process_jpeg(filepath: str, meta: dict) -> None:
    """Embed EXIF into a JPEG file in-place."""
    exif_bytes = build_exif_bytes(meta)
    img = Image.open(filepath)
    img.save(filepath, format="JPEG", exif=exif_bytes, quality=92, subsampling=0)
    print(f"  [ok]      EXIF written to {os.path.basename(filepath)}")


def process_webp(filepath: str, meta: dict) -> None:
    """Embed EXIF into a WebP file in-place.

    Pillow >= 7.1 supports writing EXIF to WebP. The exif kwarg accepts
    raw EXIF bytes (the same bytes piexif.dump() returns).
    """
    exif_bytes = build_exif_bytes(meta)
    img = Image.open(filepath)
    img.save(filepath, format="WEBP", exif=exif_bytes, quality=85, method=6)
    print(f"  [ok]      EXIF written to {os.path.basename(filepath)}")


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    print(f"\nHero image directory: {HERO_DIR}\n")

    if not os.path.isdir(HERO_DIR):
        print(f"ERROR: Directory not found: {HERO_DIR}")
        return

    for meta in IMAGE_METADATA:
        filename = meta["filename"]
        filepath = os.path.join(HERO_DIR, filename)

        print(f"Processing: {filename}")

        if not os.path.exists(filepath):
            print(f"  [skip]    File not found — {filepath}")
            continue

        backup(filepath)

        ext = os.path.splitext(filename)[1].lower()
        try:
            if ext in (".jpg", ".jpeg"):
                process_jpeg(filepath, meta)
            elif ext == ".webp":
                process_webp(filepath, meta)
            else:
                print(f"  [skip]    Unsupported format: {ext}")
        except Exception as exc:
            print(f"  [error]   {exc}")

    print("\nDone.\n")


if __name__ == "__main__":
    main()
