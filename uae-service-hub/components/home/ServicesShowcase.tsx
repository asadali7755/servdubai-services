'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
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

interface Panel {
  key: string
  badge: string
  title: string
  /** main services keep their h2 + h3; the extra five keep their h3 (unchanged SEO structure) */
  titleTag: 'h2' | 'h3'
  sub?: string
  desc: string
  kws: string[]
  slug: string
  img: string
  alt: string
  /** object-position for the photo (keeps the subject in frame on narrow cards) */
  pos?: string
}

const EXTRA_META: Record<string, { badge: string; img: string; alt: string; pos?: string }> = {
  'curtain-cleaning': { badge: 'CURTAIN', img: '/images/services/curtain-cleaning.webp', alt: 'Curtain and blinds cleaning in Dubai', pos: '82% 50%' },
  'dining-chair-cleaning': { badge: 'CHAIRS', img: '/images/services/dining-chair-cleaning.webp', alt: 'Dining chair and upholstery cleaning in Dubai' },
  'car-interior-detailing': { badge: 'CAR', img: '/images/services/car-interior-detailing.webp', alt: 'Car interior detailing and AC vent cleaning in Dubai' },
  'apartment-cleaning': { badge: 'APARTMENT', img: '/images/services/apartment-cleaning.webp', alt: 'Apartment deep cleaning team in a Dubai apartment' },
  'restaurant-kitchen-cleaning': { badge: 'KITCHEN', img: '/images/services/restaurant-kitchen-cleaning.webp', alt: 'Restaurant kitchen cleaning in Dubai' },
}

const AUTOPLAY_MS = 5200

function Heading({ tag, className, children }: { tag: 'h2' | 'h3'; className: string; children: ReactNode }) {
  return tag === 'h2' ? <h2 className={className}>{children}</h2> : <h3 className={className}>{children}</h3>
}

/**
 * One row of expanding panels (desktop): hover / click / keyboard opens one
 * panel and an idle row auto-advances. On phones the parent passes `deck` —
 * the globally active service in the scroll-locked card deck — and the row
 * just renders its cards in the right state.
 */
function PanelRow({ panels, offset, viewService, delay, deck, onPick }: {
  panels: Panel[]; offset: number; viewService: string; delay: number
  deck: number | null; onPick?: (globalIndex: number) => void
}) {
  const [open, setOpen] = useState(0)
  const [hold, setHold] = useState(false)
  const [tick, setTick] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const mobile = deck !== null

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (mobile || hold || !visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => { setOpen((o) => (o + 1) % panels.length); setTick((x) => x + 1) }, AUTOPLAY_MS + (tick === 0 ? delay : 0))
    return () => clearTimeout(t)
  }, [open, hold, visible, panels.length, tick, delay, mobile])

  const pick = (i: number) => {
    if (mobile) { onPick?.(offset + i); return }
    setOpen(i); setTick((x) => x + 1)
  }
  const isOn = (i: number) => (mobile ? offset + i === deck : i === open)
  const deckCls = (i: number) => {
    if (!mobile) return ''
    const g = offset + i
    return g === deck ? s.deckOn : g < (deck as number) ? s.deckPast : s.deckNext
  }

  return (
    <div
      ref={ref}
      className={s.row}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      {panels.map((p, i) => {
        const on = isOn(i)
        const n = String(offset + i + 1).padStart(2, '0')
        return (
          <article
            key={p.key}
            className={`${s.panel} ${on ? s.on : ''} ${deckCls(i)}`}
            onMouseEnter={() => { if (!mobile) pick(i) }}
            onClick={() => pick(i)}
            style={{ transitionDelay: mobile ? '0ms' : on ? '0ms' : '40ms' }}
          >
            <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 46vw" className={s.img} loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} />
            <div className={s.veil} aria-hidden="true" />

            {/* collapsed face */}
            <button type="button" className={s.face} aria-expanded={on} onClick={() => pick(i)} onFocus={() => pick(i)}>
              <span className={s.faceNum}>{n}</span>
              <span className={s.faceTitle}>{p.badge}</span>
              <span className={s.plus} aria-hidden="true">+</span>
            </button>

            {/* open content */}
            <div className={s.body} aria-hidden={!on}>
              <div className={s.topline}>
                <span className={s.badge}>{p.badge}</span>
                <span className={s.num}>{n}</span>
              </div>
              <Heading tag={p.titleTag} className={s.title}>{p.title}</Heading>
              {p.sub && <h3 className={s.sub}>{p.sub}</h3>}
              <p className={s.desc}>{p.desc}</p>
              {p.kws.length > 0 && (
                <div className={s.kws}>{p.kws.map((k) => <span key={k}>{k}</span>)}</div>
              )}
              <Link href={`/services/${p.slug}`} className={s.cta} tabIndex={on ? 0 : -1}>
                {viewService}
              </Link>
            </div>

            {!mobile && on && !hold && visible && <span key={tick} className={s.timer} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} aria-hidden="true" />}
          </article>
        )
      })}
    </div>
  )
}

/**
 * Homepage "Our Cleaning Services": all 11 services as one family of expanding
 * photo panels (2 rows on desktop; on phones a scroll-locked deck that opens one
 * service per scroll step, then releases the page). Copy, headings
 * and keywords are unchanged and stay in the DOM.
 */
export default function ServicesShowcase(p: Props) {
  const main: Panel[] = p.cards.map((c, i) => ({
    key: p.slugs[i], badge: c.badge, title: c.h2, titleTag: 'h2', sub: c.h3, desc: c.p,
    kws: p.keywords[i] ?? [], slug: p.slugs[i], img: p.images[i], alt: p.alts[i],
  }))
  const extra: Panel[] = p.extras.map((x, i) => {
    const slug = p.extraSlugs[i]
    const m = EXTRA_META[slug] ?? { badge: 'SERVICE', img: p.images[0], alt: x.name }
    return { key: slug, badge: m.badge, title: x.name, titleTag: 'h3', desc: x.desc, kws: [], slug, img: m.img, alt: m.alt, pos: m.pos }
  })
  const all = [...main, ...extra]
  const N = all.length

  // ---- phones: scroll-locked deck. The section pins while you scroll; each
  // scroll step brings in the next service; after the last one it un-pins. ----
  const [mobile, setMobile] = useState(false)
  const [active, setActive] = useState(0)
  const pin = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    // the deck needs position:sticky, which needs overflow:clip + :has() (iOS 16+ etc.);
    // older browsers keep the plain stacked list
    const ok = CSS.supports('overflow', 'clip') && CSS.supports('selector(:has(a))')
    const apply = () => setMobile(ok && mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!mobile) return
    let raf = 0
    const update = () => {
      raf = 0
      const el = pin.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const stage = el.firstElementChild as HTMLElement | null
      const travel = el.offsetHeight - (stage?.offsetHeight ?? window.innerHeight)
      const top = parseFloat(getComputedStyle(el).getPropertyValue('--pin-top')) || 0
      const prog = Math.min(1, Math.max(0, (top - r.top) / Math.max(1, travel)))
      const idx = Math.min(N - 1, Math.floor(prog * N))
      setActive((a) => (a === idx ? a : idx))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [mobile, N])

  // tapping a dot / card scrolls to that step so scroll and deck stay in sync
  const jump = (i: number) => {
    const el = pin.current
    if (!el) return
    const stage = el.firstElementChild as HTMLElement | null
    const travel = el.offsetHeight - (stage?.offsetHeight ?? window.innerHeight)
    const top = parseFloat(getComputedStyle(el).getPropertyValue('--pin-top')) || 0
    const y = window.scrollY + el.getBoundingClientRect().top - top + ((i + 0.5) / N) * travel
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const deck = mobile ? active : null
  const cur = all[active]

  return (
    <section className={s.wrap} aria-labelledby="home-services-h">
      <div className={s.aurora} aria-hidden="true" />
      <div className={s.inner}>
        <header className={s.head}>
          <span className={s.label}><i />{p.label}</span>
          <h2 id="home-services-h" className={s.h}>{p.title}</h2>
          <p className={s.lead}>{p.subtitle}</p>
          <div className={s.count} aria-hidden="true">
            <b>{N}</b> services · <b>7</b> emirates · <span className={s.hintDesk}>hover a card to open it</span><span className={s.hintMob}>scroll to see each one</span>
          </div>
        </header>

        <div className={`${s.pin} ${mobile ? s.pinOn : ''}`} ref={pin} style={mobile ? { height: `calc(${N} * 58svh + 100svh)` } : undefined}>
          <div className={s.stage}>
            {mobile && (
              <div className={s.deckBar} aria-hidden="true">
                <span className={s.deckCount}><b>{String(active + 1).padStart(2, '0')}</b> / {N}</span>
                <span className={s.deckName} key={cur.key}>{active >= main.length ? `${p.alsoAvailable} · ` : ''}{cur.badge}</span>
                <span className={s.segs}>
                  {all.map((x, i) => <i key={x.key} className={i <= active ? s.segOn : ''} onClick={() => jump(i)} />)}
                </span>
              </div>
            )}
            <div className={s.cards}>
              <PanelRow panels={main} offset={0} viewService={p.viewService} delay={0} deck={deck} onPick={jump} />
              <div className={s.divider}><span className={s.label}><i />{p.alsoAvailable}</span></div>
              <PanelRow panels={extra} offset={main.length} viewService={p.viewService} delay={2400} deck={deck} onPick={jump} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
