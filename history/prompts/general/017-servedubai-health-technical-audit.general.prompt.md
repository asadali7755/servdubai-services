---
id: 017
title: ServeDubai health and technical audit
stage: general
date: 2026-11-13
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asad ali
command: none
labels: ["seo", "technical-audit", "gsc", "leads", "redirects", "schema"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - ServeDubai-Technical-Audit-2026-11.xlsx
 - uae-service-hub/app/api/contact/route.ts
 - uae-service-hub/lib/utils/enquiry.ts
 - uae-service-hub/components/QuoteCard.tsx
 - uae-service-hub/components/RequestCallModal.tsx
 - uae-service-hub/components/ServiceVideoShowcase.tsx
 - uae-service-hub/content/ai-guides.json
 - uae-service-hub/lib/data/aiGuides.ts
 - uae-service-hub/next.config.ts
 - uae-service-hub/app/sitemap.ts
tests:
 - npx tsc --noEmit (pass)
 - live crawl of 186 sitemap URLs, 83 redirect rules, host redirects
---

## Prompt

Run a full SEO audit and fix-up of servedubai.ae, the same way MarblePro was done, one audit at a time. Start with Audit 1: health + technical audit (GSC 28 days vs previous with bot queries separated, GA4 key events, GBP calls, gentle crawl of the live site: status codes, canonicals, sitemap, robots, redirects, broken internal links, duplicate titles/descriptions, missing H1, schema errors; GSC page indexing report). Deliverable: ServeDubai-Technical-Audit-2026-11.xlsx plus fixes, committed and pushed; report in short Roman Urdu. (Task given by the parent session; full text in that session.)

## Response snapshot

GSC 14 Oct-10 Nov vs 16 Sep-13 Oct: clicks 41 vs 53 (UAE 38 vs 29; Pakistan 21 -> 2), ~50% of impressions are rank-tracker bot queries. GA4: 20 whatsapp_click, 6 call_click, 0 generate_lead. GBP linked to servedubai.ae (Madinat Alhaya): Oct 3 calls. Crawl: 186/186 pages 200, canonicals, H1, titles and descriptions clean; 1 broken link; servedubai.com deep URLs 404; sitemap "Couldn't fetch" in GSC; 22 live pages not indexed. Fixed: forms no longer show success when the lead email fails, broken link plus root service redirects, Article schema image/datePublished, sitemap lastmod.

## Outcome

- Impact: lead loss on email failure stopped; no internal 404s; cleaner Article schema.
- Tests: tsc pass; live verification after Hostinger deploy.
- Files: see list above.
- Next prompts: servedubai.com .htaccess on Hostinger, GTM generate_lead tag, sitemap resubmit, Audit 2 keyword audit.
- Reflection: test lead POST was blocked by the permission system; needs user approval.

## Evaluation notes (flywheel)

- Failure modes observed: none in code; GSC UI tabs report with a one-click lag when scraped.
- Graders run and results (PASS/FAIL): tsc PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
