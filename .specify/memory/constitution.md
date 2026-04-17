<!--
SYNC IMPACT REPORT
==================
Version change: (unversioned template) → 1.0.0
Type of bump: MAJOR — initial population of all principles and governance for UAE Service Hub.

Modified principles:
  - All sections: new (template → concrete project values)

Added sections:
  - Core Principles (6 principles)
  - Technology Stack
  - Development Phases
  - Governance

Removed sections:
  - None (template was empty/placeholder-only)

Templates reviewed:
  - .specify/templates/plan-template.md   ✅ compatible (Constitution Check gate aligns)
  - .specify/templates/spec-template.md   ✅ compatible (FR/SC structure aligns)
  - .specify/templates/tasks-template.md  ✅ compatible (phase structure aligns)

Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Using today 2026-04-15 as initial adoption date; confirm with client.
  - TODO(DOMAIN): Final Vercel domain not yet provided by client — update NEXT_PUBLIC_SITE_URL when confirmed.
-->

# UAE Service Hub Constitution

## Core Principles

### I. Design Fidelity (NON-NEGOTIABLE)

Every UI component MUST replicate the Poseify template exactly:
- Dark background `#151515` (or nearest approved dark variant)
- Primary accent: gold/premium tone from Poseify palette
- Heading typeface: **Josefin Sans**; body typeface: **Work Sans**
- All five homepage sections MUST be present: Hero Carousel, Services Grid,
  Emirates Section, Specialized Sites cards, Footer Carousel
- Hover/expand behaviours on Emirates cards MUST work on desktop (hover) and
  mobile (tap-to-expand)

**Rationale**: Client commissioned an exact Poseify replica; visual deviation
undermines brand trust and client acceptance.

### II. Mobile-First Responsiveness (NON-NEGOTIABLE)

All layouts MUST be designed for mobile first, then enhanced for wider viewports.
- Breakpoints: 640 / 768 / 1024 / 1280 px (Tailwind defaults sm/md/lg/xl)
- Touch targets MUST be ≥ 44 px
- 70 % of UAE users are on mobile — no feature may degrade or disappear on small
  screens

**Rationale**: Majority of target audience uses mobile devices; desktop is
enhancement, not baseline.

### III. Performance Budget (NON-NEGOTIABLE)

Every page MUST meet or exceed:
- Lighthouse Performance score: **≥ 90**
- First Contentful Paint (FCP): **< 1.5 s**
- Largest Contentful Paint (LCP): **< 2.5 s**
- Cumulative Layout Shift (CLS): **< 0.1**
- Total page load: **< 2 s** on typical UAE 4G connection

Implementation rules:
- All images MUST use WebP format with `next/image` (lazy loading + responsive
  srcset)
- No blocking third-party scripts in `<head>` without `async`/`defer`
- Code-split heavy components (carousels, maps) via dynamic imports

**Rationale**: UAE users expect fast pages; slow load directly reduces
conversion and Lighthouse score gates Vercel deployment approval.

### IV. SEO & Location Specificity

Every routable page MUST have:
- Unique `<title>` following pattern:
  `[Service] in [Emirate/City] | Al Haya Services`
- Unique `<meta name="description">` mentioning service, locations, and CTA
- An `<h1>` tag
- `alt` attributes on all images
- `Schema.org LocalBusiness` JSON-LD on every page

Location keywords (Emirate + City names) MUST appear naturally in headings and
body copy. Sitemap (`sitemap.xml`) and `robots.txt` MUST be generated at build
time.

**Rationale**: Service-area SEO drives organic acquisition; missing metadata on
any page wastes crawl budget and suppresses ranking.

### V. WhatsApp-Everywhere CTA

The WhatsApp number `+971547199189` MUST appear as a clickable CTA in at least
three places per page:
1. Floating `WhatsAppButton` component (persistent on all pages)
2. Hero section primary CTA
3. Service/City page inline CTA button

Pre-filled message template:
`Hello, I'm interested in [Service] in [City]`

Display format in copy: `Call or WhatsApp: 0547199189`

**Rationale**: WhatsApp is the dominant conversion channel in the UAE market;
every friction point removed increases lead volume.

### VI. Content Integrity & Original-Site Linkage

- All body copy MUST be original rewrites — no content may be copied verbatim
  from `villadeepcleaning.com`, `sofashampooingdubai.com`,
  `carpetcleaningdubai.com`, or `marblepro.ae`
- Links to the four original sites MUST appear in at least three locations:
  Homepage Specialized Sites section, relevant service detail pages, and the
  Footer
- Secrets and credentials MUST live in `.env` files; MUST NOT be hardcoded

**Rationale**: Duplicate content harms SEO across all five domains; client
retains the original sites and expects cross-linking, not replacement.

## Technology Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Vercel |
| Analytics | Google Analytics 4 (ready, not blocking launch) |

**Environment variables required at deploy:**
```
NEXT_PUBLIC_WHATSAPP_NUMBER="+971547199189"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"   # TODO(DOMAIN)
```

**External site links (immutable):**
```typescript
const specializedSites = [
  { name: 'Villa Deep Cleaning', url: 'https://www.villadeepcleaning.com/' },
  { name: 'Sofa Shampooing',     url: 'https://sofashampooingdubai.com'   },
  { name: 'Carpet Cleaning',     url: 'https://carpetcleaningdubai.com'   },
  { name: 'Marble Polishing',    url: 'https://marblepro.ae'              },
]
```

## Development Phases

Implementation MUST follow this order; no phase may be skipped:

| Phase | Name | Gate to next phase |
|---|---|---|
| 1 | Setup — Next.js project + dependencies | `next dev` runs without errors |
| 2 | Data Layer — services, emirates, cities | TypeScript compiles cleanly |
| 3 | Components — reusable UI components | All components render on Storybook/dev |
| 4 | Pages — dynamic routes with real data | All routes return 200 in dev |
| 5 | SEO — metadata, schema, sitemap | Lighthouse SEO ≥ 90 locally |
| 6 | Optimization — images, perf, testing | Lighthouse Performance ≥ 90 |
| 7 | Deployment — Vercel, analytics wiring | Production URL live and all checks green |

## Governance

- This Constitution supersedes all other coding conventions or preferences for
  this project.
- **Amendments**: MUST be documented in this file with a version bump (semver)
  and a `LAST_AMENDED_DATE` update. Breaking changes (principle removal or
  redefinition) require MAJOR bump.
- **Compliance review**: Every PR description MUST include a "Constitution
  Check" confirming no principle is violated; violations require explicit
  justification logged in `plan.md` Complexity Tracking table.
- **Secrets**: MUST use `.env` / Vercel environment variables — never hardcoded.
- **Language**: English only for v1; Arabic is a planned future phase and MUST
  NOT be stubbed or partially implemented now.
- Agents and contributors MUST NOT refactor unrelated code, add speculative
  abstractions, or introduce features beyond the agreed seven phases without an
  amendment.

**Version**: 1.0.0 | **Ratified**: 2026-04-15 | **Last Amended**: 2026-04-15
