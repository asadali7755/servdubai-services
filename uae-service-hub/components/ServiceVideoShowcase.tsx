'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { galleryData } from '@/lib/data/gallery'

interface Props {
  serviceSlug: string
  serviceName: string
}

export default function ServiceVideoShowcase({ serviceSlug, serviceName }: Props) {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const gallery = galleryData.find((g) => g.slug === serviceSlug)
  const videos = gallery?.localVideos ?? []

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
      { threshold: 0.4 }
    )
    videoRefs.current.forEach((v) => { if (v) observer.observe(v) })
    return () => observer.disconnect()
  }, [videos.length, isMobile])

  if (videos.length === 0) return null

  const displayVideos = videos.slice(0, isMobile ? 2 : 4)

  return (
    <>
      <div className="svs-wrap">
        <div className="svs-header">
          <div className="sp-sec-bar" />
          <h2 className="svc-content-h sp-sec-h2">See Our {serviceName.split(/[&]/)[0].trim()} Results</h2>
        </div>
        <p className="svs-subtitle">Real before &amp; after videos from recent jobs in Dubai &amp; UAE</p>

        <div className="svs-grid">
          {displayVideos.map((vid, i) => (
            <div key={i} className="svs-card" onClick={() => setActiveVideo({ src: vid.src, title: vid.title })}>
              <video
                ref={(el) => { videoRefs.current[i] = el }}
                src={vid.src}
                poster={vid.poster}
                muted
                loop
                playsInline
                preload="none"
                className="svs-video"
              />
              <div className="svs-overlay" />
              <div className="svs-play">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="svs-title">{vid.title}</div>
            </div>
          ))}
        </div>

        {videos.length > displayVideos.length && (
          <div className="svs-more">
            <Link href="/gallery" className="svs-more-link">
              View All {videos.length} Videos in Gallery →
            </Link>
          </div>
        )}
      </div>

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
