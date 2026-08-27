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
import { hasCombo } from '@/lib/data/serviceAreaCombos'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

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
    title: `Cleaning Services in ${city.name}, ${emirate.name} | Madinat Alhaya`,
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
    path: `/${emirateSlug}/${citySlug}`,
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

      <div className="city-main max-w-6xl mx-auto px-4 py-12 cp-main">

        {/* BREADCRUMB */}
        <nav className="text-sm text-gray-400 mb-8 cp-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="mx-2 cp-breadcrumb-sep">/</span>
          <a href={`/${emirate.slug}`}>{emirate.name}</a>
          <span className="mx-2 cp-breadcrumb-sep">/</span>
          <span className="text-white city-crumb-cur">{city.name}</span>
        </nav>

        {/* CITY BANNER */}
        <div className="cp-banner">
          <Image
            src={emirateBannerSrc}
            alt={`Professional cleaning services in ${city.name}, ${emirate.name} — Madinat Alhaya expert cleaning team serving ${city.name} homes, villas and apartments`}
            title={`Cleaning Services in ${city.name}, ${emirate.name} | Madinat Alhaya`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="cp-banner-overlay" />
          <div className="cp-banner-bottom">
            <div className="cp-banner-tag">{emirate.name} · {city.name}</div>
            <div className="cp-banner-title">Professional Cleaning Services</div>
          </div>
        </div>

        {/* PAGE HEADING */}
        <h1 className="city-page-h1 text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-josefin)' }}>
          Cleaning Services in {city.name}
        </h1>
        <p className="city-page-sub text-gray-400 mb-6 text-lg" style={{ fontWeight: 400 }}>
          {emirate.name} · Professional cleaning — same-day service · Call {SITE_CONFIG.phone}
        </p>

        {/* LOCAL INTRO */}
        {localContent && (
          <div className="cp-local-block">
            <div className="cp-prop-badge">
              <span className="cp-prop-icon">📍</span>
              <span className="cp-prop-text">{localContent.propertyType}</span>
            </div>
            <p className="cp-local-desc">{localContent.localDescription}</p>
            <div>
              <div className="cp-lm-label">Key Areas &amp; Landmarks We Cover</div>
              <div className="cp-lm-wrap">
                {localContent.landmarks.map((lm) => (
                  <span key={lm} className="cp-lm-tag">{lm}</span>
                ))}
              </div>
            </div>
            <div className="cp-note">
              <span className="cp-note-icon">💡</span>
              <p className="cp-note-text">{localContent.areaNote}</p>
            </div>
          </div>
        )}

        {/* SERVICES */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="cp-sec-head">
            <div className="cp-sec-bar" />
            <div>
              <div className="cp-sec-label">What We Offer</div>
              <h2 className="cp-sec-h2">Services Available in {city.name}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cityServices.map((service) => (
              <div key={service.id} className="city-svc-card rounded-xl overflow-hidden cp-svc-card">
                {service.images[0] && (
                  <div className="cp-svc-img">
                    <Image
                      src={service.images[0]}
                      alt={`${service.name} in ${city.name}, ${emirate.name} — professional ${service.name.toLowerCase()} by Madinat Alhaya cleaning services`}
                      title={`${service.name} in ${city.name} | Madinat Alhaya`}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="cp-svc-img-overlay" />
                    <span className="cp-svc-cat">{service.category}</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1rem' }}>
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.shortDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={getWhatsAppLink(service.name, city.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold cp-wa-book"
                    >
                      Book via WhatsApp
                    </a>
                    <Link
                      href={
                        hasCombo(emirate.slug, city.slug, service.slug)
                          ? `/${emirate.slug}/${city.slug}/${service.slug}`
                          : `/services/${service.slug}`
                      }
                      className="city-view-btn flex-1 text-center px-4 py-2 rounded-lg text-sm font-semibold cp-view-btn"
                    >
                      {hasCombo(emirate.slug, city.slug, service.slug)
                        ? `View ${city.name} Details`
                        : 'View Details'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        {localContent?.localFAQs && localContent.localFAQs.length > 0 && (
          <div className="cp-faq-block">
            <div className="cp-sec-head" style={{ marginBottom: '1.5rem' }}>
              <div className="cp-sec-bar" />
              <div>
                <div className="cp-sec-label">Common Questions</div>
                <h2 className="cp-sec-h2-sm">FAQs — Cleaning in {city.name}</h2>
              </div>
            </div>
            <div className="cp-faq-list">
              {localContent.localFAQs.map((faq, i) => (
                <div key={i} className="cp-faq-item">
                  <div className="cp-faq-q">
                    <span className="cp-faq-q-mark">Q</span>
                    {faq.question}
                  </div>
                  <p className="cp-faq-a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRUST */}
        {(() => {
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
            <div className="cp-trust-block">
              <div className="cp-trust-circle" />
              <div className="cp-sec-head" style={{ marginBottom: '1.5rem' }}>
                <div className="cp-sec-bar" />
                <div>
                  <div className="cp-sec-label">Local Trust</div>
                  <h2 className="cp-sec-h2-sm">Why {city.name} Residents Choose Madinat Alhaya</h2>
                </div>
              </div>

              <div className="cp-stats-row city-stats-row">
                {[
                  { icon: '👥', value: '500+', label: 'UAE Clients' },
                  { icon: '⚡', value: 'Same-Day', label: 'Service Available' },
                  { icon: '✅', value: '100%', label: 'Satisfaction Guarantee' },
                  { icon: '⭐', value: '5-Star', label: 'Rated Service' },
                ].map((stat) => (
                  <div key={stat.label} className="cp-stat-item">
                    <div className="cp-stat-emoji">{stat.icon}</div>
                    <div className="cp-stat-val">{stat.value}</div>
                    <div className="cp-stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="cp-bullets">
                {trustBullets.map((bullet, i) => (
                  <div key={i} className="cp-bullet city-trust-bullet">
                    <span className="cp-bullet-check">✓</span>
                    <span className="cp-bullet-text city-trust-txt">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="cp-cta-row">
                <a href={getWhatsAppLink(undefined, city.name)} target="_blank" rel="noopener noreferrer" className="ep-wa-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  Book in {city.name} — Free Quote
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="cp-call-link">
                  <span>📞</span> {SITE_CONFIG.phone}
                </a>
              </div>

              <QuoteCard
                id={`quote-${emirate.slug}-${city.slug}`}
                source={`Area page — ${city.name}, ${emirate.name}`}
                heading={`Get a free quote in ${city.name}.`}
                className="page-quote-card"
              />
            </div>
          )
        })()}

        {/* OTHER AREAS */}
        {siblingCities.length > 0 && (
          <div className="cp-areas-block">
            <div className="cp-sec-head" style={{ marginBottom: '0.5rem' }}>
              <div className="cp-sec-bar" />
              <div>
                <div className="cp-sec-label">Service Coverage</div>
                <h2 className="cp-sec-h2-sm">Other Areas We Serve in {emirate.name}</h2>
              </div>
            </div>
            <p className="cp-areas-sub">
              Madinat Alhaya provides professional cleaning across all areas of {emirate.name} — same-day service available.
            </p>
            <div className="cp-areas-pills">
              {siblingCities.map((c) => (
                <Link key={c.id} href={`/${emirate.slug}/${c.slug}`} className="cp-area-pill">
                  <span className="cp-area-arrow">→</span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="city-cta-block rounded-xl p-8 text-center cp-cta-block">
          <div className="cp-cta-circle" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="ep-cta-label">Ready to Book?</div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
              Book a Cleaning in {city.name} Today
            </h2>
            <p className="text-gray-400 mb-2">Same-day service available · Free instant quote</p>
            <div className="cp-cta-preview city-cta-preview">
              "Hi Madinat Alhaya, I want to book a cleaning service in {city.name}..."
            </div>
            <div className="ep-cta-btns">
              <a href={getWhatsAppLink(undefined, city.name)} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg cp-cta-wa">
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`}
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg cp-cta-call">
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>

        {/* STICKY MOBILE BAR */}
        <div className="city-sticky-bar cp-sticky">
          <a href={getWhatsAppLink(undefined, city.name)} target="_blank" rel="noopener noreferrer" className="cp-sticky-wa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Book in {city.name}
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="cp-sticky-call">
            📞 Call Now
          </a>
        </div>

      </div>

      <WhatsAppButton city={city.name} />
    </>
  )
}
