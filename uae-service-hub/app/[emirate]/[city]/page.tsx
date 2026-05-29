import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import { emirates, getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { services, getServiceBySlug } from '@/lib/data/services'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { getCityContent } from '@/lib/data/cityContent'
import { getCityCoords } from '@/lib/data/cityCoordinates'
import { SITE_CONFIG } from '@/lib/data/constants'

type Props = { params: Promise<{ emirate: string; city: string }> }

export async function generateStaticParams(): Promise<{ emirate: string; city: string }[]> {
  return emirates.flatMap((e) => e.cities.map((c) => ({ emirate: e.slug, city: c.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug, city: citySlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  const city = getCityBySlug(emirateSlug, citySlug)
  if (!emirate || !city) return {}
  const localContent = getCityContent(emirateSlug, citySlug)
  return buildMetadata({
    title: `Cleaning Services in ${city.name}, ${emirate.name} | Al Haya`,
    description:
      localContent?.localDescription.slice(0, 155) ??
      `Professional cleaning in ${city.name}, ${emirate.name}. Sofa, carpet, villa & more. Same-day service. Call ${SITE_CONFIG.phone}.`,
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

  const siblingCities = emirate.cities.filter((c) => c.slug !== city.slug)
  const localContent = getCityContent(emirateSlug, citySlug)
  const coords = getCityCoords(emirateSlug, citySlug)
  const emirateBannerSrc = emirateSlug === 'ras-al-khaimah'
    ? '/images/emirates/ras-al-khaimah2.webp'
    : `/images/emirates/${emirateSlug}.webp`

  const localSchema = buildLocalBusinessSchema({
    city: city.name,
    emirate: emirate.name,
    coords: coords ?? undefined,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirate.slug}` },
    { name: city.name, url: `/${emirate.slug}/${city.slug}` },
  ])
  const faqSchema =
    localContent?.localFAQs && localContent.localFAQs.length > 0
      ? buildFAQSchema(localContent.localFAQs)
      : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="city-main max-w-6xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>

        {/* ══════════════════════════════════════
            BREADCRUMB
        ══════════════════════════════════════ */}
        <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <a href={`/${emirate.slug}`} style={{ color: '#c9a84c' }}>{emirate.name}</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <span className="text-white city-crumb-cur">{city.name}</span>
        </nav>

        {/* ══════════════════════════════════════
            CITY BANNER IMAGE
        ══════════════════════════════════════ */}
        <div style={{ position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.75rem' }}>
          <Image
            src={emirateBannerSrc}
            alt={`Professional cleaning services in ${city.name}, ${emirate.name} — Al Haya expert cleaning team serving ${city.name} homes, villas and apartments`}
            title={`Cleaning Services in ${city.name}, ${emirate.name} | Al Haya`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', zIndex: 2 }}>
            <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              {emirate.name} · {city.name}
            </div>
            <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-josefin)', letterSpacing: '0.05em' }}>
              Professional Cleaning Services
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            PAGE HEADING
        ══════════════════════════════════════ */}
        <h1
          className="city-page-h1 text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-josefin)' }}
        >
          Cleaning Services in {city.name}
        </h1>
        <p className="city-page-sub text-gray-400 mb-6 text-lg" style={{ fontWeight: 400 }}>
          {emirate.name} · Professional cleaning — same-day service · Call {SITE_CONFIG.phone}
        </p>

        {/* ══════════════════════════════════════
            HYPER-LOCAL INTRO BLOCK
            (unique per city — prevents duplicate content)
        ══════════════════════════════════════ */}
        {localContent && (
          <div className="city-local-block" style={{
            background: 'linear-gradient(135deg, #0e1635 0%, #1c2f58 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '12px',
            padding: '1.75rem 2rem',
            marginBottom: '2.5rem',
          }}>
            {/* Property type badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.3rem 0.85rem',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '500px',
              marginBottom: '1rem',
            }}>
              <span style={{ color: '#c9a84c', fontSize: '0.65rem' }}>📍</span>
              <span style={{ color: '#c9a84c', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {localContent.propertyType}
              </span>
            </div>

            {/* Local description — unique per area */}
            <p style={{
              color: '#d1d5db',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
              fontWeight: 400,
            }}>
              {localContent.localDescription}
            </p>

            {/* Landmarks grid */}
            <div>
              <div style={{ fontSize: '0.6rem', color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Key Areas &amp; Landmarks We Cover
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {localContent.landmarks.map((lm) => (
                  <span
                    key={lm}
                    style={{
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#9ca3af',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {lm}
                  </span>
                ))}
              </div>
            </div>

            {/* Area note */}
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
            }}>
              <span style={{ color: '#c9a84c', fontSize: '0.9rem', flexShrink: 0, marginTop: '0.05rem' }}>💡</span>
              <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
                {localContent.areaNote}
              </p>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            SERVICES GRID
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: '3px', height: '1.75rem',
              background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))',
              borderRadius: '2px', flexShrink: 0,
            }} />
            <div>
              <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                What We Offer
              </div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                Services Available in {city.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cityServices.map((service) => (
              <div
                key={service.id}
                className="city-svc-card rounded-xl overflow-hidden"
                style={{ background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* Service thumbnail image */}
                {service.images[0] && (
                  <div style={{ position: 'relative', height: '150px' }}>
                    <Image
                      src={service.images[0]}
                      alt={`${service.name} in ${city.name}, ${emirate.name} — professional ${service.name.toLowerCase()} by Al Haya cleaning services`}
                      title={`${service.name} in ${city.name} | Al Haya`}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,30,30,0.75) 0%, transparent 55%)' }} />
                    <span style={{
                      position: 'absolute', bottom: '0.6rem', left: '0.75rem',
                      color: '#c9a84c', fontSize: '0.6rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>{service.category}</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-josefin)', fontSize: '1rem' }}
                    >
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.shortDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={getWhatsAppLink(service.name, city.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: '#25D366', color: '#111111',
                        minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      Book via WhatsApp
                    </a>
                    <Link
                      href={`/services/${service.slug}`}
                      className="city-view-btn flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: '#252525', color: '#c9a84c',
                        minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            AREA-SPECIFIC FAQ SECTION
            (unique per city — boosts local relevance)
        ══════════════════════════════════════ */}
        {localContent?.localFAQs && localContent.localFAQs.length > 0 && (
          <div className="city-faq-block" style={{
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3px', height: '1.75rem',
                background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))',
                borderRadius: '2px', flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                  Common Questions
                </div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                  FAQs — Cleaning in {city.name}
                </h2>
              </div>
            </div>

            {/* FAQ items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {localContent.localFAQs.map((faq, i) => (
                <div
                  key={i}
                  className="city-faq-item"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div className="city-faq-q" style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.6rem',
                    display: 'flex',
                    gap: '0.6rem',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ color: '#c9a84c', flexShrink: 0 }}>Q</span>
                    {faq.question}
                  </div>
                  <p className="city-faq-a" style={{
                    color: '#9ca3af',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    paddingLeft: '1.3rem',
                    fontWeight: 400,
                    margin: 0,
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            SOCIAL PROOF — AREA-SPECIFIC TRUST SIGNALS
            Builds local credibility for each city.
            WhatsApp CTA includes city name for lead tracking.
        ══════════════════════════════════════ */}
        {(() => {
          // Determine area type from propertyType for context-aware trust bullets
          const pt = localContent?.propertyType ?? ''
          const isHighRise = /high.rise|tower|apartment/i.test(pt)
          const isVilla    = /villa|townhouse|residential/i.test(pt)
          const isWaterfront = /waterfront|beach|coastal|island/i.test(pt)
          const isCommercial = /commercial|office|business/i.test(pt)

          let trustBullets: string[]
          if (isWaterfront && isVilla) {
            trustBullets = [
              `Specialist care for luxury villas and beachfront residences in ${city.name}`,
              'Fast-dry extraction protects upholstery against coastal humidity',
              'Marble polishing and premium surface restoration available',
              'Discrete, premium service with full satisfaction guarantee',
            ]
          } else if (isHighRise) {
            trustBullets = [
              `Experienced with high-rise tower access and lift logistics in ${city.name}`,
              'Quick-dry method — sofa dry in 3-4 hrs, minimal disruption to daily life',
              'Trained for all apartment floor types — tile, carpet, hardwood',
              'Same-day and weekend slots available across all towers',
            ]
          } else if (isVilla) {
            trustBullets = [
              `Full villa deep cleaning for all property sizes in ${city.name}`,
              'Teams of 3-6 trained technicians for comprehensive villa coverage',
              'Marble, stone, and luxury surface specialist treatment included',
              'Free re-clean guarantee — we return at no charge if not satisfied',
            ]
          } else if (isCommercial) {
            trustBullets = [
              `Office and commercial space cleaning available in ${city.name}`,
              'Flexible scheduling — evenings, weekends, minimal disruption',
              'Carpet extraction, sofa sanitization, and full office deep clean',
              '100% satisfaction guaranteed for all commercial bookings',
            ]
          } else {
            trustBullets = [
              `Serving residential and commercial clients across ${city.name}`,
              'Same-day service available — book by phone or WhatsApp',
              'Eco-friendly, non-toxic products safe for children and pets',
              '100% satisfaction guarantee — re-clean at no extra charge',
            ]
          }

          return (
            <div className="city-trust-block" style={{
              background: 'linear-gradient(135deg, #0d1b35 0%, #0e1a2e 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative circle */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(201,168,76,0.04)', pointerEvents: 'none' }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '3px', height: '1.75rem',
                  background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))',
                  borderRadius: '2px', flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                    Local Trust
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                    Why {city.name} Residents Choose Al Haya
                  </h2>
                </div>
              </div>

              {/* Stats row */}
              <div className="city-stats-row" style={{
                display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: '8px',
              }}>
                {[
                  { icon: '👥', value: '500+', label: 'UAE Clients' },
                  { icon: '⚡', value: 'Same-Day', label: 'Service Available' },
                  { icon: '✅', value: '100%', label: 'Satisfaction Guarantee' },
                  { icon: '⭐', value: '5-Star', label: 'Rated Service' },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    flex: '1', minWidth: '110px',
                    textAlign: 'center',
                    padding: '0.5rem',
                  }}>
                    <div style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{stat.icon}</div>
                    <div style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#c9a84c', fontSize: '0.95rem', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ color: '#6b7280', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Context-aware trust bullets */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '0.6rem',
                marginBottom: '1.75rem',
              }}>
                {trustBullets.map((bullet, i) => (
                  <div
                    key={i}
                    className="city-trust-bullet"
                    style={{
                      display: 'flex',
                      gap: '0.65rem',
                      alignItems: 'flex-start',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                    }}
                  >
                    <span style={{
                      color: '#25D366',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}>✓</span>
                    <span className="city-trust-txt" style={{ color: '#d1d5db', fontSize: '0.85rem', lineHeight: 1.55 }}>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Area-specific WhatsApp CTA — city name in message for lead tracking */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={getWhatsAppLink(undefined, city.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.75rem',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#fff',
                    fontWeight: 700,
                    borderRadius: '500px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.25)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  Book in {city.name} — Free Quote
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  style={{
                    color: '#c9a84c',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>📞</span> {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          )
        })()}

        {/* ══════════════════════════════════════
            OTHER AREAS WE SERVE IN [EMIRATE]
            (Internal Linking — prevents orphan pages)
        ══════════════════════════════════════ */}
        {siblingCities.length > 0 && (
          <div className="city-areas-block" style={{
            background: 'linear-gradient(135deg, #0e1635 0%, #1c2f58 100%)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '3px', height: '1.75rem',
                background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))',
                borderRadius: '2px', flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Service Coverage
                </div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                  Other Areas We Serve in {emirate.name}
                </h2>
              </div>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.25rem', paddingLeft: '1rem', fontWeight: 400, marginTop: 0 }}>
              Al Haya provides professional cleaning across all areas of {emirate.name} — same-day service available.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {siblingCities.map((c) => (
                <Link
                  key={c.id}
                  href={`/${emirate.slug}/${c.slug}`}
                  style={{
                    padding: '0.45rem 1.1rem',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: '#c9a84c',
                    borderRadius: '500px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ color: 'rgba(201,168,76,0.45)', fontSize: '0.65rem' }}>→</span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            BOTTOM CTA BANNER
        ══════════════════════════════════════ */}
        <div className="city-cta-block rounded-xl p-8 text-center" style={{
          background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Ready to Book?
            </div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
              Book a Cleaning in {city.name} Today
            </h2>
            <p className="text-gray-400 mb-2">Same-day service available · Free instant quote</p>
            {/* Pre-filled message preview — shows what will be sent */}
            <div className="city-cta-preview" style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'rgba(37,211,102,0.08)',
              border: '1px solid rgba(37,211,102,0.2)',
              borderRadius: '6px',
              color: '#9ca3af',
              fontSize: '0.75rem',
              marginBottom: '1.75rem',
              fontFamily: 'monospace',
            }}>
              "Hi Al Haya, I want to book a cleaning service in {city.name}..."
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppLink(undefined, city.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg"
                style={{ background: '#25D366', color: '#111111' }}
              >
                WhatsApp Now
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg"
                style={{ border: '2px solid #c9a84c', color: '#c9a84c' }}
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            STICKY MOBILE CTA BAR
            Shows on scroll — always visible on mobile.
            Area name in WhatsApp message for tracking.
        ══════════════════════════════════════ */}
        <style>{`
          @media (max-width: 640px) {
            .city-sticky-bar { display: flex !important; }
          }
        `}</style>
        <div
          className="city-sticky-bar"
          style={{
            display: 'none',
            position: 'fixed',
            bottom: 0, left: 0, right: 0,
            zIndex: 40,
            background: 'rgba(8,14,32,0.97)',
            borderTop: '1px solid rgba(201,168,76,0.25)',
            padding: '0.75rem 1rem',
            gap: '0.6rem',
            alignItems: 'center',
            backdropFilter: 'blur(8px)',
            /* Push above floating WhatsApp button on very small screens */
            paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
          }}
        >
          <a
            href={getWhatsAppLink(undefined, city.name)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.7rem',
              background: '#25D366',
              color: '#111',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.85rem',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Book in {city.name}
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.7rem',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#c9a84c',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.85rem',
            }}
          >
            📞 Call Now
          </a>
        </div>

      </div>

      <WhatsAppButton city={city.name} />
    </>
  )
}
