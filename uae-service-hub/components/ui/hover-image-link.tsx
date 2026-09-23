'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'

interface HoverImageLinkProps {
  href: string
  image?: string
  alt: string
  className?: string
  children: React.ReactNode
}

/** A link that shows a small floating photo preview next to the cursor on hover — used
 *  for keyword links (service × area) so each one previews its own real work-photo.
 *  The preview is portaled to document.body: several places this link is used sit
 *  inside cards with their own `:hover { transform }` (e.g. .sa-rail-card lifting on
 *  hover), and a `position: fixed` descendant of a transformed ancestor stops being
 *  fixed to the viewport — it becomes fixed to that ancestor instead, breaking the
 *  cursor-follow effect. Portaling to body sidesteps that entirely. */
export function HoverImageLink({ href, image, alt, className, children }: HoverImageLinkProps) {
  const [hovered, setHovered] = React.useState(false)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!image) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={(e) => {
        setPos({ x: e.clientX, y: e.clientY })
        setHovered(true)
      }}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {mounted && hovered && createPortal(
        <span className="hil-preview" style={{ left: pos.x + 18, top: pos.y - 100 }} aria-hidden="true">
          <Image src={image} alt={alt} width={168} height={126} className="hil-preview-img" />
        </span>,
        document.body,
      )}
    </Link>
  )
}
