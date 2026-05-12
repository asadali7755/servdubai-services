import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

export const metadata: Metadata = buildMetadata({
  title: 'About Al Haya Cleaning Services | Professional Cleaning Dubai & UAE',
  description:
    'Learn about Al Haya — Dubai\'s trusted professional cleaning company serving all 7 UAE Emirates. Expert villa, sofa, carpet, mattress cleaning & marble polishing. Vetted technicians. Free quotes.',
  path: '/about',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does Al Haya provide in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Al Haya provides 11 professional cleaning services across UAE: villa & apartment deep cleaning, sofa & upholstery cleaning, mattress sanitization, carpet & rug cleaning, marble polishing & restoration, curtain cleaning, dining chair cleaning, car interior detailing, office cleaning, and restaurant kitchen cleaning.' } },
    { '@type': 'Question', name: 'What areas in Dubai does Al Haya service?', acceptedAnswer: { '@type': 'Answer', text: 'We serve all major areas of Dubai including Dubai Marina, JBR, Downtown Dubai, Business Bay, Jumeirah, Arabian Ranches, Palm Jumeirah, JLT, JVC, Silicon Oasis, and Deira. We also extend services to Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.' } },
    { '@type': 'Question', name: 'Are Al Haya\'s cleaning products safe for children and pets?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We use only eco-friendly, non-toxic, and biodegradable cleaning solutions that are completely safe for children, pets, and family members with sensitivities. All products meet international safety standards.' } },
    { '@type': 'Question', name: 'Does Al Haya offer same-day cleaning services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Al Haya offers same-day cleaning services based on availability. Contact us via WhatsApp or phone, describe your requirement, and we will deploy a team the same day whenever possible across Dubai and UAE.' } },
    { '@type': 'Question', name: 'How does Al Haya handle Dubai\'s sand and dust problems?', acceptedAnswer: { '@type': 'Answer', text: 'We use HEPA-filtered vacuums that capture fine sand particles, industrial extraction for carpets and upholstery, and specialized AC vent cleaning. We recommend post-sandstorm deep cleans to remove the fine desert dust that settles on every surface.' } },
    { '@type': 'Question', name: 'What is Al Haya\'s satisfaction guarantee?', acceptedAnswer: { '@type': 'Answer', text: 'We offer a 100% satisfaction guarantee on all services. If you are not completely satisfied with any aspect of our work, we will return to address your concerns at no additional charge.' } },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <div className="page-hero-wrap" style={{ position: 'relative', height: 'clamp(360px, 52vh, 500px)', overflow: 'hidden' }}>
        <Image src="/images/hero/professional-cleaning-services-UAE.webp" alt="About Al Haya — professional cleaning services Dubai UAE" fill priority className="object-cover" sizes="100vw" />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.88) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '90px 1.5rem 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
            <div style={{ width: '36px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>UAE Cleaning Experts</span>
            <div style={{ width: '36px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.875rem', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            About Al Haya Cleaning Services
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
            Professional cleaning services across Dubai &amp; all 7 UAE Emirates — certified technicians, eco-friendly solutions, same-day availability.
          </p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: '#080e20', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[{ n: '11+', l: 'Services' },{ n: '7', l: 'Emirates' },{ n: '500+', l: 'Clients' },{ n: 'Same Day', l: 'Availability' },{ n: '100%', l: 'Satisfaction' }].map((s, i) => (
            <div key={s.l} style={{ flex: '1', minWidth: '88px', textAlign: 'center', padding: '1.2rem 0.75rem', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.45rem', fontWeight: 700, color: '#c9a84c', lineHeight: 1.1 }}>{s.n}</div>
              <div className="about-stat-label" style={{ fontSize: '0.62rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="about-main" style={{ background: '#132040', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Our Story</div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.1rem', lineHeight: 1.2 }}>
                Who We Are — Your Trusted Cleaning Partner in Dubai
              </h2>
              <h3 style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.95rem', fontWeight: 600, color: '#c9a84c', marginBottom: '0.75rem', marginTop: 0 }}>
                Our Mission — Delivering Excellence in Every Clean
              </h3>
              <p className="about-body-p" style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.9375rem' }}>
                Al Haya Cleaning Services was built on a simple belief — that every home and business in Dubai deserves a truly professional clean. In a city where desert sand, hard water, and high humidity create unique cleaning challenges, we developed services that go far beyond standard dusting and mopping.
              </p>
              <p className="about-body-p" style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                Today, Al Haya serves thousands of residential and commercial clients across all 7 UAE Emirates — from luxury villas in Arabian Ranches to high-rise apartments in Dubai Marina. Our certified, background-checked technicians bring professional-grade equipment, eco-friendly solutions, and genuine care to every job.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem' }}>
                {['11 professional services','All 7 UAE Emirates','Same-day availability','Eco-friendly solutions','Vetted technicians','Free instant quote'].map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#c9a84c', flexShrink: 0 }}>✓</span>
                    <span className="about-feat-txt" style={{ color: '#d1d5db', fontSize: '0.84rem' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-about-img" style={{ aspectRatio: '4/3', minHeight: '260px' }}>
              <Image src="/images/hero/villa-apartment-cleaning-services.webp" alt="Al Haya professional cleaning team Dubai villa" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="about-services abt-svc-section" style={{ padding: '5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>What We Do</div>
            <h2 className="abt-heading">Comprehensive Cleaning Services We Provide</h2>
            <p className="abt-subtext" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Specialized solutions for every surface, fabric, and space — across Dubai and all UAE Emirates.
            </p>
          </div>

          <div className="home-svc-grid">
            {services.map((service) => (
              <div key={service.id} className="home-svc-card">
                <div style={{ position: 'relative', height: '170px', flexShrink: 0 }}>
                  <Image
                    src={service.images[0]}
                    alt={`${service.name} Dubai — professional ${service.name.toLowerCase()} UAE`}
                    fill className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
                    loading="lazy"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.65))' }} />
                  <span className="home-svc-badge">{service.category.toUpperCase()}</span>
                  <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: '#25D366', color: '#fff', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.08em', padding: '0.22rem 0.55rem', borderRadius: '2px' }}>BOOK NOW</span>
                </div>
                <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 className="home-svc-h2">{service.heroTitle ?? service.name}</h2>
                  <h3 className="home-svc-h3">{service.shortDescription.slice(0, 60)}…</h3>
                  <p className="home-svc-p" style={{ flex: 1 }}>{service.shortDescription.slice(0, 130)}…</p>
                  <div className="home-kw-row">
                    {service.benefits.slice(0, 3).map((b) => (
                      <span key={b} className="home-kw-tag">{b.slice(0, 28)}</span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="home-svc-link" style={{ marginTop: '0.6rem' }}>
                    View Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="about-values" style={{ background: '#132040', padding: '5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Our Standards</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
              What Makes Al Haya Different from Other Cleaning Companies
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto' }}>
              Not all cleaning services are equal. Here's what sets Al Haya apart across Dubai and UAE.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.1rem' }}>
            {[
              { n: '01', title: 'Experienced & Background-Checked Professionals', desc: 'Every Al Haya technician passes rigorous background verification and comprehensive training before servicing any property. We don\'t learn on your home — our staff arrives fully prepared.' },
              { n: '02', title: 'Advanced Commercial-Grade Equipment', desc: 'We invest in truck-mounted carpet cleaners, hospital-grade HEPA vacuum systems, Italian diamond marble polishing machines, and industrial steam cleaners — not basic portable units.' },
              { n: '03', title: '100% Eco-Friendly & Non-Toxic Solutions', desc: 'Our biodegradable, non-toxic cleaning products are powerful on stains but completely safe for children, pets, and allergy sufferers. Zero harsh chemicals — zero compromise on results.' },
              { n: '04', title: 'Transparent Pricing with No Hidden Fees', desc: 'Every quote is detailed and final. No surprise charges after the job. No add-on fees you weren\'t told about. Just honest, upfront pricing with professional results.' },
              { n: '05', title: 'Comprehensive Insurance & Satisfaction Guarantee', desc: 'Al Haya carries full liability insurance on all services. Not satisfied? We return at no extra charge. Your peace of mind is our standard practice — not an exception.' },
              { n: '06', title: 'IICRC-Standard Cleaning Techniques', desc: 'We follow international IICRC (Institute of Inspection, Cleaning and Restoration Certification) standards for carpet, upholstery, and water damage restoration — the gold standard globally.' },
            ].map((v) => (
              <div key={v.n} className="about-value-card" style={{ background: '#1c2f58', border: '1px solid rgba(80,140,255,0.18)', borderRadius: '12px', padding: '1.4rem', display: 'flex', gap: '0.875rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '7px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c' }}>{v.n}</span>
                </div>
                <div>
                  <h3 className="about-value-h3" style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{v.title}</h3>
                  <p className="about-value-p" style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUBAI CLIMATE EXPERTISE ── */}
      <section style={{ background: '#0e1635', padding: '4.5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Local Expertise</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
              How We Handle Dubai's Unique Climate Challenges
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto' }}>
              Cleaning in Dubai requires local expertise that generic cleaning companies don't have.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏜️', h3: 'Sand & Dust Removal Expertise', desc: 'Dubai\'s desert environment deposits fine sand particles on every surface daily. We use HEPA-filtered vacuums, industrial extraction, and specialized AC vent cleaning to tackle sand buildup that regular vacuuming misses.' },
              { icon: '💧', h3: 'Hard Water Stain Treatment', desc: 'Dubai\'s hard water causes mineral deposits on glass, marble, and fixtures. Our pH-neutral stone-safe cleaners and acid-based glass treatments dissolve scale buildup without damaging surfaces.' },
              { icon: '🌡️', h3: 'Humidity & Mold Protection', desc: 'Summer humidity creates ideal conditions for mold growth in AC vents, bathrooms, and upholstery. Our seasonal cleaning plans include mold prevention treatments and deep sanitization.' },
              { icon: '🍃', h3: 'Heat-Resistant Surface Care', desc: 'Extreme heat affects marble, wood, and fabric differently in Dubai. Our material-specific treatments protect surfaces from UAE\'s climate while restoring their original appearance.' },
            ].map((item) => (
              <div key={item.h3} style={{ background: '#1c2f58', border: '1px solid rgba(80,140,255,0.18)', borderRadius: '10px', padding: '1.4rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-josefin)', fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{item.h3}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="about-emirates" style={{ background: '#132040', padding: '4.5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Coverage</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
              Our Service Areas Throughout Dubai & the UAE
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: '540px', margin: '0 auto' }}>
              Dubai Marina · JBR · Downtown · Business Bay · Jumeirah · Arabian Ranches · Palm Jumeirah · JLT · DIFC · JVC · Silicon Oasis · Deira — and all 7 Emirates.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0.875rem' }}>
            {emirates.map((e) => (
              <Link key={e.id} href={`/${e.slug}`} style={{ textDecoration: 'none' }}>
                <div className="about-emir-card" style={{ position: 'relative', height: '150px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <Image src={e.image} alt={`Cleaning services ${e.name} — Al Haya UAE`} fill className="object-cover" sizes="220px" loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 0.9rem' }}>
                    <div style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#fff', fontSize: '0.88rem' }}>{e.name}</div>
                    <div style={{ color: '#c9a84c', fontSize: '0.62rem', letterSpacing: '0.08em', marginTop: '0.1rem' }}>{e.cities.length} areas →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#0e1635', padding: '4.5rem 1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 700, color: '#fff' }}>
              Frequently Asked Questions About Al Haya
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: 'What services does Al Haya provide in Dubai?', a: 'Al Haya provides 11 professional cleaning services across UAE: villa & apartment deep cleaning, sofa & upholstery cleaning, mattress sanitization, carpet & rug cleaning, marble polishing & restoration, curtain cleaning, dining chair cleaning, car interior detailing, office cleaning, and restaurant kitchen cleaning.' },
              { q: 'What areas in Dubai does Al Haya service?', a: 'We serve all major Dubai areas including Dubai Marina, JBR, Downtown, Business Bay, Jumeirah, Arabian Ranches, Palm Jumeirah, JLT, JVC, Silicon Oasis, and Deira. We also cover Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.' },
              { q: 'Are your cleaning products safe for children and pets?', a: 'Absolutely. We use only eco-friendly, non-toxic, biodegradable cleaning solutions. All products meet international safety standards and are completely safe for children, pets, and allergy sufferers.' },
              { q: 'Does Al Haya offer same-day cleaning services?', a: 'Yes, same-day services are available based on availability. Contact us via WhatsApp or phone, describe your requirement, and we will deploy a team the same day whenever possible.' },
              { q: 'How does Al Haya handle Dubai\'s sand and dust problems?', a: 'We use HEPA-filtered vacuums, industrial extraction for carpets and upholstery, and specialized AC vent cleaning. Post-sandstorm deep cleans are recommended to remove fine desert dust from every surface.' },
              { q: 'What is your satisfaction guarantee?', a: 'We offer a 100% satisfaction guarantee. If you are not completely satisfied with any aspect of our work, we will return to address your concerns at no additional charge — no questions asked.' },
            ].map((faq, i) => (
              <details key={i} style={{ background: '#1c2f58', border: '1px solid rgba(80,140,255,0.18)', borderRadius: '8px', padding: '1rem 1.3rem' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-josefin)', fontSize: '0.9rem', fontWeight: 700, color: '#fff', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  {faq.q}
                  <span style={{ color: '#c9a84c', fontSize: '1.1rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.75, marginTop: '0.75rem', marginBottom: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="theme-cta" style={{ padding: '5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get Started Today</div>
          <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            Ready to Experience the Al Haya Difference?
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Free instant quote via WhatsApp. Same-day service available across Dubai and all 7 UAE Emirates. We respond in minutes — 7 days a week.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', fontWeight: 700, borderRadius: '500px', textDecoration: 'none', fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(37,211,102,0.28)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
              WhatsApp Now
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.9rem 2rem', background: 'transparent', border: '2px solid #c9a84c', color: '#c9a84c', fontWeight: 700, borderRadius: '500px', textDecoration: 'none', fontSize: '0.95rem' }}>
              Call {SITE_CONFIG.phone}
            </a>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/contact" style={{ color: '#6b7280', fontSize: '0.85rem', textDecoration: 'none' }}>
              Or visit our <span style={{ color: '#c9a84c' }}>Contact Page →</span>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
