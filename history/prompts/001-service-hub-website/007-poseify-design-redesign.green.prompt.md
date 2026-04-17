---
id: "007"
title: Poseify Template Design Redesign
stage: green
date: 2026-04-16
surface: agent
model: claude-sonnet-4-6
feature: 001-service-hub-website
branch: 001-service-hub-website
user: asadali22
command: "yar maine jesa ui desinge tumhy diya tha templete same wesa ui hamara nhi he main tumhy phir se de rha hu is tamplate ko pora dekho iska pora style css home page others page k style ko copy kro or vo hamari website pe apply kro"
labels: ["poseify","design","css","ui-redesign","tailwind","components"]
links:
  spec: specs/001-service-hub-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - uae-service-hub/app/globals.css
  - uae-service-hub/components/Header.tsx
  - uae-service-hub/components/Hero.tsx
  - uae-service-hub/components/ServicesGrid.tsx
  - uae-service-hub/components/EmiratesSection.tsx
  - uae-service-hub/components/Footer.tsx
  - uae-service-hub/components/SpecializedSites.tsx
  - uae-service-hub/app/page.tsx
  - uae-service-hub/app/layout.tsx
tests:
  - npm run build — 53 pages, 0 errors
---

## Prompt

yar maine jesa ui desinge tumhy diya tha templete same wesa ui hamara nhi he main tumhy phir se de rha hu is tamplate ko pora dekho iska pora style css home page others page k style ko copy kro or vo hamari website pe apply kro ye rha tamplate C:\Users\leo ali\Downloads\Poseify-1.0.0.zip

(Apply the Poseify HTML template design/CSS exactly to the UAE Service Hub website — full style copy including dark theme, gold accents, title system, alternating pill service items, hover team cards, animated footer, transparent overlay navbar.)

## Response snapshot

Applied the complete Poseify design system to all components:

**globals.css**: Added full Poseify CSS system — `.section-title` with `h5::before/::after` decorative gold lines, `.section-title-left` variant, `.btn-poseify-outline` / `.btn-poseify-solid` pill buttons (`border-radius: 50px`), `.service-item-left/right` alternating pill shapes (`border-radius: 500px 0 0 500px` / `0 500px 500px 0`), `.emirate-card` with `.emirate-card-overlay` CSS `translateY(100%) → translateY(0)` hover reveal, `@keyframes footerAnimatedBg` scrolling background, `.footer-link:hover`, `.site-card:hover`.

**Header.tsx**: Fixed transparent → dark blur on scroll (via `useEffect scroll listener`), `position: fixed`, gold logo with subtitle, uppercase Josefin Sans nav links, gold hover color, dropdown menus with gold border, outline pill WhatsApp CTA.

**Hero.tsx**: Full viewport height (`100vh`) with `-mt-20` to go behind fixed header, `rgba(0,0,0,0.68)` overlay, Poseify title system (gold decorated h5 with lines + h1 with gold bottom border), two CTA buttons (`btn-poseify-solid` + `btn-poseify-outline`), prev/next arrow buttons (`.hero-arrow`), dot indicators.

**ServicesGrid.tsx**: Replaced 3-column grid with alternating `.service-item-left/right` pill shapes — circle image (`border-radius: 50%`, gold border), text body with icon + h4 + description + "Book Now →" link.

**EmiratesSection.tsx**: Team-card style — `aspect-ratio: 3/4` image, `.emirate-card-overlay` slides up from bottom on hover showing city pill buttons, mobile accordion uses CSS `max-height: 0 → 500px` transition (Framer Motion fully removed).

**Footer.tsx**: Animated background (`footer-bg` class, `@keyframes footerAnimatedBg`), dark overlay, large centered logo `display-4` style, tagline, WhatsApp + Call + Contact outline pill buttons, 4-column links grid, gold divider, copyright. All links use `.footer-link` CSS class (no event handlers → Server Component compliant).

**SpecializedSites.tsx**: `.site-card` CSS hover (lift + gold border), gold accent top line, Poseify title system.

**page.tsx**: Added About section (dark secondary bg, text + image with gold corner accents, checklist with ✓ gold icons) and CTA Banner section (Poseify dark bg, title system, WhatsApp + Call buttons).

**layout.tsx**: Added `pt-20` to `<main>` for fixed header clearance.

Fixed Server Component violation: replaced `onMouseEnter`/`onMouseLeave` inline handlers on Link/a with `.footer-link` CSS class.

## Outcome

- ✅ Impact: Full Poseify design applied — dark #212529/#343a40 bg, gold accents, transparent overlay nav, full-screen carousel hero with title system, alternating pill service items, hover-reveal emirate cards, animated footer, About section, CTA banner
- 🧪 Tests: npm run build — 53 pages, 0 errors
- 📁 Files: 9 files updated (globals.css, all 5 main components, page.tsx, layout.tsx)
- 🔁 Next prompts: Apply Poseify styling to inner pages (about, contact, emirate, city, service pages); add page banner/hero to inner pages; push to Vercel for visual QA
- 🧠 Reflection: Server Components cannot use onMouseEnter/onMouseLeave — replaced with CSS :hover classes in globals.css. Fixed pattern: define `.cls:hover { ... }` in globals.css and apply className to elements instead.

## Evaluation notes (flywheel)

- Failure modes observed: onMouseEnter/onMouseLeave on Link/a elements in Server Components triggers "Event handlers cannot be passed to Client Component props" at build time → use CSS hover classes instead; Hero needs `-mt-20` to cancel `pt-20` from layout so it overlays the fixed header
- Graders run and results (PASS/FAIL): npm run build — PASS (53 pages, 0 errors)
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Apply Poseify page-banner header component to inner pages (about, contact, emirate, service pages) for consistent branding with the fixed transparent nav
