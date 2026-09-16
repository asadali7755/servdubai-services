'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/** Fades + slides a block in the first time it scrolls into view. */
export default function Reveal({ children, className = '', delay = 0, id, style }: { children: ReactNode; className?: string; delay?: number; id?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false
    const reveal = () => {
      if (done) return
      done = true
      setVisible(true)
      obs.disconnect()
      window.removeEventListener('scroll', checkPassed)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)

    // IntersectionObserver only fires on threshold crossings — an instant jump
    // (anchor-link click, "End" key, scrollbar drag) can carry a card straight
    // past the viewport without ever crossing zero, leaving it stuck invisible.
    // A direct position check on scroll guarantees nothing stays hidden forever.
    const checkPassed = () => {
      if (el.getBoundingClientRect().bottom < 0) reveal()
    }
    window.addEventListener('scroll', checkPassed, { passive: true })
    checkPassed()

    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', checkPassed)
    }
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={`sa-reveal ${visible ? 'sa-reveal-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, scrollMarginTop: 110, ...style }}
    >
      {children}
    </div>
  )
}
