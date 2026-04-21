import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

export const metadata: Metadata = buildMetadata({
  title: 'About Al Haya Cleaning Services | UAE',
  description:
    'Al Haya is a professional cleaning company serving all 7 UAE Emirates. 11 services, certified technicians, same-day service. Call 0551275545.',
  path: '/about',
})

const stats = [
  { n: '11+', l: 'Services' },
  { n: '7', l: 'Emirates' },
  { n: '500+', l: 'Clients' },
  { n: 'Same Day', l: 'Availability' },
  { n: '100%', l: 'Satisfaction' },
]

const values = [
  { title: 'Certified Technicians', desc: 'Background-checked, trained professionals on every job.' },
  { title: 'Eco-Friendly Products', desc: 'Safe for children, pets, and the environment.' },
  { title: 'Same-Day Service', desc: 'Book today, we arrive today across all areas.' },
  { title: 'Free Instant Quote', desc: 'Message on WhatsApp — get a price in minutes.' },
  { title: 'All Fabric & Surface Types', desc: 'Sofa, carpet, marble, leather, curtains and more.' },
  { title: 'Satisfaction Guaranteed', desc: 'Not happy? We come back at no extra charge.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── CINEMATIC HERO ── */}
      <div className="page-hero-wrap" style={{ position: 'relative', height: 'clamp(380px, 55vh, 520px)', overflow: 'hidden' }}>
        <Image
          src="/images/hero/professional-cleaning-services.webp"
          alt="About Al Haya Cleaning Services"
          fill priority className="object-cover" sizes="100vw"
        />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.88) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '90px 1.5rem 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>UAE Cleaning Experts</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            About Al Haya
          </h1>
          <h2 style={{ color: '#d1d5db', fontSize: '1.05rem', maxWidth: '520px', lineHeight: 1.7, fontWeight: 400, marginTop: 0 }}>
            UAE's trusted professional cleaning company — serving all 7 Emirates with certified technicians and eco-friendly solutions.
          </h2>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="about-stats-bar" style={{ background: '#080e20', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{
              flex: '1', minWidth: '90px', textAlign: 'center', padding: '1.35rem 0.75rem',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.5rem', fontWeight: 700, color: '#c9a84c', lineHeight: 1.1 }}>{s.n}</div>
              <div className="about-stat-label" style={{ fontSize: '0.65rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="about-main" style={{ background: '#132040', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            <div>
              <div className="p-title">
                <div className="p-title-left">
                  <h5>Our Story</h5>
                  <h1>Who We Are</h1>
                </div>
              </div>
              <h3 className="about-body-p" style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.95rem', fontWeight: 400, marginTop: 0 }}>
                Al Haya Cleaning Services is a trusted professional cleaning company operating across all 7 UAE Emirates. Our mission is to deliver consistently high-quality cleaning and restoration services to homes, villas, apartments, and commercial spaces throughout the UAE.
              </h3>
              <h3 className="about-body-p" style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem', fontWeight: 400, marginTop: 0 }}>
                We employ certified, background-checked cleaning technicians who use professional-grade equipment and eco-friendly cleaning solutions. From sofa deep cleaning to villa deep cleans and marble polishing — we bring expertise and reliability to every job.
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 1.5rem' }}>
                {['11 professional services', 'All 7 UAE Emirates', 'Same-day availability', 'Eco-friendly solutions', 'Certified technicians', 'Free instant quote'].map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#c9a84c', fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                    <span className="about-feat-txt" style={{ color: '#d1d5db', fontSize: '0.85rem' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-about-img" style={{ aspectRatio: '4/3', minHeight: '280px' }}>
              <Image src="/images/hero/villa-apartment-cleaning.jpg" alt="Professional cleaning team" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="about-values" style={{ background: '#0e1635', padding: '5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="p-title" style={{ textAlign: 'center' }}>
            <div className="p-title-center">
              <h5>Why Choose Us</h5>
              <h1>Our Promise to You</h1>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {values.map((v, i) => (
              <div key={v.title} className="about-value-card" style={{
                background: '#1c2f58', border: '1px solid rgba(80,140,255,0.2)',
                borderRadius: '12px', padding: '1.5rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.8rem', fontWeight: 700, color: '#c9a84c' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="about-value-h3" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                    {v.title}
                  </h3>
                  <h3 className="about-value-p" style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.6, fontWeight: 400, marginTop: 0, marginBottom: 0 }}>{v.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="about-services" style={{ background: '#132040', padding: '5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="p-title" style={{ textAlign: 'center' }}>
            <div className="p-title-center">
              <h5>What We Do</h5>
              <h1>Our 11 Services</h1>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="about-svc-card" style={{
                  background: '#1c2f58', border: '1px solid rgba(80,140,255,0.2)',
                  borderRadius: '10px', overflow: 'hidden',
                }}>
                  <div style={{ position: 'relative', height: '110px' }}>
                    <Image src={service.images[0]} alt={service.name} fill className="object-cover" sizes="220px" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65))' }} />
                  </div>
                  <div style={{ padding: '0.8rem 0.9rem' }}>
                    <h3 className="about-svc-h3" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.82rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                      {service.name}
                    </h3>
                    <span style={{ color: '#c9a84c', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em' }}>Book Now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMIRATES ── */}
      <section className="about-emirates" style={{ background: '#0e1635', padding: '5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="p-title" style={{ textAlign: 'center' }}>
            <div className="p-title-center">
              <h5>Coverage</h5>
              <h1>Emirates We Serve</h1>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {emirates.map((e) => (
              <Link key={e.id} href={`/${e.slug}`} style={{ textDecoration: 'none' }}>
                <div className="about-emir-card" style={{
                  position: 'relative', height: '160px', borderRadius: '10px', overflow: 'hidden',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}>
                  <Image src={e.image} alt={e.name} fill className="object-cover" sizes="220px" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15))' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.85rem 1rem' }}>
                    <div style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#fff', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{e.name}</div>
                    <div style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '0.15rem' }}>{e.cities.length} areas →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)',
        padding: '5rem 1.5rem', textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '30px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Get in Touch</span>
            <div style={{ width: '30px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            Ready to Book a Cleaning?
          </h2>
          <h3 style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 400, marginTop: 0 }}>
            Message us on WhatsApp for a free instant quote. Same-day service across all 7 UAE Emirates.
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff', fontWeight: 700, borderRadius: '500px',
              textDecoration: 'none', fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
            }}>
              WhatsApp Now
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem',
              background: 'transparent', border: '2px solid #c9a84c',
              color: '#c9a84c', fontWeight: 700, borderRadius: '500px',
              textDecoration: 'none', fontSize: '0.95rem',
            }}>
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <SpecialistSitesBanner />
      <WhatsAppButton />
    </>
  )
}
