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

type Props = { params: Promise<{ emirate: string; city: string; service: string }> }

// Only the curated combos exist — any other /[emirate]/[city]/[x] 404s (no thin pages).
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

  // Short service label (drop "& ..." suffix) + omit emirate to keep titles concise (<60 chars)
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

  // ── Unique, page-specific FAQ: city-local Qs first, then service Qs ──
  const combinedFaqs = [
    ...(local?.localFAQs ?? []).slice(0, 2),
    ...service.faqs.slice(0, 3),
  ]

  // ── Sibling services that also have a dedicated page in this city ──
  const siblingServices = combosForCity(eSlug, cSlug)
    .filter((s) => s !== sSlug)
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]

  // ── Schemas (all builders reused) ──
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

      <div className="city-main max-w-5xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>

        {/* ── BREADCRUMB ── */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <a href={`/${emirate.slug}`} style={{ color: '#c9a84c' }}>{emirate.name}</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <a href={`/${emirate.slug}/${city.slug}`} style={{ color: '#c9a84c' }}>{city.name}</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <span className="text-white city-crumb-cur">{service.name}</span>
        </nav>

        {/* ── HERO BANNER (service image) ── */}
        <div style={{ position: 'relative', height: '260px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.75rem' }}>
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
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.75rem', right: '1.5rem', zIndex: 2 }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              {emirate.name} · {city.name}
            </div>
            <h1
              className="city-page-h1"
              style={{ color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, fontFamily: 'var(--font-josefin)', lineHeight: 1.15, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              {service.name} in {city.name}
            </h1>
          </div>
        </div>

        {/* ── INTRO + CTA ── */}
        <p className="city-page-sub" style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Looking for professional <strong style={{ color: '#c9a84c' }}>{service.name.toLowerCase()}</strong> in {city.name}? Madinat Alhaya
          provides expert, same-day {service.name.toLowerCase()} for {local?.propertyType ?? 'homes, villas and offices'} across {city.name}, {emirate.name}.
          Our certified technicians use eco-friendly products and bring all equipment to your door — with transparent pricing and a 100% satisfaction guarantee.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.6rem', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', fontWeight: 700, borderRadius: '500px', textDecoration: 'none', fontSize: '1rem' }}>
            Book {service.name.split(' ')[0]} in {city.name} — Free Quote
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.8rem 1.4rem', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontWeight: 600, borderRadius: '500px', textDecoration: 'none', fontSize: '1rem' }}>
            📞 {SITE_CONFIG.phone}
          </a>
        </div>

        {/* ── HYPER-LOCAL CONTEXT (unique per city) ── */}
        {local && (
          <div className="city-local-block" style={{ background: 'linear-gradient(135deg, #0e1635 0%, #1c2f58 100%)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.75rem 2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.85rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '500px', marginBottom: '1rem' }}>
              <span style={{ color: '#c9a84c', fontSize: '0.65rem' }}>📍</span>
              <span style={{ color: '#c9a84c', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{local.propertyType}</span>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem', fontWeight: 400 }}>
              {local.localDescription}
            </p>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Areas &amp; Landmarks We Cover in {city.name}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {local.landmarks.map((lm) => (
                  <span key={lm} style={{ padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{lm}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '1.25rem', paddingTop: '1.1rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', fontSize: '1rem', flexShrink: 0, marginTop: '0.05rem' }}>💡</span>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>{local.areaNote}</p>
            </div>
          </div>
        )}

        {/* ── WHAT'S INCLUDED (service benefits) ── */}
        {service.benefits?.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '3px', height: '1.75rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>What You Get</div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{service.name} in {city.name} Includes</h2>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
              {service.benefits.map((b, i) => (
                <div key={i} className="city-trust-bullet" style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                  <span style={{ color: '#25D366', fontSize: '0.88rem', fontWeight: 800, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                  <span className="city-trust-txt" style={{ color: '#d1d5db', fontSize: '0.98rem', lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── OUR PROCESS (service steps) ── */}
        {service.process?.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '3px', height: '1.75rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>How It Works</div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Our {city.name} {service.name.split(' ')[0]} Process</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {service.process.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                  <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                  <span className="city-trust-txt" style={{ color: '#d1d5db', fontSize: '0.98rem', lineHeight: 1.55 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FAQ (city-local + service, unique combination) ── */}
        {combinedFaqs.length > 0 && (
          <div className="city-faq-block" style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '12px', padding: '2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3px', height: '1.75rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Common Questions</div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{service.name} in {city.name} — FAQs</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {combinedFaqs.map((faq, i) => (
                <div key={i} className="city-faq-item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                  <div className="city-faq-q" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c9a84c', flexShrink: 0 }}>Q</span>{faq.question}
                  </div>
                  <p className="city-faq-a" style={{ color: '#9ca3af', fontSize: '0.98rem', lineHeight: 1.7, paddingLeft: '1.3rem', fontWeight: 400, margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── INTERNAL LINKS: other services in this city + parent pages ── */}
        {siblingServices.length > 0 && (
          <div className="city-areas-block" style={{ background: 'linear-gradient(135deg, #0e1635 0%, #1c2f58 100%)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px', padding: '2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '3px', height: '1.75rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>More in {city.name}</div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.2rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Other Services We Offer in {city.name}</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {siblingServices.map((s) => (
                <Link key={s.id} href={`/${emirate.slug}/${city.slug}/${s.slug}`} style={{ padding: '0.45rem 1.1rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', borderRadius: '500px', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: 'rgba(201,168,76,0.45)', fontSize: '0.65rem' }}>→</span>{s.name}
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.95rem' }}>
              <Link href={`/services/${service.slug}`} style={{ color: '#9ca3af', textDecoration: 'underline' }}>
                About {service.name} (all areas)
              </Link>
              <Link href={`/${emirate.slug}/${city.slug}`} style={{ color: '#9ca3af', textDecoration: 'underline' }}>
                All cleaning services in {city.name}
              </Link>
            </div>
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <div className="city-cta-block rounded-xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)', border: '1px solid rgba(201,168,76,0.2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ready to Book?</div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>
              Book {service.name} in {city.name} Today
            </h2>
            <p className="text-gray-400 mb-6">Same-day service · Free instant quote · Eco-friendly products</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ background: '#25D366', color: '#111111' }}>
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ border: '2px solid #c9a84c', color: '#c9a84c' }}>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton service={service.name} city={city.name} />
    </>
  )
}
