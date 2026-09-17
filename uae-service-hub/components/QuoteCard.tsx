'use client'

import { useEffect, useState } from 'react'
import { useRequestCall } from '@/components/RequestCallModal'

const SERVICES = [
  'Villa Deep Cleaning',
  'Sofa Cleaning',
  'Carpet Cleaning',
  'Floor Cleaning',
  'Marble Polishing',
  'Mattress Cleaning',
  'Curtain Cleaning',
  'Office Cleaning',
  'Kitchen Cleaning',
  'Apartment Cleaning',
]

export interface QuoteCardProps {
  /** Arabic copy. */
  isAr?: boolean
  /**
   * Pre-selects the dropdown — pass the service the page is about so a visitor
   * on /services/sofa-cleaning does not have to re-pick it. A name outside the
   * generic list is added as its own option.
   */
  defaultService?: string
  /**
   * Where the enquiry came from (page or section). Goes into the lead message
   * so an enquiry can be traced back to the page that produced it.
   */
  source?: string
  /** Overrides the "Get your free quote." headline. */
  heading?: string
  /**
   * DOM id for the card. The phone input is always `${id}-phone`, which is how
   * outside buttons (the hero CTA) focus this form without holding a ref.
   */
  id?: string
  /** Extra classes on the card element. */
  className?: string
}

/**
 * The paid quote-request card (AED 50, adjustable against the final booking,
 * via Stripe Checkout — see /api/create-checkout-session). Originally a free
 * lead form; extracted so every page can carry the same capture instead of
 * WhatsApp-only CTAs. The separate "Request a call" button stays free.
 * Styling lives in globals.css (.hero-quote-card / .hqc-*), so it is already
 * theme-aware and responsive wherever it is dropped.
 */
export default function QuoteCard({
  isAr = false,
  defaultService = '',
  source = 'site',
  heading,
  id = 'quote-card',
  className = '',
}: QuoteCardProps) {
  const { open: openCallModal, showToast } = useRequestCall()

  // Catalogue names ("Sofa Deep Cleaning & Shampooing") are longer than the
  // generic list, so an unlisted defaultService is added as its own option
  // instead of silently falling back to "Select a service".
  const options = defaultService && !SERVICES.includes(defaultService)
    ? [defaultService, ...SERVICES]
    : SERVICES

  const [service, setService] = useState(defaultService)
  const [phone, setPhone] = useState('')
  const [qErr, setQErr] = useState('')
  const [qSent, setQSent] = useState(false)
  const [qLoading, setQLoading] = useState(false)

  // Picks up the redirect back from Stripe Checkout (?quote=success|cancelled)
  // on whichever page the visitor started from — client-only read, no
  // useSearchParams(), so this never forces a Suspense boundary on any of
  // the ~11 pages QuoteCard is dropped into.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const quote = params.get('quote')
    if (!quote) return
    if (quote === 'success') {
      showToast(
        isAr
          ? 'تم الدفع! تم استلام طلبك وسنتصل بك قريباً.'
          : "Payment received! We've got your request and will be in touch shortly."
      )
    } else if (quote === 'cancelled') {
      showToast(
        isAr
          ? 'تم إلغاء الدفع. لم يتم إرسال أي طلب.'
          : 'Payment was cancelled — no request was sent.'
      )
    }
    params.delete('quote')
    params.delete('session_id')
    const rest = params.toString()
    window.history.replaceState(null, '', window.location.pathname + (rest ? `?${rest}` : ''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleQuote = async () => {
    if (!phone.trim()) {
      setQErr(isAr ? 'يرجى إدخال رقم الهاتف' : 'Please enter your phone number')
      return
    }
    setQErr('')
    setQLoading(true)
    const svc = service || (isAr ? 'خدمات التنظيف' : 'Cleaning services')
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Quote Request (${source})`,
          phone,
          service: svc,
          message: `Quote requested from ${source} — ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}`,
          returnPath: window.location.pathname,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Checkout failed')
      window.location.href = data.url
    } catch {
      setQLoading(false)
      showToast(
        isAr
          ? 'تعذر بدء الدفع. حاول مرة أخرى.'
          : "Couldn't start checkout — please try again."
      )
    }
  }

  return (
    <aside className={`hero-quote-card ${className}`.trim()} id={id}>
      <span className="hqc-label">
        {isAr ? 'طلب عرض سعر — 50 درهم' : 'QUOTE REQUEST — AED 50'}
      </span>
      <h2 className="hqc-heading">
        {heading ?? (isAr ? 'احصل على عرض سعرك — 50 درهم.' : 'Get your quote — AED 50.')}
      </h2>
      <div className="hqc-form">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="hqc-select"
          aria-label={isAr ? 'اختر خدمة' : 'Select a service'}
        >
          <option value="">
            {isAr ? 'اختر خدمة (اختياري)' : 'Select a service (optional)'}
          </option>
          {options.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input
          id={`${id}-phone`}
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setQErr('') }}
          placeholder={isAr ? 'رقم الموبايل (الإمارات)*' : 'Your mobile number (UAE)*'}
          className="hqc-input"
          aria-label={isAr ? 'رقم الموبايل' : 'Your mobile number'}
          style={qErr ? { borderColor: '#e53e3e' } : {}}
        />
        {qErr && (
          <span style={{ color: '#e53e3e', fontSize: 12, display: 'block' }}>{qErr}</span>
        )}
        <div className="hqc-btns">
          <button className="hqc-wa" onClick={handleQuote} disabled={qLoading}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            {qLoading
              ? (isAr ? 'جارٍ التحويل...' : 'Redirecting...')
              : (isAr ? 'ادفع 50 د.إ واحصل على العرض' : 'PAY AED 50 & GET QUOTE')}
          </button>
          <button
            className="hqc-call"
            onClick={openCallModal}
            style={{ cursor: 'pointer', background: 'none', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
            {isAr ? 'اطلب مكالمة' : 'REQUEST A CALL'}
          </button>
        </div>
        <p className="he-form-note">
          {isAr
            ? 'رسوم 50 درهم قابلة للخصم من فاتورتك النهائية عند الحجز. "اطلب مكالمة" مجاني دائمًا.'
            : 'AED 50 is adjustable against your final booking if you go ahead. "Request a call" stays free.'}
        </p>
      </div>
    </aside>
  )
}
