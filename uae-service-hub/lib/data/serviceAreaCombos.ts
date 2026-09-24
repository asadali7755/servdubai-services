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

const build = (service: string, cities: string[], emirate = 'dubai'): ServiceAreaCombo[] =>
  cities.map((city) => ({ emirate, city, service }))

// Core services shown per non-Dubai emirate on /areas — mirrors the site's
// main service lineup (sofa / carpet / villa / marble) rather than the full
// 12-service list, so each emirate gets its own dedicated combo pages using
// the same "Facebook look" template as the Dubai pages instead of falling
// back to the generic city hub page.
const CORE_SERVICES = ['sofa-cleaning', 'carpet-cleaning', 'villa-deep-cleaning', 'marble-polishing']

// Representative cities per emirate (from lib/data/emirates.ts) — kept to a
// focused 2-3 per emirate for the same reason Dubai's list is curated, not
// exhaustive: quality over a huge set of thin near-duplicate pages.
const OTHER_EMIRATE_CITIES: Record<string, string[]> = {
  sharjah: ['sharjah-city', 'al-nahda', 'al-majaz', 'al-qasimia', 'al-khan', 'al-taawun', 'muwaileh', 'abu-shagara', 'al-yarmook', 'al-nabba'],
  'abu-dhabi': ['abu-dhabi-city', 'khalifa-city', 'yas-island'],
  ajman: ['ajman-city', 'al-nuaimiya', 'al-rashidiya', 'al-jerf', 'al-rawda', 'al-hamidiya', 'al-zahya', 'al-mowaihat', 'musherief'],
  'ras-al-khaimah': ['rak-city', 'al-hamra', 'al-nakheel'],
  fujairah: ['fujairah-city', 'kalba'],
  'umm-al-quwain': ['uaq-city', 'falaj-al-mualla'],
}

const otherEmirateCombos: ServiceAreaCombo[] = Object.entries(OTHER_EMIRATE_CITIES).flatMap(
  ([emirate, cities]) => CORE_SERVICES.flatMap((service) => build(service, cities, emirate))
)

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  ...build('sofa-cleaning', UNIVERSAL_AREAS), // 8
  ...build('carpet-cleaning', UNIVERSAL_AREAS), // 8
  ...build('villa-deep-cleaning', VILLA_AREAS), // 4
  ...build('marble-polishing', MARBLE_AREAS), // 4
  ...build('floor-cleaning', FLOOR_AREAS), // 4
  ...otherEmirateCombos, // 16 x 4 services = 64 (Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, UAQ)
] // = 92 curated combo pages

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
