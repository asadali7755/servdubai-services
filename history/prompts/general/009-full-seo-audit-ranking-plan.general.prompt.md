---
id: 009
title: Full SEO Audit & Ranking Plan
stage: general
date: 2026-05-31
surface: agent
model: claude-opus-4-8
feature: none
branch: 001-service-hub-website
user: asadali22
command: (chat) full SEO audit + ranking plan
labels: ["seo", "audit", "ranking", "technical-seo", "local-seo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - SEO-AUDIT-AND-RANKING-PLAN.md (created)
tests:
 - none (audit + plan only; no code changed)
---

## Prompt

( maine tumhy apna project location access b de dia he sari details b de di hen . muje meri ye pori website fully audit  for seo  kro  phir plan k sath rank this website on google and get organic leads muje chaiya

[Context: long prior chat diagnosed servedubai.com (Al Haya Cleaning Services) not ranking after a
WordPress hack -> Next.js migration. ~4 lakh spam URLs indexed, no manual penalty. User now granted
local project access at E:\sheryar bhai projects\servdubai-website and asked for a full code-level SEO
audit + a plan to rank on Google and generate organic leads.]

## Response snapshot

Audited the actual codebase in `uae-service-hub/` (not just live HTML). Key findings:

CRITICAL (live in code):
1. `app/robots.ts` disallows the exact spam paths (`/*.php`, `/cgi-bin/`, `/*?products/*`, `/wp-*`)
   that `proxy.ts` returns 410 for — so Google never crawls them, never sees the 410, and the spam
   URLs can never de-index. #1 fix: remove those disallow lines.
2. No 301 redirects exist — `next.config.ts` has no `redirects()`; `proxy.ts` only does 410. Legacy
   WordPress URLs 404 and lose equity.
3. `proxy.ts` reuses one module-level `NextResponse` singleton across all requests (should build fresh).

BUSINESS: Phone number — site uses +971 55 127 5545 everywhere; old listings/CLAUDE.md brief said
54 719 9189. User CONFIRMED 55 127 5545 is correct -> old listings must be updated to match the site.

GOOD (don't touch): on-page content strong; all 31 city pages have unique local content (cityContent.ts);
schema utils, dynamic sitemap/robots, GTM all present.

User chose "write the full plan first" (no code changes yet). Delivered SEO-AUDIT-AND-RANKING-PLAN.md
with Phase 0 (critical technical), Phase 1 (schema/NAP polish), Phase 2 (service×city combo pages —
biggest growth lever), Phase 3 (GBP/local/reviews), Phase 4 (blog/AI visibility), plus KPIs, timeline, risks.

## Outcome

- ✅ Impact: Code-grounded audit + phased ranking plan delivered; 3 live technical faults identified that block de-indexing/equity recovery.
- 🧪 Tests: none — audit/plan only, no code modified.
- 📁 Files: SEO-AUDIT-AND-RANKING-PLAN.md created at repo root.
- 🔁 Next prompts: user to share GSC "Not found (404)" list -> build full 301 map; then implement Phase 0 (robots unblock + redirects + proxy fix) in one small diff.
- 🧠 Reflection: Code-level audit overturned the live-HTML assumption that city pages were thin — they're actually unique. The robots/proxy conflict was the real blocker.

## Evaluation notes (flywheel)

- Failure modes observed: prior live-HTML audit mis-flagged location pages as thin; corrected via source review.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): implement Phase 0.1 (robots.ts unblock) alone and watch GSC spam-index trend.
