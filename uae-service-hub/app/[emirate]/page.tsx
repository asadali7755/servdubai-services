import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import { emirates, getEmirateBySlug } from '@/lib/data/emirates'
import { services } from '@/lib/data/services'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { getEmirateCoords } from '@/lib/data/cityCoordinates'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'
import { SiteHero } from '@/components/ui/site-hero'

type Props = { params: Promise<{ emirate: string }> }

export async function generateStaticParams(): Promise<{ emirate: string }[]> {
  return emirates.map((e) => ({ emirate: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) return {}

  const emirateKeywords: Record<string, string[]> = {
    dubai: [
      'cleaning services Dubai', 'best cleaning company Dubai', 'deep cleaning Dubai',
      'sofa cleaning Dubai', 'carpet cleaning Dubai', 'marble polishing Dubai', 'mattress cleaning Dubai',
      'curtain cleaning Dubai', 'villa cleaning Dubai', 'villa deep cleaning Dubai', 'apartment cleaning Dubai',
      'office cleaning Dubai', 'kitchen cleaning Dubai', 'car interior cleaning Dubai',
      'sofa cleaning services Dubai', 'carpet cleaning services Dubai', 'marble polishing services Dubai',
      'deep cleaning Dubai Marina', 'cleaning services Downtown Dubai', 'cleaning services Palm Jumeirah',
      'cleaning services JBR', 'cleaning services Arabian Ranches', 'same-day cleaning Dubai',
      'move in move out cleaning Dubai', 'house cleaning Dubai', 'home cleaning Dubai',
    ],
    'abu-dhabi': [
      'cleaning services Abu Dhabi', 'best cleaning company Abu Dhabi', 'deep cleaning Abu Dhabi',
      'sofa cleaning Abu Dhabi', 'carpet cleaning Abu Dhabi', 'marble polishing Abu Dhabi', 'mattress cleaning Abu Dhabi',
      'curtain cleaning Abu Dhabi', 'villa cleaning Abu Dhabi', 'villa deep cleaning Abu Dhabi', 'apartment cleaning Abu Dhabi',
      'office cleaning Abu Dhabi', 'kitchen cleaning Abu Dhabi', 'car interior cleaning Abu Dhabi',
      'house cleaning Abu Dhabi', 'home cleaning Abu Dhabi', 'marble crystallization Abu Dhabi',
    ],
    sharjah: [
      'cleaning services Sharjah', 'best cleaning company Sharjah', 'deep cleaning Sharjah',
      'sofa cleaning Sharjah', 'carpet cleaning Sharjah', 'marble polishing Sharjah', 'mattress cleaning Sharjah',
      'curtain cleaning Sharjah', 'villa cleaning Sharjah', 'villa deep cleaning Sharjah', 'apartment cleaning Sharjah',
      'office cleaning Sharjah', 'kitchen cleaning Sharjah', 'house cleaning Sharjah', 'home cleaning Sharjah',
    ],
    ajman: [
      'cleaning services Ajman', 'best cleaning company Ajman', 'deep cleaning Ajman',
      'sofa cleaning Ajman', 'carpet cleaning Ajman', 'marble polishing Ajman', 'mattress cleaning Ajman',
      'curtain cleaning Ajman', 'villa cleaning Ajman', 'apartment cleaning Ajman',
      'office cleaning Ajman', 'kitchen cleaning Ajman', 'house cleaning Ajman', 'home cleaning Ajman',
    ],
    'ras-al-khaimah': [
      'cleaning services Ras Al Khaimah', 'cleaning services RAK', 'best cleaning company RAK', 'deep cleaning RAK',
      'sofa cleaning RAK', 'carpet cleaning RAK', 'marble polishing RAK', 'mattress cleaning RAK',
      'curtain cleaning RAK', 'villa cleaning RAK', 'villa deep cleaning RAK', 'apartment cleaning RAK',
      'office cleaning RAK', 'house cleaning RAK', 'home cleaning Ras Al Khaimah',
    ],
    fujairah: [
      'cleaning services Fujairah', 'best cleaning company Fujairah', 'deep cleaning Fujairah',
      'sofa cleaning Fujairah', 'carpet cleaning Fujairah', 'marble polishing Fujairah', 'mattress cleaning Fujairah',
      'curtain cleaning Fujairah', 'villa cleaning Fujairah', 'apartment cleaning Fujairah',
      'office cleaning Fujairah', 'kitchen cleaning Fujairah', 'house cleaning Fujairah', 'home cleaning Fujairah',
    ],
    'umm-al-quwain': [
      'cleaning services Umm Al Quwain', 'cleaning services UAQ', 'best cleaning company UAQ', 'deep cleaning UAQ',
      'sofa cleaning UAQ', 'carpet cleaning UAQ', 'marble polishing UAQ', 'mattress cleaning UAQ',
      'curtain cleaning UAQ', 'villa cleaning UAQ', 'villa deep cleaning UAQ', 'apartment cleaning UAQ',
      'office cleaning UAQ', 'house cleaning UAQ', 'home cleaning UAQ',
    ],
  }

  return {
    ...buildMetadata({
      title: `Best Cleaning Services ${emirate.name} | Professional Cleaning Company ${emirate.name}`,
      description: `Best professional cleaning services in ${emirate.name} — villa deep cleaning, sofa cleaning, carpet cleaning, marble polishing, office cleaning & more. Same-day service. Call +971 55 127 5545.`,
      path: `/${emirateSlug}`,
    }),
    keywords: emirateKeywords[emirateSlug] || [`cleaning services ${emirate.name}`, `best cleaning company ${emirate.name}`],
  }
}

const getWhyUs = (emirateName: string) => [
  { title: 'Trained Cleaning Professionals', desc: `Background-checked, experienced technicians delivering villa deep cleaning, sofa cleaning, and carpet cleaning across ${emirateName}.` },
  { title: 'Eco-Friendly Cleaning Products', desc: `Safe for children, pets, and allergy sufferers. Our non-toxic, biodegradable solutions are perfect for residential and commercial cleaning in ${emirateName}.` },
  { title: 'Same-Day Cleaning Service', desc: `Book deep cleaning, marble polishing, or office cleaning today — our team arrives the same day across all ${emirateName} areas.` },
  { title: 'Free Instant Quote', desc: `WhatsApp us for a free cleaning service quote in ${emirateName}. Transparent pricing, no hidden fees — villa cleaning, apartment cleaning, or office cleaning.` },
  { title: 'All Fabric & Surface Types', desc: `Professional sofa cleaning, carpet cleaning, curtain cleaning, marble polishing, mattress cleaning, and car interior detailing — all available in ${emirateName}.` },
  { title: '100% Satisfaction Guaranteed', desc: `Not satisfied with your deep cleaning or sofa cleaning in ${emirateName}? We return at no extra charge. Every job backed by our satisfaction guarantee.` },
]

const getHowItWorks = (emirateName: string) => [
  { step: '01', title: 'Book Your Cleaning Service', desc: `WhatsApp or call us to book villa deep cleaning, sofa cleaning, carpet cleaning, or any service in ${emirateName}.` },
  { step: '02', title: 'Get a Free Quote', desc: `Receive a free instant quote for your home cleaning or office cleaning in ${emirateName} — no obligations, transparent pricing.` },
  { step: '03', title: 'Professional Team Arrives', desc: `Our trained cleaning professionals arrive on time with commercial-grade equipment for deep cleaning, marble polishing, or upholstery cleaning in ${emirateName}.` },
  { step: '04', title: 'Spotless & Sanitized', desc: `Your villa, apartment, or office in ${emirateName} is left hygienically clean and sanitized — 100% satisfaction guaranteed.` },
]

const getFaqs = (emirateName: string) => [
  { q: `What cleaning services are available in ${emirateName}?`, a: `Madinat Alhaya offers a full range of professional cleaning services in ${emirateName} including villa deep cleaning, sofa and upholstery cleaning, carpet and rug cleaning, marble polishing and crystallization, mattress cleaning, curtain cleaning, office and commercial cleaning, kitchen deep cleaning, and car interior detailing. All services are available for same-day booking.` },
  { q: `How much does deep cleaning cost in ${emirateName}?`, a: `Deep cleaning prices in ${emirateName} vary based on the property size and type of service. A standard apartment deep clean starts from AED 300, while villa deep cleaning starts from AED 600. We provide free, no-obligation quotes via WhatsApp — just send us your property details and we respond within minutes with transparent pricing.` },
  { q: `Do you offer same-day cleaning service in ${emirateName}?`, a: `Yes, Madinat Alhaya provides same-day cleaning services across all areas in ${emirateName}. Contact us before 2 PM for same-day availability. Our team of trained professionals arrives with all necessary commercial-grade equipment — no waiting, no delays.` },
  { q: `Are your cleaning products safe for children and pets in ${emirateName}?`, a: `Absolutely. We exclusively use eco-friendly, non-toxic, and biodegradable cleaning solutions that are completely safe for children, pets, and allergy sufferers. Our products are powerful enough to eliminate stains, odors, and bacteria while remaining gentle on your family and the environment.` },
  { q: `How do I book a cleaning service in ${emirateName}?`, a: `Booking is simple: WhatsApp us at +971 55 127 5545 or call directly. Tell us the service you need, your location in ${emirateName}, and your preferred date. We'll provide a free instant quote and confirm your booking — most requests are confirmed within 10 minutes.` },
  { q: `What areas in ${emirateName} do you cover?`, a: `Madinat Alhaya covers all residential and commercial areas across ${emirateName}. Whether you're in a villa community, apartment tower, or commercial district, our team reaches you. We maintain dedicated crews for ${emirateName} to ensure prompt arrival and familiarity with local properties.` },
]

const getAboutContent = (emirateName: string, cityCount: number) => `Madinat Alhaya Building Cleaning Services is ${emirateName}'s trusted professional cleaning company, serving ${cityCount} areas with comprehensive residential and commercial cleaning solutions. Our ${emirateName} division employs trained, background-checked professionals who specialize in villa deep cleaning, sofa and upholstery care, carpet steam cleaning, marble polishing and crystallization, mattress sanitization, and office cleaning. Every technician undergoes rigorous training on international cleaning standards and uses commercial-grade equipment — from truck-mounted carpet extractors to Italian diamond marble polishing machines. We've built our reputation in ${emirateName} on three principles: transparent pricing with no hidden fees, same-day service availability, and a 100% satisfaction guarantee on every job. Whether you need a one-time deep clean for a move-in or ongoing maintenance for your office building, Madinat Alhaya delivers consistent, professional results across ${emirateName}.`

export default async function EmiratePage({ params }: Props) {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) notFound()

  const emirateCoords = getEmirateCoords(emirateSlug)
  const schema = buildLocalBusinessSchema({
    emirate: emirate.name,
    path: `/${emirateSlug}`,
    coords: emirateCoords
      ? {
          lat: emirateCoords.lat,
          lng: emirateCoords.lng,
          radiusMeters: emirateCoords.radiusMeters,
          addressLocality: emirate.name,
          addressRegion: emirateCoords.addressRegion,
        }
      : undefined,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirateSlug}` },
  ])
  const faqs = getFaqs(emirate.name)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* BREADCRUMB */}
      <nav className="text-sm text-gray-400 max-w-6xl mx-auto px-4 pt-6 pb-2 cp-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="mx-2 cp-breadcrumb-sep">/</span>
        <span className="text-white">{emirate.name}</span>
      </nav>

      {/* HERO */}
      <SiteHero
        badge="Madinat Alhaya Cleaning"
        title={`Cleaning Services in ${emirate.name}`}
        subtitle={`Best professional cleaning company in ${emirate.name} — villa deep cleaning, sofa cleaning, carpet cleaning, marble polishing & office cleaning. Same-day service available.`}
        backgroundImage={emirate.image}
        backgroundAlt={`Professional cleaning services in ${emirate.name} by Madinat Alhaya`}
        getFreeQuoteLabel="Get Free Quote"
        learnMoreLabel="About Us"
        ourWebsitesLabel="Our Websites ↗"
        contactInfo={{ website: 'servedubai.ae', phone: SITE_CONFIG.phoneDisplay, address: `${emirate.cities.length} Areas Covered` }}
      />

      {/* STATS BAR */}
      <div className="ep-stats">
        <div className="ep-stats-inner">
          {[
            { number: emirate.cities.length.toString(), label: 'Service Areas' },
            { number: services.length.toString()+'+', label: 'Services' },
            { number: 'Same Day', label: 'Availability' },
            { number: '500+', label: 'Happy Clients' },
            { number: 'Free', label: 'Quote' },
          ].map((s, i) => (
            <div key={s.label} className={`ep-stat${i > 0 ? ' pg-stat-bordered' : ''}`}>
              <div className="ep-stat-num">{s.number}</div>
              <div className="ep-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ep-main emir-main">

        {/* SELECT YOUR AREA */}
        <div className="ep-block">
          <div className="ep-sec-head">
            <div className="ep-sec-bar" />
            <div>
              <div className="ep-sec-label">Browse by Location</div>
              <h2 className="ep-sec-h2">Select Your Area in {emirate.name}</h2>
            </div>
          </div>
          <p className="ep-sec-sub">Click on your area to see available services and book instantly.</p>

          {(() => {
            const cityImages = [
              '/images/hero/villa-apartment-cleaning-services.webp',
              '/images/hero/sofa-carpet-cleaning.webp',
              '/images/hero/professional-cleaning-services-UAE.webp',
              '/images/hero/marble-polishing-dubai.webp',
              '/images/hero/cleaning-services-UAE.webp',
            ]
            return (
              <div className="ep-city-grid">
                {emirate.cities.map((city, i) => (
                  <Link key={city.id} href={`/${emirate.slug}/${city.slug}`} className="ep-city-card emir-city-img-card">
                    <Image src={cityImages[i % cityImages.length]} alt={city.name} fill className="object-cover emir-city-img-inner" sizes="220px" />
                    <div className="ep-city-overlay" />
                    <div className="ep-city-badge">{String(i + 1).padStart(2, '0')}</div>
                    <div className="ep-city-bottom">
                      <div className="ep-city-name">{city.name}</div>
                      <div className="ep-city-svc">{services.length} services →</div>
                    </div>
                  </Link>
                ))}
              </div>
            )
          })()}
        </div>

        {/* SERVICES AVAILABLE */}
        <div className="ep-block">
          <div className="ep-sec-head">
            <div className="ep-sec-bar" />
            <div>
              <div className="ep-sec-label">What We Offer</div>
              <h2 className="ep-sec-h2">Services Available in {emirate.name}</h2>
            </div>
          </div>
          <p className="ep-sec-sub">{services.length} professional cleaning services, all available across {emirate.name}.</p>

          <div className="ep-svc-grid">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="emir-svc-card">
                <div className="emir-svc-card-img">
                  <Image src={service.images[0]} alt={service.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 290px" />
                </div>
                <div className="ep-svc-overlay" />
                <div className="ep-svc-badge-wrap ep-svc-badge-left">
                  <span className="ep-svc-cat-badge">{service.category}</span>
                </div>
                <div className="ep-svc-badge-wrap ep-svc-badge-right">
                  <span className="ep-svc-book-badge">Book Now</span>
                </div>
                <div className="ep-svc-bottom">
                  <div className="ep-svc-name">{service.name}</div>
                  <div className="ep-svc-desc">{service.shortDescription.slice(0, 70)}…</div>
                  <div className="ep-svc-link">View Details →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="ep-block">
          <div className="ep-why-wrap why-grid">
            <div className="ep-why-left why-left-panel">
              <div className="ep-why-bignum">06</div>
              <div>
                <div className="ep-why-label">Our Promise</div>
                <h2 className="ep-why-h2">Why Choose<br />Madinat Alhaya in<br />{emirate.name}</h2>
                <p className="ep-why-sub">Trusted by hundreds of homes and businesses across {emirate.name}.</p>
              </div>
              <div className="ep-why-pills">
                {[
                  { n: '500+', l: 'Happy Clients' },
                  { n: '100%', l: 'Satisfaction Rate' },
                  { n: 'Same Day', l: 'Service' },
                ].map((s) => (
                  <div key={s.l} className="ep-why-pill">
                    <span className="ep-why-pill-num">{s.n}</span>
                    <span className="ep-why-pill-label why-stat-label">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ep-why-right why-right-panel">
              {getWhyUs(emirate.name).map((item, i) => (
                <div key={item.title} className="why-row" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="ep-why-row-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="ep-why-divider" />
                  <div>
                    <div className="why-title" style={{ fontFamily: 'var(--font-josefin)' }}>{item.title}</div>
                    <div className="ep-why-desc why-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="ep-block">
          <div className="ep-sec-head">
            <div className="ep-sec-bar" />
            <div>
              <div className="ep-sec-label">Simple Process</div>
              <h2 className="ep-sec-h2">How It Works</h2>
            </div>
          </div>
          <p className="ep-sec-sub-lg">Book a cleaning in {emirate.name} in four simple steps.</p>

          <div className="ep-hiw-grid">
            {getHowItWorks(emirate.name).map((step) => (
              <div key={step.step} className="ep-hiw-card how-it-works-card">
                <div className="ep-hiw-bignum">{step.step}</div>
                <div className="ep-hiw-step">Step {step.step}</div>
                <h3 className="ep-hiw-h3">{step.title}</h3>
                <p className="ep-hiw-p">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT OUR SERVICES */}
        <div className="ep-block">
          <div className="ep-sec-head">
            <div className="ep-sec-bar" />
            <div>
              <div className="ep-sec-label">About Our Services</div>
              <h2 className="ep-sec-h2">Professional Cleaning in {emirate.name}</h2>
            </div>
          </div>
          <p className="ep-about-body">{getAboutContent(emirate.name, emirate.cities.length)}</p>
        </div>

        {/* FAQ SECTION */}
        <div className="ep-block">
          <div className="ep-sec-head">
            <div className="ep-sec-bar" />
            <div>
              <div className="ep-sec-label">Common Questions</div>
              <h2 className="ep-sec-h2">Frequently Asked Questions — {emirate.name}</h2>
            </div>
          </div>
          <div className="ep-faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="ep-faq-item">
                <summary className="ep-faq-summary">
                  <span className="ep-faq-q-num">Q{i + 1}</span>
                  {faq.q}
                </summary>
                <div className="ep-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="ep-trust-bar">
          {[
            '✓  Licensed & Insured',
            '✓  Background-Checked Staff',
            '✓  Professional Equipment',
            '✓  Eco-Friendly Solutions',
            '✓  Satisfaction Guaranteed',
          ].map((item) => (
            <span key={item} className="ep-trust-item">
              <span className="ep-trust-check">{item.slice(0, 1)}</span>{item.slice(1)}
            </span>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="ep-cta-banner emir-cta-banner">
          <div className="ep-cta-circle ep-cta-circle-tr" />
          <div className="ep-cta-circle ep-cta-circle-bl" />
          <div className="ep-cta-inner">
            <div className="ep-cta-label">Ready to Book?</div>
            <h2 className="ep-cta-h2">Book a Cleaning in {emirate.name} Today</h2>
            <p className="ep-cta-p">Same-day service available across all {emirate.cities.length} areas in {emirate.name}. Free instant quote — we respond in minutes.</p>
            <div className="ep-cta-btns">
              <a href={getWhatsAppLink(undefined, emirate.name)} target="_blank" rel="noopener noreferrer" className="ep-cta-wa svc-book-btn">WhatsApp Now</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="ep-cta-call">Call {SITE_CONFIG.phone}</a>
            </div>
            <QuoteCard
              id={`quote-${emirate.slug}`}
              source={`Emirate page — ${emirate.name}`}
              heading={`Get a free quote in ${emirate.name}.`}
              className="page-quote-card"
            />
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
