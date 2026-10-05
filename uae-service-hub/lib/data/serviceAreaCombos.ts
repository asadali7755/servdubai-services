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
const FLOOR_AREAS = ['mirdif', 'umm-suqeim', 'al-barsha', 'bur-dubai', 'palm-jumeirah']

const build = (service: string, cities: string[], emirate = 'dubai'): ServiceAreaCombo[] =>
  cities.map((city) => ({ emirate, city, service }))

// Non-Dubai emirates — pruned (Oct 2026) from 192 auto-generated pages
// (every city x 4 services) down to the main residential hubs only. The old
// set was ~75% identical text page-to-page, which reads as doorway content.
// Every removed URL 301s to its city page (see PRUNED_COMBOS + next.config.ts).
const OTHER_EMIRATE_COMBOS: ServiceAreaCombo[] = [
  { emirate: 'sharjah', city: 'sharjah-city', service: 'sofa-cleaning' },
  { emirate: 'sharjah', city: 'sharjah-city', service: 'carpet-cleaning' },
  { emirate: 'sharjah', city: 'al-nahda', service: 'sofa-cleaning' },
  { emirate: 'sharjah', city: 'al-nahda', service: 'carpet-cleaning' },
  { emirate: 'sharjah', city: 'al-majaz', service: 'sofa-cleaning' },
  { emirate: 'abu-dhabi', city: 'abu-dhabi-city', service: 'sofa-cleaning' },
  { emirate: 'abu-dhabi', city: 'abu-dhabi-city', service: 'carpet-cleaning' },
  { emirate: 'abu-dhabi', city: 'abu-dhabi-city', service: 'marble-polishing' },
  { emirate: 'abu-dhabi', city: 'khalifa-city', service: 'villa-deep-cleaning' },
  { emirate: 'abu-dhabi', city: 'khalifa-city', service: 'sofa-cleaning' },
  { emirate: 'abu-dhabi', city: 'mohamed-bin-zayed-city', service: 'villa-deep-cleaning' },
  { emirate: 'ajman', city: 'ajman-city', service: 'sofa-cleaning' },
  { emirate: 'ajman', city: 'ajman-city', service: 'carpet-cleaning' },
  { emirate: 'ajman', city: 'al-nuaimiya', service: 'sofa-cleaning' },
  { emirate: 'ras-al-khaimah', city: 'rak-city', service: 'sofa-cleaning' },
  { emirate: 'ras-al-khaimah', city: 'rak-city', service: 'carpet-cleaning' },
  { emirate: 'ras-al-khaimah', city: 'al-hamra', service: 'villa-deep-cleaning' },
  { emirate: 'fujairah', city: 'fujairah-city', service: 'sofa-cleaning' },
  { emirate: 'fujairah', city: 'fujairah-city', service: 'carpet-cleaning' },
  { emirate: 'umm-al-quwain', city: 'uaq-city', service: 'sofa-cleaning' },
  // Restored Oct 2026 — Search Console still showed impressions for these after pruning
  { emirate: 'sharjah', city: 'al-qasimia', service: 'sofa-cleaning' },
  { emirate: 'sharjah', city: 'al-qasimia', service: 'carpet-cleaning' },
  { emirate: 'sharjah', city: 'al-majaz', service: 'carpet-cleaning' },
  { emirate: 'abu-dhabi', city: 'abu-dhabi-city', service: 'villa-deep-cleaning' },
  { emirate: 'abu-dhabi', city: 'baniyas', service: 'carpet-cleaning' },
  { emirate: 'abu-dhabi', city: 'khalifa-city', service: 'carpet-cleaning' },
  { emirate: 'abu-dhabi', city: 'mohamed-bin-zayed-city', service: 'sofa-cleaning' },
  { emirate: 'ajman', city: 'ajman-city', service: 'villa-deep-cleaning' },
  { emirate: 'ajman', city: 'al-rashidiya', service: 'carpet-cleaning' },
  { emirate: 'umm-al-quwain', city: 'al-salamah', service: 'carpet-cleaning' },
]

// Car services (Oct 2026) — lower-competition sub-areas across all 7 emirates.
const CAR_COMBOS: ServiceAreaCombo[] = [
  ...build('car-wash-at-home', ['silicon-oasis', 'international-city', 'mirdif', 'al-barsha']),
  ...build('car-wash-at-home', ['muwaileh', 'al-nahda'], 'sharjah'),
  ...build('car-wash-at-home', ['al-rashidiya', 'al-jerf'], 'ajman'),
  ...build('car-wash-at-home', ['khalifa-city', 'al-ain'], 'abu-dhabi'),
  ...build('car-wash-at-home', ['rak-city'], 'ras-al-khaimah'),
  ...build('car-wash-at-home', ['fujairah-city'], 'fujairah'),
  ...build('car-wash-at-home', ['uaq-city'], 'umm-al-quwain'),
  { emirate: 'dubai', city: 'jlt', service: 'car-interior-detailing' },
  { emirate: 'sharjah', city: 'sharjah-city', service: 'car-interior-detailing' },
  { emirate: 'ajman', city: 'ajman-city', service: 'car-interior-detailing' },
  { emirate: 'abu-dhabi', city: 'abu-dhabi-city', service: 'car-interior-detailing' },
]

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  ...build('sofa-cleaning', UNIVERSAL_AREAS), // 8
  ...build('carpet-cleaning', UNIVERSAL_AREAS), // 8
  ...build('villa-deep-cleaning', VILLA_AREAS), // 4
  ...build('marble-polishing', MARBLE_AREAS), // 4
  ...build('floor-cleaning', FLOOR_AREAS), // 5
  ...OTHER_EMIRATE_COMBOS, // 30
  ...CAR_COMBOS, // 17
] // = 76 combo pages

// ---- Removed combos (kept only so their old URLs can 301 to the city page) ----
const OLD_CORE_SERVICES = ['sofa-cleaning', 'carpet-cleaning', 'villa-deep-cleaning', 'marble-polishing']
const OLD_OTHER_EMIRATE_CITIES: Record<string, string[]> = {
  sharjah: ['sharjah-city', 'al-nahda', 'al-majaz', 'al-qasimia', 'al-khan', 'al-taawun', 'muwaileh', 'abu-shagara', 'al-yarmook', 'al-nabba'],
  'abu-dhabi': ['abu-dhabi-city', 'khalifa-city', 'yas-island', 'mohamed-bin-zayed-city', 'al-shamkha', 'shakhbout-city', 'baniyas', 'al-reef'],
  ajman: ['ajman-city', 'al-nuaimiya', 'al-rashidiya', 'al-jerf', 'al-rawda', 'al-hamidiya', 'al-zahya', 'al-mowaihat', 'musherief'],
  'ras-al-khaimah': ['rak-city', 'al-hamra', 'al-nakheel', 'al-dhait', 'mina-al-arab', 'al-rams', 'digdaga', 'khatt'],
  fujairah: ['fujairah-city', 'kalba', 'al-faseel', 'al-sharyah', 'madab', 'merashid', 'qidfa'],
  'umm-al-quwain': ['uaq-city', 'falaj-al-mualla', 'al-salamah', 'al-ramlah', 'al-humrah', 'khor-al-beidah'],
}

/** Old combo URLs that no longer have a page — each 301s to /[emirate]/[city]. */
export const PRUNED_COMBOS: ServiceAreaCombo[] = Object.entries(OLD_OTHER_EMIRATE_CITIES)
  .flatMap(([emirate, cities]) =>
    OLD_CORE_SERVICES.flatMap((service) => cities.map((city) => ({ emirate, city, service })))
  )
  .filter(
    (old) =>
      !OTHER_EMIRATE_COMBOS.some(
        (k) => k.emirate === old.emirate && k.city === old.city && k.service === old.service
      )
  )

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
