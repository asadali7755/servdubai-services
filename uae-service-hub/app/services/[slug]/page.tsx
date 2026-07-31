import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceVideoShowcase from '@/components/ServiceVideoShowcase'
import { services, getServiceBySlug } from '@/lib/data/services'
import { emirates, getCityBySlug } from '@/lib/data/emirates'
import { combosForService } from '@/lib/data/serviceAreaCombos'
import { buildMetadata, buildLocalBusinessSchema, buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return services.map((s) => ({ slug: s.slug }))
}

const serviceKeywords: Record<string, string[]> = {
  'sofa-cleaning': [
    'sofa cleaning Dubai', 'sofa cleaning Abu Dhabi', 'sofa cleaning Sharjah', 'sofa cleaning Ajman', 'sofa cleaning RAK', 'sofa cleaning Fujairah', 'sofa cleaning Umm Al Quwain',
    'sofa cleaning services Dubai', 'sofa deep cleaning Dubai', 'best sofa cleaning Dubai', 'sofa shampooing Dubai', 'upholstery cleaning Dubai', 'leather sofa cleaning Dubai',
    'sofa cleaning near me', 'sofa cleaning price Dubai', 'professional sofa cleaning UAE', 'sofa steam cleaning Dubai', 'couch cleaning Dubai',
  ],
  'carpet-cleaning': [
    'carpet cleaning Dubai', 'carpet cleaning Abu Dhabi', 'carpet cleaning Sharjah', 'carpet cleaning Ajman', 'carpet cleaning Ras Al Khaimah', 'carpet cleaning Fujairah', 'carpet cleaning UAQ',
    'carpet cleaning services Dubai', 'best carpet cleaning Dubai', 'carpet shampooing Dubai', 'steam carpet cleaning Dubai', 'rug cleaning Dubai',
    'carpet cleaning near me', 'carpet cleaning price Dubai', 'professional carpet cleaners UAE', 'eco-friendly carpet cleaning Dubai',
  ],
  'mattress-cleaning': [
    'mattress cleaning Dubai', 'mattress cleaning Abu Dhabi', 'mattress cleaning Sharjah', 'mattress cleaning Ajman', 'mattress cleaning RAK', 'mattress cleaning Fujairah', 'mattress cleaning UAQ',
    'mattress deep cleaning Dubai', 'mattress sanitization Dubai', 'mattress cleaning services Dubai', 'bed cleaning Dubai',
    'dust mite removal Dubai', 'mattress steam cleaning Dubai', 'mattress cleaning near me', 'mattress cleaning price Dubai',
  ],
  'curtain-cleaning': [
    'curtain cleaning Dubai', 'curtain cleaning Abu Dhabi', 'curtain cleaning Sharjah', 'curtain cleaning Ajman', 'curtain cleaning RAK', 'curtain cleaning Fujairah', 'curtain cleaning UAQ',
    'curtain cleaning services Dubai', 'curtain steam cleaning Dubai', 'blinds cleaning Dubai', 'curtain cleaning near me', 'professional curtain cleaning UAE', 'on-site curtain cleaning Dubai',
  ],
  'car-seat-cleaning': [
    'car interior cleaning Dubai', 'car seat cleaning Dubai', 'car seat cleaning Abu Dhabi', 'car seat cleaning Sharjah', 'car seat cleaning Ajman',
    'car detailing Dubai', 'car upholstery cleaning Dubai', 'car seat shampooing Dubai', 'car interior detailing UAE', 'car cleaning services Dubai', 'auto detailing Dubai',
  ],
  'dining-chair-cleaning': [
    'dining chair cleaning Dubai', 'dining chair cleaning Abu Dhabi', 'dining chair cleaning Sharjah', 'dining chair cleaning Ajman',
    'chair cleaning services Dubai', 'furniture cleaning Dubai', 'dining chair steam cleaning Dubai', 'restaurant chair cleaning UAE', 'upholstery cleaning Dubai',
  ],
  'villa-cleaning': [
    'villa cleaning Dubai', 'villa cleaning Abu Dhabi', 'villa cleaning Sharjah', 'villa cleaning Ajman', 'villa cleaning RAK', 'villa cleaning Fujairah', 'villa cleaning UAQ',
    'villa deep cleaning Dubai', 'best villa cleaning Dubai', 'villa cleaning services Dubai', 'house cleaning Dubai', 'home deep cleaning Dubai',
    'move in move out cleaning Dubai', 'villa cleaning near me', 'villa cleaning price Dubai',
  ],
  'apartment-cleaning': [
    'apartment cleaning Dubai', 'apartment cleaning Abu Dhabi', 'apartment cleaning Sharjah', 'apartment cleaning Ajman', 'apartment cleaning RAK', 'apartment cleaning Fujairah',
    'apartment deep cleaning Dubai', 'flat cleaning Dubai', 'apartment cleaning services Dubai', 'move in cleaning Dubai', 'move out cleaning Dubai',
    'end of tenancy cleaning Dubai', 'apartment cleaning near me', 'studio cleaning Dubai',
  ],
  'office-cleaning': [
    'office cleaning Dubai', 'office cleaning Abu Dhabi', 'office cleaning Sharjah', 'office cleaning Ajman', 'office cleaning RAK', 'office cleaning Fujairah', 'office cleaning UAQ',
    'office cleaning services Dubai', 'commercial cleaning Dubai', 'workplace cleaning Dubai', 'office cleaning company Dubai',
    'corporate office cleaning Dubai', 'janitorial services Dubai', 'office cleaning contract Dubai',
  ],
  'restaurant-kitchen-cleaning': [
    'kitchen cleaning Dubai', 'kitchen cleaning Abu Dhabi', 'kitchen cleaning Sharjah', 'kitchen cleaning Ajman',
    'restaurant kitchen cleaning Dubai', 'commercial kitchen cleaning Dubai', 'kitchen deep cleaning Dubai',
    'hood cleaning Dubai', 'grease trap cleaning Dubai', 'kitchen cleaning services UAE', 'restaurant cleaning Dubai',
  ],
  'marble-polishing': [
    'marble polishing Dubai', 'marble polishing Abu Dhabi', 'marble polishing Sharjah', 'marble polishing Ajman', 'marble polishing RAK', 'marble polishing Fujairah', 'marble polishing UAQ',
    'marble floor polishing Dubai', 'marble crystallization Dubai', 'marble restoration Dubai', 'stone polishing Dubai',
    'floor polishing Dubai', 'marble polishing near me', 'marble polishing price Dubai', 'terrazzo polishing Dubai',
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const seoTitle = service.heroTitle || `${service.name} Dubai | Professional ${service.name} Services UAE`
  return {
    ...buildMetadata({
      title: seoTitle,
      description: service.shortDescription,
      path: `/services/${slug}`,
    }),
    keywords: serviceKeywords[slug] || [`${service.name} Dubai`, `${service.name} UAE`, `professional ${service.name} services Dubai`],
  }
}

const stats = [
  { number: '7', label: 'Emirates' },
  { number: 'Same Day', label: 'Service' },
  { number: 'Free', label: 'Quote' },
  { number: 'Eco', label: 'Friendly' },
]

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const availableEmirates = emirates.filter((e) =>
    service.availableInEmirates.includes(e.id)
  )

  const serviceAreas = combosForService(slug)
    .map(({ emirate, city }) => ({ emirate, c: getCityBySlug(emirate, city) }))
    .filter((x) => x.c) as { emirate: string; c: NonNullable<ReturnType<typeof getCityBySlug>> }[]

  const localBusinessSchema = buildLocalBusinessSchema({ service: service.name, path: `/services/${service.slug}` })
  const serviceSchema = buildServiceSchema({
    serviceName: service.name,
    description: service.shortDescription,
    url: `/services/${slug}`,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${slug}` },
  ])
  const faqSchema = service.faqs.length > 0 ? buildFAQSchema(service.faqs) : null
  const paragraphs = service.fullDescription.split('\n\n').map((p) => p.trim()).filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* FULL-WIDTH HERO */}
      <div className="page-hero-wrap sp-hero">
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay sp-hero-overlay" />

        <nav className="sp-hero-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sp-hero-breadcrumb-sep">/</span>
          <span className="sp-hero-breadcrumb-cur">{service.name}</span>
        </nav>

        <div className="sp-hero-badge-wrap">
          <span className="sp-hero-badge">{service.category}</span>
        </div>

        <div className="sp-hero-bottom">
          <h1 className="sp-hero-h1">{service.heroTitle ?? service.name}</h1>
          <p className="sp-hero-sub">{service.heroSubtitle ?? service.shortDescription}</p>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="svc-stats-bar sp-stats-bar">
        <div className="sp-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="svc-stat-card">
              <div className="svc-stat-number sp-stat-num">{s.number}</div>
              <div className="sp-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO SHOWCASE — right after hero */}
      <ServiceVideoShowcase serviceSlug={slug} serviceName={service.name} />

      {/* MAIN CONTENT */}
      <div className="theme-svc-body sp-body">
        <div className="svc-grid sp-grid">

          {/* Left: description */}
          <div>
            <div className="svc-desc-card sp-desc-mb">
              <h2 className="svc-content-h sp-content-h2">About {service.heroTitle ?? service.name}</h2>
              {paragraphs.map((para, i) => (
                <p key={i} className="svc-content-p sp-content-p">{para}</p>
              ))}
            </div>

            {/* Rich content sections */}
            {service.contentSections && service.contentSections.length > 0 && (
              <div className="svc-desc-card sp-desc-mb">
                {service.contentSections.map((section, i) => (
                  <div key={i} className="sp-section-mb" style={i === 0 ? undefined : undefined}>
                    {section.heading && section.headingLevel === 'h2' && (
                      <h2 className="sp-section-h2" style={i === 0 ? { marginTop: 0 } : { marginTop: '1.5rem' }}>
                        {section.heading}
                      </h2>
                    )}
                    {section.heading && section.headingLevel === 'h3' && (
                      <h3 className="sp-section-h3">{section.heading}</h3>
                    )}
                    {section.text && (
                      <p className="sp-section-p">{section.text}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Specialist site banner */}
            {service.externalWebsite && (
              <div className="svc-specialist-card sp-specialist">
                <div>
                  <div className="sp-specialist-label">Specialist Site</div>
                  <div className="svc-content-h sp-specialist-name">{service.externalWebsite.name}</div>
                </div>
                <a href={service.externalWebsite.url} target="_blank" rel="noopener noreferrer" className="sp-specialist-link">
                  Visit Site ↗
                </a>
              </div>
            )}

            {/* SERVICE AREAS */}
            <div>
              <div className="sp-sec-head">
                <div className="sp-sec-bar" />
                <h2 className="svc-content-h sp-sec-h2">Service Areas</h2>
              </div>

              <div className="sp-area-grid">
                {availableEmirates.map((emirate) => (
                  <a key={emirate.id} href={`/${emirate.slug}`} className="svc-area-card sp-area-card">
                    <div className="sp-area-inner">
                      <div className="svc-area-img sp-area-img">
                        <Image src={emirate.image} alt={emirate.name} fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="sp-area-overlay" />
                      <div className="sp-area-bottom">
                        <div className="sp-area-name">{emirate.name}</div>
                        <div className="sp-area-count">{emirate.cities.length} areas →</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky booking sidebar */}
          <div className="svc-sidebar">
            <div className="sp-sidebar-label">Book Now</div>
            <h3 className="svc-content-h sp-sidebar-h3">{service.name}</h3>

            <div className="svc-sidebar-divider sp-sidebar-divider">
              {[
                'Free instant quote',
                'Same-day service available',
                'All 7 UAE Emirates covered',
                'Certified technicians',
                'Eco-friendly products',
              ].map((feat) => (
                <div key={feat} className="sp-sidebar-feat">
                  <div className="sp-sidebar-dot" />
                  <span className="svc-feat-txt sp-sidebar-feat-txt">{feat}</span>
                </div>
              ))}
            </div>

            <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer" className="svc-book-btn sp-sidebar-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              Book via WhatsApp
            </a>

            <a href={`tel:${SITE_CONFIG.phone}`} className="sp-sidebar-call">
              Call {SITE_CONFIG.phone}
            </a>

            {/* Before & After Gallery — sofa cleaning */}
            {slug === 'sofa-cleaning' && (
              <div className="ba-gallery">
                <div className="ba-gallery-head">
                  <div className="sp-sec-bar" />
                  <h3 className="ba-gallery-title">Before &amp; After Results</h3>
                </div>
                {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                  <div key={n} className="ba-pair">
                    <div className="ba-img-wrap">
                      <span className="ba-label ba-label-before">Before</span>
                      <Image
                        src={`/images/sofa-before-after/before-${n}.jpeg`}
                        alt={`Sofa cleaning before - stained sofa cushions requiring professional deep cleaning in Dubai - Job ${n}`}
                        width={400}
                        height={300}
                        className="ba-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="ba-img-wrap">
                      <span className="ba-label ba-label-after">After</span>
                      <Image
                        src={`/images/sofa-before-after/after-${n}.jpeg`}
                        alt={`Sofa cleaning after - professionally cleaned sofa with stains removed by Al Haya in Dubai - Job ${n}`}
                        width={400}
                        height={300}
                        className="ba-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* FAQ SECTION */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="sp-faq-wrap">
            <div className="sp-faq-head">
              <div className="sp-sec-bar" />
              <h2 className="sp-sec-h2-normal">Frequently Asked Questions</h2>
            </div>
            <div className="sp-faq-list">
              {service.faqs.map((faq, i) => (
                <details key={i} className="sp-faq-item">
                  <summary className="sp-faq-summary">
                    {faq.question}
                    <span className="sp-faq-plus">+</span>
                  </summary>
                  <div className="sp-faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* AVAILABLE IN THESE DUBAI AREAS */}
        {serviceAreas.length > 0 && (
          <div className="sp-mt-3">
            <div className="sp-sec-head">
              <div className="sp-sec-bar" />
              <h2 className="svc-content-h sp-sec-h2-sm">
                {service.name.split(/[&]/)[0].trim()} — Available in These Dubai Areas
              </h2>
            </div>
            <div className="sp-combo-pills">
              {serviceAreas.map(({ emirate, c }) => (
                <Link key={`${emirate}-${c.slug}`} href={`/${emirate}/${c.slug}/${service.slug}`} className="sp-combo-pill">
                  <span className="sp-combo-arrow">→</span>
                  {service.name.split(/[&]/)[0].trim()} in {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM CTA BANNER */}
        <div className="svc-cta-banner sp-cta-banner">
          <div className="sp-cta-circle-tr" />
          <div className="sp-cta-circle-bl" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="sp-cta-h2">Ready to Book {service.name}?</h2>
            <p className="sp-cta-sub">Same-day service across all UAE Emirates — free quote in minutes.</p>
            <div className="sp-cta-btns">
              <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer" className="svc-book-btn sp-cta-wa">
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="sp-cta-call">
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton service={service.name} />
    </>
  )
}
