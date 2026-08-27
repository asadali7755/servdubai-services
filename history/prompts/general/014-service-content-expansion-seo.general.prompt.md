---
id: 014
title: Service Page Content Expansion for SEO Text Ratio
stage: general
date: 2026-07-29
surface: agent
model: claude-opus-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: semrush-seo-fixes
labels: ["seo", "text-html-ratio", "content-expansion", "service-pages", "semrush"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - uae-service-hub/lib/data/services.ts
  - uae-service-hub/components/Hero.tsx
tests:
  - Dev server renders all 6 service pages correctly (1000+ words each)
  - No console errors on any page
  - H1 always present in DOM verified
---

## Prompt

han 2 kr do baki main krta hu (do item 2 — content expansion for service pages, user handles real photos, GBP, and AggregateRating)

## Response snapshot

Continued Semrush SEO audit fixes session. Three commits pushed:

1. **66b8e5d** — Inline styles to CSS migration (91% reduction) + hero XMP metadata
2. **060d221** — H1 always present in DOM fix (sr-only when not on slide 0)
3. **97a937d** — Content expansion for 6 thin service pages

Added contentSections to 6 services that were missing them in `lib/data/services.ts`:
- carpet-cleaning (14 sections)
- dining-chair-cleaning (9 sections)
- apartment-cleaning (10 sections)
- office-cleaning (10 sections)
- restaurant-kitchen-cleaning (9 sections)
- marble-polishing (11 sections)

Each page now has 1000+ words with proper h2/h3 heading structure, targeting the text/HTML ratio improvement from 0.03 to 0.15+.

Also verified: duplicate title tags already resolved (all 97 pages unique), H1 carousel bug found and fixed.

## Outcome

- Impact: All 11 service pages now have rich contentSections (800-1200 words each) for Semrush text/HTML ratio improvement
- Tests: All pages render correctly, zero console errors
- Files: 1 file modified (services.ts +327 lines)
- Next: User handles real photos (item 1), GBP optimization (item 3), AggregateRating schema (item 4)
- Remaining user tasks: Replace stock photos with real project photos, GBP listing optimization, add AggregateRating schema with real review data

## Evaluation notes (flywheel)

- Failure modes observed: Context window compaction mid-session required careful state recovery
- Graders run and results (PASS/FAIL): Browser verification PASS (1000+ words on all tested pages)
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
