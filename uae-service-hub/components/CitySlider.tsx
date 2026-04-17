'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { City } from '@/lib/data/emirates'

const CITY_IMAGES = [
  '/images/hero/villa-apartment-cleaning.jpg',
  '/images/hero/sofa-carpet.webp',
  '/images/hero/professional-cleaning-services.webp',
  '/images/hero/marble-polishing.jpg',
  '/images/hero/all-uae.webp',
]

interface Props {
  cities: City[]
  emirateSlug: string
  totalServices: number
}

const CARD_WIDTH = 260   // px
const CARD_GAP   = 16    // px

export default function CitySlider({ cities, emirateSlug, totalServices }: Props) {
  const [offset, setOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoRef = useRef<NodeJS.Timeout | null>(null)
  const paused = useRef(false)

  const maxOffset = Math.max(0, cities.length * (CARD_WIDTH + CARD_GAP) - (CARD_WIDTH + CARD_GAP) * 3)

  const goNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setOffset((prev) => Math.min(prev + CARD_WIDTH + CARD_GAP, maxOffset))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setOffset((prev) => Math.max(prev - (CARD_WIDTH + CARD_GAP), 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const resetTimer = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      if (paused.current) return
      setOffset((prev) => {
        const next = prev + CARD_WIDTH + CARD_GAP
        return next > maxOffset ? 0 : next
      })
    }, 3000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [maxOffset]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      {/* Slider viewport */}
      <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
        <div
          style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${offset}px)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {cities.map((city, i) => (
            <Link
              key={city.id}
              href={`/${emirateSlug}/${city.slug}`}
              style={{
                flexShrink: 0,
                width: `${CARD_WIDTH}px`,
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'block',
                position: 'relative',
                border: '1px solid rgba(201,168,76,0.15)',
                textDecoration: 'none',
              }}
              className="emir-city-img-card"
            >
              {/* Background image */}
              <Image
                src={CITY_IMAGES[i % CITY_IMAGES.length]}
                alt={city.name}
                fill
                className="object-cover emir-city-img-inner"
                sizes="260px"
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)',
              }} />
              {/* Number badge */}
              <div style={{
                position: 'absolute', top: '0.75rem', left: '0.75rem',
                fontFamily: 'var(--font-josefin)',
                fontSize: '0.7rem', fontWeight: 700,
                color: 'rgba(201,168,76,0.9)',
                letterSpacing: '0.1em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              {/* Content bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
                <div style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: '1rem', fontWeight: 700,
                  color: '#fff', marginBottom: '0.25rem',
                }}>
                  {city.name}
                </div>
                <div style={{ color: '#c9a84c', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                  {totalServices} services available →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={() => { goPrev(); resetTimer() }}
        aria-label="Previous"
        disabled={offset === 0}
        style={{
          position: 'absolute', left: '-18px', top: '50%', transform: 'translateY(-50%)',
          width: '36px', height: '36px', borderRadius: '50%',
          background: offset === 0 ? 'rgba(30,30,30,0.6)' : '#c9a84c',
          border: 'none', cursor: offset === 0 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 5, transition: 'background 0.2s',
        }}
      >
        <svg width="14" height="14" fill="none" stroke={offset === 0 ? '#555' : '#111'} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={() => { goNext(); resetTimer() }}
        aria-label="Next"
        disabled={offset >= maxOffset}
        style={{
          position: 'absolute', right: '-18px', top: '50%', transform: 'translateY(-50%)',
          width: '36px', height: '36px', borderRadius: '50%',
          background: offset >= maxOffset ? 'rgba(30,30,30,0.6)' : '#c9a84c',
          border: 'none', cursor: offset >= maxOffset ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 5, transition: 'background 0.2s',
        }}
      >
        <svg width="14" height="14" fill="none" stroke={offset >= maxOffset ? '#555' : '#111'} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '1.25rem' }}>
        {cities.map((_, i) => {
          const cardOffset = i * (CARD_WIDTH + CARD_GAP)
          const isActive = Math.abs(offset - cardOffset) < (CARD_WIDTH + CARD_GAP) / 2
          return (
            <button
              key={i}
              onClick={() => { setOffset(Math.min(cardOffset, maxOffset)); resetTimer() }}
              aria-label={`Go to city ${i + 1}`}
              style={{
                width: isActive ? '20px' : '6px', height: '6px',
                borderRadius: '3px',
                background: isActive ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
