'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import ThemeToggle from './ThemeToggle'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 45)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = theme === 'light' ? '#1a1510' : undefined

  return (
    <header className={`p-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Brand */}
        <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
          Al Haya
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link active" style={{ color: linkColor }}>Home</Link>
          </li>
          <li>
            <Link href="/about" className="nav-link" style={{ color: linkColor }}>About</Link>
          </li>

          {/* Services dropdown */}
          <li className="dropdown">
            <span className="nav-link" style={{ color: linkColor }}>
              Services
              <svg style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'middle' }} width="10" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </span>
            <div className="dropdown-menu">
              {services.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`}>
                  {s.name}
                </Link>
              ))}
            </div>
          </li>

          {/* Emirates dropdown */}
          <li className="dropdown">
            <span className="nav-link" style={{ color: linkColor }}>
              Emirates
              <svg style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'middle' }} width="10" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </span>
            <div className="dropdown-menu">
              {emirates.map((e) => (
                <Link key={e.id} href={`/${e.slug}`}>{e.name}</Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/contact" className="nav-link" style={{ color: linkColor }}>Contact</Link>
          </li>
        </ul>

        {/* CTA button */}
        <div className="nav-cta-wrap">
          <ThemeToggle />
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
        <div style={{ padding: '0.5rem 1.5rem', borderBottom: '1px solid rgba(201,168,76,0.1)', marginBottom: '0.5rem' }}>
          <ThemeToggle />
        </div>
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <p className="section-label">Services</p>
        {services.map((s) => (
          <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)}>
            {s.name}
          </Link>
        ))}
        <p className="section-label">Emirates</p>
        {emirates.map((e) => (
          <Link key={e.id} href={`/${e.slug}`} onClick={() => setMobileOpen(false)}>
            {e.name}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <div style={{ padding: '0.75rem 1.5rem' }}>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn-outline"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}
            onClick={() => setMobileOpen(false)}
          >
            WhatsApp: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
