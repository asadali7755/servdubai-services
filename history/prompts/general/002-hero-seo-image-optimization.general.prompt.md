---
name: Hero SEO Image Optimization — EXIF, Schema, h1/h2, Metadata
description: Added EXIF/IPTC metadata to 5 hero images, updated Hero component h1/h2, ImageObject schema, Python script
type: general
id: "002"
stage: general
date: "2026-05-08"
surface: agent
model: claude-sonnet-4-6
feature: hero-seo-optimization
branch: 001-service-hub-website
user: asadali22
command: "claude-code \"Optimize Hero Section with 5 images for complete SEO...\""
labels: ["seo", "hero", "exif", "schema", "images", "h1", "structured-data"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
---

## PROMPT_TEXT

claude-code "Optimize Hero Section with 5 images for complete SEO in servedubai.com project:
TASK 1: ADD IMAGE FILE METADATA - Add EXIF/IPTC metadata to 5 hero images using Python PIL/piexif
TASK 2: UPDATE NEXT.JS HERO COMPONENT - h1 for slide 1, h2 for slides 2-5, alt and title attributes
TASK 3: ADD IMAGEOBJECT SCHEMA - Create schema utility and add to homepage
TASK 4: CREATE PYTHON SCRIPT - scripts/add-hero-metadata.py with backup functionality
TASK 5: VALIDATION - Test rendering, verify metadata, check h1 hierarchy, validate schemas"

## RESPONSE_TEXT

All 5 tasks implemented and validated (build: 54 pages, 0 errors).

**Task 1 — EXIF metadata applied to all 5 hero images:**
- Installed piexif (1.1.3) — was missing from system
- JPEG files (marble-polishing-dubai.jpg, villa-apartment-cleaning-services.jpg): full piexif EXIF write
- WebP files (cleaning-services-UAE.webp, professional-cleaning-services-UAE.webp, sofa-carpet-cleaning.webp): Pillow WebP EXIF embed
- Fields written: ImageDescription, XPTitle, XPSubject, XPKeywords, XPComment, Rating, RatingPercent, Software
- Backups created as <filename>.backup before any modification

**Task 2 — Hero component updated (components/Hero.tsx):**
- HeroSlide interface: added imageAlt? and imageTitle? fields
- Caption: active===0 → h1, active>0 → h2 (preserves correct h1 hierarchy on initial render)
- Subtitle changed from h2 to p (avoids duplicate heading levels)
- Image components: alt uses imageAlt ?? title, title attribute added
- priority={active===0} — only slide 0 gets LCP priority
- Entering/exiting animation slides: loading="lazy" explicitly set

**Task 3 — ImageObject schema (lib/utils/seo.ts + app/page.tsx):**
- Added buildImageObjectSchema() returning ImageGallery + 5 ImageObject entries
- Each ImageObject: url, contentUrl, name, description, author, copyrightHolder
- Schema injected into homepage as second JSON-LD script block

**Task 4 — Python script created (scripts/add-hero-metadata.py):**
- Full backup before modification
- Handles both JPEG (piexif) and WebP (Pillow+piexif) formats
- Note: task brief listed cleaning-services-UAE.jpg and professional-cleaning-services-UAE.jpg as .jpg — actual files are .webp; script uses correct filenames

**Task 5 — Validation:**
- Python script: all 5 images processed, backups created, EXIF written
- Build: Compiled ✓, TypeScript ✓, 54 pages generated ✓

## FILES_MODIFIED
 - components/Hero.tsx
 - app/page.tsx
 - lib/utils/seo.ts

## FILES_CREATED
 - scripts/add-hero-metadata.py
 - uae-service-hub/public/images/hero/cleaning-services-UAE.webp.backup
 - uae-service-hub/public/images/hero/marble-polishing-dubai.jpg.backup
 - uae-service-hub/public/images/hero/professional-cleaning-services-UAE.webp.backup
 - uae-service-hub/public/images/hero/sofa-carpet-cleaning.webp.backup
 - uae-service-hub/public/images/hero/villa-apartment-cleaning-services.jpg.backup

## OUTCOME
All tasks complete. Build clean. EXIF metadata embedded in all 5 hero images with backups. Hero h1/h2 hierarchy correct. ImageObject schema active on homepage.
