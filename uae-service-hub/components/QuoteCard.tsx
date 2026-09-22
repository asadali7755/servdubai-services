'use client'

import { useState } from 'react'
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
 * The FREE QUOTE REQUEST card. Originally inline in the hero; extracted so
 * every page can carry the same lead capture instead of WhatsApp-only CTAs.
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

  const handleQuote = async () => {
    if (!phone.trim()) {
      setQErr(isAr ? 'يرجى إدخال رقم الهاتف' : 'Please enter your phone number')
      return
    }
    setQErr('')
    setQSent(true)
    const svc = service || (isAr ? 'خدمات التنظيف' : 'Cleaning services')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Quote Request (${source})`,
          phone,
          service: svc,
          message: `Quote requested from ${source} — ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}`,
        }),
      })
    } catch {}
    showToast(
      isAr
        ? 'تم إرسال طلبك! سنتصل بك قريباً.'
        : "Request sent! We'll get back to you shortly."
    )
    setPhone('')
    setService(defaultService)
    setTimeout(() => setQSent(false), 3000)
  }

  return (
    <aside className={`hero-quote-card ${className}`.trim()} id={id}>
      <span className="hqc-label">
        {isAr ? 'طلب عرض سعر مجاني' : 'FREE QUOTE REQUEST'}
      </span>
      <h2 className="hqc-heading">
        {heading ?? (isAr ? 'احصل على عرض سعر مجاني.' : 'Get your free quote.')}
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
          <button className="hqc-wa" onClick={handleQuote} disabled={qSent}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            {qSent
              ? (isAr ? 'تم الإرسال!' : 'Sent!')
              : (isAr ? 'إرسال الاستفسار' : 'SEND ENQUIRY')}
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
            ? '"إرسال" يرسل استفسارك مباشرة. "اطلب مكالمة" — سنتصل بك.'
            : '"Send" submits your enquiry directly. "Request a call" — we\'ll dial you back.'}
        </p>
      </div>
    </aside>
  )
}
