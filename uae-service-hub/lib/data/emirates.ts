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
]

export interface City {
  id: string
  name: string
  slug: string
  emirateId: string
  availableServices: string[]
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
      makeCity('dubai', 'marina', 'Marina'),
      makeCity('dubai', 'downtown', 'Downtown'),
      makeCity('dubai', 'jumeirah', 'Jumeirah'),
      makeCity('dubai', 'deira', 'Deira'),
      makeCity('dubai', 'business-bay', 'Business Bay'),
      makeCity('dubai', 'silicon-oasis', 'Silicon Oasis'),
      makeCity('dubai', 'international-city', 'International City'),
    ],
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    slug: 'sharjah',
    image: '/images/emirates/sharjah.jpg',
    cities: [
      makeCity('sharjah', 'sharjah-city', 'Sharjah City'),
      makeCity('sharjah', 'al-nahda', 'Al Nahda'),
      makeCity('sharjah', 'al-qasimia', 'Al Qasimia'),
      makeCity('sharjah', 'al-majaz', 'Al Majaz'),
      makeCity('sharjah', 'al-khan', 'Al Khan'),
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
    ],
  },
  {
    id: 'ajman',
    name: 'Ajman',
    slug: 'ajman',
    image: '/images/emirates/ajman.jpg',
    cities: [
      makeCity('ajman', 'ajman-city', 'Ajman City'),
      makeCity('ajman', 'al-nuaimiya', 'Al Nuaimiya'),
      makeCity('ajman', 'al-rashidiya', 'Al Rashidiya'),
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
    ],
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    slug: 'fujairah',
    image: '/images/emirates/fujairah.webp',
    cities: [
      makeCity('fujairah', 'fujairah-city', 'Fujairah City'),
      makeCity('fujairah', 'dibba-al-fujairah', 'Dibba Al-Fujairah'),
      makeCity('fujairah', 'kalba', 'Kalba'),
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
    ],
  },
]

export const getEmirateBySlug = (slug: string): Emirate | undefined =>
  emirates.find((e) => e.slug === slug)

export const getCityBySlug = (emirateSlug: string, citySlug: string): City | undefined =>
  emirates.find((e) => e.slug === emirateSlug)?.cities.find((c) => c.slug === citySlug)
