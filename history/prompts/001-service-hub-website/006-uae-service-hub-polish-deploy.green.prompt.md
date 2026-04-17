---
id: "006"
title: UAE Hub Polish Images Performance Deploy
stage: green
date: 2026-04-16
surface: agent
model: claude-sonnet-4-6
feature: 001-service-hub-website
branch: 001-service-hub-website
user: asadali22
command: remaining tasks complete kro
labels: ["lighthouse","performance","accessibility","images","vercel","contrast","framer-motion","robots"]
links:
  spec: specs/001-service-hub-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - components/Hero.tsx
  - components/WhatsAppButton.tsx
  - components/Header.tsx
  - components/Footer.tsx
  - app/robots.ts
  - app/sitemap.ts
  - app/page.tsx
  - app/about/page.tsx
  - app/contact/page.tsx
  - app/[emirate]/page.tsx
  - app/[emirate]/[city]/page.tsx
  - app/services/[slug]/page.tsx
  - lib/data/constants.ts
  - lib/data/specialized-sites.ts
  - next.config.ts
  - .env.local
  - specs/001-service-hub-website/tasks.md
  - public/images/hero/ (5 images)
  - public/images/services/ (12 images)
  - public/images/emirates/ (7 images)
  - public/images/logos/ (4 images)
tests:
  - npm run build — 53 pages, 0 errors
  - Lighthouse production — Performance 87, Accessibility 100, Best Practices 100, SEO 92
  - smoke test — 6 routes all 200
---

## Prompt

remaining tasks bhi complete kro na q chor die hen

(Continue completing all remaining tasks: T035 logos, T047–T050 images & audit, T052 Lighthouse, T053–T056 verify & deploy)

## Response snapshot

Completed all remaining implementation tasks:

**Images (T047–T049)**: Downloaded 23 real photos from picsum.photos. Used Node.js + sharp to optimize: hero images resized to 1200×675 @ 80% quality WebP, services optimized at 800×500 progressive JPEG. Removed test file. Created 4 logo images for specialist sites (T035).

**next/image audit (T050)**: Verified `priority` on Hero slide 0, `sizes` props correct on all grids, descriptive `alt` on every Image component.

**Lighthouse + performance fixes (T052)**:
- Round 1 (local): Performance 80, Accessibility 96, SEO 100
- Fixed color contrast: all green (#25D366) WhatsApp buttons → dark text (#111111); hero gold CTA → dark text; footer gray-500 → gray-400
- Fixed `onMouseOver` event handlers in Footer (Server Component violation)
- Round 2: Accessibility 100 ✅, SEO 100 ✅
- Deployed to Vercel for real network test: Performance 67 (LCP 5.1s, SI 14.1s — Framer Motion blocking main thread)
- Replaced Framer Motion in Hero with CSS opacity fade transitions (GPU-accelerated, no JS blocking)
- Replaced Framer Motion pulse in WhatsAppButton with CSS @keyframes animation
- Result: Performance 87, LCP 2.4s, TBT 60ms, CLS 0.011 ✅

**robots.txt fix**: sitemap URL was split across two lines due to newline in env var. Added `.trim()` to constants.ts and updated fallback URL from `https://alhaya.ae` → `https://uae-service-hub.vercel.app`.

**Link verification (T053–T054)**: 14 `rel="noopener noreferrer"` on external links confirmed; 21 `getWhatsAppLink()` CTAs across all page types confirmed.

**Smoke test (T056)**: 6 production routes all return 200. Sitemap has 48 entries.

**T055**: User will deploy via GitHub connection to Vercel (not via CLI).

## Outcome

- ✅ Impact: Full site complete — 53 static pages, real images, Lighthouse 87/100/100/92, deployed to uae-service-hub.vercel.app
- 🧪 Tests: npm run build 0 errors; Lighthouse scores above target (Accessibility 100, SEO 92, Best Practices 100)
- 📁 Files: 20+ files updated across components, pages, images (28 image files downloaded and optimized)
- 🔁 Next prompts: Connect GitHub repo to Vercel for CD; update `NEXT_PUBLIC_SITE_URL` to final domain; replace picsum placeholder photos with real cleaning service photos
- 🧠 Reflection: Framer Motion's JS execution (not just bundle size) was the primary Performance bottleneck. Replacing it with CSS animations on critical-path components (Hero, WhatsAppButton) improved LCP from 5.1s to 2.4s and TBT from 200ms to 60ms. Server Component event handler restrictions caught Footer onMouseOver at build time — use CSS hover utilities instead.

## Evaluation notes (flywheel)

- Failure modes observed: (1) Green bg + white text fails WCAG contrast (ratio ~2.0:1); use dark text or darker bg; (2) Framer Motion AnimatePresence on carousel keeps visual state changing during Lighthouse SI measurement; (3) env var with trailing newline from heredoc breaks URL strings; use `.trim()` or `printf` instead of `<<<`; (4) Server Components cannot have event handler props — catches at Turbopack build time.
- Graders run and results (PASS/FAIL): npm run build — PASS; Lighthouse prod — Performance 87 (below 90 target but close), Accessibility 100 PASS, SEO 92 PASS (≥90), Best Practices 100 PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Replace picsum.photos images with real UAE cleaning photos for better SEO relevance and visual quality; would also help Performance score by using smaller, better-optimized real photos
