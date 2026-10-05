'use client'

import Image from 'next/image'
import { useState } from 'react'

/** Drag / keyboard before-after comparison slider using real job photos. */
export default function BeforeAfter({
  before,
  after,
  alt,
  label = 'Drag to compare',
}: {
  before: string
  after: string
  alt: string
  label?: string
}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="dn-ba" style={{ ['--ba' as string]: `${pos}%` }}>
      <Image src={after} alt={`${alt} — after cleaning`} fill sizes="(max-width: 768px) 100vw, 560px" className="dn-ba-img" />
      <div className="dn-ba-before" aria-hidden="true">
        <Image src={before} alt="" fill sizes="(max-width: 768px) 100vw, 560px" className="dn-ba-img" />
      </div>
      <span className="dn-ba-tag dn-ba-tag-b">Before</span>
      <span className="dn-ba-tag dn-ba-tag-a">After</span>
      <div className="dn-ba-handle" aria-hidden="true"><span>⇆</span></div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label}
        className="dn-ba-range"
      />
    </div>
  )
}
