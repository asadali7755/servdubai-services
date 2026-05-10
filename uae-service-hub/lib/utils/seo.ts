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

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

const BASE_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Al Haya Cleaning Services',
  image: 'https://servedubai.com/images/hero/professional-cleaning-services.webp',
  url: 'https://servedubai.com',
  telephone: '+97154719189',
  email: 'info@servedubai.com',
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
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
  ],
}

export const buildLocalBusinessSchema = (options: {
  name?: string
  service?: string
  city?: string
  emirate?: string
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

  return {
    ...BASE_LOCAL_BUSINESS,
    ...(options.name ? { name: options.name } : {}),
    description: options.service
      ? `Professional ${options.service} service in UAE — certified technicians, eco-friendly products, same-day service.`
      : 'Professional cleaning and restoration services across all 7 UAE Emirates — sofa, carpet, villa, office, marble and more.',
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
    telephone: '+97154719189',
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
    item: `${SITE_CONFIG.siteUrl}${crumb.url}`,
  })),
})
