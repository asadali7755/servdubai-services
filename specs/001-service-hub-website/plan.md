# Implementation Plan: UAE Service Hub Website

**Branch**: `001-service-hub-website` | **Date**: 2026-04-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-service-hub-website/spec.md`

## Summary

Build a Next.js 14 (App Router, SSG) hub website that consolidates 4 existing UAE cleaning
service sites into a single Poseify-template replica covering 11 services, 7 Emirates, and
40+ cities. Primary conversion path: visitor → service page → WhatsApp CTA. All routes are
statically generated at build time; no backend or database required.

## Technical Context

**Language/Version**: TypeScript 5.x (Node.js 18 LTS)
**Primary Dependencies**: Next.js 14 (App Router), Tailwind CSS 3, Framer Motion 11,
react-hook-form 7, zod 3
**Storage**: N/A — fully static/SSG, no database
**Testing**: Playwright (E2E smoke), Vitest (unit utils)
**Target Platform**: Web — Vercel Edge Network (global CDN, SSG)
**Project Type**: web
**Performance Goals**: Lighthouse >= 90 (mobile + desktop), LCP < 2.5 s, FCP < 1.5 s, CLS < 0.1
**Constraints**: No single third-party dep > 100 KB gzipped; all images WebP + lazy-load;
no server-side secrets; no auth
**Scale/Scope**: ~62 static pages (11 services + 7 emirates + 40 cities + 4 static)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Principle | Gate | Status |
|---|---|---|
| I Design Fidelity | Hero Carousel, ServicesGrid, EmiratesSection, SpecializedSites, Footer Carousel all present; dark #151515 bg, Josefin Sans headings, gold accent | ✅ PASS |
| II Mobile-First | Tailwind mobile-first breakpoints (sm/md/lg/xl); touch targets >= 44 px enforced in components | ✅ PASS |
| III Performance Budget | next/image (WebP + lazy/eager), SSG, code-split carousels via dynamic(); Lighthouse target 90 | ✅ PASS |
| IV SEO & Location | generateMetadata() per route; LocalBusiness JSON-LD; sitemap.xml auto-generated at build | ✅ PASS |
| V WhatsApp CTA | WhatsAppButton component rendered in root layout (always present); inline CTAs in Hero + service/city pages | ✅ PASS |
| VI Content Integrity | No verbatim copy from original sites; 4 external links required on homepage, footer, service pages | ✅ PASS |

**No constitution violations. No Complexity Tracking required.**

## Project Structure

### Documentation (this feature)

```text
specs/001-service-hub-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── data-contracts.md
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 output (/sp.tasks)
```

### Source Code (repository root)

```text
uae-service-hub/               # Next.js project root
├── app/
│   ├── layout.tsx             # Root layout (Header, Footer, WhatsAppButton)
│   ├── page.tsx               # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   └── [slug]/page.tsx    # 11 service detail pages (SSG)
│   ├── [emirate]/
│   │   ├── page.tsx           # 7 emirate overview pages (SSG)
│   │   └── [city]/page.tsx    # 40+ city pages (SSG)
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # robots.txt
├── components/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── EmiratesSection.tsx
│   ├── SpecializedSites.tsx
│   ├── WhatsAppButton.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts
│   │   ├── emirates.ts
│   │   ├── specialized-sites.ts
│   │   └── constants.ts
│   ├── utils/
│   │   ├── seo.ts
│   │   └── whatsapp.ts
│   └── animations/
│       └── variants.ts
├── public/
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── emirates/
│       └── logos/
├── tailwind.config.ts
├── next.config.ts
└── .env.local
```

**Structure Decision**: Single Next.js 14 App Router project (Option 2 — web app, frontend-only).
No separate backend; all data served from TypeScript data files at build time. This is the
minimum viable structure for an SSG marketing site.

## Phase 0: Research

See [research.md](./research.md) for full findings.

**Key decisions resolved:**

| Decision | Choice | Rationale |
|---|---|---|
| Rendering strategy | SSG (generateStaticParams) | No user-specific data; best performance + Lighthouse score |
| Carousel library | Framer Motion only (no Swiper/Embla) | Framer Motion already in dep tree; avoids extra 100 KB bundle |
| Image strategy | next/image + public/ folder | Vercel optimizes on-the-fly; no CDN subscription needed |
| Form handling | react-hook-form + zod | Contact page only; already planned dependency |
| Animation pattern | Framer Motion variants + AnimatePresence | Replaces Bootstrap JS animations from Poseify template |
| Font loading | next/font/google (Josefin Sans + Work Sans) | Zero CLS; self-hosted subsets; no external request |

## Phase 1: Design & Contracts

See [data-model.md](./data-model.md) for entity schema.
See [contracts/data-contracts.md](./contracts/data-contracts.md) for TypeScript interfaces.
See [quickstart.md](./quickstart.md) for local dev setup.

## Development Phases

| Phase | Name | Gate to next |
|---|---|---|
| 1 | Project Setup | `next dev` serves homepage without errors |
| 2 | Data Layer | TypeScript compiles; all data importable |
| 3 | Utilities | Unit tests (seo.ts, whatsapp.ts) pass |
| 4 | Components | All 7 components render in isolation |
| 5 | Pages | All routes return 200; no missing metadata |
| 6 | Images & Assets | All `next/image` src paths resolve |
| 7 | SEO & Performance | Lighthouse >= 90 locally |
| 8 | Testing & Deployment | Live Vercel URL, no console errors |

## Complexity Tracking

> No constitution violations to justify.
