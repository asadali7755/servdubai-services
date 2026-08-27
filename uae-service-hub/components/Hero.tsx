'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useRequestCall } from '@/components/RequestCallModal'
import QuoteCard from '@/components/QuoteCard'

export interface HeroSlide {
  image: string
  title: string
  subtitle: string
  imageAlt?: string
  imageTitle?: string
  tags?: string[]
}

type SlideState = {
  index: number
  animClass: string // CSS animation class
}

const DURATION = 700 // ms — match CSS animation duration

interface HeroProps {
  slides: HeroSlide[]
  badge?: string
  getFreeQuote?: string
  learnMore?: string
  ourWebsites?: string
  isAr?: boolean
}

export default function Hero({ slides, badge = 'Professional Cleaning UAE', getFreeQuote = 'Get Free Quote', learnMore = 'Learn More', ourWebsites = 'Our Websites ↗', isAr = false }: HeroProps) {
  const { open: openCallModal } = useRequestCall()

  // Active slide (visible, fully in place)
  const [active, setActive] = useState(0)
  // The slide currently animating in
  const [entering, setEntering] = useState<SlideState | null>(null)
  // The slide currently animating out
  const [exiting, setExiting] = useState<SlideState | null>(null)

  const isAnimating = useRef(false)
  const autoTimer = useRef<NodeJS.Timeout | null>(null)
  const paused = useRef(false)

  const goTo = (nextIdx: number, direction: 'next' | 'prev') => {
    if (isAnimating.current || nextIdx === active) return
    isAnimating.current = true

    // direction: next → new slide comes from right, old goes left
    //            prev → new slide comes from left, old goes right
    const enterAnim = direction === 'next' ? 'entering-right' : 'entering-left'
    const exitAnim  = direction === 'next' ? 'exiting-left'   : 'exiting-right'

    setEntering({ index: nextIdx, animClass: enterAnim })
    setExiting({ index: active, animClass: exitAnim })

    setTimeout(() => {
      setActive(nextIdx)
      setEntering(null)
      setExiting(null)
      isAnimating.current = false
    }, DURATION)
  }

  const next = () => goTo((active + 1) % slides.length, 'next')
  const prev = () => goTo((active - 1 + slides.length) % slides.length, 'prev')

  // Auto-advance
  const resetTimer = () => {
    if (autoTimer.current) clearInterval(autoTimer.current)
    if (slides.length <= 1) return
    autoTimer.current = setInterval(() => {
      if (!paused.current) goTo((active + 1) % slides.length, 'next')
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (autoTimer.current) clearInterval(autoTimer.current) }
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  const getSlideStyle = (animClass: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      inset: 0,
      animationDuration: `${DURATION}ms`,
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      animationFillMode: 'forwards',
    }
    switch (animClass) {
      case 'entering-right':
        return { ...base, animation: `slideInFromRight ${DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`, zIndex: 3 }
      case 'entering-left':
        return { ...base, animation: `slideInFromLeft ${DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`, zIndex: 3 }
      case 'exiting-left':
        return { ...base, animation: `slideOutToLeft ${DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`, zIndex: 2 }
      case 'exiting-right':
        return { ...base, animation: `slideOutToRight ${DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`, zIndex: 2 }
      default:
        return base
    }
  }

  return (
    <section
      className="p-hero"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      {/* Base active slide (always visible underneath) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Image
          src={slides[active].image}
          alt={slides[active].imageAlt ?? slides[active].title}
          title={slides[active].imageTitle ?? slides[active].title}
          fill
          priority={active === 0}
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
      </div>

      {/* Exiting slide */}
      {exiting && (
        <div style={getSlideStyle(exiting.animClass)}>
          <Image
            src={slides[exiting.index].image}
            alt={slides[exiting.index].imageAlt ?? slides[exiting.index].title}
            title={slides[exiting.index].imageTitle ?? slides[exiting.index].title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
        </div>
      )}

      {/* Entering slide */}
      {entering && (
        <div style={getSlideStyle(entering.animClass)}>
          <Image
            src={slides[entering.index].image}
            alt={slides[entering.index].imageAlt ?? slides[entering.index].title}
            title={slides[entering.index].imageTitle ?? slides[entering.index].title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
        </div>
      )}

      {/* Theme-aware overlay — dark in dark mode, warm cream in light mode */}
      <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 4 }} />

      {/* Hero content grid: caption left + quote card right */}
      <div className="hero-grid" style={{ zIndex: 10 }}>
        {/* Caption */}
        <div className="p-hero-caption">
          <div className="p-title" style={{ marginBottom: '0.5rem' }}>
            <div className="p-title-center">
              <h5>{badge}</h5>
              <h1 className="display-1" style={active !== 0 ? { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' } : undefined}>{slides[0].title}</h1>
              {active !== 0 && (
                <h2 className="display-1">{slides[active].title}</h2>
              )}
            </div>
          </div>

          <p className="subtitle-text">{slides[active].subtitle}</p>

          <div className="he-cta-row">
            <button
              className="p-btn-outline"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const card = document.getElementById('hero-quote')
                if (card) {
                  card.style.animation = 'none'
                  card.offsetHeight
                  card.style.animation = 'pulseGlow 0.6s ease'
                }
                // QuoteCard owns the input now — reach it by its derived id
                // rather than a ref across the component boundary.
                document.getElementById('hero-quote-phone')?.focus()
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              {getFreeQuote}
            </button>
            <button className="p-btn-outline" onClick={openCallModal} style={{ cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
              Request a Call
            </button>
            <a href="/about" className="p-btn-outline">{learnMore}</a>
            <a href="/websites" className="hero-websites-btn he-websites-btn">
              {ourWebsites}
            </a>
          </div>
        </div>

        {/* Quote card — shared with every other page via QuoteCard */}
        <QuoteCard id="hero-quote" isAr={isAr} source="Hero Form" />
      </div>

      {/* Arrows */}
      <button
        className="p-hero-prev"
        onClick={() => { prev(); resetTimer() }}
        aria-label="Previous slide"
        style={{ zIndex: 11 }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="p-hero-next"
        onClick={() => { next(); resetTimer() }}
        aria-label="Next slide"
        style={{ zIndex: 11 }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="p-hero-dots" style={{ zIndex: 11 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`p-hero-dot${i === active ? ' active' : ''}`}
            onClick={() => { goTo(i, i > active ? 'next' : 'prev'); resetTimer() }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
