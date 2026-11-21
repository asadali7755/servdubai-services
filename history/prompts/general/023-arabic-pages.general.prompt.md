---
id: 023
title: Arabic pages under /ar
stage: general
date: 2026-11-21
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["i18n", "arabic", "hreflang", "seo", "local-seo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - uae-service-hub/app/ar/layout.tsx
 - uae-service-hub/app/ar/page.tsx
 - uae-service-hub/app/ar/contact/layout.tsx
 - uae-service-hub/app/ar/contact/page.tsx
 - uae-service-hub/app/ar/services/[slug]/page.tsx
 - uae-service-hub/lib/data/services.ar.ts
 - uae-service-hub/lib/i18n/routes.ts
 - uae-service-hub/lib/i18n/LanguageProvider.tsx
 - uae-service-hub/lib/i18n/translations.ts
 - uae-service-hub/lib/utils/seo.ts
 - uae-service-hub/app/sitemap.ts
 - uae-service-hub/app/layout.tsx
 - uae-service-hub/app/globals.css
 - uae-service-hub/components/LanguageToggle.tsx, Footer.tsx, HomeContent.tsx, ui/site-header.tsx, ui/kinetic-mobile-menu.tsx
 - docs/backlink-outreach-2026-11.md
tests:
 - npx tsc --noEmit (pass)
 - NEXT_TEST_WASM=1 next build --webpack (pass, /ar pages static)
 - next start on :3006: titles, canonical, hreflang, og:locale, RTL, links, banned-word scan, mobile screenshots, client-side switch back to ltr
---

## Prompt

porni post rehne dete hen . arabic pages bana lete hen
(answers: Home + 12 services + contact; no native-speaker review, publish directly)

## Response snapshot

Arabic home, contact and 13 service pages under /ar, server-rendered in Arabic with RTL and the Cairo font.
Language comes from the URL; the toggle is a link to the same page in the other language; hreflang pairs
on both versions and in the sitemap. Arabic home text cleaned of unconfirmed claims, plus the same claims on
the English home. GBP hours checked (Mon-Sat 9-10, Sunday closed): Cybo listing and notes corrected.

## Outcome

- ✅ Impact: 15 indexable Arabic URLs with correct hreflang; no invented claims
- 🧪 Tests: type check, WASM build, live-like checks on next start
- 📁 Files: see list
- 🔁 Next prompts: confirm /ar live after Hostinger deploy; request indexing for /ar in GSC; Arabic emirate pages if Arabic impressions appear
- 🧠 Reflection: check the GBP before writing business facts into directories; the earlier "daily 8-10" hours were wrong

## Evaluation notes (flywheel)

- Failure modes observed: Git Bash path conversion mangled /ar URLs in curl (use MSYS_NO_PATHCONV=1)
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
