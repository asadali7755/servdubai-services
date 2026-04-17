# Data Contracts: UAE Service Hub Website

**Feature**: `001-service-hub-website`
**Date**: 2026-04-15

This file defines the TypeScript interfaces and function signatures that all components and
pages MUST import from `lib/data/` and `lib/utils/`. No component may hardcode data that
belongs in these files.

---

## TypeScript Interfaces

### `lib/data/services.ts`

```typescript
export type ServiceCategory = 'domestic' | 'commercial' | 'specialized'

export interface ExternalWebsite {
  name: string
  url: string // MUST start with https://
}

export interface Service {
  id: string              // URL-safe, unique, matches slug
  name: string            // Display name, title-case
  slug: string            // Route segment for /services/[slug]
  category: ServiceCategory
  shortDescription: string // <= 160 chars
  fullDescription: string  // Original-written prose
  icon: string            // emoji or path
  images: string[]        // min 1; relative to /public/images/services/
  availableInEmirates: string[]     // emirate id[]
  externalWebsite?: ExternalWebsite // only for 4 specialized services
}

export const services: Service[]
export const getServiceBySlug: (slug: string) => Service | undefined
export const getServicesByCategory: (category: ServiceCategory) => Service[]
```

### `lib/data/emirates.ts`

```typescript
export interface City {
  id: string          // URL-safe, unique within emirate
  name: string
  slug: string        // Route segment for /[emirate]/[city]
  emirateId: string   // Foreign key to Emirate.id
  availableServices: string[]  // service id[]
}

export interface Emirate {
  id: string
  name: string
  slug: string        // Route segment for /[emirate]
  cities: City[]
  image: string       // relative to /public/images/emirates/
  heroImage?: string  // optional larger image for emirate page
}

export const emirates: Emirate[]
export const getEmirateBySlug: (slug: string) => Emirate | undefined
export const getCityBySlug: (emirateSlug: string, citySlug: string) => City | undefined
```

### `lib/data/specialized-sites.ts`

```typescript
export interface SpecializedSite {
  id: string
  name: string
  url: string           // absolute HTTPS URL
  serviceId: string     // links to Service.id
  description: string   // <= 100 chars
  logo?: string         // relative to /public/images/logos/
}

export const specializedSites: SpecializedSite[]
```

### `lib/data/constants.ts`

```typescript
export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  phone: '0547199189',
  whatsapp: '+971547199189',
  whatsappDisplay: 'Call or WhatsApp: 0547199189',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? '',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971547199189',
} as const
```

---

## Utility Function Signatures

### `lib/utils/whatsapp.ts`

```typescript
/**
 * Returns a wa.me deep link with optional pre-filled message.
 * Uses NEXT_PUBLIC_WHATSAPP_NUMBER from env; falls back to +971547199189.
 */
export const getWhatsAppLink = (service?: string, city?: string): string
```

**Contract**:
- If `service` and `city` both provided: message = `"Hello, I'm interested in {service} in {city}"`
- If only `service`: message = `"Hello, I'm interested in {service}"`
- If neither: message = `"Hello, I'd like to know more about your services"`
- All messages must be `encodeURIComponent`-encoded in the URL

### `lib/utils/seo.ts`

```typescript
import type { Metadata } from 'next'

export interface SeoOptions {
  title: string          // Full page title (pattern: "[X] in [Y] | Al Haya")
  description: string    // <= 155 chars
  path: string           // Canonical path (e.g., "/services/sofa-cleaning")
  imageUrl?: string      // OpenGraph image (absolute URL)
}

/**
 * Returns a Next.js Metadata object ready for use in generateMetadata().
 */
export const buildMetadata = (options: SeoOptions): Metadata

/**
 * Returns Schema.org LocalBusiness JSON-LD object.
 * Inject via <script type="application/ld+json"> in page component.
 */
export const buildLocalBusinessSchema = (options: {
  name?: string
  service?: string
  city?: string
  emirate?: string
}): Record<string, unknown>

/**
 * Returns Schema.org BreadcrumbList JSON-LD for a given path array.
 */
export const buildBreadcrumbSchema = (
  crumbs: Array<{ name: string; url: string }>
): Record<string, unknown>
```

### `lib/animations/variants.ts`

```typescript
import type { Variants } from 'framer-motion'

export const fadeInUp: Variants
export const staggerChildren: Variants
export const slideHorizontal: (direction: 'left' | 'right') => Variants
export const scaleOnHover: Variants
export const pulseAnimation: Variants
```

---

## Route Contracts

All dynamic routes MUST implement `generateStaticParams()` returning all valid param
combinations from the data layer:

### `/services/[slug]`

```typescript
// Required exports in app/services/[slug]/page.tsx
export async function generateStaticParams(): Promise<{ slug: string }[]>
export async function generateMetadata({ params }: Props): Promise<Metadata>
export default function ServicePage({ params }: Props): JSX.Element
```

### `/[emirate]`

```typescript
export async function generateStaticParams(): Promise<{ emirate: string }[]>
export async function generateMetadata({ params }: Props): Promise<Metadata>
export default function EmiratePage({ params }: Props): JSX.Element
```

### `/[emirate]/[city]`

```typescript
export async function generateStaticParams(): Promise<{ emirate: string; city: string }[]>
export async function generateMetadata({ params }: Props): Promise<Metadata>
export default function CityPage({ params }: Props): JSX.Element
```

**404 handling**: If `getServiceBySlug(slug)` or `getCityBySlug(e, c)` returns `undefined`,
page MUST call Next.js `notFound()` to render the custom 404 page.

---

## Environment Variables Contract

| Variable | Required | Default | Usage |
|---|---|---|---|
| NEXT_PUBLIC_WHATSAPP_NUMBER | no | +971547199189 | WhatsApp deep links |
| NEXT_PUBLIC_SITE_URL | yes (production) | '' | Canonical URLs, OG images |

Both variables MUST be set in `.env.local` (development) and Vercel Environment Variables
(production). MUST NOT be hardcoded in source files other than the fallback in `constants.ts`.
