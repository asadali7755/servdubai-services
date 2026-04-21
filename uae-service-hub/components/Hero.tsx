'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

export interface HeroSlide {
  image: string
  title: string
  subtitle: string
}

type SlideState = {
  index: number
  animClass: string // CSS animation class
}

const DURATION = 700 // ms — match CSS animation duration

export default function Hero({ slides }: { slides: HeroSlide[] }) {
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
          alt={slides[active].title}
          fill
          priority
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
            alt={slides[exiting.index].title}
            fill
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
            alt={slides[entering.index].title}
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
        </div>
      )}

      {/* Theme-aware overlay — dark in dark mode, warm cream in light mode */}
      <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 4 }} />

      {/* Caption — always on top, content fades between slides */}
      <div className="p-hero-caption" style={{ zIndex: 10 }}>
        <div className="p-title" style={{ marginBottom: '0.5rem' }}>
          <div className="p-title-center">
            <h5>Professional Cleaning UAE</h5>
            <h1 className="display-1">{slides[active].title}</h1>
          </div>
        </div>

        <h2 className="subtitle-text">{slides[active].subtitle}</h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Get Free Quote
          </a>
          <a href="/about" className="p-btn-outline">Learn More</a>
          <a
            href="/websites"
            className="hero-websites-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.4rem',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid #c9a84c',
              color: '#c9a84c', fontWeight: 600, borderRadius: '500px',
              textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.04em',
              backdropFilter: 'blur(4px)',
            }}
          >
            Our Websites ↗
          </a>
        </div>
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
