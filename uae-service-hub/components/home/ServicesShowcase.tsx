'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './services-showcase.module.css'

export interface ShowcaseCard {
  badge: string
  h2: string
  h3: string
  p: string
}
export interface ShowcaseExtra {
  name: string
  desc: string
}

interface Props {
  label: string
  title: string
  subtitle: string
  cards: readonly ShowcaseCard[]
  slugs: string[]
  images: string[]
  alts: string[]
  keywords: string[][]
  viewService: string
  alsoAvailable: string
  extras: readonly ShowcaseExtra[]
  extraSlugs: string[]
  viewArrow: string
}

const AUTOPLAY_MS = 6500
const EXTRA_ICONS = ['🪟', '🪑', '🚗', '🏢', '🍳']

/**
 * "Service studio" for the homepage. Same copy as before (every h2/h3/p/keyword
 * stays in the DOM for SEO) — only the presentation changed:
 *  • desktop: cinematic image stage + expanding service tabs with an autoplay progress bar
 *  • phones: swipeable snap carousel with dots, arrows and autoplay
 */
export default function ServicesShowcase(p: Props) {
  const n = p.cards.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tick, setTick] = useState(0) // restarts the progress-bar animation
  const rail = useRef<HTMLDivElement>(null)
  const reduced = useRef(false)

  const go = useCallback((i: number, fromUser = false) => {
    const next = (i + n) % n
    setActive(next)
    setTick((t) => t + 1)
    if (fromUser) setPaused(true)
    // keep the phone carousel in sync
    const el = rail.current?.children[next] as HTMLElement | undefined
    if (el && rail.current && getComputedStyle(rail.current).overflowX !== 'visible') {
      rail.current.scrollTo({ left: el.offsetLeft - rail.current.offsetLeft - 16, behavior: reduced.current ? 'auto' : 'smooth' })
    }
  }, [n])

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (paused || reduced.current) return
    const t = setTimeout(() => go(active + 1), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [active, paused, go, tick])

  // phone: when the user swipes, the card closest to the left edge becomes active
  useEffect(() => {
    const r = rail.current
    if (!r) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (getComputedStyle(r).overflowX === 'visible') return
        const kids = Array.from(r.children) as HTMLElement[]
        const x = r.scrollLeft
        let best = 0
        kids.forEach((k, i) => { if (Math.abs(k.offsetLeft - r.offsetLeft - x) < Math.abs(kids[best].offsetLeft - r.offsetLeft - x)) best = i })
        setActive((cur) => (cur === best ? cur : best))
      })
    }
    const onTouch = () => setPaused(true)
    r.addEventListener('scroll', onScroll, { passive: true })
    r.addEventListener('touchstart', onTouch, { passive: true })
    return () => { r.removeEventListener('scroll', onScroll); r.removeEventListener('touchstart', onTouch) }
  }, [])

  return (
    <section className={s.wrap} aria-labelledby="home-services-h">
      <div className={s.blobA} aria-hidden="true" />
      <div className={s.blobB} aria-hidden="true" />

      <div className={s.inner}>
        <header className={s.head}>
          <span className={s.label}><i />{p.label}</span>
          <h2 id="home-services-h" className={s.title}>{p.title}</h2>
          <p className={s.subtitle}>{p.subtitle}</p>
        </header>

        <div className={s.studio} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* desktop image stage */}
          <div className={s.stage}>
            {p.images.map((src, i) => (
              <div key={src} className={`${s.frame} ${i === active ? s.frameOn : ''}`} aria-hidden={i !== active}>
                <Image src={src} alt={p.alts[i]} fill sizes="(max-width: 1023px) 1px, 640px" className={s.img} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
            <div className={s.shade} aria-hidden="true" />
            <span className={s.bigNum} aria-hidden="true" key={`n${active}`}>{String(active + 1).padStart(2, '0')}</span>
            <div className={s.stageCard} key={`c${active}`}>
              <span className={s.badge}>{p.cards[active].badge}</span>
              <p className={s.stageH3}>{p.cards[active].h3}</p>
              <Link href={`/services/${p.slugs[active]}`} className={s.stageBtn}>{p.viewService}</Link>
            </div>
            <div className={s.thumbs}>
              {p.images.map((src, i) => (
                <button key={src} type="button" className={`${s.thumb} ${i === active ? s.thumbOn : ''}`} onClick={() => go(i, true)} aria-label={p.cards[i].h2}>
                  <Image src={src} alt="" fill sizes="64px" className={s.img} />
                </button>
              ))}
            </div>
          </div>

          {/* service list — tabs on desktop, swipe cards on phones */}
          <div className={s.rail} ref={rail}>
            {p.cards.map((c, i) => {
              const on = i === active
              return (
                <article key={p.slugs[i]} className={`${s.item} ${on ? s.itemOn : ''}`}>
                  <div className={s.mImg} aria-hidden="true">
                    <Image src={p.images[i]} alt="" fill sizes="(max-width: 1023px) 86vw, 1px" className={s.img} loading="lazy" />
                    <span className={s.mBadge}>{c.badge}</span>
                    <span className={s.mNum}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={on}
                    className={s.tab}
                    onClick={() => go(i, true)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(i, true) } }}
                  >
                    <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={s.tabText}>
                      <span className={s.tabBadge}>{c.badge}</span>
                      <h2 className={s.h2}>{c.h2}</h2>
                    </div>
                    <span className={s.chev} aria-hidden="true">›</span>
                  </div>
                  <div className={s.more}>
                    <div className={s.moreIn}>
                      <h3 className={s.h3}>{c.h3}</h3>
                      <p className={s.p}>{c.p}</p>
                      <div className={s.kws}>
                        {p.keywords[i].map((kw) => <span key={kw} className={s.kw}>{kw}</span>)}
                      </div>
                      <Link href={`/services/${p.slugs[i]}`} className={s.link}>{p.viewService}</Link>
                    </div>
                  </div>
                  {on && !paused && <span className={s.progress} key={`p${tick}`} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} aria-hidden="true" />}
                </article>
              )
            })}
          </div>

          {/* phone controls */}
          <div className={s.ctrl}>
            <button type="button" className={s.arrow} onClick={() => go(active - 1, true)} aria-label="Previous service">‹</button>
            <div className={s.dots}>
              {p.cards.map((c, i) => (
                <button key={i} type="button" className={`${s.dot} ${i === active ? s.dotOn : ''}`} onClick={() => go(i, true)} aria-label={c.badge} />
              ))}
            </div>
            <button type="button" className={s.arrow} onClick={() => go(active + 1, true)} aria-label="Next service">›</button>
          </div>
        </div>

        <div className={s.extrasHead}><span className={s.label}><i />{p.alsoAvailable}</span></div>
        <div className={s.extras}>
          {p.extras.map((x, i) => (
            <Link key={p.extraSlugs[i]} href={`/services/${p.extraSlugs[i]}`} className={s.extra} style={{ animationDelay: `${i * 90}ms` }}>
              <span className={s.extraIcon} aria-hidden="true">{EXTRA_ICONS[i] ?? '✨'}</span>
              <h3 className={s.extraH3}>{x.name}</h3>
              <p className={s.extraP}>{x.desc}</p>
              <span className={s.extraArrow}>{p.viewArrow}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
