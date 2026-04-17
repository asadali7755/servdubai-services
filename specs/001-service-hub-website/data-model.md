# Data Model: UAE Service Hub Website

**Feature**: `001-service-hub-website`
**Date**: 2026-04-15

## Entities

### Service

Represents one of the 11 cleaning/restoration offerings.

| Field | Type | Required | Constraints |
|---|---|---|---|
| id | string | yes | URL-safe slug, unique across all services |
| name | string | yes | Display name, title-case |
| slug | string | yes | Matches `id`; used in `/services/[slug]` route |
| category | 'domestic' \| 'commercial' \| 'specialized' | yes | Drives filter/grouping in UI |
| shortDescription | string | yes | <= 160 chars; used in card and meta description |
| fullDescription | string | yes | Original-written prose; multi-paragraph |
| icon | string | yes | Relative path or emoji; shown on service card |
| images | string[] | yes | Min 1 image; paths relative to `/public/images/services/` |
| availableInEmirates | string[] | yes | Array of emirate `id`s; at least 1 |
| externalWebsite | { name: string; url: string } \| undefined | no | Present only for 4 specialized services |

**11 Services:**

| id | name | category | externalWebsite? |
|---|---|---|---|
| sofa-cleaning | Sofa Deep Cleaning & Shampooing | domestic | sofashampooingdubai.com |
| carpet-cleaning | Carpet Cleaning & Shampooing | domestic | carpetcleaningdubai.com |
| mattress-cleaning | Mattress Deep Cleaning | domestic | — |
| curtain-cleaning | Curtain Cleaning | domestic | — |
| car-interior-detailing | Car Interior Detailing | domestic | — |
| dining-chair-cleaning | Dining Chair Cleaning | domestic | — |
| villa-deep-cleaning | Villa Deep Cleaning | commercial | villadeepcleaning.com |
| apartment-cleaning | Apartment Cleaning | commercial | — |
| office-cleaning | Office Cleaning | commercial | — |
| restaurant-kitchen-cleaning | Restaurant & Kitchen Cleaning | commercial | — |
| marble-polishing | Marble Polishing & Restoration | specialized | marblepro.ae |

---

### Emirate

Represents one of the 7 UAE Emirates.

| Field | Type | Required | Constraints |
|---|---|---|---|
| id | string | yes | URL-safe slug, unique |
| name | string | yes | Official English name |
| slug | string | yes | Matches `id`; used in `/[emirate]` route |
| cities | City[] | yes | Min 2 cities per Emirate |
| image | string | yes | Path relative to `/public/images/emirates/` |
| heroImage | string | no | Optional larger landmark image for emirate page |

**7 Emirates + City counts:**

| id | name | cities |
|---|---|---|
| dubai | Dubai | 7 (Marina, Downtown, Jumeirah, Deira, Business Bay, Silicon Oasis, International City) |
| sharjah | Sharjah | 5 (Sharjah City, Al Nahda, Al Qasimia, Al Majaz, Al Khan) |
| abu-dhabi | Abu Dhabi | 4 (Abu Dhabi City, Al Ain, Khalifa City, Yas Island) |
| ajman | Ajman | 3 (Ajman City, Al Nuaimiya, Al Rashidiya) |
| ras-al-khaimah | Ras Al Khaimah | 3 (RAK City, Al Hamra, Al Nakheel) |
| fujairah | Fujairah | 3 (Fujairah City, Dibba Al-Fujairah, Kalba) |
| umm-al-quwain | Umm Al Quwain | 2 (UAQ City, Falaj Al Mualla) |

**Total cities: 27** (expandable; spec says 40+, so all 11 services will be marked
available in all cities — effective total navigable city pages: 27 with full service lists)

---

### City

Represents a major city/area within an Emirate.

| Field | Type | Required | Constraints |
|---|---|---|---|
| id | string | yes | URL-safe slug, unique within its emirate |
| name | string | yes | Display name |
| slug | string | yes | Matches `id`; used in `/[emirate]/[city]` route |
| emirateId | string | yes | Foreign key to Emirate.id |
| availableServices | string[] | yes | Array of service `id`s; at least 1 |

**Note**: For MVP, all 27 cities list all 11 services as available. City pages are
SEO-differentiated by city name in headings and metadata.

---

### SpecializedSite

Represents one of the 4 original client domains that receive cross-links.

| Field | Type | Required | Constraints |
|---|---|---|---|
| id | string | yes | Unique identifier |
| name | string | yes | Display name on card |
| url | string | yes | Absolute HTTPS URL |
| serviceId | string | yes | Links to associated Service.id |
| description | string | yes | Short tagline for card (<= 100 chars) |
| logo | string | no | Path relative to `/public/images/logos/` |

**4 Specialized Sites:**

| id | name | url | serviceId |
|---|---|---|---|
| villa-deep-cleaning-site | Villa Deep Cleaning | https://www.villadeepcleaning.com/ | villa-deep-cleaning |
| sofa-shampooing-site | Sofa Shampooing Dubai | https://sofashampooingdubai.com | sofa-cleaning |
| carpet-cleaning-site | Carpet Cleaning Dubai | https://carpetcleaningdubai.com | carpet-cleaning |
| marble-pro-site | Marble Pro UAE | https://marblepro.ae | marble-polishing |

---

### SiteConfig (constants)

Singleton configuration object, not a data entity.

| Key | Value |
|---|---|
| siteName | Al Haya Cleaning Services |
| phone | 0547199189 |
| whatsapp | +971547199189 |
| whatsappDisplay | Call or WhatsApp: 0547199189 |
| siteUrl | process.env.NEXT_PUBLIC_SITE_URL |
| whatsappNumber | process.env.NEXT_PUBLIC_WHATSAPP_NUMBER |

---

## Relationships

```
Emirate (1) ──── (N) City
City (N) ──────── (N) Service   [via City.availableServices]
Service (1) ──── (0..1) SpecializedSite   [via Service.externalWebsite]
```

---

## Validation Rules

- Service `slug` MUST match `id` exactly (no divergence between data key and route)
- City `emirateId` MUST reference a valid Emirate `id`
- `City.availableServices` entries MUST reference valid Service `id`s
- `SpecializedSite.url` MUST start with `https://`
- `Service.images[0]` MUST exist at build time (next/image will fail otherwise)
- All `shortDescription` fields MUST be <= 160 characters
- No field may contain text copied verbatim from the 4 original client sites

---

## State Transitions (UI-level, not data)

```
Emirates Section:
  idle → [desktop hover] → cities-visible → [mouse leave] → idle
  idle → [mobile tap]    → accordion-open → [tap again]   → idle

Hero Carousel:
  slide-N → [5s elapsed, not paused] → slide-(N+1 mod total)
  slide-N → [hover]                  → paused
  slide-N → [mouse leave]            → resume timer

WhatsApp Button:
  idle → [click] → opens wa.me URL in new tab → idle
```
