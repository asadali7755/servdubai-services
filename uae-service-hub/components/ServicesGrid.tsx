'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/lib/data/services'

function ServiceItem({ service, isLeft }: { service: Service; isLeft: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      href={`/services/${service.slug}`}
      className={`service-item ${isLeft ? 'service-item-left' : 'service-item-right'} service-item-animate`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div className="service-row">
        {/* Image column */}
        <div className="service-img-col">
          <div className="service-img">
            <Image
              src={service.images[0]}
              alt={service.name}
              width={300}
              height={300}
              style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: 'auto' }}
              sizes="(max-width: 767px) 200px, 300px"
            />
          </div>
        </div>

        {/* Text column */}
        <div className="service-text-col">
          <div className="service-text">
            <h3>{service.name}</h3>
            <p>{service.shortDescription}</p>
            <span className="p-btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1.5rem' }}>
              Book Now &nbsp;→
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section style={{ background: '#212529', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Poseify title */}
        <div className="p-title" style={{ textAlign: 'center' }}>
          <div className="p-title-center">
            <h5>Services</h5>
            <h1>How We Help You</h1>
          </div>
        </div>

        {/* Alternating pill items — each animates in on scroll */}
        {services.map((service, index) => (
          <ServiceItem
            key={service.id}
            service={service}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}
