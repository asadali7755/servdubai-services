import Image from 'next/image'
import type { ReactNode } from 'react'
import Pointer3D from './Pointer3D'
import { hash, type HeroStyle } from '@/lib/design/dna'

export interface HeroProps {
  style: HeroStyle
  badge: string
  /** the page H1 — pass plain text; `highlight` (if found inside) gets accent styling */
  title: string
  highlight?: string
  tagline: string
  image: string
  imageAlt: string
  /** extra real photos for stack / polaroid variants */
  extraImages?: string[]
  /** short labels (landmarks, services) used as floating chips / orbit / map pins */
  chips: string[]
  waLink: string
  phone: string
  phoneDisplay: string
  /** small facts row under the buttons */
  meta?: { label: string; value: string }[]
  coords?: { lat: number; lng: number }
  crumb?: ReactNode
  seed: string
  /** Shown only on phones: a full, uncropped photo card at the top of the hero
   *  (desktop visuals like maps / orbits / dark full-bleed photos hide it there). */
  mobileImage?: { src: string; alt: string }
}

function TitleText({ title, highlight, mode }: { title: string; highlight?: string; mode: 'grad' | 'ul' | 'plain' }) {
  if (!highlight || !title.includes(highlight) || mode === 'plain') return <>{title}</>
  const [a, b] = title.split(highlight)
  return (
    <>
      {a}
      <span className={mode === 'grad' ? 'dn-grad-text' : 'dn-ul'}>{highlight}</span>
      {b}
    </>
  )
}

function Buttons({ waLink, phone, phoneDisplay, light }: { waLink: string; phone: string; phoneDisplay: string; light?: boolean }) {
  return (
    <div className="dn-btns">
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa" data-lead="whatsapp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.52 5.83L.06 23.55a.5.5 0 0 0 .61.61l5.72-1.47A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm6.03 16.92c-.25.69-1.44 1.33-2 1.41-.51.08-1.16.11-1.87-.12-.43-.14-.99-.32-1.69-.63-2.98-1.29-4.93-4.29-5.08-4.49-.15-.2-1.21-1.61-1.21-3.07s.77-2.18 1.04-2.48c.27-.3.6-.37.8-.37h.57c.18.01.43-.07.67.51.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.09 1.33 2.39 1.48.3.15.47.12.64-.07.17-.2.74-.87.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.41z"/></svg>
        WhatsApp for a free quote
      </a>
      <a href={`tel:${phone}`} className={`dn-btn ${light ? 'dn-btn-ghost-light' : 'dn-btn-ghost'}`} data-lead="call">
        Call {phoneDisplay}
      </a>
    </div>
  )
}

function Meta({ meta }: { meta?: HeroProps['meta'] }) {
  if (!meta?.length) return null
  return (
    <div className="dn-hero-meta">
      {meta.map((m) => (
        <span key={m.label}><b>{m.value}</b> {m.label}</span>
      ))}
    </div>
  )
}

function MobileImage({ img }: { img?: HeroProps['mobileImage'] }) {
  if (!img) return null
  return (
    <div className="dn-hero-mimg">
      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 760px) 92vw, 1px" loading="eager" fetchPriority="high" />
    </div>
  )
}

export default function DnaHero(p: HeroProps) {
  const chips = p.chips.slice(0, 6)
  const mimg = <MobileImage img={p.mobileImage} />
  const mcls = p.mobileImage ? ' dn-has-mimg' : ''
  const imgs = [p.image, ...(p.extraImages ?? [])]

  switch (p.style) {
    case 'fullbleed':
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-fullbleed${mcls}`}>
          <div className="dn-bg"><Image src={p.image} alt={p.imageAlt} fill priority sizes="100vw" /></div>
          <div className="dn-wrap">{p.crumb}{mimg}</div>
          <div className="dn-wrap dn-hero-body">
            <span className="dn-hero-badge"><i />{p.badge}</span>
            <h1 className="dn-h dn-hero-h1" style={{ maxWidth: '16ch' }}>{p.title}</h1>
            <p className="dn-hero-tag">{p.tagline}</p>
            <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} light />
            <Meta meta={p.meta} />
          </div>
        </Pointer3D>
      )

    case 'typo':
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-typo${mcls}`}>
          <div className="dn-wrap">{p.crumb}{mimg}</div>
          <div className="dn-wrap dn-hero-grid" style={{ marginTop: 24 }}>
            <div>
              <span className="dn-hero-badge"><i />{p.badge}</span>
              <h1 className="dn-h dn-hero-h1"><TitleText title={p.title} highlight={p.highlight} mode="grad" /></h1>
              <p className="dn-hero-tag">{p.tagline}</p>
              <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} />
              <Meta meta={p.meta} />
            </div>
            <div className="dn-polaroids" aria-hidden="true">
              {imgs.slice(0, 2).map((src, i) => (
                <div className="dn-polaroid" key={src + i}>
                  <div><Image src={src} alt="" fill sizes="260px" priority={i === 0} /></div>
                  <span>{chips[i] ?? p.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </Pointer3D>
      )

    case 'stack':
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-stack${mcls}`}>
          <div className="dn-wrap" style={{ textAlign: 'left' }}>{p.crumb}{mimg}</div>
          <div className="dn-wrap" style={{ marginTop: 20 }}>
            <span className="dn-hero-badge"><i />{p.badge}</span>
            <h1 className="dn-h dn-hero-h1" style={{ maxWidth: '20ch', marginInline: 'auto' }}><TitleText title={p.title} highlight={p.highlight} mode="ul" /></h1>
            <p className="dn-hero-tag">{p.tagline}</p>
            <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} />
            <div className="dn-stack">
              {[imgs[0], imgs[1] ?? imgs[0], imgs[2] ?? imgs[0]].map((src, i) => (
                <div className="dn-stack-card" key={i}>
                  <Image src={src} alt={i === 0 ? p.imageAlt : ''} fill sizes="(max-width: 900px) 70vw, 440px" priority={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </Pointer3D>
      )

    case 'orbit': {
      const n = Math.min(chips.length, 6)
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-orbit${mcls}`}>
          <div className="dn-wrap">{p.crumb}{mimg}</div>
          <div className="dn-wrap dn-hero-grid" style={{ marginTop: 20 }}>
            <div>
              <span className="dn-hero-badge"><i />{p.badge}</span>
              <h1 className="dn-h dn-hero-h1"><TitleText title={p.title} highlight={p.highlight} mode="grad" /></h1>
              <p className="dn-hero-tag">{p.tagline}</p>
              <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} />
              <Meta meta={p.meta} />
            </div>
            <div className="dn-orbit">
              <div className="dn-orbit-img"><Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 900px) 80vw, 400px" /></div>
              <div className="dn-orbit-ring" aria-hidden="true">
                {chips.slice(0, n).map((c, i) => (
                  <div key={c} className="dn-orbit-item" style={{ ['--ang' as string]: `${(360 / n) * i - 90}deg` }}>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Pointer3D>
      )
    }

    case 'mapgrid': {
      const h = hash(p.seed)
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-mapgrid${mcls}`}>
          <div className="dn-wrap">{p.crumb}{mimg}</div>
          <div className="dn-wrap dn-hero-grid" style={{ marginTop: 20 }}>
            <div>
              <span className="dn-hero-badge"><i />{p.badge}</span>
              <h1 className="dn-h dn-hero-h1">{p.title}</h1>
              <p className="dn-hero-tag">{p.tagline}</p>
              <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} light />
              <Meta meta={p.meta} />
            </div>
            <div className="dn-map" aria-label={`Areas we cover: ${chips.join(', ')}`} role="img">
              <div className="dn-map-plane" />
              {chips.slice(0, 5).map((c, i) => {
                const x = 24 + (((h >> (i * 3)) % 50) + i * 13) % 46
                const y = 30 + (((h >> (i * 4 + 1)) % 40) + i * 11) % 42
                return (
                  <div key={c} className="dn-pin" style={{ left: `${x}%`, top: `${y}%` }}>
                    <b>{c}</b>
                    <i />
                  </div>
                )
              })}
              {p.coords && (
                <div className="dn-map-coord">
                  {p.coords.lat.toFixed(4)}° N · {p.coords.lng.toFixed(4)}° E
                </div>
              )}
            </div>
          </div>
        </Pointer3D>
      )
    }

    case 'split3d':
    default:
      return (
        <Pointer3D as="header" className={`dn-hero dn-h-split3d${mcls}`}>
          <div className="dn-wrap">{p.crumb}{mimg}</div>
          <div className="dn-wrap dn-hero-grid" style={{ marginTop: 20 }}>
            <div>
              <span className="dn-hero-badge"><i />{p.badge}</span>
              <h1 className="dn-h dn-hero-h1"><TitleText title={p.title} highlight={p.highlight} mode="ul" /></h1>
              <p className="dn-hero-tag">{p.tagline}</p>
              <Buttons waLink={p.waLink} phone={p.phone} phoneDisplay={p.phoneDisplay} />
              <Meta meta={p.meta} />
            </div>
            <div className="dn-frame3d">
              <div className="dn-frame3d-inner">
                <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 520px" />
              </div>
              {chips.slice(0, 3).map((c, i) => (
                <span
                  key={c}
                  className="dn-chip-float"
                  style={[{ top: '8%', left: '-6%' }, { top: '46%', right: '-5%' }, { bottom: '9%', left: '6%' }][i]}
                >
                  <b>●</b> {c}
                </span>
              ))}
            </div>
          </div>
        </Pointer3D>
      )
  }
}
