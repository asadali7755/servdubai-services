---
id: 016
title: Page DNA redesign — unique location pages
stage: general
date: 2026-10-05
surface: agent
model: claude-opus-5-5
feature: none
branch: redesign-unique-pages
user: asad ali
command: none
labels: ["seo", "duplicate-content", "redesign", "animation", "lead-tracking"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/lib/design/dna.ts
 - uae-service-hub/lib/design/fonts.ts
 - uae-service-hub/app/dna.css
 - uae-service-hub/components/dna/Hero.tsx
 - uae-service-hub/components/dna/Blocks.tsx
 - uae-service-hub/components/dna/Pointer3D.tsx
 - uae-service-hub/components/dna/BeforeAfter.tsx
 - uae-service-hub/components/LeadTracker.tsx
 - uae-service-hub/lib/utils/track.ts
 - uae-service-hub/lib/data/cityProfiles.ts (+ .dubai/.sharjah/.abudhabi/.north)
 - uae-service-hub/lib/data/comboExtras.ts (+ .dubai)
 - uae-service-hub/lib/data/emirateProfiles.ts
 - uae-service-hub/app/[emirate]/page.tsx
 - uae-service-hub/app/[emirate]/[city]/page.tsx
 - uae-service-hub/app/[emirate]/[city]/[service]/page.tsx
 - uae-service-hub/app/services/[slug]/page.tsx
 - uae-service-hub/lib/data/serviceAreaCombos.ts
 - uae-service-hub/next.config.ts
 - uae-service-hub/app/sitemap.ts
 - uae-service-hub/lib/utils/seo.ts
 - uae-service-hub/lib/data/emirates.ts
 - uae-service-hub/lib/data/services.ts
 - uae-service-hub/lib/data/serviceGalleryImages.ts
 - uae-service-hub/components/QuoteCard.tsx
 - uae-service-hub/components/RequestCallModal.tsx
 - uae-service-hub/app/layout.tsx
tests:
 - next build (pass), tsc --noEmit (pass), eslint on changed files (pass)
 - all 212 sitemap URLs return 200 locally; pruned combo URLs return 308 to area page
 - 5-word-shingle overlap of main content: city pages mean 17% (max 35%), combo pages mean 22% (max 40%); live site before: ~88%
---

## Prompt

sub se pyle pages pe kam kro jo dublicate ya ak jese dikhte hen un ko change kro har page ko redesign b kro thora animation kuch 3d changes kro ache se or jo cheez risky he ose khtm kro koi b page ak dosre se same nhi hona chaiya services k pages dekho sub.cities k pages dekho locations pages dekho sub ko alag alag desing m change kro .jo b copy page nhi hona chaiya . muje koi jaldi nhi he tum aram se ye kam kro time lo har page ko ache se modren design kro hamay leads chaiya os k kya jo tum se hota he tum kro baki jo muj se krwana he muje batana main kruga

## Response snapshot

- Pruned service×area pages from 220 to 48 (user chose "top areas, rest 301"); 172 old URLs 308 to their area page.
- New hand-written per-area copy for 64 area pages, 48 combo pages and 7 emirate pages; removed the 12 identical service cards and shared boilerplate.
- "Page DNA" design system: 6 hero styles (3D frame, full-bleed parallax, typographic, 3D card stack, orbit, 3D map), 3 service, 3 FAQ, 3 tip, 3 CTA and 3 landmark styles, 8 palettes, 4 section orders, 3 heading fonts — every page of a type gets a unique combination.
- Risk fixes: removed self-serving aggregateRating/review schema, one business @id, removed "5-Star"/"#1" claims, www→non-www 308, fixed sitemap lastmod, replaced wrong emirate photos (Berlin for Fujairah, Bali-style cliffs for UAQ, watermarked Sharjah photo), stopped using another brand's marble ad images on the marble page.
- Lead tracking: dataLayer events for WhatsApp/phone clicks and quote/callback forms.
