'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pointer3D from '@/components/dna/Pointer3D'
import { CAR_SHOWCASE, type ShowcaseImage } from '@/lib/data/carShowcase'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import s from './car-showcase.module.css'

const SERVICES = [
  { slug: 'car-wash-at-home', name: 'Car Wash at Home', text: 'Foam wash, wheels, glass and interior vacuum — at your villa, building parking or office.', icon: '💧' },
  { slug: 'car-interior-detailing', name: 'Car Interior Cleaning', text: 'Seats shampooed or leather conditioned, carpets extracted, dashboard detailed.', icon: '🧽' },
  { slug: 'car-ac-odor-sanitization', name: 'Car AC & Odour Removal', text: 'AC vents cleaned and the cabin sanitised to remove musty, smoke and pet smells.', icon: '🌬️' },
]

/** phone screen rotation — foam, wheel, interior, AC */
const SCREEN = [CAR_SHOWCASE[0], CAR_SHOWCASE[1], CAR_SHOWCASE[5], CAR_SHOWCASE[6]]

export interface CarShowcaseProps {
  id?: string
  eyebrow?: string
  heading: string
  intro: string
  /** hide the card for the page you are already on */
  currentService?: string
}

function Shot({ img, sizes, className, decorative }: { img: ShowcaseImage; sizes: string; className?: string; decorative?: boolean }) {
  return (
    <Image
      src={img.src}
      alt={decorative ? '' : img.alt}
      title={decorative ? undefined : img.title}
      fill
      sizes={sizes}
      className={className}
      loading="lazy"
    />
  )
}

export default function CarShowcase({ id = 'car-care', eyebrow = 'Car care at your doorstep', heading, intro, currentService }: CarShowcaseProps) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % SCREEN.length), 3200)
    return () => clearInterval(t)
  }, [])
  const wa = getWhatsAppLink('Car Wash at Home')
  const cards = SERVICES.filter((x) => x.slug !== currentService)

  return (
    <section className={s.wrap} aria-labelledby={`${id}-h`} id={id}>
      <div className={s.glow} aria-hidden="true" />
      <div className={s.inner}>
        <div className={s.text}>
          <span className={s.eyebrow}><i />{eyebrow}</span>
          <h2 id={`${id}-h`} className={s.h2}>{heading}</h2>
          <p className={s.intro}>{intro}</p>

          <ul className={s.cards}>
            {cards.map((c, k) => (
              <li key={c.slug} style={{ animationDelay: `${120 * k}ms` }}>
                <Link href={`/services/${c.slug}`} className={s.card}>
                  <span className={s.icon} aria-hidden="true">{c.icon}</span>
                  <span>
                    <h3 className={s.h3}>{c.name}</h3>
                    <span className={s.cardText}>{c.text}</span>
                  </span>
                  <span className={s.arrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.btns}>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={s.btnWa} data-lead="whatsapp">Book on WhatsApp</a>
            {currentService !== 'car-wash-at-home' && (
              <Link href="/services/car-wash-at-home" className={s.btnGhost}>See car wash at home</Link>
            )}
          </div>
        </div>

        <Pointer3D className={s.stage}>
          <figure className={`${s.float} ${s.floatA}`}>
            <Shot img={CAR_SHOWCASE[3]} sizes="240px" className={s.cover} />
          </figure>
          <figure className={`${s.float} ${s.floatB}`}>
            <Shot img={CAR_SHOWCASE[2]} sizes="240px" className={s.cover} />
          </figure>

          <div className={s.phone}>
            <div className={s.notch} aria-hidden="true" />
            <div className={s.screen}>
              {SCREEN.map((img, k) => (
                <div key={img.src} className={`${s.slide} ${k === i ? s.on : ''}`} aria-hidden={k !== i}>
                  <Shot img={img} sizes="(max-width: 760px) 70vw, 300px" className={s.cover} decorative={k !== 0} />
                </div>
              ))}
              <div className={s.appbar} aria-hidden="true">
                <b>Car wash</b><span>At home · UAE</span>
              </div>
              <div className={s.sheet}>
                <span className={s.sheetCap}>{SCREEN[i].caption}</span>
                <strong className={s.sheetTitle}>Book car wash<br />at home</strong>
                <a href={wa} target="_blank" rel="noopener noreferrer" className={s.sheetBtn} data-lead="whatsapp">WhatsApp us</a>
                <span className={s.dots} aria-hidden="true">
                  {SCREEN.map((_, k) => <i key={k} className={k === i ? s.dotOn : ''} />)}
                </span>
              </div>
            </div>
          </div>

          <span className={`${s.chip} ${s.chip1}`} aria-hidden="true">Foam wash</span>
          <span className={`${s.chip} ${s.chip2}`} aria-hidden="true">Interior vacuum</span>
          <span className={`${s.chip} ${s.chip3}`} aria-hidden="true">AC vents</span>
        </Pointer3D>
      </div>

      <div className={s.marquee}>
        <div className={s.track}>
          {[0, 1].map((copy) =>
            CAR_SHOWCASE.map((img) => (
              <figure key={`${copy}-${img.src}`} className={s.tile} aria-hidden={copy === 1}>
                <div className={s.tileImg}>
                  <Shot img={img} sizes="300px" className={s.cover} decorative={copy === 1} />
                </div>
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
