# Research: UAE Service Hub Website

**Feature**: `001-service-hub-website`
**Date**: 2026-04-15
**Phase**: 0 — Research

## Rendering Strategy

**Decision**: Static Site Generation (SSG) via `generateStaticParams`

**Rationale**:
- All content is known at build time (TypeScript data files)
- SSG produces pre-rendered HTML — best possible Lighthouse score and TTFB
- No user-specific data, no auth, no database → no reason for SSR or ISR
- Vercel serves pre-rendered pages from global CDN edge nodes

**Alternatives considered**:
- ISR (Incremental Static Regeneration): rejected — content changes infrequently; full rebuild
  is fine; ISR adds complexity with no benefit
- SSR per-request: rejected — no dynamic user data; would hurt performance budget

---

## Carousel Implementation

**Decision**: Framer Motion `AnimatePresence` + custom hook (no Swiper/Embla)

**Rationale**:
- Framer Motion is already a required dependency (constitution Principle I)
- Swiper.js adds ~80 KB gzipped — violates 100 KB per-dep constraint
- Embla is lighter but adds another dep with no feature advantage over Framer Motion
- A simple auto-rotating carousel needs: state (current slide), useEffect (timer),
  AnimatePresence (exit/enter), motion.div (slide animation) — all covered by Framer Motion

**Implementation pattern**:
```typescript
const [current, setCurrent] = useState(0)
const [paused, setPaused] = useState(false)

useEffect(() => {
  if (paused) return
  const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
  return () => clearInterval(id)
}, [paused, slides.length])
```

---

## Image Strategy

**Decision**: `next/image` with images in `/public/images/` organized by category

**Rationale**:
- Vercel automatically serves optimized WebP/AVIF via its image optimization pipeline
- No external CDN subscription required for MVP
- `priority` prop on above-the-fold images ensures LCP image is not lazy-loaded
- `placeholder="blur"` with `blurDataURL` eliminates CLS

**Organization**:
```
public/images/
├── hero/          # 5 carousel slides (1920×1080 source)
├── services/      # 1+ per service (800×600 source)
├── emirates/      # 1 per emirate (800×600 source)
└── logos/         # site logo, 4 specialized site logos
```

**Stock image sources**:
- Pexels: cleaning, interior, UAE architecture (free commercial license)
- Unsplash: interior spaces, marble, furniture (free commercial license)
- Original client sites: use only for reference/scraping inspiration, not direct inclusion

---

## Font Loading

**Decision**: `next/font/google` (Josefin Sans 400/700, Work Sans 400/600)

**Rationale**:
- Self-hosted by Next.js at build time — zero external network request
- Zero CLS (font loaded before first paint via `<link rel="preload">`)
- CSS variables exposed as `--font-josefin` and `--font-work` for Tailwind integration

**Tailwind integration**:
```typescript
// tailwind.config.ts
fontFamily: {
  heading: ['var(--font-josefin)', 'sans-serif'],
  body: ['var(--font-work)', 'sans-serif'],
}
```

---

## Animation Pattern

**Decision**: Framer Motion variants + `AnimatePresence` throughout

**Rationale**: Poseify template uses Bootstrap JS for simple CSS transitions. Framer Motion
provides equivalent or superior animations without Bootstrap's JS overhead.

**Standard variant library** (`lib/animations/variants.ts`):
- `fadeInUp` — cards, sections entering viewport
- `staggerChildren` — grid items staggered reveal
- `slideHorizontal` — carousel slides
- `scaleOnHover` — service cards (scale 1.05)
- `pulseAnimation` — WhatsApp button

---

## Emirates Section Interaction

**Decision**: CSS-only hover on desktop + React state accordion on mobile

**Rationale**:
- Desktop: `group` Tailwind class + CSS `group-hover:` variants (zero JS, instant response)
- Mobile: `useState(openId)` — only one accordion open at a time; toggles on tap
- Framer Motion `AnimatePresence` wraps accordion content for smooth height animation
- Breakpoint detection: Tailwind `md:` prefix handles display switch; no `window.innerWidth`
  checks needed

---

## WhatsApp Deep Link Pattern

**Decision**: `https://wa.me/971547199189?text=encodeURIComponent(message)`

**Rationale**:
- `wa.me` short URL works on all platforms: mobile opens WhatsApp app, desktop opens Web
- Phone number format: country code only, no `+` or spaces (e.g., `971547199189`)
- Pre-filled message includes service and city context when available

**Helper**:
```typescript
export const getWhatsAppLink = (service?: string, city?: string): string => {
  const msg = service && city
    ? `Hello, I'm interested in ${service} in ${city}`
    : `Hello, I'd like to know more about your services`
  return `https://wa.me/971547199189?text=${encodeURIComponent(msg)}`
}
```

---

## SEO / Schema Pattern

**Decision**: `generateMetadata()` per route + inline JSON-LD `<script>` tag

**Rationale**:
- Next.js 14 App Router's `generateMetadata` is the idiomatic API for per-route metadata
- JSON-LD in `<script type="application/ld+json">` is Google's recommended schema injection
  method (avoids XSS risk of dangerouslySetInnerHTML when values are controlled data)
- `sitemap.ts` file (App Router convention) auto-generates `sitemap.xml` at `/sitemap.xml`
- `robots.ts` generates `robots.txt`

**Title pattern**: `[Service/City] in [Location] | Al Haya`
**Description cap**: 155 characters; always ends with `Call 0547199189`

---

## Contact Form

**Decision**: react-hook-form + zod; `mailto:` or WhatsApp redirect on submit

**Rationale**:
- No backend endpoint required → no server infra for MVP
- On submit: construct WhatsApp pre-filled URL and `window.open()` — converts form lead
  directly into WhatsApp conversation
- zod schema validates name, phone, service selection, message before redirect

---

## Dependencies Final List

| Package | Version | Purpose | Bundle (gzip) |
|---|---|---|---|
| next | 14.x | Framework + routing + image | framework |
| react / react-dom | 18.x | UI runtime | framework |
| typescript | 5.x | Type safety | dev only |
| tailwindcss | 3.x | Utility CSS | CSS only |
| framer-motion | 11.x | Animations | ~43 KB |
| react-hook-form | 7.x | Contact form | ~10 KB |
| zod | 3.x | Schema validation | ~13 KB |

All deps individually under 100 KB gzipped. ✅ Constitution Principle III satisfied.
