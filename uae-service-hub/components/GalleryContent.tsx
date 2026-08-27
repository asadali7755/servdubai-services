'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { galleryData } from '@/lib/data/gallery'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import QuoteCard from '@/components/QuoteCard'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'

interface Lightbox {
  type: 'image' | 'video'
  src: string
  alt: string
  caption?: string
}

export default function GalleryContent() {
  const [lightbox, setLightbox] = useState<Lightbox | null>(null)
  const [activeId, setActiveId] = useState<string>('all')
  const { locale } = useLocale()
  const t = translations[locale]
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollToSection = (id: string) => {
    setActiveId(id)
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = sectionRefs.current[id]
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const visibleData = activeId === 'all'
    ? galleryData
    : galleryData.filter((s) => s.id === activeId)

  return (
    <>
      {/* Hero */}
      <section className="gallery-hero">
        <p className="gallery-hero-label">
          {locale === 'ar' ? 'أعمالنا' : 'Our Work'}
        </p>
        <h1 className="gallery-hero-h1">
          {locale === 'ar' ? 'معرض أعمال التنظيف الاحترافي' : 'Professional Cleaning Gallery'}
        </h1>
        <p className="gallery-hero-sub">
          {locale === 'ar'
            ? 'شاهد نتائج خدماتنا الاحترافية — قبل وبعد صور حقيقية من أعمالنا في دبي والإمارات'
            : 'Real results from our professional cleaning services across Dubai & UAE — photos and videos from actual jobs.'}
        </p>
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="gallery-wa-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
          {locale === 'ar' ? 'احجز الآن عبر واتساب' : 'Book via WhatsApp'}
        </a>

        {/* WhatsApp was the only way to convert from this page — the quote
            form (and its Request a Call button) now sits alongside it. */}
        <QuoteCard
          id="gallery-quote"
          isAr={locale === 'ar'}
          source="Gallery page"
          className="gallery-quote-card"
        />
      </section>

      {/* Sticky Filter Tabs */}
      <div className="gallery-filter-bar">
        <div className="gallery-filter-inner">
          <button
            onClick={() => scrollToSection('all')}
            className={`gallery-filter-btn ${activeId === 'all' ? 'active' : ''}`}
          >
            {locale === 'ar' ? 'الكل' : 'All Services'}
          </button>

          {galleryData.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`gallery-filter-btn ${activeId === s.id ? 'active' : ''}`}
            >
              {locale === 'ar' ? s.nameAr : s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Service Sections */}
      <div className="gallery-sections">
        {visibleData.map((service) => (
          <section
            key={service.id}
            id={service.id}
            ref={(el) => { sectionRefs.current[service.id] = el }}
            className="gallery-section"
          >
            {/* Section Header */}
            <div className="gallery-section-header">
              <div>
                <p className="gallery-svc-label">
                  {locale === 'ar' ? 'معرض الخدمة' : 'Service Gallery'}
                </p>
                <h2 className="gallery-svc-h2">
                  {locale === 'ar' ? service.nameAr : service.name}
                </h2>
              </div>
              <Link href={`/services/${service.slug}`} className="gallery-svc-link">
                {locale === 'ar' ? 'عرض الخدمة ←' : 'View Service →'}
              </Link>
            </div>

            {/* Image Grid */}
            {service.images.length > 0 && (
              <div className="gallery-img-grid" style={{ marginBottom: (service.localVideos.length > 0 || service.videos.length > 0) ? '2.5rem' : '1.5rem' }}>
                {service.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightbox({ type: 'image', src: img.src, alt: img.alt, caption: img.caption })}
                    className="gallery-img-card"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="gallery-img"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.25s' }} className="gallery-overlay" />
                    {img.caption && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.6rem 0.8rem', transform: 'translateY(100%)', transition: 'transform 0.25s' }} className="gallery-caption">
                        <span className="gallery-caption-text">{img.caption}</span>
                      </div>
                    )}
                    <div className="gallery-zoom gallery-zoom-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Local Videos */}
            {service.localVideos.length > 0 && (
              <>
                <p className="gallery-vid-label">
                  {locale === 'ar' ? 'فيديوهات العمل' : 'Work Videos'}
                </p>
                <div className="gallery-vid-row">
                  {service.localVideos.map((vid, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightbox({ type: 'video', src: vid.src, alt: vid.title, caption: locale === 'ar' && vid.titleAr ? vid.titleAr : vid.title })}
                      className="gallery-vid-card"
                    >
                      {vid.poster && (
                        <img src={vid.poster} alt={vid.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      )}
                      <div className="gallery-vid-overlay" />
                      <div className="gallery-vid-play-wrap">
                        <div className="gallery-vid-play">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#151515" style={{ marginLeft: '3px' }}>
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="gallery-vid-title">
                        <p className="gallery-vid-title-text">
                          {locale === 'ar' && vid.titleAr ? vid.titleAr : vid.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* YouTube Videos */}
            {service.videos.length > 0 && (
              <>
                <p className="gallery-vid-label">
                  {locale === 'ar' ? 'فيديوهات' : 'Videos'}
                </p>
                <div className="gallery-yt-grid">
                  {service.videos.map((vid, idx) => (
                    <div key={idx} className="gallery-yt-card">
                      <div className="gallery-yt-ratio">
                        <iframe
                          src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0&modestbranding=1`}
                          title={vid.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          className="gallery-yt-iframe"
                        />
                      </div>
                      <div className="gallery-yt-title">
                        <p className="gallery-yt-title-text">{vid.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Book CTA */}
            <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer" className="gallery-book-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              {locale === 'ar' ? 'احجز هذه الخدمة عبر واتساب' : `Book ${service.name} via WhatsApp`}
            </a>
          </section>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="gallery-lightbox">
          <button onClick={() => setLightbox(null)} className="gallery-lightbox-close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {lightbox.type === 'video' ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              playsInline
              className="gallery-lightbox-media"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="gallery-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {lightbox.caption && (
            <p className="gallery-lightbox-cap">{lightbox.caption}</p>
          )}
        </div>
      )}

      {/* CSS for hover effects */}
      <style>{`
        .gallery-img { transform: scale(1); }
        div:hover > .gallery-img { transform: scale(1.04); }
        div:hover > .gallery-overlay { opacity: 1 !important; }
        div:hover > .gallery-caption { transform: translateY(0) !important; }
        div:hover > .gallery-zoom { opacity: 1 !important; }
      `}</style>
    </>
  )
}
