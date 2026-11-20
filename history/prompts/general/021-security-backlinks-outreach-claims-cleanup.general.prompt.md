---
id: 021
title: Security on all sites, backlinks, outreach, claims clean-up
stage: general
date: 2026-11-20
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["security", "backlinks", "outreach", "content", "redirects", "seo-agents"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/content/ai-guides.json
 - uae-service-hub/next.config.mjs
 - uae-service-hub/lib/data/services.ts
 - hostinger/servedubai.com.htaccess
 - docs/backlink-outreach-2026-11.md
 - docs/backlink-outreach-emails.md
 - seo-agents/sites/servedubai.json
 - seo-agents/packages/shared/src/content-rules.ts (+ test)
 - sofa-shampoing, marblepro, carpetcleaningdubai, villa repos: package.json, lockfiles, next.config.mjs
tests:
 - NEXT_TEST_WASM=1 next build --webpack (all five sites)
 - seo-agents shared tests 12 pass, pnpm -r typecheck pass
 - live checks: redirects, pages, Hostinger vulnerability scans
---

## Prompt

haan wo bhi karo (sofa security) / tum apne dono kam kro / backlinks pe kese kam krna he ab backlinks audit pe kam krte hen /
spam urls se bachna jo .com main hen porane hack urls. phir upload kro / number 2 se kam start krte hen / Tum draft karo /
Tum forms bhar do / Haan, chaaron bhejo / servedubai ki report do / Haan, fix karo / Haan, saaf karo

## Response snapshot

Next.js 16.4.6 on sofashampooingdubai, marblepro, carpetcleaningdubai and villadeepcleaning (pnpm release-age pin on sofa).
servedubai.com: whitelist of 101 old URLs 301 to .ae, spam stays 410. Backlink audit: DR 5 vs 32-47, 24 referring domains,
no toxic links. Outreach: 15 list articles; Bayut, Nubia, HowUAE sent; dubizzle awaits verification. Report: clicks 36->65,
impressions -25%. Sofa AI guide merged into the service page; 10 old guides cleaned of unconfirmed claims; floor price-list
guide retired; content rules now catch "guaranteeing", insured claims and completion certificates.

## Outcome

- ✅ Impact: all Hostinger sites patched; old-domain links reach .ae; no invented guarantees, certifications or testimonials left
- 🧪 Tests: builds and rule tests pass; live checks pass
- 📁 Files: see list
- 🔁 Next prompts: indexing for /services/sofa-cleaning and /services/floor-cleaning; outreach follow-ups 27 Nov; GSC check 1 Dec
- 🧠 Reflection: test the way the host builds; keep pnpm minimumReleaseAge equal to the host's

## Evaluation notes (flywheel)

- Failure modes observed: Hostinger WASM SWC config load, pnpm release-age, a local 2-day rule that blocked install, Bayut form broken
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
