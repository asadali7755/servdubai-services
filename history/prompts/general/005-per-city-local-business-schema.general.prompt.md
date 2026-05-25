---
id: "005"
title: "Per-City Local Business Schema Markup"
stage: general
date: "2026-05-25"
surface: agent
model: claude-sonnet-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: "Task 3 - Missing Local Business Schema Markup Per Page"
labels: ["seo", "schema", "local-business", "json-ld", "geo-coordinates", "snack-pack"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_created:
  - uae-service-hub/lib/data/cityCoordinates.ts
files_modified:
  - uae-service-hub/lib/utils/seo.ts
  - uae-service-hub/app/[emirate]/[city]/page.tsx
  - uae-service-hub/app/[emirate]/page.tsx
tests: []
---

## Prompt (verbatim)

ab task 3 karo

## Response

### Task 3 Completed: Per-City Local Business Schema Markup

**New file: `lib/data/cityCoordinates.ts`**

GPS coordinates + service radius for all 29 cities and 7 emirates:
- CityCoords: lat, lng, radiusMeters, addressLocality, addressRegion
- EmirateCoords: lat, lng, radiusMeters, addressRegion
- `getCityCoords(emirateSlug, citySlug)` - city lookup
- `getEmirateCoords(emirateSlug)` - emirate lookup

**Updated: `lib/utils/seo.ts` - buildLocalBusinessSchema()**

Added `coords` optional parameter. When provided:
- `geo` → city-specific GeoCoordinates (not generic Dubai coords)
- `serviceArea` → GeoCircle with tight city radius (3000-8000m, NOT 200km)
- `address.addressLocality` → city name (not generic "Dubai")
- `address.addressRegion` → correct emirate name
- `description` → city-specific text mentioning city and emirate

**Updated: `app/[emirate]/[city]/page.tsx`**
- Imports getCityCoords
- Passes city coords to buildLocalBusinessSchema

**Updated: `app/[emirate]/page.tsx`**
- Imports getEmirateCoords  
- Passes emirate coords to buildLocalBusinessSchema

**Before vs After schema (Dubai Marina example):**

BEFORE:
- geo: {lat: 25.2960519, lng: 55.3622766} (generic, not Marina)
- serviceArea radius: 200000m (whole UAE)
- address.addressLocality: "Dubai" (not area-specific)

AFTER:
- geo: {lat: 25.0805, lng: 55.1403} (Dubai Marina precisely)
- serviceArea radius: 3000m (just Marina area)
- address.addressLocality: "Dubai Marina"

TypeScript: clean (tsc --noEmit passed with 0 errors)
