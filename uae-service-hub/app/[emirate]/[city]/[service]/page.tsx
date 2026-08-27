import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { getServiceBySlug } from '@/lib/data/services'
import {
  SERVICE_AREA_COMBOS,
  hasCombo,
  combosForCity,
} from '@/lib/data/serviceAreaCombos'
import { getCityContent } from '@/lib/data/cityContent'
import { getCityCoords } from '@/lib/data/cityCoordinates'
import {
  buildMetadata,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

type Props = { params: Promise<{ emirate: string; city: string; service: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return SERVICE_AREA_COMBOS.map((c) => ({
    emirate: c.emirate,
    city: c.city,
    service: c.service,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params
  const emirate = getEmirateBySlug(eSlug)
  const city = getCityBySlug(eSlug, cSlug)
  const service = getServiceBySlug(sSlug)
  if (!emirate || !city || !service) return {}

  const shortService = service.name.split(/[&]/)[0].trim()
  return buildMetadata({
    title: `${shortService} in ${city.name} | Madinat Alhaya`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${emirate.name}. Same-day service, certified technicians, eco-friendly products. Free quote — call ${SITE_CONFIG.phone}.`.slice(
      0,
      158
    ),
    path: `/${eSlug}/${cSlug}/${sSlug}`,
    imageUrl: service.images[0] ? `https://servedubai.ae${service.images[0]}` : undefined,
  })
}

export default async function ServiceAreaPage({ params }: Props) {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params
  const emirate = getEmirateBySlug(eSlug)
  const city = getCityBySlug(eSlug, cSlug)
  const service = getServiceBySlug(sSlug)
  if (!emirate || !city || !service || !hasCombo(eSlug, cSlug, sSlug)) notFound()

  const local = getCityContent(eSlug, cSlug)
  const coords = getCityCoords(eSlug, cSlug)
  const path = `/${eSlug}/${cSlug}/${sSlug}`

  const combinedFaqs = [
    ...(local?.localFAQs ?? []).slice(0, 2),
    ...service.faqs.slice(0, 3),
  ]

  const siblingServices = combosForCity(eSlug, cSlug)
    .filter((s) => s !== sSlug)
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]

  const localSchema = buildLocalBusinessSchema({
    service: service.name,
    city: city.name,
    emirate: emirate.name,
    path,
    coords: coords ?? undefined,
  })
  const serviceSchema = buildServiceSchema({
    serviceName: service.name,
    description: `${service.shortDescription} Available in ${city.name}, ${emirate.name}.`,
    url: path,
    emirate: emirate.name,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirate.slug}` },
    { name: city.name, url: `/${emirate.slug}/${city.slug}` },
    { name: service.name, url: path },
  ])
  const faqSchema = combinedFaqs.length > 0 ? buildFAQSchema(combinedFaqs) : null

  const waLink = getWhatsAppLink(service.name, city.name)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="city-main max-w-5xl mx-auto px-4 py-12 sa-main">

        {/* BREADCRUMB */}
        <nav className="text-sm mb-8 sa-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="mx-2 sa-breadcrumb-sep">/</span>
          <a href={`/${emirate.slug}`}>{emirate.name}</a>
          <span className="mx-2 sa-breadcrumb-sep">/</span>
          <a href={`/${emirate.slug}/${city.slug}`}>{city.name}</a>
          <span className="mx-2 sa-breadcrumb-sep">/</span>
          <span className="text-white city-crumb-cur">{service.name}</span>
        </nav>

        {/* HERO BANNER */}
        <div className="sa-banner">
          {service.images[0] && (
            <Image
              src={service.images[0]}
              alt={`${service.name} in ${city.name}, ${emirate.name} — professional ${service.name.toLowerCase()} by Madinat Alhaya for ${local?.propertyType ?? 'homes and offices'}`}
              title={`${service.name} in ${city.name} | Madinat Alhaya`}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          )}
          <div className="sa-banner-overlay" />
          <div className="sa-banner-bottom">
            <div className="sa-banner-tag">{emirate.name} · {city.name}</div>
            <h1 className="sa-banner-h1">{service.name} in {city.name}</h1>
          </div>
        </div>

        {/* INTRO + CTA */}
        <p className="sa-intro">
          Looking for professional <strong>{service.name.toLowerCase()}</strong> in {city.name}? Madinat Alhaya
          provides expert, same-day {service.name.toLowerCase()} for {local?.propertyType ?? 'homes, villas and offices'} across {city.name}, {emirate.name}.
          Our certified technicians use eco-friendly products and bring all equipment to your door — with transparent pricing and a 100% satisfaction guarantee.
        </p>

        <div className="sa-cta-row">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="sa-wa-btn">
            Book {service.name.split(' ')[0]} in {city.name} — Free Quote
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="sa-call-btn">
            📞 {SITE_CONFIG.phone}
          </a>
        </div>

        {/* HYPER-LOCAL CONTEXT */}
        {local && (
          <div className="sa-local-block">
            <div className="sa-prop-badge">
              <span className="sa-prop-icon">📍</span>
              <span className="sa-prop-text">{local.propertyType}</span>
            </div>
            <p className="sa-local-desc">{local.localDescription}</p>
            <div>
              <div className="sa-lm-label">Areas &amp; Landmarks We Cover in {city.name}</div>
              <div className="sa-lm-wrap">
                {local.landmarks.map((lm) => (
                  <span key={lm} className="sa-lm-tag">{lm}</span>
                ))}
              </div>
            </div>
            <div className="sa-note">
              <span className="sa-note-icon">💡</span>
              <p className="sa-note-text">{local.areaNote}</p>
            </div>
          </div>
        )}

        {/* WHAT'S INCLUDED */}
        {service.benefits?.length > 0 && (
          <div className="sa-mb">
            <div className="sa-sec-head">
              <div className="sa-sec-bar" />
              <div>
                <div className="sa-sec-label">What You Get</div>
                <h2 className="sa-sec-h2">{service.name} in {city.name} Includes</h2>
              </div>
            </div>
            <div className="sa-benefit-grid">
              {service.benefits.map((b, i) => (
                <div key={i} className="sa-benefit-item">
                  <span className="sa-benefit-check">✓</span>
                  <span className="sa-benefit-text">{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OUR PROCESS */}
        {service.process?.length > 0 && (
          <div className="sa-mb">
            <div className="sa-sec-head">
              <div className="sa-sec-bar" />
              <div>
                <div className="sa-sec-label">How It Works</div>
                <h2 className="sa-sec-h2">Our {city.name} {service.name.split(' ')[0]} Process</h2>
              </div>
            </div>
            <div className="sa-process-list">
              {service.process.map((step, i) => (
                <div key={i} className="sa-process-item">
                  <span className="sa-process-num">{i + 1}</span>
                  <span className="sa-process-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {combinedFaqs.length > 0 && (
          <div className="sa-faq-block">
            <div className="sa-sec-head" style={{ marginBottom: '1.5rem' }}>
              <div className="sa-sec-bar" />
              <div>
                <div className="sa-sec-label">Common Questions</div>
                <h2 className="sa-sec-h2-sm">{service.name} in {city.name} — FAQs</h2>
              </div>
            </div>
            <div className="sa-faq-list">
              {combinedFaqs.map((faq, i) => (
                <div key={i} className="sa-faq-item">
                  <div className="sa-faq-q">
                    <span className="sa-faq-q-mark">Q</span>{faq.question}
                  </div>
                  <p className="sa-faq-a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERNAL LINKS */}
        {siblingServices.length > 0 && (
          <div className="sa-links-block">
            <div className="sa-sec-head" style={{ marginBottom: '1rem' }}>
              <div className="sa-sec-bar" />
              <div>
                <div className="sa-sec-label">More in {city.name}</div>
                <h2 className="sa-sec-h2-xs">Other Services We Offer in {city.name}</h2>
              </div>
            </div>
            <div className="sa-links-pills">
              {siblingServices.map((s) => (
                <Link key={s.id} href={`/${emirate.slug}/${city.slug}/${s.slug}`} className="sa-link-pill">
                  <span className="sa-link-arrow">→</span>{s.name}
                </Link>
              ))}
            </div>
            <div className="sa-parent-links">
              <Link href={`/services/${service.slug}`} className="sa-parent-link">
                About {service.name} (all areas)
              </Link>
              <Link href={`/${emirate.slug}/${city.slug}`} className="sa-parent-link">
                All cleaning services in {city.name}
              </Link>
            </div>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="city-cta-block rounded-xl p-8 text-center sa-cta-block">
          <div className="sa-cta-circle" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="sa-cta-label">Ready to Book?</div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
              Book {service.name} in {city.name} Today
            </h2>
            <p className="text-gray-400 mb-6">Same-day service · Free instant quote · Eco-friendly products</p>
            <div className="sa-cta-btns">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg sa-cta-wa">
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`}
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg sa-cta-call">
                Call {SITE_CONFIG.phone}
              </a>
            </div>
            <QuoteCard
              id={`quote-${emirate.slug}-${city.slug}-${service.slug}`}
              defaultService={service.name}
              source={`${service.name} in ${city.name}`}
              heading={`Get a free ${service.name.toLowerCase()} quote in ${city.name}.`}
              className="page-quote-card"
            />
          </div>
        </div>
      </div>

      <WhatsAppButton service={service.name} city={city.name} />
    </>
  )
}
