"""
Add metadata to hero images (WebP format).

WebP does not support EXIF/IPTC natively via piexif.
This script embeds XMP metadata into each WebP image using PIL.
It also creates backups before modifying any file.

Usage:
  cd uae-service-hub
  python scripts/add-hero-metadata.py
"""

import os
import shutil
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    raise SystemExit(1)

HERO_DIR = Path(__file__).resolve().parent.parent / "public" / "images" / "hero"
BACKUP_DIR = HERO_DIR / "backup"

IMAGES_META = [
    {
        "file": "cleaning-services-UAE.webp",
        "title": "Cleaning Services UAE",
        "subject": "Cleaning Services UAE - Professional cleaning across all Emirates",
        "tags": "cleaning services UAE, professional cleaning UAE, Al Haya Cleaning, Dubai cleaning services, Abu Dhabi cleaning, deep cleaning services UAE",
        "description": "Cleaning Services UAE by Al Haya - Professional cleaning solutions across all seven Emirates of UAE including Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. Expert cleaning services with eco-friendly products and trained professionals.",
    },
    {
        "file": "marble-polishing-dubai.webp",
        "title": "Marble Polishing Dubai",
        "subject": "Marble Polishing Dubai - Professional marble and floor polishing services",
        "tags": "marble polishing Dubai, floor polishing Dubai, marble restoration Dubai, stone polishing UAE, Al Haya polishing services, professional marble polishing",
        "description": "Marble Polishing Dubai services by Al Haya - Expert marble and natural stone floor polishing in Dubai. Al Haya restores shine and beauty to marble surfaces using diamond polishing pads and advanced techniques.",
    },
    {
        "file": "professional-cleaning-services-UAE.webp",
        "title": "Professional Cleaning Services UAE",
        "subject": "Professional Cleaning Services UAE - Comprehensive cleaning for homes and offices",
        "tags": "professional cleaning services UAE, professional cleaning, cleaning services, Al Haya Cleaning, villa cleaning UAE, office cleaning UAE, residential cleaning, commercial cleaning UAE",
        "description": "Professional Cleaning Services UAE by Al Haya - Comprehensive professional cleaning solutions for villas, apartments, and offices across UAE. Deep professional cleaning, sanitization, and maintenance with trained staff.",
    },
    {
        "file": "sofa-carpet-cleaning.webp",
        "title": "Sofa Carpet Cleaning",
        "subject": "Sofa Carpet Cleaning - Professional upholstery and carpet deep cleaning services",
        "tags": "sofa carpet cleaning, sofa cleaning UAE, carpet cleaning Dubai, upholstery cleaning, Al Haya cleaning, professional sofa carpet cleaning",
        "description": "Sofa Carpet Cleaning by Al Haya - Professional sofa and carpet deep cleaning services across UAE. Expert technicians use eco-friendly steam cleaning equipment to remove stains, odors, and allergens from all fabric types.",
    },
    {
        "file": "villa-apartment-cleaning-services.webp",
        "title": "Villa Apartment Cleaning Services",
        "subject": "Villa Apartment Cleaning Services - Professional residential cleaning solutions",
        "tags": "villa apartment cleaning services, villa cleaning UAE, apartment cleaning Dubai, residential cleaning, Al Haya cleaning, professional villa cleaning",
        "description": "Villa Apartment Cleaning Services by Al Haya - Professional cleaning solutions for villas and apartments across UAE. Deep cleaning, sanitization, and maintenance for all residential properties.",
    },
]


def build_xmp(meta: dict) -> bytes:
    """Build a minimal XMP packet with dc:title, dc:subject, dc:description."""
    xmp = f"""<?xpacket begin="\xef\xbb\xbf" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/">
   <dc:title>
    <rdf:Alt><rdf:li xml:lang="x-default">{meta['title']}</rdf:li></rdf:Alt>
   </dc:title>
   <dc:description>
    <rdf:Alt><rdf:li xml:lang="x-default">{meta['description']}</rdf:li></rdf:Alt>
   </dc:description>
   <dc:subject>
    <rdf:Bag>
     {''.join(f'<rdf:li>{tag.strip()}</rdf:li>' for tag in meta["tags"].split(","))}
    </rdf:Bag>
   </dc:subject>
   <xmp:Rating>5</xmp:Rating>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>"""
    return xmp.encode("utf-8")


def main():
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Backup dir: {BACKUP_DIR}\n")

    success = 0
    failed = 0

    for meta in IMAGES_META:
        src = HERO_DIR / meta["file"]
        if not src.exists():
            print(f"  SKIP  {meta['file']} — file not found")
            failed += 1
            continue

        backup = BACKUP_DIR / meta["file"]
        if not backup.exists():
            shutil.copy2(src, backup)
            print(f"  BACKUP  {meta['file']} -> backup/")

        try:
            img = Image.open(src)
            xmp_data = build_xmp(meta)
            img.info["xmp"] = xmp_data
            img.save(src, "WEBP", quality=90, method=6, xmp=xmp_data)
            print(f"  OK    {meta['file']} — XMP metadata embedded (title: {meta['title']})")
            success += 1
        except Exception as e:
            print(f"  FAIL  {meta['file']} — {e}")
            failed += 1

    print(f"\nDone: {success} succeeded, {failed} failed out of {len(IMAGES_META)} images.")

    # Verification
    print("\n--- Verification ---")
    for meta in IMAGES_META:
        src = HERO_DIR / meta["file"]
        if not src.exists():
            continue
        try:
            img = Image.open(src)
            xmp = img.info.get("xmp", b"")
            if meta["title"].encode() in xmp:
                print(f"  VERIFIED  {meta['file']} — XMP contains title '{meta['title']}'")
            else:
                print(f"  WARNING   {meta['file']} — XMP title not found in metadata")
        except Exception as e:
            print(f"  ERROR     {meta['file']} — {e}")


if __name__ == "__main__":
    main()
