const ALL_SERVICES = [
  'sofa-cleaning',
  'carpet-cleaning',
  'mattress-cleaning',
  'curtain-cleaning',
  'car-interior-detailing',
  'dining-chair-cleaning',
  'villa-deep-cleaning',
  'apartment-cleaning',
  'office-cleaning',
  'restaurant-kitchen-cleaning',
  'marble-polishing',
  'floor-cleaning',
]

export interface City {
  id: string
  name: string
  slug: string
  emirateId: string
  availableServices: string[]
  /** Optional real photo of this specific area, overriding the emirate-level banner */
  image?: string
}

export interface Emirate {
  id: string
  name: string
  slug: string
  cities: City[]
  image: string
  heroImage?: string
}

const makeCity = (emirateId: string, id: string, name: string): City => ({
  id,
  name,
  slug: id,
  emirateId,
  availableServices: ALL_SERVICES,
})

export const emirates: Emirate[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    image: '/images/emirates/dubai.webp',
    cities: [
      makeCity('dubai', 'marina', 'Dubai Marina'),
      makeCity('dubai', 'jlt', 'JLT (Jumeirah Lakes Towers)'),
      makeCity('dubai', 'downtown', 'Downtown Dubai'),
      makeCity('dubai', 'jumeirah', 'Jumeirah'),
      makeCity('dubai', 'deira', 'Deira'),
      makeCity('dubai', 'business-bay', 'Business Bay'),
      makeCity('dubai', 'palm-jumeirah', 'Palm Jumeirah'),
      makeCity('dubai', 'al-barsha', 'Al Barsha'),
      makeCity('dubai', 'bur-dubai', 'Bur Dubai'),
      makeCity('dubai', 'silicon-oasis', 'Silicon Oasis'),
      makeCity('dubai', 'international-city', 'International City'),
      makeCity('dubai', 'mirdif', 'Mirdif'),
      makeCity('dubai', 'umm-suqeim', 'Umm Suqeim'),
    ],
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    slug: 'sharjah',
    image: '/images/emirates/sharjah.webp',
    cities: [
      makeCity('sharjah', 'sharjah-city', 'Sharjah City'),
      makeCity('sharjah', 'al-nahda', 'Al Nahda'),
      makeCity('sharjah', 'al-qasimia', 'Al Qasimia'),
      makeCity('sharjah', 'al-majaz', 'Al Majaz'),
      makeCity('sharjah', 'al-khan', 'Al Khan'),
      { ...makeCity('sharjah', 'dibba-al-hisn', 'Dibba Al-Hisn'), image: '/images/locations/dibba-al-hisn-corniche-pavilion.webp' },
      makeCity('sharjah', 'al-taawun', 'Al Taawun'),
      makeCity('sharjah', 'muwaileh', 'Muwaileh'),
      makeCity('sharjah', 'abu-shagara', 'Abu Shagara'),
      makeCity('sharjah', 'al-yarmook', 'Al Yarmook'),
      makeCity('sharjah', 'al-nabba', 'Al Nabba'),
    ],
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    slug: 'abu-dhabi',
    image: '/images/emirates/abu-dhabi.webp',
    cities: [
      makeCity('abu-dhabi', 'abu-dhabi-city', 'Abu Dhabi City'),
      makeCity('abu-dhabi', 'al-ain', 'Al Ain'),
      makeCity('abu-dhabi', 'khalifa-city', 'Khalifa City'),
      makeCity('abu-dhabi', 'yas-island', 'Yas Island'),
      makeCity('abu-dhabi', 'mohamed-bin-zayed-city', 'Mohamed Bin Zayed City'),
      makeCity('abu-dhabi', 'al-shamkha', 'Al Shamkha'),
      makeCity('abu-dhabi', 'shakhbout-city', 'Shakhbout City'),
      makeCity('abu-dhabi', 'baniyas', 'Baniyas'),
      makeCity('abu-dhabi', 'al-reef', 'Al Reef'),
    ],
  },
  {
    id: 'ajman',
    name: 'Ajman',
    slug: 'ajman',
    image: '/images/emirates/ajman.webp',
    cities: [
      makeCity('ajman', 'ajman-city', 'Ajman City'),
      makeCity('ajman', 'al-nuaimiya', 'Al Nuaimiya'),
      makeCity('ajman', 'al-rashidiya', 'Al Rashidiya'),
      makeCity('ajman', 'al-jerf', 'Al Jerf'),
      makeCity('ajman', 'al-rawda', 'Al Rawda'),
      makeCity('ajman', 'al-hamidiya', 'Al Hamidiya'),
      makeCity('ajman', 'al-zahya', 'Al Zahya'),
      makeCity('ajman', 'al-mowaihat', 'Al Mowaihat'),
      makeCity('ajman', 'musherief', 'Musherief'),
    ],
  },
  {
    id: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    slug: 'ras-al-khaimah',
    image: '/images/emirates/ras-al-khaimah2.webp',
    cities: [
      makeCity('ras-al-khaimah', 'rak-city', 'RAK City'),
      makeCity('ras-al-khaimah', 'al-hamra', 'Al Hamra'),
      makeCity('ras-al-khaimah', 'al-nakheel', 'Al Nakheel'),
      makeCity('ras-al-khaimah', 'al-dhait', 'Al Dhait'),
      makeCity('ras-al-khaimah', 'mina-al-arab', 'Mina Al Arab'),
      makeCity('ras-al-khaimah', 'al-rams', 'Al Rams'),
      makeCity('ras-al-khaimah', 'digdaga', 'Digdaga'),
      makeCity('ras-al-khaimah', 'khatt', 'Khatt'),
    ],
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    slug: 'fujairah',
    image: '/images/emirates/fujairah.webp',
    cities: [
      makeCity('fujairah', 'fujairah-city', 'Fujairah City'),
      { ...makeCity('fujairah', 'dibba-al-fujairah', 'Dibba Al-Fujairah'), image: '/images/locations/dibba-al-fujairah-aerial-coastal.webp' },
      makeCity('fujairah', 'kalba', 'Kalba'),
      makeCity('fujairah', 'al-faseel', 'Al Faseel'),
      makeCity('fujairah', 'al-sharyah', 'Al Sharyah'),
      makeCity('fujairah', 'madab', 'Madab'),
      makeCity('fujairah', 'merashid', 'Merashid'),
      makeCity('fujairah', 'qidfa', 'Qidfa'),
    ],
  },
  {
    id: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    slug: 'umm-al-quwain',
    image: '/images/emirates/umm-al-quwain.webp',
    cities: [
      makeCity('umm-al-quwain', 'uaq-city', 'UAQ City'),
      makeCity('umm-al-quwain', 'falaj-al-mualla', 'Falaj Al Mualla'),
      makeCity('umm-al-quwain', 'al-salamah', 'Al Salamah'),
      makeCity('umm-al-quwain', 'al-ramlah', 'Al Ramlah'),
      makeCity('umm-al-quwain', 'al-humrah', 'Al Humrah'),
      makeCity('umm-al-quwain', 'khor-al-beidah', 'Khor Al Beidah'),
    ],
  },
]

export const getEmirateBySlug = (slug: string): Emirate | undefined =>
  emirates.find((e) => e.slug === slug)

export const getCityBySlug = (emirateSlug: string, citySlug: string): City | undefined =>
  emirates.find((e) => e.slug === emirateSlug)?.cities.find((c) => c.slug === citySlug)
