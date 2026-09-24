'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface StickyRailProps {
  children: ReactNode
  /** Class on the outer placeholder — use this for grid-area assignment. */
  className?: string
  /** Class on the inner div that actually gets pinned. */
  innerClassName?: string
  topOffset?: number
}

type Mode = 'static' | 'fixed' | 'bottom'

/**
 * A sticky sidebar that works even though `html, body { overflow-x: hidden }`
 * (globals.css) breaks native `position: sticky` for every descendant on this
 * site — any non-visible overflow on an ancestor does that, it's a standard
 * CSS gotcha, not something worth touching a site-wide rule for.
 *
 * Toggles the inner element between normal flow, `position: fixed` (pinned
 * while there's still room below it), and `position: absolute` pinned to the
 * bottom of the *whole* .sa-layout row (not this rail's own short column) —
 * that's what stops it once the column it sits beside runs out.
 */
export default function StickyRail({ children, className = '', innerClassName = '', topOffset = 100 }: StickyRailProps) {
  const placeholderRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<Mode>('static')
  const [fixedRect, setFixedRect] = useState({ left: 0, width: 0 })
  const [bottomTop, setBottomTop] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  // Captured once while the inner div is still in normal flow — once it goes
  // fixed/absolute it's removed from flow and offsetHeight would read 0.
  const naturalHeightRef = useRef(0)

  useEffect(() => {
    const update = () => {
      const placeholder = placeholderRef.current
      const inner = innerRef.current
      if (!placeholder || !inner) return

      // Below the layout's single-column breakpoint the rails stack in normal
      // flow (see .sa-layout in globals.css) — never pin them there.
      if (window.innerWidth < 1100) {
        setMode('static')
        return
      }

      if (inner.offsetHeight > 0) {
        naturalHeightRef.current = inner.offsetHeight
      }
      const railHeight = naturalHeightRef.current
      setInnerHeight(railHeight)

      const placeholderRect = placeholder.getBoundingClientRect()
      const placeholderTop = placeholderRect.top + window.scrollY

      // The row's real height is set by the center feed, not by this rail's
      // own short content — measure the shared .sa-layout container so
      // "bottom" mode kicks in at the right point, not almost immediately.
      const boundary = (placeholder.closest('.sa-layout') as HTMLElement | null) ?? placeholder
      const boundaryRect = boundary.getBoundingClientRect()
      const boundaryBottom = boundaryRect.top + window.scrollY + boundaryRect.height

      const viewportTop = window.scrollY + topOffset

      // If the rail's own content is taller than the viewport has room for
      // (below topOffset), pinning it with `position: fixed` would push its
      // bottom off-screen with no way to scroll to it — fixed elements don't
      // scroll with the page. Stay in normal flow instead so everything
      // stays reachable by scrolling the page like anything else on it.
      const availableViewportHeight = window.innerHeight - topOffset - 20

      if (placeholderTop > viewportTop || railHeight > availableViewportHeight) {
        setMode('static')
      } else if (boundaryBottom < viewportTop + railHeight) {
        setMode('bottom')
        setBottomTop(boundaryBottom - railHeight - placeholderTop)
      } else {
        setMode('fixed')
        setFixedRect({ left: placeholderRect.left, width: placeholderRect.width })
      }
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [topOffset])

  const style: React.CSSProperties =
    mode === 'fixed'
      ? { position: 'fixed', top: topOffset, left: fixedRect.left, width: fixedRect.width }
      : mode === 'bottom'
        ? { position: 'absolute', top: bottomTop, left: 0, right: 0 }
        : { position: 'static' }

  return (
    <div
      ref={placeholderRef}
      className={className}
      style={{ position: 'relative', height: mode === 'static' ? undefined : innerHeight }}
    >
      <div ref={innerRef} className={innerClassName} style={style}>
        {children}
      </div>
    </div>
  )
}
