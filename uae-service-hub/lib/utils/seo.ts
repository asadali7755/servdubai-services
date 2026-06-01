import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/data/constants'

export interface SeoOptions {
  title: string
  description: string
  path: string
  imageUrl?: string
}

const SITE_URL = 'https://servedubai.com'

export const buildMetadata = (options: SeoOptions): Metadata => {
  const { title, description, path, imageUrl } = options
  const url = `${SITE_URL}${path}`
  const ogImage = imageUrl ?? `${SITE_URL}/images/hero/professional-cleaning-services-UAE.webp`
  const fullTitle = title.endsWith(SITE_CONFIG.titleSuffix) ? title : `${title}${SITE_CONFIG.titleSuffix}`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: { 'en-AE': url },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.siteName,
      locale: 'en_AE',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    other: {
      'geo.region': 'AE-DU',
      'geo.placename': 'Dubai, United Arab Emirates',
      'geo.position': '25.2048;55.2708',
      'ICBM': '25.2048, 55.2708',
    },
  }
}

const BASE_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'CleaningService'],
  name: 'Al Haya Cleaning Services',
  image: 'https://servedubai.com/images/hero/professional-cleaning-services-UAE.webp',
  url: 'https://servedubai.com',
  telephone: '+971551275545',
  email: 'info@servedubai.com',
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2960519,
    longitude: 55.3622766,
  },
  hasMap: 'https://share.google/bDF6NqN3sJvO2nxSr',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '08:00',
    closes: '22:00',
  },
  sameAs: [
    'https://servedubai.com',
    'https://share.google/bDF6NqN3sJvO2nxSr',
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    geoRadius: '200000',
  },
}

export const buildLocalBusinessSchema = (options: {
  name?: string
  service?: string
  city?: string
  emirate?: string
  /** Page-specific path — sets url and @id to this page's URL instead of root domain */
  path?: string
  /** City-specific coordinates — overrides generic geo + serviceArea when provided */
  coords?: {
    lat: number
    lng: number
    radiusMeters: number
    addressLocality: string
    addressRegion: string
  }
}): Record<string, unknown> => {
  const areaServed = options.city && options.emirate
    ? [
        { '@type': 'City', name: options.city },
        { '@type': 'State', name: options.emirate },
      ]
    : options.emirate
    ? [{ '@type': 'State', name: options.emirate }]
    : ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (n) => ({ '@type': 'State', name: n })
      )

  // City-specific overrides — precise geo + tight serviceArea radius
  const geoOverride = options.coords
    ? {
        '@type': 'GeoCoordinates',
        latitude: options.coords.lat,
        longitude: options.coords.lng,
      }
    : BASE_LOCAL_BUSINESS.geo

  const serviceAreaOverride = options.coords
    ? {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: options.coords.lat,
          longitude: options.coords.lng,
        },
        geoRadius: String(options.coords.radiusMeters),
      }
    : BASE_LOCAL_BUSINESS.serviceArea

  // City-specific address — localises the business per page
  const addressOverride = options.coords
    ? {
        '@type': 'PostalAddress',
        streetAddress: options.coords.addressLocality,
        addressLocality: options.coords.addressLocality,
        addressRegion: options.coords.addressRegion,
        addressCountry: 'AE',
      }
    : BASE_LOCAL_BUSINESS.address

  const pageUrl = options.path ? `${SITE_URL}${options.path}` : SITE_URL

  return {
    ...BASE_LOCAL_BUSINESS,
    '@id': pageUrl,
    url: pageUrl,
    ...(options.name ? { name: options.name } : {}),
    description: options.service
      ? `Professional ${options.service} service in ${options.city ?? 'UAE'} — certified technicians, eco-friendly products, same-day service.`
      : options.city
      ? `Professional cleaning services in ${options.city}, ${options.emirate ?? 'UAE'} — sofa, carpet, villa, office & marble. Same-day service available.`
      : 'Professional cleaning and restoration services across all 7 UAE Emirates — sofa, carpet, villa, office, marble and more.',
    geo: geoOverride,
    serviceArea: serviceAreaOverride,
    address: addressOverride,
    areaServed,
  }
}

export const buildServiceSchema = (options: {
  serviceName: string
  description: string
  url: string
  emirate?: string
}): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: options.serviceName,
  description: options.description,
  url: `https://servedubai.com${options.url}`,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Cleaning Services',
    telephone: '+971551275545',
    url: 'https://servedubai.com',
  },
  areaServed: options.emirate
    ? { '@type': 'State', name: options.emirate }
    : ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (n) => ({ '@type': 'State', name: n })
      ),
  serviceType: options.serviceName,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'AED',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'AED',
    },
  },
})

export const buildFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const buildImageObjectSchema = (
  images: Array<{ url: string; name: string; description: string; tags?: string[]; width?: number; height?: number }>
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  url: 'https://servedubai.com',
  name: 'Al Haya Cleaning Services — Hero Images',
  associatedMedia: images.map((img) => ({
    '@type': 'ImageObject',
    url: `https://servedubai.com${img.url}`,
    contentUrl: `https://servedubai.com${img.url}`,
    name: img.name,
    description: img.description,
    keywords: img.tags ? img.tags.join(', ') : undefined,
    ...(img.width ? { width: img.width } : {}),
    ...(img.height ? { height: img.height } : {}),
    author: {
      '@type': 'Organization',
      name: 'Al Haya Cleaning Services',
      url: 'https://servedubai.com',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Al Haya Cleaning Services',
    },
  })),
})

export const buildBreadcrumbSchema = (
  crumbs: Array<{ name: string; url: string }>
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.url}`,
  })),
})
