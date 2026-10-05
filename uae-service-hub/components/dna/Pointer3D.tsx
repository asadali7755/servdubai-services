'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

/**
 * Sets --mx / --my (-1…1) on its element while the pointer moves over it, so CSS
 * can drive 3D tilt and parallax layers without re-rendering React.
 * Does nothing on touch-only devices or when the user prefers reduced motion.
 */
export default function Pointer3D({
  children,
  className = '',
  style,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: 'div' | 'section' | 'article' | 'header'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    let raf = 0
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 2 - 1
      const y = ((e.clientY - r.top) / r.height) * 2 - 1
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', x.toFixed(3))
        el.style.setProperty('--my', y.toFixed(3))
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`dn-p3d ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
