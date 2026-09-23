'use client'

import * as React from 'react'
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
 *  for keyword links (service × area) so each one previews its own real work-photo. */
export function HoverImageLink({ href, image, alt, className, children }: HoverImageLinkProps) {
  const [hovered, setHovered] = React.useState(false)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

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
      {hovered && (
        <span className="hil-preview" style={{ left: pos.x + 18, top: pos.y - 100 }} aria-hidden="true">
          <Image src={image} alt={alt} width={168} height={126} className="hil-preview-img" />
        </span>
      )}
    </Link>
  )
}
