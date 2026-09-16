'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Fades + slides a block in the first time it scrolls into view. */
export default function Reveal({ children, className = '', delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={`sa-reveal ${visible ? 'sa-reveal-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, scrollMarginTop: 110 }}
    >
      {children}
    </div>
  )
}
