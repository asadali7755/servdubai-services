import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { emirates, getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { services, getServiceBySlug } from '@/lib/data/services'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

type Props = { params: Promise<{ emirate: string; city: string }> }

export async function generateStaticParams(): Promise<{ emirate: string; city: string }[]> {
  return emirates.flatMap((e) => e.cities.map((c) => ({ emirate: e.slug, city: c.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug, city: citySlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  const city = getCityBySlug(emirateSlug, citySlug)
  if (!emirate || !city) return {}
  return buildMetadata({
    title: `Cleaning Services in ${city.name}, ${emirate.name} | Al Haya`,
    description: `Professional cleaning in ${city.name}, ${emirate.name}. Sofa, carpet, villa & more. Same-day. Call 0547199189.`,
    path: `/${emirateSlug}/${citySlug}`,
  })
}

export default async function CityPage({ params }: Props) {
  const { emirate: emirateSlug, city: citySlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  const city = getCityBySlug(emirateSlug, citySlug)
  if (!emirate || !city) notFound()

  const cityServices = city.availableServices
    .map((id) => getServiceBySlug(id))
    .filter(Boolean) as typeof services

  const localSchema = buildLocalBusinessSchema({ city: city.name, emirate: emirate.name })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirate.slug}` },
    { name: city.name, url: `/${emirate.slug}/${city.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2">/</span>
          <a href={`/${emirate.slug}`} style={{ color: '#c9a84c' }}>{emirate.name}</a>
          <span className="mx-2">/</span>
          <span className="text-white">{city.name}</span>
        </nav>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-josefin)' }}
        >
          Cleaning Services in {city.name}
        </h1>
        <h2 className="text-gray-400 mb-10 text-lg" style={{ fontWeight: 400 }}>
          {emirate.name} · Professional cleaning — same-day service · Call 0547199189
        </h2>

        {/* Services list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {cityServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl p-5"
              style={{ background: '#1e1e1e' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div>
                    <h2
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-josefin)' }}
                    >
                      {service.name}
                    </h2>
                    <span className="text-xs capitalize" style={{ color: '#c9a84c' }}>
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.shortDescription}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={getWhatsAppLink(service.name, city.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: '#25D366', color: '#111111', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Book via WhatsApp
                </a>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: '#252525', color: '#c9a84c', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-xl p-8 text-center" style={{ background: '#252525' }}>
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
            Need a Service in {city.name}?
          </h2>
          <p className="text-gray-400 mb-6">Fast, professional, reliable — contact us now.</p>
          <a
            href={getWhatsAppLink(undefined, city.name)}
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
      <WhatsAppButton city={city.name} />
    </>
  )
}
