/**
 * Per-city GPS coordinates for hyper-local LocalBusiness schema.
 * Key format: `${emirateSlug}-${citySlug}`
 *
 * Used in buildLocalBusinessSchema() to generate:
 *   - city-specific `geo` GeoCoordinates
 *   - city-specific `serviceArea` GeoCircle (tight radius around the area)
 *   - city-specific `address.addressLocality`
 *
 * This gives Google a precise local signal per page instead of a generic
 * 200km UAE-wide radius that confuses local snack-pack rankings.
 */

export interface CityCoords {
  lat: number
  lng: number
  /** Tight serviceArea radius in metres — keeps schema specific to the area */
  radiusMeters: number
  /** Display name for schema addressLocality */
  addressLocality: string
  /** addressRegion (emirate name) for schema */
  addressRegion: string
}

const cityCoordinates: Record<string, CityCoords> = {

  /* ===========================================
     DUBAI
  =========================================== */
  'dubai-marina': {
    lat: 25.0805,
    lng: 55.1403,
    radiusMeters: 3000,
    addressLocality: 'Dubai Marina',
    addressRegion: 'Dubai',
  },
  'dubai-jlt': {
    lat: 25.0750,
    lng: 55.1543,
    radiusMeters: 3000,
    addressLocality: 'Jumeirah Lakes Towers',
    addressRegion: 'Dubai',
  },
  'dubai-downtown': {
    lat: 25.1972,
    lng: 55.2744,
    radiusMeters: 3000,
    addressLocality: 'Downtown Dubai',
    addressRegion: 'Dubai',
  },
  'dubai-jumeirah': {
    lat: 25.2048,
    lng: 55.2445,
    radiusMeters: 4000,
    addressLocality: 'Jumeirah',
    addressRegion: 'Dubai',
  },
  'dubai-deira': {
    lat: 25.2697,
    lng: 55.3095,
    radiusMeters: 4000,
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
  },
  'dubai-business-bay': {
    lat: 25.1865,
    lng: 55.2632,
    radiusMeters: 3000,
    addressLocality: 'Business Bay',
    addressRegion: 'Dubai',
  },
  'dubai-palm-jumeirah': {
    lat: 25.1124,
    lng: 55.1390,
    radiusMeters: 4000,
    addressLocality: 'Palm Jumeirah',
    addressRegion: 'Dubai',
  },
  'dubai-al-barsha': {
    lat: 25.1100,
    lng: 55.2000,
    radiusMeters: 4000,
    addressLocality: 'Al Barsha',
    addressRegion: 'Dubai',
  },
  'dubai-bur-dubai': {
    lat: 25.2485,
    lng: 55.2965,
    radiusMeters: 3500,
    addressLocality: 'Bur Dubai',
    addressRegion: 'Dubai',
  },
  'dubai-silicon-oasis': {
    lat: 25.1178,
    lng: 55.3817,
    radiusMeters: 4000,
    addressLocality: 'Dubai Silicon Oasis',
    addressRegion: 'Dubai',
  },
  'dubai-international-city': {
    lat: 25.1642,
    lng: 55.4151,
    radiusMeters: 4000,
    addressLocality: 'International City',
    addressRegion: 'Dubai',
  },

  /* ===========================================
     SHARJAH
  =========================================== */
  'sharjah-sharjah-city': {
    lat: 25.3462,
    lng: 55.4209,
    radiusMeters: 6000,
    addressLocality: 'Sharjah City',
    addressRegion: 'Sharjah',
  },
  'sharjah-al-nahda': {
    lat: 25.3050,
    lng: 55.3890,
    radiusMeters: 3000,
    addressLocality: 'Al Nahda',
    addressRegion: 'Sharjah',
  },
  'sharjah-al-qasimia': {
    lat: 25.3562,
    lng: 55.3913,
    radiusMeters: 3000,
    addressLocality: 'Al Qasimia',
    addressRegion: 'Sharjah',
  },
  'sharjah-al-majaz': {
    lat: 25.3270,
    lng: 55.3835,
    radiusMeters: 3000,
    addressLocality: 'Al Majaz',
    addressRegion: 'Sharjah',
  },
  'sharjah-al-khan': {
    lat: 25.3464,
    lng: 55.4037,
    radiusMeters: 2500,
    addressLocality: 'Al Khan',
    addressRegion: 'Sharjah',
  },

  /* ===========================================
     ABU DHABI
  =========================================== */
  'abu-dhabi-abu-dhabi-city': {
    lat: 24.4539,
    lng: 54.3773,
    radiusMeters: 8000,
    addressLocality: 'Abu Dhabi City',
    addressRegion: 'Abu Dhabi',
  },
  'abu-dhabi-al-ain': {
    lat: 24.2075,
    lng: 55.7447,
    radiusMeters: 8000,
    addressLocality: 'Al Ain',
    addressRegion: 'Abu Dhabi',
  },
  'abu-dhabi-khalifa-city': {
    lat: 24.4195,
    lng: 54.5812,
    radiusMeters: 5000,
    addressLocality: 'Khalifa City',
    addressRegion: 'Abu Dhabi',
  },
  'abu-dhabi-yas-island': {
    lat: 24.4883,
    lng: 54.6001,
    radiusMeters: 4000,
    addressLocality: 'Yas Island',
    addressRegion: 'Abu Dhabi',
  },

  /* ===========================================
     AJMAN
  =========================================== */
  'ajman-ajman-city': {
    lat: 25.4052,
    lng: 55.5136,
    radiusMeters: 6000,
    addressLocality: 'Ajman City',
    addressRegion: 'Ajman',
  },
  'ajman-al-nuaimiya': {
    lat: 25.4077,
    lng: 55.4839,
    radiusMeters: 3000,
    addressLocality: 'Al Nuaimiya',
    addressRegion: 'Ajman',
  },
  'ajman-al-rashidiya': {
    lat: 25.4010,
    lng: 55.5040,
    radiusMeters: 3000,
    addressLocality: 'Al Rashidiya',
    addressRegion: 'Ajman',
  },

  /* ===========================================
     RAS AL KHAIMAH
  =========================================== */
  'ras-al-khaimah-rak-city': {
    lat: 25.8007,
    lng: 55.9762,
    radiusMeters: 7000,
    addressLocality: 'Ras Al Khaimah City',
    addressRegion: 'Ras Al Khaimah',
  },
  'ras-al-khaimah-al-hamra': {
    lat: 25.6839,
    lng: 55.8028,
    radiusMeters: 4000,
    addressLocality: 'Al Hamra Village',
    addressRegion: 'Ras Al Khaimah',
  },
  'ras-al-khaimah-al-nakheel': {
    lat: 25.7916,
    lng: 55.9534,
    radiusMeters: 3500,
    addressLocality: 'Al Nakheel',
    addressRegion: 'Ras Al Khaimah',
  },

  /* ===========================================
     FUJAIRAH
  =========================================== */
  'fujairah-fujairah-city': {
    lat: 25.1288,
    lng: 56.3265,
    radiusMeters: 6000,
    addressLocality: 'Fujairah City',
    addressRegion: 'Fujairah',
  },
  'fujairah-dibba-al-fujairah': {
    lat: 25.5916,
    lng: 56.2683,
    radiusMeters: 4000,
    addressLocality: 'Dibba Al-Fujairah',
    addressRegion: 'Fujairah',
  },
  'fujairah-kalba': {
    lat: 25.0176,
    lng: 56.3547,
    radiusMeters: 3500,
    addressLocality: 'Kalba',
    addressRegion: 'Fujairah',
  },

  /* ===========================================
     UMM AL QUWAIN
  =========================================== */
  'umm-al-quwain-uaq-city': {
    lat: 25.5650,
    lng: 55.5550,
    radiusMeters: 6000,
    addressLocality: 'Umm Al Quwain City',
    addressRegion: 'Umm Al Quwain',
  },
  'umm-al-quwain-falaj-al-mualla': {
    lat: 25.6023,
    lng: 55.7178,
    radiusMeters: 4000,
    addressLocality: 'Falaj Al Mualla',
    addressRegion: 'Umm Al Quwain',
  },
}

export const getCityCoords = (emirateSlug: string, citySlug: string): CityCoords | undefined =>
  cityCoordinates[`${emirateSlug}-${citySlug}`]

/* ═══════════════════════════════════════════
   EMIRATE-LEVEL COORDINATES
   Used on /[emirate] pages for emirate-wide schema
   Radius covers the full emirate service area
═══════════════════════════════════════════ */
export interface EmirateCoords {
  lat: number
  lng: number
  radiusMeters: number
  addressRegion: string
}

const emirateCoordinates: Record<string, EmirateCoords> = {
  dubai: {
    lat: 25.2048,
    lng: 55.2708,
    radiusMeters: 50000,
    addressRegion: 'Dubai',
  },
  sharjah: {
    lat: 25.3462,
    lng: 55.4209,
    radiusMeters: 35000,
    addressRegion: 'Sharjah',
  },
  'abu-dhabi': {
    lat: 24.4539,
    lng: 54.3773,
    radiusMeters: 80000,
    addressRegion: 'Abu Dhabi',
  },
  ajman: {
    lat: 25.4052,
    lng: 55.5136,
    radiusMeters: 15000,
    addressRegion: 'Ajman',
  },
  'ras-al-khaimah': {
    lat: 25.8007,
    lng: 55.9762,
    radiusMeters: 40000,
    addressRegion: 'Ras Al Khaimah',
  },
  fujairah: {
    lat: 25.1288,
    lng: 56.3265,
    radiusMeters: 30000,
    addressRegion: 'Fujairah',
  },
  'umm-al-quwain': {
    lat: 25.5650,
    lng: 55.5550,
    radiusMeters: 15000,
    addressRegion: 'Umm Al Quwain',
  },
}

export const getEmirateCoords = (emirateSlug: string): EmirateCoords | undefined =>
  emirateCoordinates[emirateSlug]
