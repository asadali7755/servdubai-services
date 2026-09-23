import type { Metadata } from 'next'
import Link from 'next/link'
import PopularAreas from '@/components/PopularAreas'
import { buildMetadata, buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Services Near Me UAE | All Emirates, Cities & Neighbourhoods',
    description:
      'Find the best cleaning services near me across the UAE — villa cleaning, sofa cleaning, carpet cleaning & marble polishing in Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah & Umm Al Quwain. Same-day service.',
    path: '/areas',
  }),
  keywords: [
    'cleaning services near me UAE', 'cleaning services Dubai', 'cleaning services Sharjah',
    'cleaning services Abu Dhabi', 'cleaning services Ajman', 'cleaning services Ras Al Khaimah',
    'cleaning services Fujairah', 'cleaning services Umm Al Quwain',
    'sofa cleaning UAE', 'carpet cleaning UAE', 'villa deep cleaning UAE', 'marble polishing UAE',
    'cleaning services Dubai Marina', 'cleaning services Downtown Dubai', 'cleaning services JBR',
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
        <h1 className="city-page-h1 ar-h1">Cleaning Services by Area in UAE</h1>
        <p className="city-page-sub ar-sub">
          Madinat Alhaya provides professional, same-day cleaning across the UAE&rsquo;s top neighbourhoods — from Dubai to
          Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Choose your service and area below for local
          specialists who know your building and community. Free quotes via WhatsApp — call {SITE_CONFIG.phone}.
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
              Browse All Areas
            </Link>
          </div>
          <QuoteCard id="quote-areas" source="Areas page" className="page-quote-card" />
        </div>
      </div>
    </>
  )
}
