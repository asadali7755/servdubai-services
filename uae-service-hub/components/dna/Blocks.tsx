import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Pointer3D from './Pointer3D'
import Reveal from '@/components/Reveal'
import QuoteCard from '@/components/QuoteCard'
import type { CtaStyle, FaqStyle, LandmarkStyle, ServiceStyle, TipStyle } from '@/lib/design/dna'

/* ------------------------------------------------------------------ */
export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="dn-sec-head">
      <div className="dn-eyebrow">{eyebrow}</div>
      <h2 className="dn-h dn-h2">{title}</h2>
      {lead && <p className="dn-lead" style={{ marginTop: '.9rem' }}>{lead}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
export interface ServiceItem {
  name: string
  href: string
  why: string
  image: string
}

export function ServicesBlock({
  style,
  items,
  others,
  othersLabel,
}: {
  style: ServiceStyle
  items: ServiceItem[]
  others?: { name: string; href: string }[]
  othersLabel?: string
}) {
  let body: ReactNode
  if (style === 'bento') {
    body = (
      <div className="dn-bento">
        {items.map((s, i) => (
          <Pointer3D key={s.href} className="dn-bento-cell">
            <Link href={s.href} className="dn-bento-card">
              <Image src={s.image} alt={s.name} fill sizes="(max-width: 760px) 100vw, 580px" />
              <span className="dn-bento-num">0{i + 1}</span>
              <h3 className="dn-h">{s.name}</h3>
              <p>{s.why}</p>
            </Link>
          </Pointer3D>
        ))}
      </div>
    )
  } else if (style === 'rows') {
    body = (
      <div className="dn-rows">
        {items.map((s, i) => (
          <Link key={s.href} href={s.href} className="dn-row">
            <span className="dn-row-n">{String(i + 1).padStart(2, '0')}</span>
            <span>
              <h3 className="dn-h dn-h3">{s.name}</h3>
              <p>{s.why}</p>
              <span className="dn-row-go">See details →</span>
            </span>
            <span className="dn-row-img"><Image src={s.image} alt={s.name} fill sizes="200px" /></span>
          </Link>
        ))}
      </div>
    )
  } else {
    body = (
      <div className="dn-flips">
        {items.map((s) => (
          <div key={s.href} className="dn-flip" tabIndex={0}>
            <div className="dn-flip-in">
              <div className="dn-flip-face dn-flip-front">
                <Image src={s.image} alt={s.name} fill sizes="(max-width: 760px) 100vw, 380px" />
                <h3 className="dn-h">{s.name}</h3>
                <small>Hover or tap for details</small>
              </div>
              <div className="dn-flip-face dn-flip-back">
                <h3 className="dn-h dn-h3">{s.name}</h3>
                <p>{s.why}</p>
                <Link href={s.href}>See details →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {body}
      {others && others.length > 0 && (
        <div className="dn-chips">
          {othersLabel && <div className="dn-chip-lbl">{othersLabel}</div>}
          {others.map((o) => (
            <Link key={o.href + o.name} href={o.href} className="dn-chip">{o.name}</Link>
          ))}
        </div>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
export function TipsBlock({ style, tips, labels }: { style: TipStyle; tips: string[]; labels?: string[] }) {
  if (style === 'notes') {
    return (
      <ul className="dn-notes">
        {tips.map((t, i) => (
          <li key={i}><b>{labels?.[i] ?? `TIP ${i + 1}`}</b>{t}</li>
        ))}
      </ul>
    )
  }
  if (style === 'timeline') {
    return (
      <ol className="dn-tl">
        {tips.map((t, i) => (
          <li key={i}><b>{labels?.[i] ?? `Step ${i + 1}`}</b>{t}</li>
        ))}
      </ol>
    )
  }
  return (
    <ul className="dn-check">
      {tips.map((t, i) => <li key={i}><span>{t}</span></li>)}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
export function FaqBlock({ style, faqs }: { style: FaqStyle; faqs: { question: string; answer: string }[] }) {
  if (style === 'columns') {
    return (
      <div className="dn-cols">
        {faqs.map((f, i) => (
          <div key={i}><h3 className="dn-h">{f.question}</h3><p>{f.answer}</p></div>
        ))}
      </div>
    )
  }
  if (style === 'cards') {
    return (
      <div className="dn-qcards">
        {faqs.map((f, i) => (
          <div key={i} className="dn-qcard"><h3 className="dn-h">{f.question}</h3><p>{f.answer}</p></div>
        ))}
      </div>
    )
  }
  return (
    <div className="dn-acc">
      {faqs.map((f, i) => (
        <details key={i} open={i === 0}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
export function LandmarksBlock({ style, items }: { style: LandmarkStyle; items: string[] }) {
  if (style === 'marquee') {
    const loop = [...items, ...items]
    return (
      <div className="dn-marquee" aria-label={items.join(', ')}>
        <div className="dn-marquee-track" aria-hidden="true">
          {loop.map((x, i) => <span key={i}>{x}</span>)}
        </div>
      </div>
    )
  }
  if (style === 'grid') {
    return <div className="dn-lgrid">{items.map((x) => <span key={x}>{x}</span>)}</div>
  }
  return <div className="dn-cloud">{items.map((x) => <span key={x}>{x}</span>)}</div>
}

/* ------------------------------------------------------------------ */
export function CtaBlock({
  style,
  title,
  text,
  waLink,
  waMessage,
  phone,
  phoneDisplay,
  quoteId,
  quoteSource,
  quoteHeading,
  defaultService,
}: {
  style: CtaStyle
  title: string
  text: string
  waLink: string
  waMessage: string
  phone: string
  phoneDisplay: string
  quoteId: string
  quoteSource: string
  quoteHeading: string
  defaultService?: string
}) {
  const quote = (
    <QuoteCard id={quoteId} source={quoteSource} heading={quoteHeading} defaultService={defaultService} className="page-quote-card" />
  )
  const btns = (light?: boolean) => (
    <div className="dn-btns" style={{ marginTop: '1.3rem' }}>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa" data-lead="whatsapp">WhatsApp now</a>
      <a href={`tel:${phone}`} className={`dn-btn ${light ? 'dn-btn-ghost-light' : 'dn-btn-ghost'}`} data-lead="call">Call {phoneDisplay}</a>
    </div>
  )

  if (style === 'card3d') {
    return (
      <Reveal>
        <Pointer3D className="dn-cta-3d">
          <div>
            <div className="dn-eyebrow">Book in two minutes</div>
            <h2 className="dn-h dn-h2">{title}</h2>
            <p className="dn-lead" style={{ marginTop: '.8rem' }}>{text}</p>
            {quote}
          </div>
          <div className="dn-cta-card">
            <div style={{ fontSize: '.8rem', opacity: 0.7 }}>Your WhatsApp message</div>
            <div className="dn-wa-bubble">{waMessage}</div>
            <div className="dn-wa-meta">✓✓ sent · usually answered within minutes</div>
            {btns(true)}
          </div>
        </Pointer3D>
      </Reveal>
    )
  }
  if (style === 'split') {
    return (
      <Reveal>
        <div className="dn-cta-split">
          <div className="dn-cta-split-l">
            <div className="dn-eyebrow">Free quote</div>
            <h2 className="dn-h dn-h2">{title}</h2>
            <p className="dn-lead" style={{ marginTop: '.8rem' }}>{text}</p>
            {btns()}
          </div>
          <div className="dn-cta-split-r">{quote}</div>
        </div>
      </Reveal>
    )
  }
  return (
    <Reveal>
      <div className="dn-cta-band">
        <div>
          <div className="dn-eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Ready when you are</div>
          <h2 className="dn-h dn-h2">{title}</h2>
          <p style={{ marginTop: '.8rem' }}>{text}</p>
          {btns(true)}
        </div>
        <div>{quote}</div>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
export function StickyBar({ waLink, phone }: { waLink: string; phone: string }) {
  return (
    <div className="dn-sticky">
      <a href={waLink} target="_blank" rel="noopener noreferrer" data-lead="whatsapp">WhatsApp quote</a>
      <a href={`tel:${phone}`} data-lead="call">Call now</a>
    </div>
  )
}
