import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Pointer3D from './Pointer3D'
import LazyVideo from './LazyVideo'
import type { CarMedia } from '@/lib/data/carMedia'

/**
 * "How it looks" strip for services that only have stock media so far.
 * Labelled honestly as stock (Pexels) — never as our own jobs.
 */
export default function StockMedia({ media, heading, eyebrow, dark }: { media: CarMedia; heading: string; eyebrow: string; dark?: boolean }) {
  const { photos, video } = media
  return (
    <section className={`dn-sec ${dark ? 'dn-dark' : ''}`}>
      <div className="dn-wrap">
        <Reveal>
          <div className="dn-eyebrow">{eyebrow}</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>{heading}</h2>
        </Reveal>
        <div className={`dn-stock ${video?.portrait ? 'dn-stock-portrait' : ''}`}>
          {video && (
            <Reveal className="dn-stock-vid">
              <LazyVideo src={video.src} poster={video.poster} label={video.title} />
              <span className="dn-stock-cap">▶ {video.title}</span>
            </Reveal>
          )}
          {photos.map((p, i) => (
            <Pointer3D key={p.src} className={`dn-stock-ph ${i === 2 ? 'dn-stock-wide' : ''}`}>
              <Reveal delay={60 * (i + 1)} className="dn-stock-ph-rv">
                <div className="dn-stock-ph-in">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 360px" />
                </div>
              </Reveal>
            </Pointer3D>
          ))}
        </div>
        <p className="dn-stock-credit">
          Illustrative stock photos &amp; video from Pexels (
          {[...photos.map((p) => p.source), ...(video ? [video.source] : [])].map((u, i, a) => (
            <span key={u + i}>
              <a href={u} target="_blank" rel="noopener nofollow">{i + 1}</a>
              {i < a.length - 1 ? ', ' : ''}
            </span>
          ))}
          ) — not photos of our own jobs. Ask us on WhatsApp for real before/after photos.
        </p>
      </div>
    </section>
  )
}
