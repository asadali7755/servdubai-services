'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

interface ContentCard {
  id: number
  title: string
  subtitle: string
  description: string
  tip: string
  badge: string
  category: string
  image: string
  keywords: string[]
}

interface ServiceContent {
  slug: string
  serviceName: string
  serviceImage: string
  lastUpdated: string
  date: string
  cards: ContentCard[]
  totalCards: number
  version: number
}

const BADGE_BG: Record<string, string> = {
  'TRENDING':   '#dc2626',
  'NEW':        '#16a34a',
  'PRO TIP':    '#a37a2a',
  'MUST READ':  '#7c3aed',
  'TOP PICK':   '#2563eb',
}

interface Props {
  slug: string
  serviceName: string
  defaultImage: string
}

export default function ServiceDailyContent({ slug, serviceName, defaultImage }: Props) {
  const [content, setContent]         = useState<ServiceContent | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading]         = useState(true)
  const [fade, setFade]               = useState(true)
  const timerRef                      = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    fetch(`/service-content/${slug}.json`)
      .then(r => {
        if (!r.ok) throw new Error('not found')
        return r.json()
      })
      .then((data: ServiceContent) => {
        const valid = data.cards.filter(c => c.title && c.description)
        setContent({ ...data, cards: valid })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  const startTimer = useCallback((total: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (total <= 1) return
    timerRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % total)
        setFade(true)
      }, 400)
    }, 7000)
  }, [])

  useEffect(() => {
    if (!content || content.cards.length === 0) return
    startTimer(content.cards.length)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [content, startTimer])

  const goTo = useCallback((index: number) => {
    if (!content) return
    if (timerRef.current) clearInterval(timerRef.current)
    setFade(false)
    setTimeout(() => {
      setActiveIndex(index)
      setFade(true)
      startTimer(content.cards.length)
    }, 400)
  }, [content, startTimer])

  if (loading || !content || content.cards.length === 0) return null

  const card    = content.cards[activeIndex]
  const imgSrc  = card.image || defaultImage
  const badgeBg = BADGE_BG[card.badge] ?? '#2563eb'

  const bullets = card.description
    .split(/(?<=[.!?])\s+/)
    .filter(s => s.trim().length > 10)
    .slice(0, 3)

  return (
    <section
      className="theme-about"
      style={{ background: '#0d1b35', padding: '5rem 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div className="p-title" style={{ marginBottom: '3rem' }}>
          <div className="p-title-center">
            <h5>AI-Powered · Updated Daily</h5>
            <h1>{serviceName} Insights</h1>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            opacity:    fade ? 1 : 0,
            transform:  fade ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            display:    'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:        '3rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT — Image */}
          <div className="p-about-img" style={{ aspectRatio: '4/3', minHeight: '300px' }}>
            <Image
              src={imgSrc}
              alt={serviceName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT — Content */}
          <div style={{ padding: '1rem 0' }}>

            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{
                background:    badgeBg,
                color:         '#fff',
                fontSize:      '0.65rem',
                fontWeight:    700,
                letterSpacing: '0.1em',
                padding:       '0.25rem 0.8rem',
                borderRadius:  '500px',
                textTransform: 'uppercase',
                fontFamily:    'var(--font-josefin), sans-serif',
              }}>
                {card.badge}
              </span>
              <span style={{
                color:         '#c9a84c',
                fontSize:      '0.8rem',
                fontFamily:    'var(--font-josefin), sans-serif',
                fontWeight:    600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {card.category}
              </span>
            </div>

            {/* Title */}
            <div className="p-title" style={{ marginBottom: '1rem' }}>
              <div className="p-title-left">
                <h5>Daily Insight</h5>
                <h1 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)' }}>
                  {card.title}
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p style={{
              color:        '#9ca3af',
              fontSize:     '0.9375rem',
              lineHeight:   1.8,
              marginBottom: '1.25rem',
              fontFamily:   'var(--font-work), sans-serif',
            }}>
              {card.subtitle}
            </p>

            {/* Checklist */}
            <ul className="p-checklist" style={{ marginBottom: '1.5rem' }}>
              {bullets.map((point, i) => (
                <li key={i}>
                  <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {point}
                </li>
              ))}
              <li>
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: '#f59e0b' }}>
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                </svg>
                <span style={{ color: '#c9a84c', fontWeight: 500 }}>Pro Tip: </span>
                {card.tip}
              </li>
            </ul>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={getWhatsAppLink(serviceName)} target="_blank" rel="noopener noreferrer" className="p-btn-outline">
                Get Free Quote
              </a>
              <a href={`tel:0551275545`} className="p-btn-primary">
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        {content.cards.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem', alignItems: 'center' }}>
            {content.cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Card ${i + 1}`}
                style={{
                  width:        i === activeIndex ? '28px' : '9px',
                  height:       '9px',
                  borderRadius: '500px',
                  background:   i === activeIndex ? '#c9a84c' : 'rgba(201,168,76,0.25)',
                  border:       'none',
                  cursor:       'pointer',
                  padding:      0,
                  transition:   'all 0.35s ease',
                }}
              />
            ))}
          </div>
        )}

        {/* Footer note */}
        <p style={{
          textAlign:     'center',
          color:         '#1e3a5f',
          fontSize:      '0.7rem',
          marginTop:     '1.5rem',
          fontFamily:    'var(--font-josefin), sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Content refreshed daily by AI agents
        </p>

      </div>
    </section>
  )
}
