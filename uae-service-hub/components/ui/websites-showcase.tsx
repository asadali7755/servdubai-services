'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'

interface WebsiteItem {
  num: string
  name: string
  tagline: string
  url: string
  urlLabel: string
  image: string
}

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    num: '01',
    name: 'Villa Deep Cleaning',
    tagline: "The UAE's Premier Villa Cleaning Specialists",
    url: 'https://www.villadeepcleaning.com/',
    urlLabel: 'villadeepcleaning.com',
    image: '/images/hero/villa-apartment-cleaning-services.webp',
  },
  {
    num: '02',
    name: 'Sofa Shampooing Dubai',
    tagline: "Dubai's Leading Sofa Cleaning Experts",
    url: 'https://sofashampooingdubai.com',
    urlLabel: 'sofashampooingdubai.com',
    image: '/images/hero/sofa-carpet-cleaning.webp',
  },
  {
    num: '03',
    name: 'Carpet Cleaning Dubai',
    tagline: 'Expert Carpet & Rug Cleaning Across Dubai',
    url: 'https://carpetcleaningdubai.com',
    urlLabel: 'carpetcleaningdubai.com',
    image: '/images/hero/professional-cleaning-services-UAE.webp',
  },
  {
    num: '04',
    name: 'Marble Pro UAE',
    tagline: 'Premium Marble Polishing & Restoration Across UAE',
    url: 'https://marblepro.ae',
    urlLabel: 'marblepro.ae',
    image: '/images/hero/marble-polishing-dubai.webp',
  },
]

// 3x3 tile grid used as the "reveal" mask over the photo.
const TILES = Array.from({ length: 9 }).map((_, i) => ({
  x: (i % 3) * 160 + 20,
  y: Math.floor(i / 3) * 160 + 20,
}))

/** Fixed dark/gold panel, independent of the site's light/dark theme toggle —
 *  same "always dark" pattern already used by SiteHero and EmiratesSection,
 *  since Tailwind's `dark:` variant isn't wired to this site's [data-theme]
 *  attribute (it only responds to a `.dark` class or OS preference).
 *
 *  The reveal effect deliberately does NOT animate elements living inside an
 *  SVG <clipPath> (the approach the original reference component used):
 *  clipPath children are excluded from the render tree, so GSAP can't read a
 *  real bounding box / client rect for them and silently no-ops every
 *  transform tween on them (confirmed while building this — scale never
 *  applied, no error thrown). Instead, the tiles are ordinary rendered <rect>
 *  elements stacked ON TOP of the photo, colored to match the section
 *  background, that scale from 1 to 0 to "uncover" the image beneath. */
export function WebsitesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<SVGImageElement>(null)
  const tileRefs = useRef<(SVGRectElement | null)[]>([])
  const masterTl = useRef<gsap.core.Timeline | null>(null)

  const createLoop = (index: number) => {
    const item = WEBSITE_ITEMS[index]
    const tiles = tileRefs.current.filter(Boolean) as SVGRectElement[]

    if (masterTl.current) masterTl.current.kill()
    if (imageRef.current) imageRef.current.setAttribute('href', item.image)

    gsap.set(tiles, { scale: 1, transformOrigin: '50% 50%' })

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    // 1. UNCOVER — tiles shrink away to reveal the photo underneath.
    tl.to(tiles, {
      scale: 0,
      duration: 0.8,
      stagger: { amount: 0.4, from: 'random' },
      ease: 'expo.out',
    })
      // 2. HOLD — brief pause on the fully revealed photo.
      .to({}, { duration: 1.2 })
      // 3. COVER — tiles grow back to hide the photo before the next swap.
      .to(tiles, {
        scale: 1,
        duration: 0.6,
        stagger: { amount: 0.3, from: 'edges' },
        ease: 'expo.in',
      })

    masterTl.current = tl
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0)
    }, containerRef)
    return () => {
      ctx.revert()
      masterTl.current?.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    createLoop(index)
  }

  return (
    <section className="wss-section">
      <div className="wss-inner">
        <div className="wss-header">
          <span className="wss-label">Our Network</span>
          <h2 className="wss-h2">Explore Our Specialist Cleaning Websites</h2>
          <p className="wss-sub">
            Madinat Alhaya also runs 4 dedicated specialist sites — each focused entirely on one service, backed by the same certified team across UAE.
          </p>
        </div>

        <div ref={containerRef} className="wss-interactive">
          {/* LEFT: MENU */}
          <div className="wss-menu-col">
            <nav>
              <ul className="wss-menu-list">
                {WEBSITE_ITEMS.map((item, index) => (
                  <li key={item.num} onMouseEnter={() => handleItemHover(index)} className="wss-menu-item">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="wss-menu-link">
                      <div className="wss-menu-row">
                        <span className={`wss-num ${activeIndex === index ? 'wss-num-active' : ''}`}>{item.num}</span>
                        <div>
                          <h3 className={`wss-name ${activeIndex === index ? 'wss-name-active' : 'wss-name-inactive'}`}>
                            {item.name}
                          </h3>
                          <p className={`wss-tagline ${activeIndex === index ? 'wss-tagline-active' : ''}`}>
                            {item.tagline}
                          </p>
                          <span className={`wss-url ${activeIndex === index ? 'wss-url-active' : ''}`}>
                            {item.urlLabel} ↗
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT: REVEAL FRAME */}
          <div className="wss-visual-col">
            <div className="wss-glow" />
            <svg viewBox="0 0 500 500" className="wss-svg">
              <defs>
                <clipPath id="wss-frame">
                  <rect x="10" y="10" width="480" height="480" rx="32" />
                </clipPath>
              </defs>

              <g clipPath="url(#wss-frame)">
                <image ref={imageRef} href={WEBSITE_ITEMS[0].image} width="500" height="500" preserveAspectRatio="xMidYMid slice" />
                <g>
                  {TILES.map((tile, i) => (
                    <rect
                      key={i}
                      ref={(el) => { tileRefs.current[i] = el }}
                      className="wss-tile"
                      x={tile.x}
                      y={tile.y}
                      width="140"
                      height="140"
                      rx="4"
                    />
                  ))}
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="wss-cta-row">
          <a href="/websites" className="wss-cta-link">View All Our Websites →</a>
        </div>
      </div>
    </section>
  )
}
