---
id: 019
title: On-page fixes, indexing round 2, blog guard
stage: general
date: 2026-11-17
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["seo", "on-page", "accessibility", "indexing", "seo-agents"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/app/[emirate]/[city]/[service]/page.tsx
 - uae-service-hub/lib/data/comboIntros.ts
 - uae-service-hub/lib/data/comboIntros.v2.ts
 - uae-service-hub/components/dna/Hero.tsx
 - uae-service-hub/app/globals.css
 - seo-agents/packages/shared/src/config.ts
 - seo-agents/packages/shared/src/content-rules.ts
 - seo-agents/packages/shared/src/content-rules.test.ts
 - seo-agents/packages/shared/src/index.ts
 - seo-agents/services/agent-planner/src/planner.processor.ts
 - seo-agents/services/agent-publisher/src/alhaya.writer.ts
 - seo-agents/sites/servedubai.json
tests:
 - npx tsc --noEmit (servedubai, pass)
 - pnpm --filter @seo-agents/shared test (11 pass)
 - pnpm -r typecheck (seo-agents, pass)
 - live check of titles, metas, alt text and CSS colour
---

## Prompt

whatsapp kam kr rha he ye do 3 din m jo contect aye hen vo reviced howe hen.
google reviews ka b bola he bos lenge.
directories or backlinks muje one by one tum krwao ye kam hum krte hen .
GBP pe post ka kam b main kruga .
code k jo kam hen vo tum kroge . baki phir agye dekhte hen

## Response snapshot

servedubai 25805e5: RAK/UAQ area-service titles use the emirate name; 3 short metas rewritten; stacked hero images get alt; light-theme gold labels darkened to #74580f. Verified live. Requested indexing for /ras-al-khaimah, Palm sofa, office and apartment pages. seo-agents a1f6a2e: serviceHeadTerms guard in keyword agent, planner and Al Haya publisher, with tests. Started directory listings with Bing Places.

## Outcome

- ✅ Impact: on-page backlog closed; blog bot can no longer target service-page searches
- 🧪 Tests: all pass
- 📁 Files: 12 modified
- 🔁 Next prompts: directory listings one by one; GSC check in 2-4 weeks
- 🧠 Reflection: servedubai.json still bans "eco-friendly" although the claim is now confirmed

## Evaluation notes (flywheel)

- Failure modes observed: Python string escaping mangled a regex; switched to the Edit tool
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
