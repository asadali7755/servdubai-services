---
id: 024
title: Arabic location pages and remaining Arabic pages
stage: general
date: 2026-11-22
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["i18n", "arabic", "local-seo", "hreflang"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/app/ar/[emirate]/page.tsx
 - uae-service-hub/app/ar/[emirate]/[city]/page.tsx
 - uae-service-hub/app/ar/about/page.tsx, areas/page.tsx, gallery/page.tsx
 - uae-service-hub/lib/data/emirates.ar.ts
 - uae-service-hub/lib/data/cities.ar.ts (+ dubai, sharjah, abudhabi, north, east)
 - uae-service-hub/lib/data/services.ar.ts (2 car services)
 - uae-service-hub/lib/i18n/routes.ts
 - uae-service-hub/lib/utils/whatsappAr.ts
 - uae-service-hub/components/HomeContent.tsx, Footer.tsx, EmiratesSection.tsx, GalleryContent.tsx, home/ServicesShowcase.tsx, ui/site-header.tsx, ui/kinetic-mobile-menu.tsx
tests:
 - npx tsc --noEmit (pass)
 - NEXT_TEST_WASM=1 next build --webpack (pass)
 - all 91 /ar URLs from the sitemap checked locally and live: 200, unique title, one h1, RTL, canonical, hreflang both ways, banned-word scan
---

## Prompt

location k arabic pages b bana do or baki b jo rehte hen
(answers: 7 emirates + 64 areas, the 76 service-by-area pages stay English; blog stays English; about/areas/gallery/car yes)

## Response snapshot

Arabic emirate pages (7) and area pages (64), each written from that area's English profile (tagline, two
paragraphs, three local services with reasons, tips, visit note), plus Arabic about, areas, gallery and the
two car services: 91 Arabic URLs, all with hreflang and in the sitemap. Links across the site follow the page
language. GSC: /ar/dubai requested, then the daily quota ran out.

## Outcome

- ✅ Impact: Arabic coverage for every emirate and area page without thin, near-duplicate pages
- 🧪 Tests: type check, WASM build, 91-page check on the live site
- 📁 Files: see list
- 🔁 Next prompts: request indexing for the other emirate pages after the GSC quota resets; check Arabic impressions on 1 Dec
- 🧠 Reflection: keep Arabic copy out of the client bundle (area list built on the server for the Arabic home)

## Evaluation notes (flywheel)

- Failure modes observed: GSC URL inspection quota (about 10 requests a day)
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
