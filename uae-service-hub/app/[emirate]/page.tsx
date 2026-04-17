import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { emirates, getEmirateBySlug } from '@/lib/data/emirates'
import { services } from '@/lib/data/services'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

type Props = { params: Promise<{ emirate: string }> }

export async function generateStaticParams(): Promise<{ emirate: string }[]> {
  return emirates.map((e) => ({ emirate: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) return {}
  return buildMetadata({
    title: `Cleaning Services in ${emirate.name} | Al Haya`,
    description: `Professional cleaning services across ${emirate.name}. Sofa, carpet, villa, marble and more. Call 0551275545.`,
    path: `/${emirateSlug}`,
  })
}

const whyUs = [
  { title: 'Certified Technicians', desc: 'Background-checked, trained professionals on every job.' },
  { title: 'Eco-Friendly Products', desc: 'Safe for children, pets, and the environment.' },
  { title: 'Same-Day Service', desc: 'Book today, we arrive today across all areas.' },
  { title: 'Free Instant Quote', desc: 'Message on WhatsApp — get a price in minutes.' },
  { title: 'All Fabric & Surface Types', desc: 'Sofa, carpet, marble, leather, curtains and more.' },
  { title: 'Satisfaction Guaranteed', desc: 'Not happy? We come back at no extra charge.' },
]

const howItWorks = [
  { step: '01', title: 'Contact Us', desc: 'Send a WhatsApp message or call. Tell us the service and your area.' },
  { step: '02', title: 'Get a Quote', desc: 'Receive a free instant quote tailored to your home or office.' },
  { step: '03', title: 'We Arrive', desc: 'Our certified technicians arrive on time with all equipment.' },
  { step: '04', title: 'Spotless Result', desc: 'Your space is left hygienically clean — guaranteed.' },
]

export default async function EmiratePage({ params }: Props) {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) notFound()

  const schema = buildLocalBusinessSchema({ emirate: emirate.name })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ══════════════════════════════════════
          CINEMATIC HERO
      ══════════════════════════════════════ */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(420px, 65vh, 600px)', overflow: 'hidden' }}>
        <div className="emir-hero-img" style={{ position: 'absolute', inset: 0 }}>
          <Image src={emirate.image} alt={emirate.name} fill priority className="object-cover" sizes="100vw" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.93) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 65%)' }} />

        {/* Breadcrumb */}
        <nav style={{ position: 'absolute', top: '90px', left: '2rem', zIndex: 5, fontSize: '0.8rem' }}>
          <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: '#6b7280', margin: '0 0.5rem' }}>/</span>
          <span style={{ color: '#e5e7eb' }}>{emirate.name}</span>
        </nav>

        {/* Hero content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 5, padding: '2rem 2rem 3rem', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
            <div style={{ width: '28px', height: '2px', background: '#c9a84c' }} />
            <span style={{ color: '#c9a84c', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Al Haya Cleaning</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-josefin)', fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.875rem',
            textShadow: '0 2px 24px rgba(0,0,0,0.6)',
          }}>
            Cleaning Services<br />in {emirate.name}
          </h1>
          <h2 style={{ color: '#d1d5db', fontSize: '1.05rem', fontWeight: 400, marginBottom: '2rem', lineHeight: 1.6 }}>
            Professional cleaning across {emirate.cities.length} areas — certified technicians, same-day service
          </h2>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a href={getWhatsAppLink(undefined, emirate.name)} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.85rem',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff', fontWeight: 700, borderRadius: '500px',
                textDecoration: 'none', fontSize: '0.9rem',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
              Get Free Quote
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.85rem 1.85rem',
                border: '2px solid rgba(255,255,255,0.55)', color: '#fff',
                fontWeight: 600, borderRadius: '500px', textDecoration: 'none', fontSize: '0.9rem',
              }}>
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <div style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap' }}>
          {[
            { number: emirate.cities.length.toString(), label: 'Service Areas' },
            { number: services.length.toString()+'+', label: 'Services' },
            { number: 'Same Day', label: 'Availability' },
            { number: '500+', label: 'Happy Clients' },
            { number: 'Free', label: 'Quote' },
          ].map((s, i) => (
            <div key={s.label} style={{
              flex: '1', minWidth: '100px', textAlign: 'center', padding: '1.25rem 0.75rem',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div className="svc-stat-number" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.4rem', fontWeight: 700, color: '#c9a84c', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '0.65rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }} className="emir-main">

        {/* ══════════════════════════════════════
            SELECT YOUR AREA
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '4px', height: '2rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))', borderRadius: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Browse by Location</div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.7rem', fontWeight: 700, color: '#fff' }}>
                Select Your Area in {emirate.name}
              </h2>
            </div>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.75rem', paddingLeft: '1.25rem' }}>
            Click on your area to see available services and book instantly.
          </p>

          {(() => {
            const cityImages = [
              '/images/hero/villa-apartment-cleaning.jpg',
              '/images/hero/sofa-carpet.webp',
              '/images/hero/professional-cleaning-services.webp',
              '/images/hero/marble-polishing.jpg',
              '/images/hero/all-uae.webp',
            ]
            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {emirate.cities.map((city, i) => (
                  <Link
                    key={city.id}
                    href={`/${emirate.slug}/${city.slug}`}
                    className="emir-city-img-card"
                    style={{
                      display: 'block', textDecoration: 'none',
                      position: 'relative', height: '180px',
                      borderRadius: '8px', overflow: 'hidden',
                      border: '1px solid rgba(201,168,76,0.15)',
                    }}
                  >
                    <Image
                      src={cityImages[i % cityImages.length]}
                      alt={city.name}
                      fill
                      className="object-cover emir-city-img-inner"
                      sizes="220px"
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.08) 100%)',
                    }} />
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', fontFamily: 'var(--font-josefin)', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(201,168,76,0.85)', letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.875rem 1rem' }}>
                      <div style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                        {city.name}
                      </div>
                      <div style={{ color: '#c9a84c', fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                        {services.length} services →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )
          })()}
        </div>

        {/* ══════════════════════════════════════
            SERVICES AVAILABLE
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '4px', height: '2rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))', borderRadius: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>What We Offer</div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.7rem', fontWeight: 700, color: '#fff' }}>
                Services Available in {emirate.name}
              </h2>
            </div>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.75rem', paddingLeft: '1.25rem' }}>
            {services.length} professional cleaning services, all available across {emirate.name}.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.1rem' }}>
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="emir-svc-card">
                <div className="emir-svc-card-img">
                  <Image
                    src={service.images[0]} alt={service.name} fill className="object-cover"
                    sizes="(max-width: 640px) 100vw, 290px"
                  />
                </div>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.15) 100%)',
                }} />
                {/* Category badge */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  <span style={{
                    padding: '0.25rem 0.7rem', background: '#c9a84c', color: '#111',
                    fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '2px',
                  }}>{service.category}</span>
                </div>
                {/* Book now badge */}
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                  <span style={{
                    padding: '0.25rem 0.7rem', background: '#25D366', color: '#fff',
                    fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em', borderRadius: '2px',
                  }}>Book Now</span>
                </div>
                {/* Text area with solid dark backdrop */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1rem 1.1rem 1.2rem',
                  background: 'rgba(0,0,0,0.72)',
                  backdropFilter: 'blur(2px)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-josefin)', fontSize: '1rem', fontWeight: 700,
                    color: '#ffffff', marginBottom: '0.35rem',
                    textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                  }}>
                    {service.name}
                  </div>
                  <div style={{
                    color: '#e5e7eb', fontSize: '0.75rem', lineHeight: 1.45,
                    marginBottom: '0.5rem',
                    textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                  }}>
                    {service.shortDescription.slice(0, 70)}…
                  </div>
                  <div style={{ color: '#c9a84c', fontSize: '0.72rem', letterSpacing: '0.06em', fontWeight: 700 }}>
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            WHY CHOOSE US — editorial split layout
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '0',
            background: 'linear-gradient(135deg, #0d1b35 0%, #1a1a1a 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '12px',
            overflow: 'hidden',
          }} className="why-grid">

            {/* Left decorative panel */}
            <div style={{
              background: 'linear-gradient(160deg, #1a0a2e 0%, #0d1b35 60%, #1a1505 100%)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRight: '1px solid rgba(201,168,76,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative big number */}
              <div style={{
                position: 'absolute', bottom: '-1rem', right: '-0.5rem',
                fontFamily: 'var(--font-josefin)', fontSize: '8rem', fontWeight: 700,
                color: 'rgba(201,168,76,0.06)', lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}>06</div>

              <div>
                <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Our Promise
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-josefin)', fontSize: '1.6rem', fontWeight: 700,
                  color: '#fff', lineHeight: 1.2, marginBottom: '1rem',
                }}>
                  Why Choose<br />Al Haya in<br />{emirate.name}
                </h2>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.65 }}>
                  Trusted by hundreds of homes and businesses across {emirate.name}.
                </p>
              </div>

              {/* Stat pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '2rem', position: 'relative', zIndex: 1 }}>
                {[
                  { n: '500+', l: 'Happy Clients' },
                  { n: '100%', l: 'Satisfaction Rate' },
                  { n: 'Same Day', l: 'Service' },
                ].map((s) => (
                  <div key={s.l} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '6px', padding: '0.5rem 0.875rem',
                  }}>
                    <span style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#c9a84c', fontSize: '1rem' }}>{s.n}</span>
                    <span style={{ color: '#9ca3af', fontSize: '0.7rem', letterSpacing: '0.05em' }}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: animated feature rows */}
            <div style={{ padding: '1.5rem 1.75rem' }}>
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className="why-row"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Number */}
                  <div style={{
                    fontFamily: 'var(--font-josefin)', fontSize: '1.4rem', fontWeight: 700,
                    color: 'rgba(201,168,76,0.25)', lineHeight: 1, flexShrink: 0, minWidth: '36px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {/* Gold divider */}
                  <div style={{ width: '2px', height: '2.5rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.15))', borderRadius: '2px', flexShrink: 0 }} />
                  {/* Text */}
                  <div>
                    <div className="why-title" style={{ fontFamily: 'var(--font-josefin)' }}>{item.title}</div>
                    <div style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════ */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '4px', height: '2rem', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))', borderRadius: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Simple Process</div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.7rem', fontWeight: 700, color: '#fff' }}>
                How It Works
              </h2>
            </div>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem', paddingLeft: '1.25rem' }}>
            Book a cleaning in {emirate.name} in four simple steps.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {howItWorks.map((step) => (
              <div key={step.step} style={{
                background: 'linear-gradient(160deg, #1a0a2e 0%, #1a1a1a 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '8px',
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '1rem', right: '1.25rem',
                  fontFamily: 'var(--font-josefin)', fontSize: '3.5rem', fontWeight: 700,
                  color: 'rgba(201,168,76,0.07)', lineHeight: 1, pointerEvents: 'none',
                }}>
                  {step.step}
                </div>
                <div style={{
                  display: 'inline-block', padding: '0.3rem 0.8rem',
                  background: 'rgba(201,168,76,0.12)', color: '#c9a84c',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                  borderRadius: '4px', marginBottom: '1rem',
                }}>
                  Step {step.step}
                </div>
                <h3 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            TRUST BAR
        ══════════════════════════════════════ */}
        <div style={{
          background: 'rgba(201,168,76,0.05)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '10px',
          padding: '2rem',
          marginBottom: '5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {[
            '✓  Licensed & Insured',
            '✓  Background-Checked Staff',
            '✓  Professional Equipment',
            '✓  Eco-Friendly Solutions',
            '✓  Satisfaction Guaranteed',
          ].map((item) => (
            <span key={item} style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span style={{ color: '#c9a84c' }}>{item.slice(0, 1)}</span>{item.slice(1)}
            </span>
          ))}
        </div>

        {/* ══════════════════════════════════════
            BOTTOM CTA BANNER
        ══════════════════════════════════════ */}
        <div style={{
          background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '14px',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-70px', right: '-70px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(201,168,76,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(37,211,102,0.05)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Ready to Book?
            </div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Book a Cleaning in {emirate.name} Today
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2.25rem', lineHeight: 1.7 }}>
              Same-day service available across all {emirate.cities.length} areas in {emirate.name}. Free instant quote — we respond in minutes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={getWhatsAppLink(undefined, emirate.name)} target="_blank" rel="noopener noreferrer"
                className="svc-book-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.95rem 2.5rem',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff', fontWeight: 700, borderRadius: '500px',
                  textDecoration: 'none', fontSize: '1rem',
                }}>
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`}
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '0.95rem 2.5rem',
                  border: '2px solid #c9a84c', color: '#c9a84c',
                  fontWeight: 700, borderRadius: '500px', textDecoration: 'none', fontSize: '1rem',
                }}>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <SpecialistSitesBanner />
      <WhatsAppButton />
    </>
  )
}
