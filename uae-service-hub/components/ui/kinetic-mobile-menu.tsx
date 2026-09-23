'use client'

import * as React from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { servicesNav } from '@/lib/data/services-nav'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'

export function KineticMobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)
  const linksRef = React.useRef<HTMLDivElement>(null)
  const { locale } = useLocale()
  const t = translations[locale]

  React.useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      if (open) {
        document.body.style.overflow = 'hidden'
        const links = linksRef.current?.querySelectorAll('[data-kinetic-link]') ?? []
        tl.set(overlayRef.current, { display: 'block' })
          .fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
          .fromTo(panelRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power3.out' }, '<')
          .fromTo(
            links,
            { yPercent: 120, rotate: 4, autoAlpha: 0 },
            { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' },
            '<+=0.15',
          )
      } else {
        document.body.style.overflow = ''
        tl.to(panelRef.current, { xPercent: 100, duration: 0.4, ease: 'power2.in' })
          .to(overlayRef.current, { autoAlpha: 0, duration: 0.3 }, '<')
          .set(overlayRef.current, { display: 'none' })
      }
    })
    return () => ctx.revert()
  }, [open])

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && open && onClose()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  return (
    <div ref={overlayRef} id="mobile-menu" className="fixed inset-0 z-[60] hidden lg:hidden" style={{ display: 'none' }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-border bg-background p-6"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-foreground">
            Madinat <span className="text-primary">Alhaya</span>
          </span>
          <Button size="icon" variant="outline" onClick={onClose} aria-label="Close menu" className="border-border text-foreground">
            <X className="size-5" />
          </Button>
        </div>

        <div ref={linksRef} className="flex flex-1 flex-col gap-1 overflow-y-auto">
          <Link data-kinetic-link href="/" onClick={onClose} className="rounded-md px-2 py-2.5 text-lg font-medium text-foreground hover:text-primary">
            {t.nav.home}
          </Link>
          <Link data-kinetic-link href="/about" onClick={onClose} className="rounded-md px-2 py-2.5 text-lg font-medium text-foreground hover:text-primary">
            {t.nav.about}
          </Link>

          <p data-kinetic-link className="mt-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.nav.services}</p>
          {servicesNav.map((s) => (
            <Link
              key={s.id}
              data-kinetic-link
              href={`/services/${s.slug}`}
              onClick={onClose}
              className="rounded-md px-2 py-1.5 text-sm text-foreground/90 hover:text-primary"
            >
              {t.serviceNames[s.id as keyof typeof t.serviceNames] ?? s.name}
            </Link>
          ))}

          <p data-kinetic-link className="mt-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.nav.emirates}</p>
          {emirates.map((e) => (
            <Link
              key={e.id}
              data-kinetic-link
              href={`/${e.slug}`}
              onClick={onClose}
              className="rounded-md px-2 py-1.5 text-sm text-foreground/90 hover:text-primary"
            >
              {t.emirateNames[e.slug as keyof typeof t.emirateNames] ?? e.name}
            </Link>
          ))}

          <Link data-kinetic-link href="/blog" onClick={onClose} className="mt-3 rounded-md px-2 py-2.5 text-lg font-medium text-foreground hover:text-primary">
            {t.nav.blog}
          </Link>
          <Link data-kinetic-link href="/gallery" onClick={onClose} className="rounded-md px-2 py-2.5 text-lg font-medium text-foreground hover:text-primary">
            {t.nav.gallery}
          </Link>
          <Link data-kinetic-link href="/contact" onClick={onClose} className="rounded-md px-2 py-2.5 text-lg font-medium text-foreground hover:text-primary">
            {t.nav.contact}
          </Link>
        </div>

        <div data-kinetic-link className="mt-6 border-t border-border pt-6">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            WhatsApp: {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
