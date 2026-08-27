'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { City } from '@/lib/data/emirates'

const CITY_IMAGES = [
  '/images/hero/villa-apartment-cleaning-services.webp',
  '/images/hero/sofa-carpet-cleaning.webp',
  '/images/hero/professional-cleaning-services-UAE.webp',
  '/images/hero/marble-polishing-dubai.webp',
  '/images/hero/cleaning-services-UAE.webp',
]

interface Props {
  cities: City[]
  emirateSlug: string
  totalServices: number
}

const CARD_WIDTH = 260
const CARD_GAP   = 16

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
      className="cs-wrap"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      <div className="cs-viewport">
        <div
          className="cs-track"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${offset}px)`,
          }}
        >
          {cities.map((city, i) => (
            <Link
              key={city.id}
              href={`/${emirateSlug}/${city.slug}`}
              className="cs-card emir-city-img-card"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <Image
                src={CITY_IMAGES[i % CITY_IMAGES.length]}
                alt={city.name}
                fill
                className="object-cover emir-city-img-inner"
                sizes="260px"
              />
              <div className="cs-overlay" />
              <div className="cs-badge">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="cs-bottom">
                <div className="cs-city-name">{city.name}</div>
                <div className="cs-city-svc">{totalServices} services available →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={() => { goPrev(); resetTimer() }}
        aria-label="Previous"
        disabled={offset === 0}
        className="cs-nav-btn cs-nav-prev"
        style={{
          background: offset === 0 ? 'rgba(30,30,30,0.6)' : '#c9a84c',
          cursor: offset === 0 ? 'default' : 'pointer',
        }}
      >
        <svg width="14" height="14" fill="none" stroke={offset === 0 ? '#555' : '#111'} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => { goNext(); resetTimer() }}
        aria-label="Next"
        disabled={offset >= maxOffset}
        className="cs-nav-btn cs-nav-next"
        style={{
          background: offset >= maxOffset ? 'rgba(30,30,30,0.6)' : '#c9a84c',
          cursor: offset >= maxOffset ? 'default' : 'pointer',
        }}
      >
        <svg width="14" height="14" fill="none" stroke={offset >= maxOffset ? '#555' : '#111'} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="cs-dots">
        {cities.map((_, i) => {
          const cardOffset = i * (CARD_WIDTH + CARD_GAP)
          const isActive = Math.abs(offset - cardOffset) < (CARD_WIDTH + CARD_GAP) / 2
          return (
            <button
              key={i}
              onClick={() => { setOffset(Math.min(cardOffset, maxOffset)); resetTimer() }}
              aria-label={`Go to city ${i + 1}`}
              className="cs-dot"
              style={{
                width: isActive ? '20px' : '6px',
                background: isActive ? '#c9a84c' : 'rgba(201,168,76,0.3)',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
