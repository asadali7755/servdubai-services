---
description: "Task list for UAE Service Hub Website implementation"
---

# Tasks: UAE Service Hub Website

**Input**: Design documents from `/specs/001-service-hub-website/`
**Prerequisites**: plan.md ✅ spec.md ✅ research.md ✅ data-model.md ✅ contracts/ ✅ quickstart.md ✅

**Tests**: No test tasks generated (not requested in spec). Validation gates provided per checkpoint.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US4)
- All paths relative to the Next.js project root (`uae-service-hub/`)

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Create the Next.js project and configure the development environment.

- [X] T001 Bootstrap Next.js 14 project: `npx create-next-app@latest uae-service-hub --typescript --tailwind --app --src-dir=false --import-alias="@/*"` — verify `next dev` serves at http://localhost:3000
- [X] T002 Install additional dependencies inside `uae-service-hub/`: `npm install framer-motion react-hook-form zod`
- [X] T003 [P] Configure `tailwind.config.ts` — extend theme with `colors.background: '#151515'`, `colors.accent: '#c9a84c'`, `colors['background-light']: '#1e1e1e'`, `colors.surface: '#252525'`, `fontFamily.heading: ['var(--font-josefin)','sans-serif']`, `fontFamily.body: ['var(--font-work)','sans-serif']`
- [X] T004 [P] Create `.env.local` in project root with `NEXT_PUBLIC_WHATSAPP_NUMBER="+971547199189"` and `NEXT_PUBLIC_SITE_URL="http://localhost:3000"`
- [X] T005 [P] Create folder structure: `mkdir -p lib/data lib/utils lib/animations components public/images/hero public/images/services public/images/emirates public/images/logos`
- [X] T006 [P] Configure `next.config.ts` — set `images.formats: ['image/webp']` and `images.remotePatterns` if any external image hosts are used
- [X] T007 Update `app/layout.tsx` — import `Josefin_Sans` and `Work_Sans` from `next/font/google` with CSS variables `--font-josefin` and `--font-work`, apply `font-body bg-background text-white min-h-screen` to `<body>`

**Checkpoint**: `npm run dev` serves without errors; dark background visible; Josefin Sans active in browser DevTools.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Data layer, utilities, and shared animation variants that ALL user stories depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T008 [P] Create `lib/data/constants.ts` — export `SITE_CONFIG` object with `siteName: 'Al Haya Cleaning Services'`, `phone: '0547199189'`, `whatsapp: '+971547199189'`, `whatsappDisplay: 'Call or WhatsApp: 0547199189'`, `siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? ''`, `whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971547199189'`
- [X] T009 [P] Create `lib/animations/variants.ts` — export Framer Motion `Variants`: `fadeInUp` (opacity 0→1, y 60→0), `staggerChildren` (staggerChildren: 0.1), `slideHorizontal` (direction param, x ±100→0), `scaleOnHover` (scale 1→1.05 on hover), `pulseAnimation` (scale 1→1.1→1 loop)
- [X] T010 [P] Create `lib/utils/whatsapp.ts` — export `getWhatsAppLink(service?: string, city?: string): string` that builds `https://wa.me/971547199189?text=encodeURIComponent(...)` with the three message variants from contracts/data-contracts.md
- [X] T011 Create `lib/data/services.ts` — define `ServiceCategory` union, `ExternalWebsite` interface, `Service` interface per contracts/data-contracts.md; populate `services` array with all 11 services (sofa-cleaning, carpet-cleaning, mattress-cleaning, curtain-cleaning, car-interior-detailing, dining-chair-cleaning, villa-deep-cleaning, apartment-cleaning, office-cleaning, restaurant-kitchen-cleaning, marble-polishing) with stub `shortDescription`, `fullDescription`, `images: ['/images/services/placeholder.jpg']`; export `getServiceBySlug` and `getServicesByCategory` helpers
- [X] T012 Create `lib/data/emirates.ts` — define `City` and `Emirate` interfaces; populate `emirates` array with all 7 emirates and their cities (Dubai: 7 cities, Sharjah: 5, Abu Dhabi: 4, Ajman: 3, RAK: 3, Fujairah: 3, UAQ: 2) per data-model.md; set `availableServices` to all 11 service IDs for every city; export `getEmirateBySlug` and `getCityBySlug` helpers
- [X] T013 [P] Create `lib/data/specialized-sites.ts` — define `SpecializedSite` interface; populate array with 4 entries (villa-deep-cleaning-site, sofa-shampooing-site, carpet-cleaning-site, marble-pro-site) per data-model.md with correct URLs and `serviceId` references
- [X] T014 [P] Create `lib/utils/seo.ts` — export `buildMetadata(options: SeoOptions): Metadata` (Next.js `Metadata` type), `buildLocalBusinessSchema(options)`, and `buildBreadcrumbSchema(crumbs)` per contracts/data-contracts.md signatures; title pattern `"[title] | Al Haya"`, description capped at 155 chars
- [X] T015 Create `components/WhatsAppButton.tsx` — fixed `bottom-6 right-6 z-50` button with WhatsApp SVG icon, green bg, pulse animation via Framer Motion `pulseAnimation` variant, calls `getWhatsAppLink()` with no args (generic message), `target="_blank" rel="noopener noreferrer"`; add `'use client'` directive

**Checkpoint**: `npx tsc --noEmit` reports 0 errors; all data files importable; `getServiceBySlug('sofa-cleaning')` returns correct object.

---

## Phase 3: User Story 1 - Browse Services and Contact via WhatsApp (Priority: P1) 🎯 MVP

**Goal**: Visitor can see all 11 services on homepage, navigate to a service detail page, and tap WhatsApp CTA.

**Independent Test**: Homepage shows 11 service cards → click any → `/services/[slug]` loads with `<h1>` containing service name → WhatsApp button opens `wa.me/971547199189` with pre-filled message.

### Implementation for User Story 1

- [X] T016 [P] [US1] Create `components/Hero.tsx` — `'use client'`; `useState(current)`, `useState(paused)`; `useEffect` auto-advances every 5000 ms via `setInterval`; `onMouseEnter` sets paused, `onMouseLeave` clears; `AnimatePresence` wraps `motion.div` slides using `slideHorizontal` variant; each slide shows bg image, overlay with heading and WhatsApp CTA button; accepts `slides: Array<{image: string; title: string; subtitle: string}>` prop
- [X] T017 [P] [US1] Create `components/ServicesGrid.tsx` — accepts `services: Service[]` prop; renders responsive grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`; each card: `next/image` thumbnail, service name (`font-heading`), category badge, `shortDescription`, hover `scale-105` via Framer Motion `scaleOnHover`; wrapped in `<Link href="/services/{service.slug}">` 
- [X] T018 [US1] Complete `app/layout.tsx` — include `<WhatsAppButton />` in layout body (renders on every page); add temporary `<header>` and `<footer>` placeholders; ensure dark background and font variables applied globally; import `WhatsAppButton` from `components/WhatsAppButton`
- [X] T019 [US1] Create `app/page.tsx` homepage — import `Hero`, `ServicesGrid`, `services` data; define `heroSlides` array (5 entries with placeholder image paths, UAE cleaning themed titles); render `<Hero slides={heroSlides} />` then `<ServicesGrid services={services} />`; mark page as server component (no `'use client'`)
- [X] T020 [US1] Create `app/services/[slug]/page.tsx` — implement `generateStaticParams` returning `services.map(s => ({ slug: s.slug }))`; server component; call `getServiceBySlug(params.slug)`, call `notFound()` if undefined; render `<h1>` with service name, `<p>` with `fullDescription`, `next/image` for `images[0]` with `priority` prop, WhatsApp CTA `<a>` using `getWhatsAppLink(service.name)`, and conditional `<a target="_blank" rel="noopener noreferrer">` to `externalWebsite.url` if present; show available emirates list
- [X] T021 [P] [US1] Add placeholder hero images — copy or create 5 placeholder WebP images to `public/images/hero/` named `slide-1.webp` through `slide-5.webp` (use a solid color or stock photo); update `heroSlides` in `app/page.tsx` to reference these paths
- [X] T022 [P] [US1] Add placeholder service images — create or copy a single `placeholder.webp` to `public/images/services/`; verify all 11 `Service.images[0]` entries in `lib/data/services.ts` reference `/images/services/placeholder.webp` so `next/image` does not error at build

**Checkpoint**: `npm run dev` → `/` shows 11 service cards; `/services/sofa-cleaning` shows "Sofa Deep Cleaning & Shampooing" in `<h1>`; WhatsApp button visible on every page; clicking WhatsApp opens `wa.me/971547199189`.

---

## Phase 4: User Story 2 - Explore Services by Emirate and City (Priority: P2)

**Goal**: Visitor can interact with Emirates Section on homepage, expand cities, navigate to emirate and city pages.

**Independent Test**: Homepage Emirates Section shows 7 cards → hover (desktop) reveals cities → tap (mobile) expands accordion → city link opens `/dubai/marina` with "Marina" in `<h1>` and service list.

### Implementation for User Story 2

- [X] T023 [P] [US2] Create `components/EmiratesSection.tsx` — `'use client'`; accepts `emirates: Emirate[]` prop; renders 7 emirate cards with `next/image` bg; desktop: Tailwind `group` + `group-hover:block` reveals city list overlay; mobile: `useState(openId)` + Framer Motion `AnimatePresence` + `motion.div` height animation for accordion; each city renders as `<Link href="/{emirate.slug}/{city.slug}">` ; heading `font-heading`, gold accent border on hover
- [X] T024 [US2] Update `app/page.tsx` — import `EmiratesSection` and `emirates` data; add `<EmiratesSection emirates={emirates} />` after `<ServicesGrid />` section
- [X] T025 [US2] Create `app/[emirate]/page.tsx` — `generateStaticParams` returns `emirates.map(e => ({ emirate: e.slug }))`; call `getEmirateBySlug(params.emirate)`, call `notFound()` if undefined; render `<h1>{emirate.name} Cleaning Services</h1>`; cities grid with `<Link href="/{emirate.slug}/{city.slug}">`; section listing all available services with links to `/services/[slug]`
- [X] T026 [US2] Create `app/[emirate]/[city]/page.tsx` — `generateStaticParams` returns all `{ emirate, city }` combinations by iterating `emirates` and their `cities`; call `getCityBySlug(params.emirate, params.city)`, call `notFound()` for invalid combos; render `<h1>Cleaning Services in {city.name}, {emirate.name}</h1>`; list all services from `city.availableServices` as cards with WhatsApp CTA `getWhatsAppLink(service.name, city.name)` for each
- [X] T027 [P] [US2] Add emirate placeholder images — create or copy 7 placeholder WebP images to `public/images/emirates/` named `dubai.webp`, `sharjah.webp`, `abu-dhabi.webp`, `ajman.webp`, `ras-al-khaimah.webp`, `fujairah.webp`, `umm-al-quwain.webp`; update `emirates` data array `image` fields to reference these paths
- [X] T028 [US2] Create `app/not-found.tsx` — render centered message "Page Not Found", brief explanation, and `<Link href="/">Return to Homepage</Link>` styled with gold accent color

**Checkpoint**: `/dubai` loads with "Dubai" in heading and 7 city links; `/dubai/marina` loads with "Marina" in `<h1>` and 11 service entries; `/dubai/invalid-city` renders 404 page.

---

## Phase 5: User Story 3 - Discover Original Specialist Sites (Priority: P3)

**Goal**: Visitor finds and navigates to the 4 original client sites via homepage cards, service pages, and footer.

**Independent Test**: Homepage Specialized Sites section shows 4 cards → each opens correct URL in new tab; `/services/marble-polishing` contains link to `https://marblepro.ae`; footer shows all 4 links.

### Implementation for User Story 3

- [X] T029 [P] [US3] Create `components/SpecializedSites.tsx` — accepts `sites: SpecializedSite[]` prop; renders 4 cards in `grid-cols-2 lg:grid-cols-4` layout; each card: site name, description, `<a href={site.url} target="_blank" rel="noopener noreferrer">` "Visit Site" button with gold accent; optional `next/image` logo if available
- [X] T030 [US3] Update `app/page.tsx` — import `SpecializedSites` and `specializedSites` data; add `<SpecializedSites sites={specializedSites} />` after `<EmiratesSection />` with section heading "Our Specialist Websites"
- [X] T031 [US3] Update `app/services/[slug]/page.tsx` — for services with `externalWebsite`, render a prominent `<a href={service.externalWebsite.url} target="_blank" rel="noopener noreferrer">` block after the service description (e.g., "Visit our specialist site: {service.externalWebsite.name}") styled with gold border
- [X] T032 [US3] Create `components/Header.tsx` — `'use client'`; logo text "Al Haya" in `font-heading`; desktop nav: "Services" dropdown listing all 11 service names linking to `/services/[slug]`, "Emirates" dropdown listing 7 emirate names; mobile: hamburger icon toggles `useState(open)` menu with same links; `SITE_CONFIG.whatsappDisplay` CTA button in header
- [X] T033 [US3] Create `components/Footer.tsx` — company name + tagline; "Our Services" column with 11 service links; "Emirates" column with 7 emirate links; "Specialist Sites" column with 4 `<a target="_blank" rel="noopener noreferrer">` links to original domains; WhatsApp CTA; copyright line; footer bg `bg-surface`
- [X] T034 [US3] Update `app/layout.tsx` — replace placeholder `<header>` and `<footer>` with real `<Header />` and `<Footer />` components; ensure `WhatsAppButton` remains in layout
- [X] T035 [P] [US3] Add logos to `public/images/logos/` — created placeholder JPG files `villa.jpg`, `sofa.jpg`, `carpet.jpg`, `marble.jpg` via picsum.photos download

**Checkpoint**: Homepage shows 4 specialist site cards; clicking each opens correct domain in new tab; `/services/villa-deep-cleaning` contains link to `villadeepcleaning.com`; Footer shows all 4 specialist site links.

---

## Phase 6: User Story 4 - Organic Discovery via Search Engine (Priority: P4)

**Goal**: Every page has unique SEO metadata, Schema.org JSON-LD, and the sitemap lists all 58+ routes.

**Independent Test**: `/services/sofa-cleaning` `<title>` matches `"Sofa Deep Cleaning in UAE | Al Haya"`; `GET /sitemap.xml` returns 58+ `<loc>` entries; JSON-LD on homepage validates as `LocalBusiness` at Schema.org validator.

### Implementation for User Story 4

- [X] T036 [P] [US4] Add `generateMetadata` to `app/page.tsx` — call `buildMetadata({ title: 'Professional Cleaning Services in UAE', description: 'Al Haya offers 11 professional cleaning services across 7 UAE Emirates. Call or WhatsApp 0547199189', path: '/' })`
- [X] T037 [P] [US4] Add `generateMetadata` to `app/services/[slug]/page.tsx` — call `buildMetadata({ title: \`${service.name} in UAE\`, description: \`${service.shortDescription} Available across UAE. Call 0547199189\`, path: \`/services/${slug}\` })`; also inject `buildLocalBusinessSchema({ service: service.name })` as `<script type="application/ld+json">` inside the page JSX
- [X] T038 [P] [US4] Add `generateMetadata` to `app/[emirate]/page.tsx` — call `buildMetadata({ title: \`Cleaning Services in ${emirate.name}\`, description: \`Professional cleaning across ${emirate.name}. All areas covered. Call 0547199189\`, path: \`/${emirate.slug}\` })`
- [X] T039 [P] [US4] Add `generateMetadata` to `app/[emirate]/[city]/page.tsx` — call `buildMetadata({ title: \`Cleaning Services in ${city.name}, ${emirate.name}\`, description: \`Professional cleaning in ${city.name}. Same-day service. Call 0547199189\`, path: \`/${emirate.slug}/${city.slug}\` })`; inject `buildLocalBusinessSchema({ city: city.name, emirate: emirate.name })` and `buildBreadcrumbSchema` JSON-LD
- [X] T040 [P] [US4] Add global `LocalBusiness` JSON-LD to `app/layout.tsx` — inject `<script type="application/ld+json">` with `buildLocalBusinessSchema({})` in `<head>` section (site-wide schema with telephone, address, areaServed all 7 emirates)
- [X] T041 [P] [US4] Add Service schema to `app/services/[slug]/page.tsx` — inject second `<script type="application/ld+json">` with `@type: 'Service'`, `name: service.name`, `provider: { @type: 'LocalBusiness', name: 'Al Haya Cleaning Services' }`, `areaServed` array from `service.availableInEmirates`
- [X] T042 [P] [US4] Add `BreadcrumbList` JSON-LD to `app/[emirate]/[city]/page.tsx` — call `buildBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: emirate.name, url: '/{emirate}' }, { name: city.name, url: '/{emirate}/{city}' }])` and inject as `<script type="application/ld+json">`
- [X] T043 [US4] Create `app/sitemap.ts` — export default `sitemap()` function returning `MetadataRoute.Sitemap`; include: static routes (`/`, `/about`, `/contact`), all service routes (`/services/${s.slug}` for 11 services), all emirate routes (7), all city routes (all emirate+city combos, 27+); set `lastModified: new Date()`, `changeFrequency: 'monthly'`, `priority` (1.0 for homepage, 0.8 for services, 0.7 for emirates, 0.6 for cities)
- [X] T044 [US4] Create `app/robots.ts` — export default `robots()` returning `{ rules: { userAgent: '*', allow: '/' }, sitemap: \`${SITE_CONFIG.siteUrl}/sitemap.xml\` }`

**Checkpoint**: `npm run build && npm run start` → `curl localhost:3000/sitemap.xml` returns XML with 40+ `<loc>` entries; `curl localhost:3000/robots.txt` shows sitemap URL; service page `<title>` follows pattern.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final content, images, performance, accessibility, and deployment.

- [X] T045 [P] Create `app/about/page.tsx` — heading "About Al Haya Cleaning Services", brief company description (original writing), list of 11 services, coverage of 7 emirates, WhatsApp CTA; add `generateMetadata` with title "About Us | Al Haya Cleaning Services"
- [X] T046 [P] Create `app/contact/page.tsx` — react-hook-form form with zod schema (name: string min 2, phone: string min 9, service: enum of 11 service names, message: string min 10); on valid submit call `getWhatsAppLink(data.service)` and `window.open(url, '_blank')`; add `generateMetadata`; mark `'use client'`
- [X] T047 [P] Replace placeholder service images — sourced 11 real photos from picsum.photos, optimized to 800×500 progressive JPEG; placed in `public/images/services/`
- [X] T048 [P] Replace placeholder emirate images — sourced 7 real photos from picsum.photos, optimized to 800×500; placed in `public/images/emirates/`
- [X] T049 [P] Replace placeholder hero images — sourced 5 real photos, resized to 1200×675 WebP at 80% quality via sharp; placed in `public/images/hero/`
- [X] T050 Audit `next/image` usage across all components — verified `priority` on Hero first slide, descriptive `alt` on all images, correct `sizes` props (100vw hero, 33vw/50vw/100vw services grid, 25vw/50vw/100vw emirates grid)
- [X] T051 Run `npm run build` and resolve all TypeScript/ESLint errors — 0 errors, 53 pages generated
- [X] T052 Run Lighthouse — Performance: 87, Accessibility: 100, Best Practices: 100, SEO: 92 on production. Fixed: color contrast (all WhatsApp green buttons now use dark text, gold hero CTA uses dark text), removed Framer Motion from Hero (CSS opacity transitions) and WhatsAppButton (CSS keyframe animation). LCP improved from 5.1s → 2.4s.
- [X] T053 [P] Verify all 4 external site links — 14 `rel="noopener noreferrer"` instances confirmed across SpecializedSites, Footer, and service pages
- [X] T054 [P] Verify WhatsApp CTAs — 21 `getWhatsAppLink()` calls across all page types; correct `wa.me/971547199189?text=...` format confirmed
- [ ] T055 Deploy to Vercel — connect GitHub repo to Vercel dashboard; set `NEXT_PUBLIC_WHATSAPP_NUMBER=+971547199189` and `NEXT_PUBLIC_SITE_URL=https://your-domain.com` as env vars; trigger deployment
- [ ] T056 Smoke-test live production URL — check `/`, `/services/sofa-cleaning`, `/dubai`, `/dubai/marina`, `/sitemap.xml`, `/robots.txt`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 completion — BLOCKS all user stories
- **US1 (Phase 3)**: Can start after Phase 2 — **MVP deliverable**
- **US2 (Phase 4)**: Can start after Phase 2 — may run parallel to US1 if staffed
- **US3 (Phase 5)**: Can start after Phase 2 — depends on some US1 outputs (service pages) for T031
- **US4 (Phase 6)**: Can start after Phase 2 — all T036–T042 are parallel and depend only on data layer
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: Independent after Foundational — **no dependency on US2/US3/US4**
- **US2 (P2)**: Independent after Foundational — T024 depends on US1 page.tsx existing (minor)
- **US3 (P3)**: T031 depends on US1 service page existing; T030 depends on US1 page.tsx existing
- **US4 (P4)**: T036–T042 depend on respective pages existing (US1 for T037, US2 for T038/T039)

### Within Each User Story

- Data files (services.ts, emirates.ts) → components → pages
- Components are independent of each other (all [P])
- Pages depend on their component imports

### Parallel Opportunities

- All [P] tasks within the same phase can run simultaneously
- T016 (Hero) and T017 (ServicesGrid) can build in parallel in Phase 3
- All SEO tasks T036–T042 in Phase 6 can run in parallel
- All image replacement tasks T047–T049 in Phase 7 can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (T016–T022)
4. **STOP and VALIDATE**: Homepage shows 11 services, `/services/[slug]` works, WhatsApp CTA functional
5. Demo to client — this is a shippable MVP
