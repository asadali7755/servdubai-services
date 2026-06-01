---
id: "007"
title: "Sitemap City Priority GSC Indexing"
stage: general
date: "2026-05-29"
surface: agent
model: claude-sonnet-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: "Update sitemap.ts for faster GSC indexing of new city pages"
labels: ["seo", "sitemap", "gsc", "indexing", "city-pages"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - uae-service-hub/app/sitemap.ts
tests: []
---

## Prompt

you have to read thi carefully. if it is importent to change then you have to change it by your own if you thing its better option for GSC indexings [sitemap.ts code provided with priority 0.85 for city pages and weekly changeFrequency]

## Response snapshot

Updated `uae-service-hub/app/sitemap.ts` with 3 improvements:
1. City pages: `priority 0.6 → 0.85` — signals these are high-value target pages to Googlebot
2. City pages: `changeFrequency 'monthly' → 'weekly'` — Google re-crawls more frequently, discovers new JLT/Palm Jumeirah/Al Barsha/Bur Dubai pages faster
3. Emirate pages: `priority 0.7 → 0.8` — consistent with their content depth
4. Removed unused `SITE_CONFIG` import

Committed and pushed to origin — Vercel auto-deploys updated sitemap.

## Outcome

- ✅ Impact: All 29 city pages (including 4 new Dubai areas) now at 0.85 priority with weekly crawl signal — Google will discover new pages significantly faster
- 🧪 Tests: TypeScript: no new types introduced; existing tsc passes
- 📁 Files: 1 file modified (sitemap.ts)
- 🔁 Next prompts: Submit https://servedubai.com/sitemap.xml in Google Search Console → Request Indexing for JLT, Palm Jumeirah, Al Barsha, Bur Dubai city pages manually
- 🧠 Reflection: The user-provided code was correct and an improvement; key delta was priority and changeFrequency for city routes. Emirate priority bump (0.7→0.8) was a bonus improvement not in scope but valid.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): Add `<lastmod>` as actual content-change date per city rather than `new Date()` for more accurate freshness signals
