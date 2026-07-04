'use client'

import Link from 'next/link'
import { servicesNav as services } from '@/lib/data/services-nav'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'

export default function Footer() {
  const year = new Date().getFullYear()
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <footer className="p-footer">
      {/* Overlay over animated background */}
      <div className="p-footer-overlay" />

      <div className="p-footer-inner">
        {/* Large brand name — exact Poseify display-4 */}
        <Link href="/" className="p-footer-logo">
          Madinat Alhaya
        </Link>

        {/* Social / CTA icon buttons — exact Poseify square outline */}
        <div className="p-footer-socials">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn-icon"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="p-btn-icon"
            aria-label="Call us"
            title="Call us"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
            </svg>
          </a>
          <Link href="/about" className="p-btn-icon" aria-label="About" title="About us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </Link>
          <Link href="/contact" className="p-btn-icon" aria-label="Contact" title="Contact us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>
          <a
            href={SITE_CONFIG.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn-icon"
            aria-label="Review us on Google"
            title="Review us on Google"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27l5.18 3.12-1.37-5.9L20.4 9.6l-6.05-.52L12 3.5 9.65 9.08 3.6 9.6l4.59 4.99-1.37 5.9z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/alhayacleandubai/" target="_blank" rel="noopener noreferrer" className="p-btn-icon" aria-label="Facebook" title="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/madinat-al-haya-building-cleaning-services-70a3363b4/" target="_blank" rel="noopener noreferrer" className="p-btn-icon" aria-label="LinkedIn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        {/* Divider */}
        <div className="p-footer-divider" />

        {/* Links grid */}
        <div className="p-footer-links">
          <div>
            <h3>{t.footer.services}</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`}>
                    {t.serviceNames[s.id as keyof typeof t.serviceNames] ?? s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t.footer.emirates}</h3>
            <ul>
              {emirates.map((e) => (
                <li key={e.id}>
                  <Link href={`/${e.slug}`}>
                    {t.emirateNames[e.slug as keyof typeof t.emirateNames] ?? e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t.footer.company}</h3>
            <ul>
              <li><Link href="/about">{t.footer.aboutUs}</Link></li>
              <li><Link href="/blog">{t.footer.blog}</Link></li>
              <li><Link href="/gallery">{t.footer.gallery}</Link></li>
              <li><Link href="/contact">{t.footer.contact}</Link></li>
              <li><Link href="/areas">{t.footer.serviceAreas}</Link></li>
              <li><a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a></li>
              <li><a href={SITE_CONFIG.googleReviewLink} target="_blank" rel="noopener noreferrer">{t.footer.reviewGoogle}</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="p-footer-copy">
          &copy; {year}{' '}
          <Link href="/" style={{ borderBottom: '1px solid #6b7280', color: '#6b7280', textDecoration: 'none' }}>
            Madinat Alhaya Building Cleaning Services
          </Link>
          , {t.footer.allRightsReserved}
        </p>
      </div>
    </footer>
  )
}
