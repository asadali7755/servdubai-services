import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero, { type HeroSlide } from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import EmiratesSection from '@/components/EmiratesSection'
import SpecializedSites from '@/components/SpecializedSites'
import WhatsAppButton from '@/components/WhatsAppButton'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { specializedSites } from '@/lib/data/specialized-sites'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Cleaning Services in UAE | Al Haya',
  description:
    'Al Haya offers 11 professional cleaning services across 7 UAE Emirates including Dubai, Sharjah, Abu Dhabi. Same-day service. Call 0551275545.',
  path: '/',
})

const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/professional-cleaning-services.webp',
    title: 'Professional Cleaning Services',
    subtitle: 'Trusted cleaning across all 7 UAE Emirates — same-day service available.',
  },
  {
    image: '/images/hero/sofa-carpet.webp',
    title: 'Sofa & Carpet Experts',
    subtitle: 'Deep cleaning using hot-water extraction and eco-friendly solutions.',
  },
  {
    image: '/images/hero/villa-apartment-cleaning.jpg',
    title: 'Villa & Apartment Cleaning',
    subtitle: 'Move-in, move-out, and regular deep cleaning for homes and offices.',
  },
  {
    image: '/images/hero/marble-polishing.jpg',
    title: 'Marble Polishing & Restoration',
    subtitle: 'Restore the natural shine of your marble floors and surfaces.',
  },
  {
    image: '/images/hero/all-uae.webp',
    title: 'Serving All UAE Emirates',
    subtitle: 'Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, Umm Al Quwain.',
  },
]

const schema = buildLocalBusinessSchema({})

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO — full screen, header overlays it */}
      <Hero slides={heroSlides} />

      {/* ABOUT — Poseify bg-secondary, text left + image right */}
      <section className="theme-about" style={{ background: '#343a40', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Left: text */}
            <div style={{ padding: '2rem 0' }}>
              <div className="p-title">
                <div className="p-title-left">
                  <h5>History</h5>
                  <h1>About Our Agency</h1>
                </div>
              </div>

              <h2 style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem', fontWeight: 400 }}>
                Al Haya Cleaning Services is a trusted professional cleaning company operating across
                all 7 UAE Emirates. We deliver consistently high-quality cleaning and restoration
                services to homes, villas, apartments, and commercial spaces throughout the UAE.
              </h2>
              <h2 style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9375rem', fontWeight: 400 }}>
                Our certified, background-checked technicians use professional-grade equipment and
                eco-friendly solutions — bringing expertise and reliability to every job.
              </h2>

              <ul className="p-checklist" style={{ marginBottom: '2rem' }}>
                {[
                  '11 professional cleaning services',
                  'All 7 UAE Emirates covered',
                  'Same-day service available',
                  'Eco-friendly cleaning solutions',
                  'Certified & vetted technicians',
                ].map((item) => (
                  <li key={item}>
                    <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="p-btn-outline">
                  Get a Quote
                </a>
                <Link href="/about" className="p-btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="p-about-img" style={{ aspectRatio: '4/3', minHeight: '280px' }}>
              <Image
                src="/images/hero/villa-apartment-cleaning.jpg"
                alt="Professional cleaning team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — alternating pill items */}
      <ServicesGrid services={services} />

      {/* BANNER / CTA — dynamic gradient with stats */}
      <section className="theme-cta" style={{
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 45%, #2d1b00 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(201,168,76,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '5%', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(37,211,102,0.05)', pointerEvents: 'none', transform: 'translateY(-50%)' }} />

        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {[
              { number: '11+', label: 'Services' },
              { number: '7', label: 'Emirates' },
              { number: '500+', label: 'Happy Clients' },
              { number: 'Same Day', label: 'Availability' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', minWidth: '90px' }}>
                <div className="cta-stat-number" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#c9a84c', fontFamily: 'var(--font-josefin)', lineHeight: 1.1 }}>{stat.number}</div>
                <div className="cta-stat-label" style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #25D366)', margin: '0 auto 2.5rem' }} />

          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="p-title">
              <div className="p-title-center">
                <h5>Booking</h5>
                <h1>Book a Cleaning Today</h1>
              </div>
            </div>

            <h2 style={{ fontSize: '1.0625rem', color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.7, fontWeight: 400 }}>
              Same-day service across Dubai, Sharjah, Abu Dhabi and all UAE Emirates.
              Message us on WhatsApp for a free instant quote.
            </h2>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '200px',
                  justifyContent: 'center',
                  padding: '0.875rem 2rem',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: '500px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                </svg>
                WhatsApp Now
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '200px',
                  justifyContent: 'center',
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: '#c9a84c',
                  fontWeight: 700,
                  borderRadius: '500px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  border: '2px solid #c9a84c',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.15)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
                </svg>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMIRATES — team-card hover grid */}
      <EmiratesSection emirates={emirates} />

      {/* SPECIALIST SITES */}
      <SpecializedSites sites={specializedSites} />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  )
}
