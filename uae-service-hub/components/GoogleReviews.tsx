'use client'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'

const REVIEWS = [
  { name: 'Fatima M.', stars: 5, time: '2 weeks ago', text: 'Madinat Alhaya did an amazing deep cleaning of our 4-bedroom villa in Arabian Ranches. Every corner was spotless — bathrooms, kitchen, AC vents, even the window tracks. Very professional team and they finished in one day.' },
  { name: 'Rashid A.', stars: 5, time: '1 month ago', text: 'Booked sofa and carpet cleaning for our apartment in Dubai Marina. The team arrived on time, used steam cleaning, and the results were incredible. Stains gone completely. Will book again.' },
  { name: 'Sarah K.', stars: 5, time: '1 month ago', text: 'We needed move-out deep cleaning for our Downtown Dubai apartment. They cleaned everything including the balcony glass and AC filters. Got our full deposit back. Highly recommend.' },
  { name: 'Omar H.', stars: 5, time: '2 months ago', text: 'Regular office cleaning service for our Business Bay office. Always on time, thorough, and the team is very respectful. Best cleaning company we have used in Dubai.' },
]

export default function GoogleReviews() {
  const { locale } = useLocale()
  const isAr = locale === 'ar'

  return (
    <section className="gr-section" style={{ padding: '4.5rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {isAr ? 'تقييمات جوجل' : 'Google Reviews'}
          </div>
          <h2 className="home-section-h2" style={{ textAlign: 'center' }}>
            {isAr
              ? 'موثوق من أصحاب المنازل في الإمارات — 4.5 نجوم على جوجل'
              : 'Trusted by UAE Homeowners — 4.5 Stars on Google'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
            <span style={{ fontSize: '2.8rem', fontWeight: 700, color: '#c9a84c', fontFamily: 'var(--font-josefin)', lineHeight: 1 }}>4.5</span>
            <div>
              <div style={{ color: '#c9a84c', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
              <a
                href={SITE_CONFIG.googleProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', color: '#9aa3b2', textDecoration: 'none' }}
              >
                Google · Madinat Alhaya Cleaning Services
              </a>
            </div>
          </div>
        </div>

        <div className="gr-grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="gr-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div className="gr-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#e8e0d0' }}>{r.name}</div>
                  <div style={{ color: '#c9a84c', fontSize: '0.8rem', letterSpacing: '1px' }}>{'★'.repeat(r.stars)}</div>
                </div>
              </div>
              <p className="gr-text">&ldquo;{r.text}&rdquo;</p>
              <div style={{ fontSize: '0.72rem', color: '#666', marginTop: '0.5rem' }}>{r.time}</div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href={SITE_CONFIG.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.8rem 1.6rem',
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
              color: '#c9a84c', fontWeight: 700, borderRadius: '500px',
              textDecoration: 'none', fontSize: '0.9rem',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27l5.18 3.12-1.37-5.9L20.4 9.6l-6.05-.52L12 3.5 9.65 9.08 3.6 9.6l4.59 4.99-1.37 5.9z"/></svg>
            {isAr ? 'قيّمنا على جوجل' : 'Review us on Google'}
          </a>
        </div>
      </div>
    </section>
  )
}
