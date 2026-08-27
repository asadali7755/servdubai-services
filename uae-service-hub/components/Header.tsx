'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { servicesNav as services } from '@/lib/data/services-nav'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale } = useLocale()
  const t = translations[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 45)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`p-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Brand */}
        <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
          Madinat Alhaya
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link active">{t.nav.home}</Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">{t.nav.about}</Link>
          </li>

          {/* Services dropdown */}
          <li className="dropdown">
            <span className="nav-link">
              {t.nav.services}
              <svg className="nav-dropdown-caret" width="10" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </span>
            <div className="dropdown-menu">
              {services.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`}>
                  {t.serviceNames[s.id as keyof typeof t.serviceNames] ?? s.name}
                </Link>
              ))}
            </div>
          </li>

          {/* Emirates dropdown */}
          <li className="dropdown">
            <span className="nav-link">
              {t.nav.emirates}
              <svg className="nav-dropdown-caret" width="10" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </span>
            <div className="dropdown-menu">
              {emirates.map((e) => (
                <Link key={e.id} href={`/${e.slug}`}>
                  {t.emirateNames[e.slug as keyof typeof t.emirateNames] ?? e.name}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/blog" className="nav-link">{t.nav.blog}</Link>
          </li>
          <li>
            <Link href="/gallery" className="nav-link">{t.nav.gallery}</Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">{t.nav.contact}</Link>
          </li>
        </ul>

        {/* CTA button */}
        <div className="nav-cta-wrap">
          <LanguageToggle />
          <a href="https://www.facebook.com/alhayacleandubai/" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="Facebook" title="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/madinat-al-haya-building-cleaning-services-70a3363b4/" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn" title="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-lang-wrap">
          <LanguageToggle />
        </div>
        <Link href="/" onClick={() => setMobileOpen(false)}>{t.nav.home}</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>{t.nav.about}</Link>
        <p className="section-label">{t.nav.services}</p>
        {services.map((s) => (
          <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)}>
            {t.serviceNames[s.id as keyof typeof t.serviceNames] ?? s.name}
          </Link>
        ))}
        <p className="section-label">{t.nav.emirates}</p>
        {emirates.map((e) => (
          <Link key={e.id} href={`/${e.slug}`} onClick={() => setMobileOpen(false)}>
            {t.emirateNames[e.slug as keyof typeof t.emirateNames] ?? e.name}
          </Link>
        ))}
        <Link href="/blog" onClick={() => setMobileOpen(false)}>{t.nav.blog}</Link>
        <Link href="/gallery" onClick={() => setMobileOpen(false)}>{t.nav.gallery}</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>{t.nav.contact}</Link>
        <div className="mobile-cta-wrap">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn-outline mobile-cta-btn"
            onClick={() => setMobileOpen(false)}
          >
            WhatsApp: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
