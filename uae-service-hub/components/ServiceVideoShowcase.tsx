'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { galleryData } from '@/lib/data/gallery'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

interface Props {
  serviceSlug: string
  serviceName: string
}

export default function ServiceVideoShowcase({ serviceSlug, serviceName }: Props) {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const gallery = galleryData.find((g) => g.slug === serviceSlug)
  const videos = gallery?.localVideos ?? []

  useEffect(() => {
    if (videos.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )
    videoRefs.current.forEach((v) => { if (v) observer.observe(v) })
    return () => observer.disconnect()
  }, [videos.length])

  if (videos.length === 0) return null

  const displayVideos = videos.slice(0, 4)

  return (
    <>
      {displayVideos.map((vid, i) => {
        const reversed = i % 2 !== 0
        return (
          <section
            key={i}
            className={`svs-section ${i % 2 === 0 ? 'svs-dark' : 'svs-light'}`}
          >
            <div className={`svs-inner ${reversed ? 'svs-reversed' : ''}`}>
              {/* Text side */}
              <div className="svs-text">
                <span className="svs-eyebrow">— Real Results · Before &amp; After</span>
                <h2 className="svs-heading">{vid.title}</h2>
                <p className="svs-desc">
                  Watch real {serviceName.split(/[&]/)[0].trim().toLowerCase()} results from our recent jobs across Dubai &amp; UAE.
                  Our certified technicians deliver professional results using advanced equipment and eco-friendly products.
                </p>
                <div className="svs-cta-row">
                  <a href={getWhatsAppLink(serviceName)} target="_blank" rel="noopener noreferrer" className="svs-btn-wa">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                    </svg>
                    Book via WhatsApp
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="svs-btn-call">
                    Call {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Video side */}
              <div className="svs-vid-wrap" onClick={() => setActiveVideo({ src: vid.src, title: vid.title })}>
                <video
                  ref={(el) => { videoRefs.current[i] = el }}
                  src={vid.src}
                  poster={vid.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="svs-vid"
                />
                <div className="svs-vid-overlay" />
                <div className="svs-vid-play">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="svs-vid-chip">
                  <span>{serviceName.split(/[&]/)[0].trim()} · Dubai · UAE</span>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Gallery link */}
      {videos.length > displayVideos.length && (
        <div className="svs-gallery-link">
          <Link href="/gallery" className="svs-gallery-btn">
            View All {videos.length} Videos in Gallery →
          </Link>
        </div>
      )}

      {/* Lightbox */}
      {activeVideo && (
        <div className="svs-lightbox" onClick={() => setActiveVideo(null)}>
          <button className="svs-lb-close" onClick={() => setActiveVideo(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            src={activeVideo.src}
            controls
            autoPlay
            playsInline
            className="svs-lb-video"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="svs-lb-cap">{activeVideo.title}</p>
        </div>
      )}
    </>
  )
}
