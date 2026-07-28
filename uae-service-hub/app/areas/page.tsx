import type { Metadata } from 'next'
import Link from 'next/link'
import PopularAreas from '@/components/PopularAreas'
import { buildMetadata, buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

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

      <div className="city-main max-w-5xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <span className="text-white city-crumb-cur">Service Areas</span>
        </nav>

        <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Cleaning Services Near You
        </div>
        <h1 className="city-page-h1" style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1rem' }}>
          Cleaning Services by Area in Dubai
        </h1>
        <p className="city-page-sub" style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '720px' }}>
          Madinat Alhaya provides professional, same-day cleaning across Dubai&rsquo;s top neighbourhoods. Choose your service and
          area below for local specialists who know your building and community — from high-rise apartments in Dubai Marina
          to luxury villas in Palm Jumeirah. Free quotes via WhatsApp — call {SITE_CONFIG.phone}.
        </p>

        <PopularAreas />

        {/* CTA */}
        <div className="city-cta-block rounded-xl p-8 text-center" style={{ marginTop: '2.5rem', background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
            Don&rsquo;t see your area?
          </h2>
          <p className="text-gray-400 mb-6">We cover all of Dubai and every UAE Emirate — message us with your location for a free quote.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ background: '#25D366', color: '#111111' }}>
              WhatsApp Now
            </a>
            <Link href="/dubai" className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ border: '2px solid #c9a84c', color: '#c9a84c' }}>
              Browse All Dubai Areas
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
