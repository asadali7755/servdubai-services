import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/data/constants'

export interface SeoOptions {
  title: string
  description: string
  path: string
  imageUrl?: string
}

const SITE_URL = 'https://servedubai.ae'

export const buildMetadata = (options: SeoOptions): Metadata => {
  const { title, description, path, imageUrl } = options
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const ogImage = imageUrl ?? `${SITE_URL}/images/hero/professional-cleaning-services-UAE.webp`
  const fullTitle = title.endsWith(SITE_CONFIG.titleSuffix) ? title : `${title}${SITE_CONFIG.titleSuffix}`

  // Keep meta descriptions <=160 chars (trim at a word boundary) so they don't get
  // truncated in search results / flagged as "too long".
  const metaDescription =
    description.length > 160
      ? description.slice(0, 157).replace(/\s+\S*$/, '').trimEnd() + '…'
      : description

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
      languages: { 'en-AE': url, 'x-default': url },
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: SITE_CONFIG.siteName,
      locale: 'en_AE',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
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
  name: 'Madinat Alhaya Building Cleaning Services',
  image: 'https://servedubai.ae/images/hero/professional-cleaning-services-UAE.webp',
  url: 'https://servedubai.ae',
  telephone: '+971551275545',
  email: 'info@servedubai.com',
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card',
  // Service-area business — the GBP has "No location; deliveries and home
  // services only" (no public street address). So we use a city-level address
  // (Dubai) + areaServed for NAP consistency, not a specific street.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  hasMap: 'https://maps.app.goo.gl/qAog9d6usteD2jsH6',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'https://schema.org/Monday',
      'https://schema.org/Tuesday',
      'https://schema.org/Wednesday',
      'https://schema.org/Thursday',
      'https://schema.org/Friday',
      'https://schema.org/Saturday',
      'https://schema.org/Sunday',
    ],
    opens: '08:00',
    closes: '22:00',
  },
  sameAs: [
    'https://maps.app.goo.gl/qAog9d6usteD2jsH6',
    'https://www.facebook.com/alhayacleandubai/',
    'https://www.linkedin.com/in/madinat-al-haya-building-cleaning-services-70a3363b4/',
  ],
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
    address: BASE_LOCAL_BUSINESS.address,
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
  url: `https://servedubai.ae${options.url}`,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Madinat Alhaya Building Cleaning Services',
    telephone: '+971551275545',
    url: 'https://servedubai.ae',
  },
  areaServed: options.emirate
    ? { '@type': 'State', name: options.emirate }
    : ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (n) => ({ '@type': 'State', name: n })
      ),
  serviceType: options.serviceName,
  // NOTE: no `offers` block — an Offer without a `price` is invalid (Google/schema.org
  // flag "missing field price"). We use free quotes / variable pricing, so we omit offers
  // entirely; the Service schema is fully valid without it.
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
  url: 'https://servedubai.ae',
  name: 'Madinat Alhaya Building Cleaning Services — Hero Images',
  associatedMedia: images.map((img) => ({
    '@type': 'ImageObject',
    url: `https://servedubai.ae${img.url}`,
    contentUrl: `https://servedubai.ae${img.url}`,
    name: img.name,
    description: img.description,
    keywords: img.tags ? img.tags.join(', ') : undefined,
    ...(img.width ? { width: img.width } : {}),
    ...(img.height ? { height: img.height } : {}),
    author: {
      '@type': 'Organization',
      name: 'Madinat Alhaya Building Cleaning Services',
      url: 'https://servedubai.ae',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Madinat Alhaya Building Cleaning Services',
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

export const buildArticleSchema = (options: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
}): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: options.headline,
  description: options.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${options.path}` },
  image: options.image ? `${SITE_URL}${options.image}` : `${SITE_URL}/images/hero/professional-cleaning-services-UAE.webp`,
  datePublished: options.datePublished,
  dateModified: options.dateModified ?? options.datePublished,
  author: { '@type': 'Organization', name: 'Madinat Alhaya Building Cleaning Services', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Madinat Alhaya Building Cleaning Services',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/hero/professional-cleaning-services-UAE.webp` },
  },
})
