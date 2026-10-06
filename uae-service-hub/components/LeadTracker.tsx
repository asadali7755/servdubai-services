'use client'

import { useEffect } from 'react'
import { trackLead } from '@/lib/utils/track'

/** Fire-and-forget alert to /api/lead-click (emails the owner). sendBeacon survives the page navigating away. */
function alertOwner(method: 'whatsapp' | 'phone', text: string) {
  try {
    const payload = JSON.stringify({ method, page: window.location.pathname, text })
    if (!navigator.sendBeacon?.('/api/lead-click', new Blob([payload], { type: 'text/plain' }))) {
      fetch('/api/lead-click', { method: 'POST', body: payload, keepalive: true }).catch(() => {})
    }
  } catch {}
}

/** One document-level listener: every WhatsApp / phone link click on the site becomes a GTM event. */
export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') ?? ''
      const label = (a.textContent ?? '').trim().slice(0, 60)
      if (href.startsWith('https://wa.me') || href.startsWith('https://api.whatsapp.com')) {
        trackLead('whatsapp', { link_text: label })
        alertOwner('whatsapp', label)
      } else if (href.startsWith('tel:')) {
        trackLead('phone', { link_text: label })
        alertOwner('phone', label)
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])
  return null
}
