/**
 * Phase 2 — Service × Area landing pages.
 *
 * Curated, high-intent combinations of (emirate, city, service) that get their
 * own dedicated page at /[emirate]/[city]/[service] (e.g. /dubai/marina/sofa-cleaning).
 *
 * WHY curated (not every combo): post-"Helpful Content", hundreds of near-identical
 * templated pages HURT a site. A focused set of genuinely-unique, buyer-intent pages
 * ranks far better. Each page combines unique per-city content (landmarks, property
 * type, local FAQs) with unique per-service content (process, benefits) — so no two
 * pages are thin duplicates.
 *
 * To expand later: add entries here. The route, sitemap and internal links pick them
 * up automatically. Keep each combo meaningful (service actually in-demand in that area).
 */

export interface ServiceAreaCombo {
  emirate: string // emirate slug
  city: string // city slug
  service: string // service slug
}

// Top Dubai areas that already have rich, unique local content in cityContent.ts
const UNIVERSAL_AREAS = [
  'marina',
  'jlt',
  'downtown',
  'jumeirah',
  'business-bay',
  'palm-jumeirah',
  'al-barsha',
  'bur-dubai',
]

// Areas where villa/townhouse deep cleaning is most relevant
const VILLA_AREAS = ['jumeirah', 'palm-jumeirah', 'al-barsha', 'bur-dubai']

// Premium areas where marble polishing demand is highest
const MARBLE_AREAS = ['downtown', 'jumeirah', 'palm-jumeirah', 'business-bay']

// Search Console shows real, repeated demand for floor cleaning tied to these
// two areas specifically ("floor cleaning company in mirdif", "floor cleaning
// services umm suqeim") — the site was picking up impressions for them with no
// matching page, so both areas and the service are new here.
const FLOOR_AREAS = ['mirdif', 'umm-suqeim', 'al-barsha', 'bur-dubai']

const build = (service: string, cities: string[]): ServiceAreaCombo[] =>
  cities.map((city) => ({ emirate: 'dubai', city, service }))

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  ...build('sofa-cleaning', UNIVERSAL_AREAS), // 8
  ...build('carpet-cleaning', UNIVERSAL_AREAS), // 8
  ...build('villa-deep-cleaning', VILLA_AREAS), // 4
  ...build('marble-polishing', MARBLE_AREAS), // 4
  ...build('floor-cleaning', FLOOR_AREAS), // 4
] // = 28 curated combo pages

/** Is there a dedicated combo page for this exact (emirate, city, service)? */
export const hasCombo = (emirate: string, city: string, service: string): boolean =>
  SERVICE_AREA_COMBOS.some(
    (c) => c.emirate === emirate && c.city === city && c.service === service
  )

/** All service slugs that have a combo page in a given city (for internal linking). */
export const combosForCity = (emirate: string, city: string): string[] =>
  SERVICE_AREA_COMBOS.filter((c) => c.emirate === emirate && c.city === city).map(
    (c) => c.service
  )

/** All (emirate, city) areas that have a combo page for a given service. */
export const combosForService = (
  service: string
): { emirate: string; city: string }[] =>
  SERVICE_AREA_COMBOS.filter((c) => c.service === service).map((c) => ({
    emirate: c.emirate,
    city: c.city,
  }))
