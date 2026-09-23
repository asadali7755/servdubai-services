'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRequestCall } from '@/components/RequestCallModal'
import QuoteCard from '@/components/QuoteCard'

function InfoIcon({ type }: { type: 'website' | 'phone' | 'address' }) {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c9a84c]">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c9a84c]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#c9a84c]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  }
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>
}

interface SiteHeroProps {
  badge: string
  title: string
  subtitle: string
  backgroundImage: string
  backgroundAlt: string
  getFreeQuoteLabel: string
  learnMoreLabel: string
  ourWebsitesLabel: string
  contactInfo: { website: string; phone: string; address: string }
  isAr?: boolean
  className?: string
}

/** Split hero: dark content panel (fixed dark/gold palette, independent of the
 *  site's light/dark theme toggle — matches the emirate-page hero pattern) +
 *  a single photo with a CSS clip-path reveal. Plain CSS animation only (no
 *  framer-motion) so it can never get stuck at opacity:0 after hydration. */
export function SiteHero({
  badge, title, subtitle, backgroundImage, backgroundAlt,
  getFreeQuoteLabel, learnMoreLabel, ourWebsitesLabel, contactInfo, isAr, className,
}: SiteHeroProps) {
  const { open: openCallModal } = useRequestCall()

  return (
    <section className={`site-hero-2 ${className ?? ''}`}>
      <div className="site-hero-2-left">
        <div>
          <span className="site-hero-2-badge">{badge}</span>
          <h1 className="site-hero-2-title">{title}</h1>
          <div className="site-hero-2-rule" />
          <p className="site-hero-2-subtitle">{subtitle}</p>

          <div className="site-hero-2-cta-row">
            <button type="button" onClick={() => document.getElementById('hero-quote-phone')?.focus()} className="site-hero-2-cta-primary">
              {getFreeQuoteLabel} →
            </button>
            <button type="button" onClick={openCallModal} className="site-hero-2-cta-link">
              Request a Call
            </button>
            <a href="/about" className="site-hero-2-cta-link">{learnMoreLabel}</a>
            <a href="/websites" className="site-hero-2-cta-link">{ourWebsitesLabel}</a>
          </div>

          <div className="site-hero-2-quote">
            <QuoteCard id="hero-quote" isAr={isAr} source="Hero Form" />
          </div>
        </div>

        <footer className="site-hero-2-footer">
          <div className="site-hero-2-footer-item"><InfoIcon type="website" /><span>{contactInfo.website}</span></div>
          <div className="site-hero-2-footer-item"><InfoIcon type="phone" /><span>{contactInfo.phone}</span></div>
          <div className="site-hero-2-footer-item"><InfoIcon type="address" /><span>{contactInfo.address}</span></div>
        </footer>
      </div>

      <div className="site-hero-2-image-wrap">
        <Image src={backgroundImage} alt={backgroundAlt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
      </div>
    </section>
  )
}
