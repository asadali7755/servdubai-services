---
id: 013
title: Inline Styles to CSS Migration and EXIF Metadata Script
stage: general
date: 2026-07-29
surface: agent
model: claude-opus-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: semrush-seo-fixes
labels: ["seo", "text-html-ratio", "inline-styles", "css-migration", "exif-metadata", "webp", "xmp"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - uae-service-hub/app/globals.css
  - uae-service-hub/app/[emirate]/[city]/page.tsx
  - uae-service-hub/app/[emirate]/[city]/[service]/page.tsx
  - uae-service-hub/app/services/[slug]/page.tsx
  - uae-service-hub/app/blog/[slug]/page.tsx
  - uae-service-hub/app/blog/page.tsx
  - uae-service-hub/app/websites/page.tsx
  - uae-service-hub/app/contact/page.tsx
  - uae-service-hub/app/areas/page.tsx
  - uae-service-hub/components/Hero.tsx
  - uae-service-hub/components/ServicesGrid.tsx
  - uae-service-hub/scripts/add-hero-metadata.py
tests:
  - Next.js build passed (97 pages compiled, zero errors)
  - XMP metadata verified on all 5 hero images
---

## Prompt

tum sary fix kro push mat krna bad main krenge (fix everything, don't push). Then: ab kya rehta he pending (what's still pending). Then: han kro ho check/fix krna he (yes do the check/fix).

## Response snapshot

Completed Semrush SEO audit fixes across two sessions:

1. **Inline style to CSS class migration** — 763 inline styles reduced to 70 (91% reduction) across 11 files. Created organized CSS classes with page-specific prefixes: bi-* (blog index), ar-* (areas), he-* (hero), bp-* (blog post), ws-* (websites), ct-* (contact), sp-* (service detail), sa-* (service-area combo). Remaining inline styles are truly dynamic values (animation zIndex, objectFit on Next.js Image, conditional order).

2. **Pending items check/fix:**
   - llms.txt — already exists and complete, no fix needed
   - WhatsApp number — confirmed +971 55 127 5545 is correct (NOT the sofashampooingdubai number), no change needed
   - EXIF metadata script — created scripts/add-hero-metadata.py using PIL XMP embedding (piexif doesn't support WebP). All 5 hero images processed successfully with title, description, tags, rating. Backups saved to public/images/hero/backup/.

## Outcome

- Impact: Text/HTML ratio improvement from 0.03 toward 0.15+ target; image metadata now embeds SEO keywords
- Tests: Build passed 97 pages; XMP metadata verified on all 5 images
- Files: 12 files modified/created
- Next prompts: Push changes when ready; verify Semrush re-crawl shows improved text/HTML ratio
- Reflection: WebP format required XMP approach instead of EXIF/piexif — correctly identified and handled

## Evaluation notes (flywheel)

- Failure modes observed: CLAUDE.md referenced .jpg filenames but actual images are .webp; CLAUDE.md had wrong WhatsApp number for this site
- Graders run and results (PASS/FAIL): Build PASS, XMP verification PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
