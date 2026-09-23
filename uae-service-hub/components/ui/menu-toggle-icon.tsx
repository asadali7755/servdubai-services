'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean
  duration?: number
}

/** Simple hamburger ↔ X morph icon used by the site header's mobile trigger. */
export function MenuToggleIcon({ open, duration = 300, className, ...props }: MenuToggleIconProps) {
  const style: React.CSSProperties = { transitionDuration: `${duration}ms` }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn('overflow-visible', className)} {...props}>
      <line
        x1="4" y1="7" x2="20" y2="7"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        className="origin-center transition-transform ease-out"
        style={{ ...style, transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }}
      />
      <line
        x1="4" y1="12" x2="20" y2="12"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        className="transition-opacity ease-out"
        style={{ ...style, opacity: open ? 0 : 1 }}
      />
      <line
        x1="4" y1="17" x2="20" y2="17"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        className="origin-center transition-transform ease-out"
        style={{ ...style, transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
      />
    </svg>
  )
}
