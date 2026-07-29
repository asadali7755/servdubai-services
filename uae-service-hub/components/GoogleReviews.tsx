'use client'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'

const REVIEWS = [
  { name: 'Mohammed Muqtadir', stars: 5, time: '10 months ago', text: 'Got my car complete interior cleaning done and I must say their work was fabulous and it got done real quick at my place in a very reasonable price. Do prefer them for your car or home cleaning services.' },
  { name: 'Hamza Muhammad Sheth', stars: 5, time: 'a year ago', text: 'Your team of Al Haya Cleaning has just finished the cleaning work. I am very happy and satisfied with the result. Your team has taken care everything and put all their efforts to get the result as I wanted.' },
  { name: 'Ammatullah HM', stars: 5, time: '7 years ago', text: 'Excellent and professional service. They send a team to you and they put everything back in its place once they are done. Punctual and well-organized. They did a great job on my sofa and car seats. I would definitely recommend them.' },
]

export default function GoogleReviews() {
  const { locale } = useLocale()
  const isAr = locale === 'ar'

  return (
    <section className="gr-section sec-pad">
      <div className="gr-container">
        <div className="gr-header">
          <div className="gr-label">
            {isAr ? 'تقييمات جوجل' : 'Google Reviews'}
          </div>
          <h2 className="home-section-h2 text-center">
            {isAr
              ? 'موثوق من أصحاب المنازل في الإمارات — 4.3 نجوم على جوجل'
              : 'Trusted by UAE Homeowners — 4.3 Stars on Google'}
          </h2>
          <div className="gr-score-row">
            <span className="gr-score-num">4.3</span>
            <div>
              <div className="gr-stars">★★★★☆</div>
              <a
                href={SITE_CONFIG.googleProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gr-profile-link"
              >
                Google · 76 reviews
              </a>
            </div>
          </div>
        </div>

        <div className="gr-grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="gr-card">
              <div className="gr-card-header">
                <div className="gr-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="gr-card-name">{r.name}</div>
                  <div className="gr-card-stars">{'★'.repeat(r.stars)}</div>
                </div>
              </div>
              <p className="gr-text">&ldquo;{r.text}&rdquo;</p>
              <div className="gr-card-time">{r.time}</div>
            </article>
          ))}
        </div>

        <div className="gr-cta-row">
          <a
            href={SITE_CONFIG.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gr-cta-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27l5.18 3.12-1.37-5.9L20.4 9.6l-6.05-.52L12 3.5 9.65 9.08 3.6 9.6l4.59 4.99-1.37 5.9z"/></svg>
            {isAr ? 'قيّمنا على جوجل' : 'Review us on Google'}
          </a>
        </div>
      </div>
    </section>
  )
}
