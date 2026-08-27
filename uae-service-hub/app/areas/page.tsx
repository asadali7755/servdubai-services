import type { Metadata } from 'next'
import Link from 'next/link'
import PopularAreas from '@/components/PopularAreas'
import { buildMetadata, buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Services Near Me Dubai | All Dubai Areas & Neighbourhoods',
    description:
      'Find the best cleaning services near me in Dubai — villa cleaning, sofa cleaning, carpet cleaning & marble polishing in Dubai Marina, Downtown, JBR, Palm Jumeirah, Arabian Ranches, JLT & more. Same-day service.',
    path: '/areas',
  }),
  keywords: [
    'cleaning services near me Dubai', 'cleaning services Dubai Marina', 'cleaning services Downtown Dubai',
    'cleaning services JBR', 'cleaning services Palm Jumeirah', 'cleaning services Arabian Ranches',
    'cleaning services JLT', 'cleaning services Business Bay', 'cleaning services Al Barsha',
    'cleaning services Jumeirah', 'cleaning services Deira', 'cleaning services Mirdif',
    'cleaning services JVC', 'cleaning services Silicon Oasis', 'cleaning services DIFC',
    'villa deep cleaning Dubai Marina', 'sofa cleaning Downtown Dubai', 'carpet cleaning Palm Jumeirah',
  ],
}

const localSchema = buildLocalBusinessSchema({ path: '/areas' })
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/areas' },
])

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="city-main max-w-5xl mx-auto px-4 py-12 ar-main">
        <nav className="text-sm mb-8 ar-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="mx-2 ar-breadcrumb-sep">/</span>
          <span className="text-white city-crumb-cur">Service Areas</span>
        </nav>

        <div className="ar-gold-label">Cleaning Services Near You</div>
        <h1 className="city-page-h1 ar-h1">Cleaning Services by Area in Dubai</h1>
        <p className="city-page-sub ar-sub">
          Madinat Alhaya provides professional, same-day cleaning across Dubai&rsquo;s top neighbourhoods. Choose your service and
          area below for local specialists who know your building and community — from high-rise apartments in Dubai Marina
          to luxury villas in Palm Jumeirah. Free quotes via WhatsApp — call {SITE_CONFIG.phone}.
        </p>

        <PopularAreas />

        <div className="city-cta-block rounded-xl p-8 text-center ar-cta-block">
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
            Don&rsquo;t see your area?
          </h2>
          <p className="text-gray-400 mb-6">We cover all of Dubai and every UAE Emirate — message us with your location for a free quote.</p>
          <div className="ar-cta-btns">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-semibold text-lg ar-cta-wa">
              WhatsApp Now
            </a>
            <Link href="/dubai" className="inline-block px-8 py-4 rounded-full font-semibold text-lg ar-cta-browse">
              Browse All Dubai Areas
            </Link>
          </div>
          <QuoteCard id="quote-areas" source="Areas page" className="page-quote-card" />
        </div>
      </div>
    </>
  )
}
