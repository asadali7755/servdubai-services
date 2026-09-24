import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
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
import { getSectionGradients } from '@/lib/data/cityGradients'
import { getServiceHoverImage } from '@/lib/data/serviceGalleryImages'
import { getComboIntro } from '@/lib/data/comboIntros'
import { HoverImageLink } from '@/components/ui/hover-image-link'
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
import StickyRail from '@/components/StickyRail'
import Reveal from '@/components/Reveal'

// Elegant serif display font for this page's headings only — mirrors the
// marblepro.ae reference look without touching the sitewide Josefin Sans font.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${emirate.name}. Same-day service, certified technicians, eco-friendly products. Free quote — call ${SITE_CONFIG.phone}.`,
    path: `/${eSlug}/${cSlug}/${sSlug}`,
    imageUrl: service.images[0] ? `https://servedubai.ae${service.images[0]}` : undefined,
  })
}

/** Small "post header" row repeated at the top of every feed card — brand mark + name + a per-card tag. */
function CardHeader({ tag }: { tag: string }) {
  return (
    <div className="sa-card-header">
      <div className="sa-avatar">M</div>
      <div className="sa-card-header-text">
        <span className="sa-card-brand">Madinat Alhaya <span className="sa-verified">✓</span></span>
        <span className="sa-card-tag">{tag}</span>
      </div>
    </div>
  )
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

  // Favor local FAQs over the generic service-wide ones -- the local
  // questions are what actually differ page to page; the generic ones are
  // identical wording on every city for this service, so keeping the FAQ
  // block mostly local reduces how repetitive two city pages read.
  const combinedFaqs = [
    ...(local?.localFAQs ?? []).slice(0, 4),
    ...service.faqs.slice(0, 2),
  ]

  const siblingServices = combosForCity(eSlug, cSlug)
    .filter((s) => s !== sSlug)
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]

  const siblingCities = emirate.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6)

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
  const shortService = service.name.split(' ')[0]
  // Each feed card gets its own color, not one flat tone repeated down the page —
  // fixed slots (intro/local/benefits/process/faq/cta) so a section's color stays
  // consistent card-to-card, offset per city so pages don't all start on the same hue.
  const [introGrad, localGrad, benefitsGrad, processGrad, faqGrad, ctaGrad] = getSectionGradients(city.slug, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className={`sa-main ${fraunces.variable}`}>
        <div className="sa-shell">

          {/* BREADCRUMB */}
          <nav className="text-sm mb-8 sa-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="mx-2 sa-breadcrumb-sep">/</span>
            <a href={`/${emirate.slug}`}>{emirate.name}</a>
            <span className="mx-2 sa-breadcrumb-sep">/</span>
            <a href={`/${emirate.slug}/${city.slug}`}>{city.name}</a>
            <span className="mx-2 sa-breadcrumb-sep">/</span>
            <span className="city-crumb-cur">{service.name}</span>
          </nav>

          <div className="sa-layout">

            {/* LEFT RAIL — page nav + local-area internal links */}
            <StickyRail className="sa-rail-left" innerClassName="sa-rail">
              <div className="sa-rail-card">
                <div className="sa-rail-title">On This Page</div>
                <a href="#overview" className="sa-rail-link">Overview</a>
                {service.benefits?.length > 0 && <a href="#included" className="sa-rail-link">What&apos;s Included</a>}
                {service.process?.length > 0 && <a href="#process" className="sa-rail-link">How It Works</a>}
                {combinedFaqs.length > 0 && <a href="#faq" className="sa-rail-link">FAQ</a>}
                <a href="#book" className="sa-rail-link">Book Now</a>
              </div>

              {local && local.landmarks.length > 0 && (
                <div className="sa-rail-card">
                  <div className="sa-rail-title">Areas We Cover in {city.name}</div>
                  <div className="sa-rail-pills">
                    {local.landmarks.map((lm) => (
                      <span key={lm} className="sa-rail-pill">{lm}</span>
                    ))}
                  </div>
                </div>
              )}

              {siblingCities.length > 0 && (
                <div className="sa-rail-card">
                  <div className="sa-rail-title">Other Areas in {emirate.name}</div>
                  {siblingCities.map((c) => (
                    <HoverImageLink
                      key={c.slug}
                      href={`/${emirate.slug}/${c.slug}`}
                      image={getServiceHoverImage(service.slug, c.slug)}
                      alt={`${service.name} in ${c.name}, ${emirate.name}`}
                      className="sa-rail-link"
                    >
                      {c.name}
                    </HoverImageLink>
                  ))}
                </div>
              )}
            </StickyRail>

            {/* CENTER FEED */}
            <main className="sa-feed">

              {/* HERO CARD */}
              <Reveal id="overview" className="sa-card sa-card-hero" delay={0}>
                <div className="sa-banner">
                  {service.images[0] && (
                    <Image
                      src={service.images[0]}
                      alt={`${service.name} in ${city.name}, ${emirate.name} — professional ${service.name.toLowerCase()} by Madinat Alhaya for ${local?.propertyType ?? 'homes and offices'}`}
                      title={`${service.name} in ${city.name} | Madinat Alhaya`}
                      fill
                      priority
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  )}
                  <div className="sa-banner-overlay" />
                  <div className="sa-banner-bottom">
                    <div className="sa-banner-tag">{emirate.name} · {city.name}</div>
                    <h1 className="sa-banner-h1">{service.name} in {city.name}</h1>
                  </div>
                </div>
              </Reveal>

              {/* INTRO CARD */}
              <Reveal className="sa-card" delay={60} style={{ '--sa-city-grad': introGrad } as React.CSSProperties}>
                <CardHeader tag={`Serving ${city.name} · Licensed & insured`} />
                <p className="sa-intro">
                  {getComboIntro(eSlug, cSlug, sSlug) ?? (
                    <>
                      Looking for professional <strong>{service.name.toLowerCase()}</strong> in {city.name}? Madinat Alhaya
                      provides expert, same-day {service.name.toLowerCase()} for {local?.propertyType ?? 'homes, villas and offices'} across {city.name}, {emirate.name}.
                      Our certified technicians use eco-friendly products and bring all equipment to your door — with transparent pricing and a 100% satisfaction guarantee.
                    </>
                  )}
                </p>
                <div className="sa-cta-row">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="sa-wa-btn">
                    Book {shortService} in {city.name} — Free Quote
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="sa-call-btn">
                    📞 {SITE_CONFIG.phone}
                  </a>
                </div>
              </Reveal>

              {/* HYPER-LOCAL CONTEXT CARD */}
              {local && (
                <Reveal className="sa-card" style={{ '--sa-city-grad': localGrad } as React.CSSProperties}>
                  <CardHeader tag={`${city.name} local knowledge`} />
                  <div className="sa-prop-badge">
                    <span className="sa-prop-icon">📍</span>
                    <span className="sa-prop-text">{local.propertyType}</span>
                  </div>
                  <p className="sa-local-desc">{local.localDescription}</p>
                  <div className="sa-note">
                    <span className="sa-note-icon">💡</span>
                    <p className="sa-note-text">{local.areaNote}</p>
                  </div>
                </Reveal>
              )}

              {/* WHAT'S INCLUDED CARD */}
              {service.benefits?.length > 0 && (
                <Reveal id="included" className="sa-card" style={{ '--sa-city-grad': benefitsGrad } as React.CSSProperties}>
                  <CardHeader tag="What you get" />
                  <h2 className="sa-sec-h2" style={{ marginBottom: '1.1rem' }}>{service.name} in {city.name} Includes</h2>
                  <div className="sa-benefit-grid">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="sa-benefit-item" style={{ transitionDelay: `${i * 40}ms` }}>
                        <span className="sa-benefit-check">✓</span>
                        <span className="sa-benefit-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* OUR PROCESS CARD */}
              {service.process?.length > 0 && (
                <Reveal id="process" className="sa-card" style={{ '--sa-city-grad': processGrad } as React.CSSProperties}>
                  <CardHeader tag="How it works" />
                  <h2 className="sa-sec-h2" style={{ marginBottom: '1.1rem' }}>Our {city.name} {shortService} Process</h2>
                  <div className="sa-process-list">
                    {service.process.map((step, i) => (
                      <div key={i} className="sa-process-item" style={{ transitionDelay: `${i * 40}ms` }}>
                        <span className="sa-process-num">{i + 1}</span>
                        <span className="sa-process-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* FAQ CARD */}
              {combinedFaqs.length > 0 && (
                <Reveal id="faq" className="sa-card" style={{ '--sa-city-grad': faqGrad } as React.CSSProperties}>
                  <CardHeader tag="Common questions" />
                  <h2 className="sa-sec-h2-sm" style={{ marginBottom: '1.25rem' }}>{service.name} in {city.name} — FAQs</h2>
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
                </Reveal>
              )}

              {/* FINAL CTA CARD */}
              <Reveal id="book" className="sa-card sa-cta-block" style={{ '--sa-city-grad': ctaGrad } as React.CSSProperties}>
                <div className="sa-cta-circle" />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <CardHeader tag="Ready to book?" />
                  <h2 className="text-2xl font-bold mb-2">
                    Book {service.name} in {city.name} Today
                  </h2>
                  <p className="mb-6">Same-day service · Free instant quote · Eco-friendly products</p>
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
                </div>
              </Reveal>

              {/* PARENT LINKS */}
              <div className="sa-parent-links">
                <Link href={`/services/${service.slug}`} className="sa-parent-link">
                  About {service.name} (all areas)
                </Link>
                <Link href={`/${emirate.slug}/${city.slug}`} className="sa-parent-link">
                  All cleaning services in {city.name}
                </Link>
              </div>
            </main>

            {/* RIGHT RAIL — persistent quote box + trust + related services */}
            <StickyRail className="sa-rail-right" innerClassName="sa-rail">
              <QuoteCard
                id={`rail-quote-${emirate.slug}-${city.slug}-${service.slug}`}
                defaultService={service.name}
                source={`${service.name} in ${city.name} (sidebar)`}
                heading={`Get a free ${service.name.toLowerCase()} quote in ${city.name}.`}
                className="sa-rail-quote"
              />

              <div className="sa-rail-card">
                <div className="sa-rail-title">Why Madinat Alhaya</div>
                <div className="sa-trust-list">
                  <div className="sa-trust-item"><span className="sa-trust-check">✓</span>Licensed and insured</div>
                  <div className="sa-trust-item"><span className="sa-trust-check">✓</span>Eco-friendly products</div>
                  <div className="sa-trust-item"><span className="sa-trust-check">✓</span>Certified technicians</div>
                </div>
              </div>

              {siblingServices.length > 0 && (
                <div className="sa-rail-card">
                  <div className="sa-rail-title">Other Services in {city.name}</div>
                  {siblingServices.map((s) => (
                    <HoverImageLink
                      key={s.id}
                      href={`/${emirate.slug}/${city.slug}/${s.slug}`}
                      image={getServiceHoverImage(s.slug, city.slug)}
                      alt={`${s.name} in ${city.name}, ${emirate.name}`}
                      className="sa-rail-link"
                    >
                      {s.name}
                    </HoverImageLink>
                  ))}
                </div>
              )}
            </StickyRail>

          </div>
        </div>
      </div>

      <WhatsAppButton service={service.name} city={city.name} />
    </>
  )
}
