---
id: 020
title: Next.js security upgrade and Hostinger WASM build fix
stage: general
date: 2026-11-18
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["security", "dependencies", "hostinger", "build", "seo-agents"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/package.json
 - uae-service-hub/package-lock.json
 - uae-service-hub/next.config.ts -> uae-service-hub/next.config.mjs
 - uae-service-hub/proxy.ts
 - uae-service-hub/lib/data/serviceAreaCombos.ts
 - seo-agents/packages/shared/src/next-config.ts
 - seo-agents/packages/shared/src/index.ts
 - seo-agents/services/agent-keyword/src/topic-guard.ts
 - seo-agents/services/agent-publisher/src/marblepro.writer.ts
 - seo-agents/services/agent-publisher/src/marblepro.writer.test.ts
tests:
 - npm audit --omit=dev (0 vulnerabilities)
 - npx tsc --noEmit (pass)
 - NEXT_TEST_WASM=1 next build --webpack + next start (redirects, pages, 404/410, /_next/image)
 - seo-agents: publisher 13, keyword 11, shared 11 tests pass; pnpm -r typecheck pass
 - Hostinger deploy f30398d built and live; hPanel scan "No vulnerabilities found"
---

## Prompt

ye email aya howa he kya he isy check kro hsotinger pe kya issue he
(Hostinger: "We found security vulnerabilities on servedubai.ae")
Haan, update karo
kya hua live ho gaya?
live ho jaye to check kr k report do
build fail dikha rha he
phir fail howa he kya check kro ??
kya hua live ho gaya?

## Response snapshot

Hostinger flagged 71 issues (5 critical RCE) in next@16.2.4. Upgraded to next 16.4.6, React 19.2.9, zod 4.6.7 (cb5a672). Hostinger's build server has glibc < 2.29; the native SWC binary of next >= 16.4.5 needs 2.30, so Next falls back to WASM SWC, which cannot load a Hostinger-wrapped next.config.ts. Moved pruned combo redirects to proxy.ts (748c2d3) and the config to next.config.mjs (f30398d); seo-agents 7114881 reads next.config.mjs for retired /blog slugs. Deploy built, went live, all checks pass, hPanel scan clean.

## Outcome

- ✅ Impact: critical Next.js RCE bugs closed on servedubai.ae; vulnerability scan 71 -> 0
- 🧪 Tests: all pass, live checks pass
- 📁 Files: 10 changed across 2 repos
- 🔁 Next prompts: same upgrade for sofashampooingdubai.com and the other Hostinger Next.js sites (they need the .mjs config too)
- 🧠 Reflection: test builds the way the host builds (WASM SWC, wrapped config) before pushing

## Evaluation notes (flywheel)

- Failure modes observed: two failed Hostinger deploys (glibc / WASM SWC config loading); a stale local test server on the same port gave a misleading result
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
