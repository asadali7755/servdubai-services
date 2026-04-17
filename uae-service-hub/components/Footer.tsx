import Link from 'next/link'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { specializedSites } from '@/lib/data/specialized-sites'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="p-footer">
      {/* Overlay over animated background */}
      <div className="p-footer-overlay" />

      <div className="p-footer-inner">
        {/* Large brand name — exact Poseify display-4 */}
        <Link href="/" className="p-footer-logo">
          Al Haya
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
        </div>

        {/* Divider */}
        <div className="p-footer-divider" />

        {/* Links grid */}
        <div className="p-footer-links">
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Emirates</h3>
            <ul>
              {emirates.map((e) => (
                <li key={e.id}>
                  <Link href={`/${e.slug}`}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Specialist Sites</h3>
            <ul>
              {specializedSites.map((site) => (
                <li key={site.id} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#c9a84c', fontWeight: 600 }}
                  >
                    {site.name} ↗
                  </a>
                  <p style={{ color: '#6b7280', fontSize: '0.75rem', margin: '0.15rem 0 0' }}>
                    {site.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="p-footer-copy">
          &copy; {year}{' '}
          <Link href="/" style={{ borderBottom: '1px solid #6b7280', color: '#6b7280', textDecoration: 'none' }}>
            Al Haya Cleaning Services
          </Link>
          , All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
