'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { galleryData } from '@/lib/data/gallery'
import { useRequestCall } from '@/components/RequestCallModal'

interface Props {
  serviceSlug: string
  serviceName: string
}

const SERVICES = [
  'Villa Deep Cleaning',
  'Sofa Cleaning',
  'Carpet Cleaning',
  'Marble Polishing',
  'Mattress Cleaning',
  'Office Cleaning',
  'Kitchen Cleaning',
  'Apartment Cleaning',
]

function QuoteCard({ defaultService }: { defaultService: string }) {
  const { open: openCallModal, showToast } = useRequestCall()
  const [service, setService] = useState(defaultService)
  const [phone, setPhone] = useState('')
  const [err, setErr] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async () => {
    if (!phone.trim()) { setErr('Please enter your phone number'); return }
    setErr('')
    setSent(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Quote Request (Service Video Section)',
          phone,
          service: service || 'Cleaning services',
          message: `Quote requested via service video section — ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}`,
        }),
      })
    } catch {}
    showToast('Request sent! We\'ll get back to you shortly.')
    setPhone('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="svs-quote">
      <span className="hqc-label">FREE QUOTE REQUEST</span>
      <h3 className="svs-quote-heading">Get your free quote.</h3>
      <div className="hqc-form">
        <select value={service} onChange={(e) => setService(e.target.value)} className="hqc-select">
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <input
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setErr('') }}
          placeholder="Your mobile number (UAE)*"
          className="hqc-input"
          style={err ? { borderColor: '#e53e3e' } : {}}
        />
        {err && <span style={{ color: '#e53e3e', fontSize: 12, display: 'block' }}>{err}</span>}
        <div className="hqc-btns">
          <button className="hqc-wa" onClick={handleSubmit} disabled={sent}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            {sent ? 'Sent!' : 'SEND ENQUIRY'}
          </button>
          <button className="hqc-call" onClick={openCallModal} style={{ cursor: 'pointer', background: 'none', border: '1px solid rgba(201,168,76,0.3)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
            REQUEST A CALL
          </button>
        </div>
      </div>
    </div>
  )
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
              {/* Text + Quote side */}
              <div className="svs-text">
                <span className="svs-eyebrow">— Real Results · Before &amp; After</span>
                <h2 className="svs-heading">{vid.title}</h2>
                <p className="svs-desc">
                  Watch real {serviceName.split(/[&]/)[0].trim().toLowerCase()} results from our recent jobs across Dubai &amp; UAE.
                  Our certified technicians deliver professional results using advanced equipment and eco-friendly products.
                </p>
                <QuoteCard defaultService={serviceName} />
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
