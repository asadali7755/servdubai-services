'use client'

import Image from 'next/image'
import Link from 'next/link'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'
import PopularAreas from '@/components/PopularAreas'
import GoogleReviews from '@/components/GoogleReviews'
import { useRequestCall } from '@/components/RequestCallModal'
import EmiratesSection from '@/components/EmiratesSection'
import Hero from '@/components/Hero'
import type { HeroSlide } from '@/components/Hero'

const heroImages = [
  { image: '/images/hero/cleaning-services-UAE.webp', imageAlt: 'Cleaning Services UAE — Al Haya provides professional cleaning solutions across all seven Emirates including Dubai, Abu Dhabi, Sharjah with expert team and eco-friendly products', imageTitle: 'Cleaning Services UAE | Al Haya Professional Cleaners' },
  { image: '/images/hero/marble-polishing-dubai.webp', imageAlt: 'Marble Polishing Dubai — expert marble and floor polishing services restoring shine to marble, granite, and terrazzo using diamond polishing techniques by Al Haya', imageTitle: 'Marble Polishing Dubai | Professional Floor Restoration' },
  { image: '/images/hero/professional-cleaning-services-UAE.webp', imageAlt: 'Professional Cleaning Services UAE — comprehensive cleaning solutions for villas, apartments, and offices with deep cleaning, sanitization by Al Haya across UAE', imageTitle: 'Professional Cleaning Services UAE | Homes & Offices' },
  { image: '/images/hero/sofa-carpet-cleaning.webp', imageAlt: 'Sofa Carpet Cleaning — professional deep cleaning services for sofas and carpets removing stains, odors, and allergens with eco-friendly steam cleaning by Al Haya', imageTitle: 'Sofa Carpet Cleaning | Professional Deep Cleaning' },
  { image: '/images/hero/villa-apartment-cleaning-services.webp', imageAlt: 'Villa Apartment Cleaning Services — professional residential cleaning solutions with deep cleaning, sanitization for all properties across UAE by Al Haya', imageTitle: 'Villa Apartment Cleaning Services | Professional Residential' },
]

const serviceSlugs = ['villa-deep-cleaning', 'sofa-cleaning', 'carpet-cleaning', 'marble-polishing', 'mattress-cleaning', 'office-cleaning']
const serviceImages = [
  '/images/services/villa-deep-cleaning.webp',
  '/images/services/leather-sofa-cleaning-dubai.webp',
  '/images/services/carpet-cleaning.webp',
  '/images/services/marble-polishing.webp',
  '/images/services/mattress-cleaning.webp',
  '/images/services/office-cleaning.webp',
]
const serviceAlts = [
  'Villa deep cleaning Dubai — professional residential cleaning UAE',
  'Sofa cleaning Dubai — professional upholstery and couch deep cleaning UAE',
  'Carpet cleaning Dubai — professional steam extraction and rug cleaning UAE',
  'Marble polishing Dubai — professional floor restoration and re-crystallization UAE',
  'Mattress cleaning Dubai — UV-C sanitization and deep cleaning UAE',
  'Office cleaning Dubai — professional commercial workspace cleaning UAE',
]
const serviceKws = [
  ['villa cleaning Dubai', 'move-in cleaning', 'deep cleaning villa Dubai', 'professional house cleaning UAE'],
  ['sofa cleaning Dubai', 'couch cleaning service', 'upholstery cleaning UAE', 'leather sofa cleaning'],
  ['carpet cleaning Dubai', 'rug cleaning services UAE', 'steam carpet cleaning', 'professional carpet cleaners'],
  ['marble polishing Dubai', 'floor polishing services', 'marble restoration UAE', 'stone polishing UAE'],
  ['mattress cleaning Dubai', 'mattress sanitization UAE', 'dust mite removal', 'UV-C mattress cleaning'],
  ['office cleaning Dubai', 'commercial cleaning UAE', 'workspace sanitization Dubai', 'office deep clean'],
]

const extraSlugs = ['curtain-cleaning', 'dining-chair-cleaning', 'car-interior-detailing', 'apartment-cleaning', 'restaurant-kitchen-cleaning']

const whyIcons = ['🏅', '🌿', '⚡', '✓']

export default function HomeContent() {
  const { locale } = useLocale()
  const t = translations[locale]
  const isAr = locale === 'ar'
  const { open: openCallModal } = useRequestCall()

  const heroSlides: HeroSlide[] = t.hero.slides.map((s, i) => ({
    ...heroImages[i],
    title: s.title,
    subtitle: s.subtitle,
  }))

  return (
    <>
      <Hero slides={heroSlides} badge={t.hero.badge} getFreeQuote={t.hero.getFreeQuote} learnMore={t.hero.learnMore} ourWebsites={t.hero.ourWebsites} isAr={isAr} />

      {/* 2. SERVICES */}
      <section className="home-services-section sec-pad">
        <div className="container-xl">
          <div className="sec-header">
            <div className="gold-label">{t.home.servicesLabel}</div>
            <h2 className="home-section-h2 text-center">{t.home.servicesTitle}</h2>
            <p className="home-section-p max-w-640 mx-auto text-center">{t.home.servicesSubtitle}</p>
          </div>

          <div className="home-svc-grid">
            {t.home.mainCards.map((card, i) => (
              <div key={serviceSlugs[i]} className="home-svc-card">
                <div className="svc-card-img">
                  <Image src={serviceImages[i]} alt={serviceAlts[i]} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px" loading="lazy" />
                  <div className="svc-card-overlay" />
                  <span className="home-svc-badge">{card.badge}</span>
                </div>
                <div className="svc-card-body">
                  <h2 className="home-svc-h2">{card.h2}</h2>
                  <h3 className="home-svc-h3">{card.h3}</h3>
                  <p className="home-svc-p flex-1">{card.p}</p>
                  <div className="home-kw-row">
                    {serviceKws[i].map((kw) => <span key={kw} className="home-kw-tag">{kw}</span>)}
                  </div>
                  <Link href={`/services/${serviceSlugs[i]}`} className="home-svc-link mt-sm">{t.home.viewService}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-md">
            <div className="text-center mb-sm">
              <div className="gold-label">{t.home.alsoAvailable}</div>
            </div>
            <div className="home-extra-grid">
              {t.home.extraServices.map((s, i) => (
                <Link key={extraSlugs[i]} href={`/services/${extraSlugs[i]}`} className="home-extra-card">
                  <h3 className="home-extra-h3">{s.name}</h3>
                  <p className="home-extra-p">{s.desc}</p>
                  <span className="home-extra-arrow">{t.home.viewArrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EMIRATES */}
      <EmiratesSection emirates={emirates} />

      {/* 4. BOOK BY LOCATION */}
      <section className="home-services-section sec-pad">
        <div className="container-lg">
          <div className="sec-header-sm">
            <div className="gold-label">{t.home.bookByLocationLabel}</div>
            <h2 className="home-section-h2 text-center">{t.home.bookByLocationTitle}</h2>
            <p className="home-section-p max-w-640 mx-auto text-center">{t.home.bookByLocationSubtitle}</p>
          </div>
          <PopularAreas />
          <div className="text-center mt-md">
            <Link href="/areas" className="home-svc-link" style={{ fontWeight: 600 }}>{t.home.viewAllAreas}</Link>
          </div>
        </div>
      </section>

      {/* 5. BOOKING CTA */}
      <section className="theme-cta sec-pad-lg relative overflow-hidden">
        <div className="cta-circle-top" />
        <div className="cta-circle-bottom" />
        <div className="container-lg relative" style={{ zIndex: 1 }}>
          <div className="cta-stats-row">
            {[
              { number: '11+', label: t.home.stats.services },
              { number: '7', label: t.home.stats.emirates },
              { number: '500+', label: t.home.stats.happyClients },
              { number: t.home.stats.sameDay, label: t.home.stats.availability },
            ].map((stat) => (
              <div key={stat.label} className="cta-stat-item">
                <div className="cta-stat-number">{stat.number}</div>
                <div className="cta-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="gold-divider" />
          <div className="container-sm text-center">
            <div className="gold-label">{t.home.bookTodayLabel}</div>
            <h2 className="home-section-h2 text-center">{t.home.bookTodayTitle}</h2>
            <p className="home-section-p max-w-560 mx-auto mb-lg text-center">{t.home.bookTodaySubtitle}</p>
            <div className="cta-btn-row">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-wa-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" /></svg>
                {t.home.whatsappNow}
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" /></svg>
                {t.home.callPhone} {SITE_CONFIG.phone}
              </a>
              <button onClick={openCallModal} className="btn-gold-pill-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                {isAr ? 'اطلب مكالمة' : 'Request a Call'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="home-why-section sec-pad">
        <div className="container-lg">
          <div className="sec-header-lg">
            <div className="gold-label">{t.home.whyLabel}</div>
            <h2 className="home-section-h2 text-center">{t.home.whyTitle}</h2>
            <p className="home-section-p max-w-560 mx-auto text-center">{t.home.whySubtitle}</p>
          </div>
          <div className="home-why-grid">
            {t.home.whyCards.map((item, i) => (
              <div key={i} className="home-why-card">
                <div className="why-icon">{whyIcons[i]}</div>
                <h3 className="home-why-h3">{item.title}</h3>
                <p className="home-why-p">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT */}
      <section className="theme-about home-about-section sec-pad">
        <div className="container-lg">
          <div className="home-about-grid">
            <div>
              <div className="gold-label">{t.home.aboutLabel}</div>
              <h2 className="home-section-h2">{t.home.aboutTitle}</h2>
              <p className="home-section-p">{t.home.aboutP1}</p>
              <p className="home-section-p mb-md">{t.home.aboutP2}</p>
              <ul className="home-checklist">
                {t.home.aboutChecklist.map((item) => (
                  <li key={item} className="home-check-item">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#c9a84c" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="home-cta-btns">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="p-btn-outline">{t.hero.getFreeQuote}</a>
                <Link href="/about" className="p-btn-primary">{t.home.aboutUs}</Link>
              </div>
            </div>
            <div className="p-about-img home-about-img relative overflow-hidden" style={{ borderRadius: '10px' }}>
              <Image src="/images/hero/villa-apartment-cleaning-services.webp" alt="Professional cleaning team Dubai villa — Madinat Alhaya deep cleaning UAE" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="home-faq-section sec-pad">
        <div className="container-md">
          <div className="sec-header-lg">
            <div className="gold-label">{t.home.faqLabel}</div>
            <h2 className="home-section-h2 text-center">{t.home.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {t.home.faqs.map((faq, i) => (
              <details key={i} className="home-faq-item">
                <summary className="home-faq-q">{faq.q}<span className="faq-toggle">+</span></summary>
                <p className="home-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MAP */}
      <section className="home-map-section sec-pad-lg">
        <div className="container-lg">
          <div className="map-grid">
            <div>
              <div className="gold-label">{t.home.mapLabel}</div>
              <h2 className="home-section-h2">{t.home.mapTitle}</h2>
              <p className="home-section-p mb-md">{t.home.mapSubtitle}</p>
              <div className="map-info-list">
                {[
                  { label: t.home.mapPhone, value: '+971 55 127 5545', href: 'tel:+971551275545' },
                  { label: t.home.mapServiceArea, value: t.home.mapServiceAreaValue, href: null },
                  { label: t.home.mapHours, value: t.home.mapHoursValue, href: null },
                  { label: t.home.mapSameDay, value: t.home.mapSameDayValue, href: null },
                ].map((item) => (
                  <div key={item.label} className="map-info-item">
                    <div className="map-dot" />
                    <div>
                      <div className="map-info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="home-map-value map-info-link">{item.value}</a>
                      ) : (
                        <div className="home-map-value map-info-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="map-btn-row">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-wa-sm">{t.home.whatsappNow}</a>
                <a href="https://maps.app.goo.gl/qAog9d6usteD2jsH6" target="_blank" rel="noopener noreferrer" className="btn-gold-accent-sm">{t.home.viewOnMaps}</a>
                <a href={SITE_CONFIG.googleReviewLink} target="_blank" rel="noopener noreferrer" className="btn-gold-accent-sm">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27l5.18 3.12-1.37-5.9L20.4 9.6l-6.05-.52L12 3.5 9.65 9.08 3.6 9.6l4.59 4.99-1.37 5.9z" /></svg>
                  {t.home.reviewOnGoogle}
                </a>
              </div>
            </div>
            <div className="home-map-wrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927577.8847531937!2d55.4692488!3d24.74914795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dc22e5a8d45%3A0x5f56211bd03d48bd!2sMadinat%20Alhaya%20Building%20Cleaning%20Services!5e0!3m2!1sen!2s!4v1780844711725!5m2!1sen!2s" width="100%" height="380" className="map-iframe" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Madinat Alhaya Building Cleaning Services location on Google Maps Dubai" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE REVIEWS */}
      <GoogleReviews />
    </>
  )
}
