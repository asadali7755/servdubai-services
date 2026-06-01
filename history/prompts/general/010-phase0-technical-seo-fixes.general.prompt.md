---
id: 010
title: Phase 0 Technical SEO Fixes
stage: green
date: 2026-06-01
surface: agent
model: claude-opus-4-8
feature: none
branch: 001-service-hub-website
user: asadali22
command: (chat) "han start kro" — implement Phase 0
labels: ["seo", "robots", "redirects", "proxy", "next16", "technical-seo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/app/robots.ts (removed spam disallow lines)
 - uae-service-hub/next.config.ts (added redirects())
 - uae-service-hub/proxy.ts (fixed shared NextResponse singleton -> per-request)
tests:
 - npx next build — PASS (57 pages, Proxy compiled, no errors)
 - routes-manifest.json — 3 redirects present as 308 permanent
---

## Prompt

han start kro

[Context: after the full SEO audit + plan and the Vercel/domain investigation, user approved starting
Phase 0 implementation. Number confirmed +971 55 127 5545 (correct). Per AGENTS.md this is Next.js 16
with breaking changes — read node_modules/next/dist/docs before coding.]

## Response snapshot

Read Next 16 docs for `proxy.ts` and `redirects` first. Confirmed: (a) Proxy must not rely on shared
globals — the module-level `SPAM_410_RESPONSE` singleton was wrong; (b) `redirects()` with
`permanent: true` = 308 and runs before Proxy in the execution order.

Made 3 code changes:
1. `app/robots.ts` — removed all spam-path `disallow` entries (.php, /cgi-bin, /products, /wp-*),
   leaving `allow: '/'`. These were blocking Googlebot from crawling the spam URLs, so it never saw
   the 410 from proxy.ts and the ~4-lakh spam URLs could never de-index. THE #1 fix.
2. `next.config.ts` — added `async redirects()`: `/service/:slug`->`/services/:slug`,
   `/contact-us`->`/contact`, `/about-us`->`/about`, all `permanent: true`. Expand from GSC 404 list.
3. `proxy.ts` — replaced shared `SPAM_410_RESPONSE` singleton with a `gone()` factory that builds a
   fresh NextResponse(410) per request (per Next.js docs guidance).

Verified with `npx next build` (PASS, 57 pages) and confirmed all 3 redirects compiled as 308 in
.next/routes-manifest.json. Left query-string spam (`/?products/`) as-is — homepage self-canonical
folds those; the .php 4-lakh problem already 410s correctly.

Not done in code (require dashboard/GSC, user action): Vercel domain canonicalization (set non-www
primary + permanent redirect), GSC 404 list -> expand redirect map, request indexing. Not committed
or deployed yet (awaiting user go-ahead).

## Outcome

- ✅ Impact: 3 blocking technical SEO faults fixed in code; build green; redirects verified 308.
- 🧪 Tests: `npx next build` PASS; routes-manifest shows 3x 308 redirects.
- 📁 Files: robots.ts, next.config.ts, proxy.ts.
- 🔁 Next prompts: commit + deploy; then Vercel domain fix + GSC 404 list to expand redirects + request indexing.
- 🧠 Reflection: Reading the Next 16 proxy doc confirmed the singleton anti-pattern and execution order, avoiding guesswork.

## Evaluation notes (flywheel)

- Failure modes observed: none; build clean first try.
- Graders run and results (PASS/FAIL): build PASS; manifest check PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): deploy, then curl-verify robots.txt has no spam disallows and old /service/x returns 308.
