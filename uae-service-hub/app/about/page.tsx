import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'About Madinat Alhaya | Best Cleaning Company Dubai & UAE',
    description:
      'Madinat Alhaya — best cleaning company in Dubai serving all 7 UAE Emirates. Professional villa deep cleaning, sofa cleaning, carpet cleaning, marble polishing & office cleaning. Trained professionals, eco-friendly products, same-day service. Free quotes.',
    path: '/about',
  }),
  keywords: [
    'best cleaning company Dubai', 'cleaning company UAE', 'Madinat Alhaya cleaning services',
    'professional cleaning services Dubai', 'cleaning company near me Dubai',
    'villa cleaning company Dubai', 'sofa cleaning company Dubai', 'carpet cleaning company Dubai',
    'marble polishing company Dubai', 'office cleaning company Dubai',
    'eco-friendly cleaning company UAE', 'certified professional cleaners Dubai',
    'cleaning services Abu Dhabi', 'cleaning services Sharjah', 'cleaning services all Emirates',
  ],
}

const localBusinessSchema = buildLocalBusinessSchema({ path: '/about' })

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does Madinat Alhaya provide in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Madinat Alhaya provides 11 professional cleaning services across UAE: villa & apartment deep cleaning, sofa & upholstery cleaning, mattress sanitization, carpet & rug cleaning, marble polishing & restoration, curtain cleaning, dining chair cleaning, car interior detailing, office cleaning, and restaurant kitchen cleaning.' } },
    { '@type': 'Question', name: 'What areas in Dubai does Madinat Alhaya service?', acceptedAnswer: { '@type': 'Answer', text: 'We serve all major areas of Dubai including Dubai Marina, JBR, Downtown Dubai, Business Bay, Jumeirah, Arabian Ranches, Palm Jumeirah, JLT, JVC, Silicon Oasis, and Deira. We also extend services to Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.' } },
    { '@type': 'Question', name: 'Are Madinat Alhaya\'s cleaning products safe for children and pets?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We use only eco-friendly, non-toxic, and biodegradable cleaning solutions that are completely safe for children, pets, and family members with sensitivities. All products meet international safety standards.' } },
    { '@type': 'Question', name: 'Does Madinat Alhaya offer same-day cleaning services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Madinat Alhaya offers same-day cleaning services based on availability. Contact us via WhatsApp or phone, describe your requirement, and we will deploy a team the same day whenever possible across Dubai and UAE.' } },
    { '@type': 'Question', name: 'How does Madinat Alhaya handle Dubai\'s sand and dust problems?', acceptedAnswer: { '@type': 'Answer', text: 'We use HEPA-filtered vacuums that capture fine sand particles, industrial extraction for carpets and upholstery, and specialized AC vent cleaning. We recommend post-sandstorm deep cleans to remove the fine desert dust that settles on every surface.' } },
    { '@type': 'Question', name: 'What is Madinat Alhaya\'s satisfaction guarantee?', acceptedAnswer: { '@type': 'Answer', text: 'We offer a 100% satisfaction guarantee on all services. If you are not completely satisfied with any aspect of our work, we will return to address your concerns at no additional charge.' } },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="page-hero-wrap pg-hero">
        <Image src="/images/hero/professional-cleaning-services-UAE.webp" alt="About Madinat Alhaya — professional cleaning services Dubai UAE" fill priority className="object-cover" sizes="100vw" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <div className="pg-hero-line-wrap">
            <div className="pg-hero-line" />
            <span className="pg-hero-label">UAE Cleaning Experts</span>
            <div className="pg-hero-line" />
          </div>
          <h1 className="pg-hero-h1">
            About Madinat Alhaya Building Cleaning Services
          </h1>
          <p className="pg-hero-desc">
            Professional cleaning services across Dubai &amp; all 7 UAE Emirates — certified technicians, eco-friendly solutions, same-day availability.
          </p>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="pg-stats-bar">
        <div className="pg-stats-inner">
          {[{ n: '11+', l: 'Services' },{ n: '7', l: 'Emirates' },{ n: '500+', l: 'Clients' },{ n: 'Same Day', l: 'Availability' },{ n: '100%', l: 'Satisfaction' }].map((s, i) => (
            <div key={s.l} className={`pg-stat${i > 0 ? ' pg-stat-bordered' : ''}`}>
              <div className="pg-stat-num">{s.n}</div>
              <div className="pg-stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="about-main pg-sec pg-sec-dark">
        <div className="pg-inner">
          <div className="pg-grid-2col">
            <div>
              <div className="pg-gold-label">Our Story</div>
              <h2 className="pg-sec-h2-lg">
                Who We Are — Your Trusted Cleaning Partner in Dubai
              </h2>
              <h3 className="pg-h3-gold">
                Our Mission — Delivering Excellence in Every Clean
              </h3>
              <p className="pg-body">
                Madinat Alhaya Building Cleaning Services was built on a simple belief — that every home and business in Dubai deserves a truly professional clean. In a city where desert sand, hard water, and high humidity create unique cleaning challenges, we developed services that go far beyond standard dusting and mopping.
              </p>
              <p className="pg-body-last">
                Today, Madinat Alhaya serves thousands of residential and commercial clients across all 7 UAE Emirates — from luxury villas in Arabian Ranches to high-rise apartments in Dubai Marina. Our certified, background-checked technicians bring professional-grade equipment, eco-friendly solutions, and genuine care to every job.
              </p>
              <div className="pg-feat-grid">
                {['11 professional services','All 7 UAE Emirates','Same-day availability','Eco-friendly products','Trained professionals','Free instant quote'].map((feat) => (
                  <div key={feat} className="pg-feat-item">
                    <span className="pg-feat-check">✓</span>
                    <span className="pg-feat-txt">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-about-img pg-img-wrap">
              <Image src="/images/hero/villa-apartment-cleaning-services.webp" alt="Madinat Alhaya professional cleaning team Dubai villa" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services abt-svc-section pg-sec pg-sec-border">
        <div className="pg-inner-lg">
          <div className="pg-sec-head">
            <div className="pg-gold-label">What We Do</div>
            <h2 className="abt-heading">Comprehensive Cleaning Services We Provide</h2>
            <p className="abt-subtext pg-sec-sub-wide">
              Specialized solutions for every surface, fabric, and space — across Dubai and all UAE Emirates.
            </p>
          </div>

          <div className="home-svc-grid">
            {services.map((service) => (
              <div key={service.id} className="home-svc-card">
                <div className="pg-svc-img-wrap">
                  <Image
                    src={service.images[0]}
                    alt={`${service.name} Dubai — professional ${service.name.toLowerCase()} UAE`}
                    fill className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
                    loading="lazy"
                  />
                  <div className="pg-svc-overlay" />
                  <span className="home-svc-badge">{service.category.toUpperCase()}</span>
                  <span className="pg-svc-book-badge">BOOK NOW</span>
                </div>
                <div className="pg-svc-body">
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

      {/* WHAT MAKES US DIFFERENT */}
      <section className="about-values pg-sec pg-sec-dark pg-sec-border">
        <div className="pg-inner">
          <div className="pg-sec-head">
            <div className="pg-gold-label">Our Standards</div>
            <h2 className="pg-sec-h2">
              What Makes Madinat Alhaya Different from Other Cleaning Companies
            </h2>
            <p className="pg-sec-sub">
              Not all cleaning services are equal. Here's what sets Madinat Alhaya apart across Dubai and UAE.
            </p>
          </div>
          <div className="pg-grid-3col">
            {[
              { n: '01', title: 'Experienced & Background-Checked Professionals', desc: 'Every Madinat Alhaya technician passes rigorous background verification and comprehensive training before servicing any property. We don\'t learn on your home — our staff arrives fully prepared.' },
              { n: '02', title: 'Advanced Commercial-Grade Equipment', desc: 'We invest in truck-mounted carpet cleaners, hospital-grade HEPA vacuum systems, Italian diamond marble polishing machines, and industrial steam cleaners — not basic portable units.' },
              { n: '03', title: '100% Eco-Friendly & Non-Toxic Solutions', desc: 'Our biodegradable, non-toxic cleaning products are powerful on stains but completely safe for children, pets, and allergy sufferers. Zero harsh chemicals — zero compromise on results.' },
              { n: '04', title: 'Transparent Pricing with No Hidden Fees', desc: 'Every quote is detailed and final. No surprise charges after the job. No add-on fees you weren\'t told about. Just honest, upfront pricing with professional results.' },
              { n: '05', title: 'Comprehensive Insurance & Satisfaction Guarantee', desc: 'Madinat Alhaya carries full liability insurance on all services. Not satisfied? We return at no extra charge. Your peace of mind is our standard practice — not an exception.' },
              { n: '06', title: 'International-Standard Cleaning Techniques', desc: 'We follow globally recognized professional standards for carpet cleaning, sofa cleaning, upholstery care, and water damage restoration — delivering results that meet the highest industry benchmarks in Dubai and UAE.' },
            ].map((v) => (
              <div key={v.n} className="pg-card pg-card-row">
                <div className="pg-card-icon">
                  <span className="pg-card-icon-num">{v.n}</span>
                </div>
                <div>
                  <h3 className="pg-card-h3">{v.title}</h3>
                  <p className="pg-card-p">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUBAI CLIMATE EXPERTISE */}
      <section className="pg-sec-sm pg-sec-darker pg-sec-border">
        <div className="pg-inner">
          <div className="pg-sec-head">
            <div className="pg-gold-label">Local Expertise</div>
            <h2 className="pg-sec-h2">
              How We Handle Dubai's Unique Climate Challenges
            </h2>
            <p className="pg-sec-sub">
              Cleaning in Dubai requires local expertise that generic cleaning companies don't have.
            </p>
          </div>
          <div className="pg-grid-4col">
            {[
              { icon: '🏜️', h3: 'Sand & Dust Removal Expertise', desc: 'Dubai\'s desert environment deposits fine sand particles on every surface daily. We use HEPA-filtered vacuums, industrial extraction, and specialized AC vent cleaning to tackle sand buildup that regular vacuuming misses.' },
              { icon: '💧', h3: 'Hard Water Stain Treatment', desc: 'Dubai\'s hard water causes mineral deposits on glass, marble, and fixtures. Our pH-neutral stone-safe cleaners and acid-based glass treatments dissolve scale buildup without damaging surfaces.' },
              { icon: '🌡️', h3: 'Humidity & Mold Protection', desc: 'Summer humidity creates ideal conditions for mold growth in AC vents, bathrooms, and upholstery. Our seasonal cleaning plans include mold prevention treatments and deep sanitization.' },
              { icon: '🍃', h3: 'Heat-Resistant Surface Care', desc: 'Extreme heat affects marble, wood, and fabric differently in Dubai. Our material-specific treatments protect surfaces from UAE\'s climate while restoring their original appearance.' },
            ].map((item) => (
              <div key={item.h3} className="pg-card-sm">
                <div className="pg-card-emoji">{item.icon}</div>
                <h3 className="pg-card-h3-lg">{item.h3}</h3>
                <p className="pg-card-p-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="about-emirates pg-sec-sm pg-sec-dark pg-sec-border">
        <div className="pg-inner">
          <div className="pg-sec-head-sm">
            <div className="pg-gold-label">Coverage</div>
            <h2 className="pg-sec-h2">
              Our Service Areas Throughout Dubai & the UAE
            </h2>
            <p className="pg-sec-sub-wide">
              Dubai Marina · JBR · Downtown · Business Bay · Jumeirah · Arabian Ranches · Palm Jumeirah · JLT · DIFC · JVC · Silicon Oasis · Deira — and all 7 Emirates.
            </p>
          </div>
          <div className="pg-grid-emir">
            {emirates.map((e) => (
              <Link key={e.id} href={`/${e.slug}`} className="emir-link">
                <div className="pg-emir-card">
                  <Image src={e.image} alt={`Cleaning services ${e.name} — Madinat Alhaya UAE`} fill className="object-cover" sizes="220px" loading="lazy" />
                  <div className="pg-emir-overlay" />
                  <div className="pg-emir-bottom">
                    <div className="pg-emir-name">{e.name}</div>
                    <div className="pg-emir-areas">{e.cities.length} areas →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pg-sec-sm pg-sec-darker pg-sec-border">
        <div className="pg-inner-sm">
          <div className="pg-sec-head-sm">
            <div className="pg-gold-label">FAQ</div>
            <h2 className="pg-sec-h2">
              Frequently Asked Questions About Madinat Alhaya
            </h2>
          </div>
          <div className="pg-faq-list">
            {[
              { q: 'What services does Madinat Alhaya provide in Dubai?', a: 'Madinat Alhaya provides 11 professional cleaning services across UAE: villa & apartment deep cleaning, sofa & upholstery cleaning, mattress sanitization, carpet & rug cleaning, marble polishing & restoration, curtain cleaning, dining chair cleaning, car interior detailing, office cleaning, and restaurant kitchen cleaning.' },
              { q: 'What areas in Dubai does Madinat Alhaya service?', a: 'We serve all major Dubai areas including Dubai Marina, JBR, Downtown, Business Bay, Jumeirah, Arabian Ranches, Palm Jumeirah, JLT, JVC, Silicon Oasis, and Deira. We also cover Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.' },
              { q: 'Are your cleaning products safe for children and pets?', a: 'Absolutely. We use only eco-friendly, non-toxic, biodegradable cleaning solutions. All products meet international safety standards and are completely safe for children, pets, and allergy sufferers.' },
              { q: 'Does Madinat Alhaya offer same-day cleaning services?', a: 'Yes, same-day services are available based on availability. Contact us via WhatsApp or phone, describe your requirement, and we will deploy a team the same day whenever possible.' },
              { q: 'How does Madinat Alhaya handle Dubai\'s sand and dust problems?', a: 'We use HEPA-filtered vacuums, industrial extraction for carpets and upholstery, and specialized AC vent cleaning. Post-sandstorm deep cleans are recommended to remove fine desert dust from every surface.' },
              { q: 'What is your satisfaction guarantee?', a: 'We offer a 100% satisfaction guarantee. If you are not completely satisfied with any aspect of our work, we will return to address your concerns at no additional charge — no questions asked.' },
            ].map((faq, i) => (
              <details key={i} className="pg-faq-item">
                <summary className="pg-faq-summary">
                  {faq.q}
                  <span className="pg-faq-toggle">+</span>
                </summary>
                <p className="pg-faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-cta pg-cta">
        <div className="pg-inner-xs">
          <div className="pg-gold-label" style={{ marginBottom: '0.75rem' }}>Get Started Today</div>
          <h2 className="pg-cta-h2">
            Ready to Experience the Madinat Alhaya Difference?
          </h2>
          <p className="pg-cta-p">
            Free instant quote via WhatsApp. Same-day service available across Dubai and all 7 UAE Emirates. We respond in minutes — 7 days a week.
          </p>
          <div className="pg-cta-btns">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="pg-wa-btn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
              WhatsApp Now
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="pg-call-btn">
              Call {SITE_CONFIG.phone}
            </a>
          </div>
          <QuoteCard id="quote-about" source="About page" className="page-quote-card" />
          <div className="pg-cta-contact">
            <Link href="/contact">
              Or visit our <span className="pg-cta-contact-gold">Contact Page →</span>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
