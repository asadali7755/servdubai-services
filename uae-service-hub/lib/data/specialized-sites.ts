export interface SpecializedSite {
  id: string
  name: string
  url: string
  serviceId: string
  description: string
  image: string
}

export const specializedSites: SpecializedSite[] = [
  {
    id: 'villa-deep-cleaning-site',
    name: 'Villa Deep Cleaning',
    url: 'https://www.villadeepcleaning.com/',
    serviceId: 'villa-deep-cleaning',
    description: 'Specialist villa deep cleaning — move-in, move-out & periodic cleans.',
    image: '/images/hero/villa-apartment-cleaning.jpg',
  },
  {
    id: 'sofa-shampooing-site',
    name: 'Sofa Shampooing Dubai',
    url: 'https://sofashampooingdubai.com',
    serviceId: 'sofa-cleaning',
    description: "Dubai's leading sofa shampooing specialists. All fabric types.",
    image: '/images/hero/sofa-carpet.webp',
  },
  {
    id: 'carpet-cleaning-site',
    name: 'Carpet Cleaning Dubai',
    url: 'https://carpetcleaningdubai.com',
    serviceId: 'carpet-cleaning',
    description: 'Expert carpet cleaning and stain removal across Dubai.',
    image: '/images/hero/professional-cleaning-services.webp',
  },
  {
    id: 'marble-pro-site',
    name: 'Marble Pro UAE',
    url: 'https://marblepro.ae',
    serviceId: 'marble-polishing',
    description: 'Premium marble polishing, restoration, and sealing across UAE.',
    image: '/images/hero/marble-polishing.jpg',
  },
]
