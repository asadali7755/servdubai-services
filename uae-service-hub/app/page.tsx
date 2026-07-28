import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, buildLocalBusinessSchema, buildImageObjectSchema } from '@/lib/utils/seo'
import HomeContent from '@/components/HomeContent'

const SPAM_QUERY_PATTERNS = [/products\//i, /\.php/i, /categoryindex/i, /ctg\//i, /wp-/i, /xmlrpc/i, /pnnfxpueiq/i]

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Services Dubai & UAE | Best Cleaning Company Dubai',
    description:
      'Best cleaning services Dubai, Abu Dhabi & Sharjah — villa deep cleaning, sofa cleaning, carpet cleaning, marble polishing, office cleaning & more. Professional cleaning company near me across all 7 UAE Emirates. Same-day service!',
    path: '/',
  }),
  keywords: [
    'cleaning services Dubai', 'cleaning company Dubai', 'deep cleaning Dubai', 'cleaning services UAE',
    'best cleaning company Dubai', 'professional cleaning services Dubai', 'cleaning services near me',
    // Service + Dubai
    'sofa cleaning Dubai', 'carpet cleaning Dubai', 'marble polishing Dubai', 'mattress cleaning Dubai',
    'curtain cleaning Dubai', 'villa cleaning Dubai', 'villa deep cleaning Dubai', 'apartment cleaning Dubai',
    'office cleaning Dubai', 'kitchen cleaning Dubai', 'car interior cleaning Dubai',
    // Service + Abu Dhabi
    'sofa cleaning Abu Dhabi', 'carpet cleaning Abu Dhabi', 'marble polishing Abu Dhabi', 'mattress cleaning Abu Dhabi',
    'villa cleaning Abu Dhabi', 'apartment cleaning Abu Dhabi', 'office cleaning Abu Dhabi',
    // Service + Sharjah
    'sofa cleaning Sharjah', 'carpet cleaning Sharjah', 'marble polishing Sharjah', 'mattress cleaning Sharjah',
    'villa cleaning Sharjah', 'apartment cleaning Sharjah', 'office cleaning Sharjah',
    // Service + Ajman
    'sofa cleaning Ajman', 'carpet cleaning Ajman', 'marble polishing Ajman', 'villa cleaning Ajman',
    'mattress cleaning Ajman', 'office cleaning Ajman',
    // Service + RAK
    'sofa cleaning RAK', 'carpet cleaning RAK', 'marble polishing RAK', 'villa cleaning RAK',
    'cleaning services Ras Al Khaimah',
    // Service + Fujairah & UAQ
    'sofa cleaning Fujairah', 'carpet cleaning Fujairah', 'cleaning services Fujairah',
    'sofa cleaning UAQ', 'carpet cleaning UAQ', 'cleaning services Umm Al Quwain',
    // Transactional
    'same-day cleaning Dubai', 'move in move out cleaning Dubai', 'eco-friendly cleaning Dubai',
    'house cleaning Dubai', 'home cleaning Dubai',
  ],
}

const heroSlides = [
  { image: '/images/hero/cleaning-services-UAE.webp', imageAlt: 'Cleaning Services UAE — Al Haya provides professional cleaning solutions across all seven Emirates including Dubai, Abu Dhabi, Sharjah with expert team and eco-friendly products', imageTitle: 'Cleaning Services UAE | Al Haya Professional Cleaners', tags: ['cleaning services UAE', 'professional cleaning UAE', 'Al Haya Cleaning', 'Dubai cleaning services', 'Abu Dhabi cleaning', 'deep cleaning services UAE'] },
  { image: '/images/hero/marble-polishing-dubai.webp', imageAlt: 'Marble Polishing Dubai — expert marble and floor polishing services restoring shine to marble, granite, and terrazzo using diamond polishing techniques by Al Haya', imageTitle: 'Marble Polishing Dubai | Professional Floor Restoration', tags: ['marble polishing Dubai', 'floor polishing Dubai', 'marble restoration Dubai', 'stone polishing UAE', 'Al Haya polishing services'] },
  { image: '/images/hero/professional-cleaning-services-UAE.webp', imageAlt: 'Professional Cleaning Services UAE — comprehensive cleaning solutions for villas, apartments, and offices with deep cleaning, sanitization by Al Haya across UAE', imageTitle: 'Professional Cleaning Services UAE | Homes & Offices', tags: ['professional cleaning services UAE', 'villa cleaning UAE', 'office cleaning UAE', 'residential cleaning', 'commercial cleaning UAE'] },
  { image: '/images/hero/sofa-carpet-cleaning.webp', imageAlt: 'Sofa Carpet Cleaning — professional deep cleaning services for sofas and carpets removing stains, odors, and allergens with eco-friendly steam cleaning by Al Haya', imageTitle: 'Sofa Carpet Cleaning | Professional Deep Cleaning', tags: ['sofa carpet cleaning', 'sofa cleaning UAE', 'carpet cleaning Dubai', 'upholstery cleaning', 'professional sofa carpet cleaning'] },
  { image: '/images/hero/villa-apartment-cleaning-services.webp', imageAlt: 'Villa Apartment Cleaning Services — professional residential cleaning solutions with deep cleaning, sanitization for all properties across UAE by Al Haya', imageTitle: 'Villa Apartment Cleaning Services | Professional Residential', tags: ['villa apartment cleaning services', 'villa cleaning UAE', 'apartment cleaning Dubai', 'residential cleaning', 'professional villa cleaning'] },
]

const schema = buildLocalBusinessSchema({ path: '/' })
const imageSchema = buildImageObjectSchema(
  heroSlides.map((s) => ({ url: s.image, name: s.imageTitle, description: s.imageAlt, tags: s.tags }))
)

const faqs = [
  { q: 'What is included in a villa deep cleaning service in Dubai?', a: "Our villa cleaning goes beyond standard dusting. It includes deep sanitization of all bathrooms and kitchens, cleaning of AC vents, internal window tracks, floor scrubbing, and detailed cleaning of baseboards and light switches to remove Dubai's fine desert dust." },
  { q: 'How often should I get my sofa and mattress professionally cleaned?', a: "Due to Dubai's high humidity and dust levels, we recommend professional sofa and mattress cleaning every 6 months. This helps eliminate dust mites, allergens, and sweat accumulation that can affect indoor air quality and sleep health." },
  { q: 'Is your marble polishing process dust-free?', a: 'Yes, we use a wet polishing method and advanced Italian machinery that ensures a dust-free environment. Whether you choose standard polishing or re-crystallization, your home remains clean throughout the restoration process.' },
  { q: 'How long does it take for carpets to dry after a professional clean?', a: 'Using our industrial-grade steam extraction or dry shampooing methods, most carpets are dry and ready to walk on within 3 to 6 hours, depending on the material and ventilation in the room.' },
  { q: 'Are the cleaning chemicals safe for children and pets?', a: 'Absolutely. We prioritize eco-friendly, non-toxic, and biodegradable cleaning solutions that are powerful against stains but completely safe for your family and pets.' },
  { q: 'How much does professional sofa cleaning cost in Dubai?', a: 'Prices typically range from AED 250 for a small sofa to AED 450+ for larger sectionals, depending on the material (fabric vs. leather) and cleaning method used.' },
  { q: 'What is the difference between marble polishing and crystallization?', a: "Standard polishing removes scratches and stains to restore the stone's surface, while crystallization is a chemical process that adds a high-gloss, protective mirror finish to the marble." },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const keys = Object.keys(params)
  if (keys.length > 0 && keys.some((k) => SPAM_QUERY_PATTERNS.some((p) => p.test(k)))) {
    notFound()
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent />
    </>
  )
}
