import type { Metadata } from 'next'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'About Al Haya Cleaning Services | UAE',
  description:
    'Al Haya is a professional cleaning company serving all 7 UAE Emirates. 11 services, certified technicians, same-day service. Call 0547199189.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          style={{ fontFamily: 'var(--font-josefin)' }}
        >
          About Al Haya Cleaning Services
        </h1>

        <div className="rounded-xl p-6 mb-8" style={{ background: '#1e1e1e' }}>
          <p className="text-gray-300 leading-relaxed mb-4">
            Al Haya Cleaning Services is a trusted professional cleaning company operating across all
            7 UAE Emirates. Our mission is to deliver consistently high-quality cleaning and
            restoration services to homes, villas, apartments, and commercial spaces throughout the
            UAE.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We employ certified, background-checked cleaning technicians who use professional-grade
            equipment and eco-friendly cleaning solutions. From sofa deep cleaning and carpet
            shampooing to villa deep cleans and marble polishing, we bring expertise and reliability
            to every job.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our network of specialist sites — covering sofa cleaning, carpet cleaning, villa cleaning,
            and marble polishing — allows us to provide deep domain expertise for each service while
            maintaining a single point of contact for all your cleaning needs.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-josefin)' }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="flex items-center gap-3 p-4 rounded-xl transition-colors"
              style={{ background: '#1e1e1e' }}
            >
              <span className="text-white text-sm font-medium">{service.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-josefin)' }}>
          Emirates We Cover
        </h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {emirates.map((e) => (
            <Link
              key={e.id}
              href={`/${e.slug}`}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: '#1e1e1e', color: '#c9a84c' }}
            >
              {e.name}
            </Link>
          ))}
        </div>

        <div className="rounded-xl p-8 text-center" style={{ background: '#252525' }}>
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">Ready to book or have a question? We reply instantly on WhatsApp.</p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg"
            style={{ background: '#25D366', color: '#111111' }}
          >
            WhatsApp: 0547199189
          </a>
        </div>
      </div>
      <SpecialistSitesBanner />
      <WhatsAppButton />
    </>
  )
}
