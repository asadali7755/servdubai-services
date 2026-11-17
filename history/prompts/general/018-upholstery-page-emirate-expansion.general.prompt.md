---
id: 018
title: Upholstery page and emirate page expansion
stage: general
date: 2026-11-17
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["seo", "content", "new-page", "emirate-pages"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/lib/data/services.ts
 - uae-service-hub/lib/data/pageTopics.regions.ts
 - uae-service-hub/lib/data/pageTopics.ts
 - uae-service-hub/lib/data/services-nav.ts
 - uae-service-hub/lib/data/wikiLinks.ts
 - uae-service-hub/lib/i18n/translations.ts
 - uae-service-hub/app/services/[slug]/page.tsx
 - uae-service-hub/app/sitemap.ts
 - uae-service-hub/components/HomeContent.tsx
 - uae-service-hub/components/home/ServicesShowcase.tsx
 - uae-service-hub/components/ui/site-header.tsx
 - uae-service-hub/content/ai-guides.json
 - uae-service-hub/public/llms.txt
tests:
 - npx tsc --noEmit (pass)
 - live check: new page 200, title/H1/canonical/schema, word counts, internal links
---

## Prompt

han tum apna kam start kro
live ho jye to check kr k report do
new pages k link b dena muje m dekhuga k kese banae hen
kya hua live ho gaya?

## Response snapshot

Built /services/upholstery-cleaning (1,648 words; Service, FAQ, Breadcrumb schema) and linked it from nav, footer, homepage furniture card, sofa and dining-chair pages, Al Barsha upholstery guide, upholstery blog posts and llms.txt. Added GSC-driven topic sections: /sharjah 1,196→1,760 words, /ajman 1,086→1,522, /abu-dhabi 1,004→1,471, Sharjah City sofa 666→951, Abu Dhabi City sofa 661→894. Commit 54bf49d pushed and verified live.

## Outcome

- ✅ Impact: new page for ~600 quarterly furniture/upholstery impressions; three emirate hubs closer to competitor depth
- 🧪 Tests: tsc pass; live HTTP and content checks pass
- 📁 Files: 13 modified/created
- 🔁 Next prompts: request indexing for the new and expanded pages; check GSC in 2-4 weeks
- 🧠 Reflection: only confirmed claims used; removed an unconfirmed "sealed" marble claim before commit

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
