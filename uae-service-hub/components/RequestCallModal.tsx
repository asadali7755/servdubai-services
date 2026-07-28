'use client'
import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react'
import { SITE_CONFIG } from '@/lib/data/constants'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

interface ModalCtxType {
  open: () => void
  close: () => void
  showToast: (msg?: string) => void
}
const ModalCtx = createContext<ModalCtxType>({ open: () => {}, close: () => {}, showToast: () => {} })
export function useRequestCall() { return useContext(ModalCtx) }
export function useToast() { return useContext(ModalCtx).showToast }

function SuccessToast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <div className="rcm-toast">
      <div className="rcm-toast-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div className="rcm-toast-body">
        <span className="rcm-toast-title">Request sent</span>
        <span className="rcm-toast-msg">{message}</span>
      </div>
      <button className="rcm-toast-close" onClick={onDone} aria-label="Dismiss">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  )
}

export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [toast, setToast] = useState('')

  const showToast = (msg = "We'll be in touch shortly.") => {
    setToast(msg)
    setTimeout(() => setToast(''), 5000)
  }

  const value = { open: () => setIsOpen(true), close: () => setIsOpen(false), showToast }

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    if (isOpen) window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [isOpen])

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {isOpen && (
        <RequestCallModal
          onClose={value.close}
          onSent={(msg) => { value.close(); showToast(msg) }}
        />
      )}
      {toast && <SuccessToast message={toast} onDone={() => setToast('')} />}
    </ModalCtx.Provider>
  )
}

function RequestCallModal({ onClose, onSent }: { onClose: () => void; onSent: (msg: string) => void }) {
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) { setErr('Phone number is required'); return }
    setErr('')
    setLoading(true)
    const msg = encodeURIComponent(
      `Hi Madinat Alhaya, please call me back.\nService: ${service || 'General enquiry'}\nNumber: ${phone}`
    )
    window.open(`${getWhatsAppLink()}`, '_blank')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Callback Request',
          phone,
          service: service || 'General enquiry',
          message: `Callback requested via website — ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}`,
        }),
      })
    } catch {}
    setLoading(false)
    onSent('We got your number! Expect a call back shortly.')
  }

  return (
    <div className="rcm-backdrop" onClick={onClose}>
      <div className="rcm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="rcm-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="rcm-label">Request a Call</span>
        <h3 className="rcm-heading">Drop your number.<br/>We&apos;ll call you back.</h3>
        <p className="rcm-sub">One field. No name, no email, no fuss. Free quote on the call.</p>
        <form onSubmit={submit}>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rcm-select"
          >
            <option value="">Select a service (optional)</option>
            <option value="Sofa Deep Cleaning">Sofa Deep Cleaning</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
            <option value="Villa Deep Cleaning">Villa Deep Cleaning</option>
            <option value="Marble Polishing">Marble Polishing</option>
            <option value="Mattress Cleaning">Mattress Cleaning</option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Curtain Cleaning">Curtain Cleaning</option>
            <option value="Car Interior Detailing">Car Interior Detailing</option>
          </select>
          <input
            ref={inputRef}
            type="tel"
            inputMode="tel"
            placeholder="+971 5X XXX XXXX *"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErr('') }}
            className="rcm-input"
            style={err ? { borderColor: '#e53e3e' } : {}}
          />
          {err && <span className="rcm-err">{err}</span>}
          <button type="submit" className="rcm-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Call me back'}
          </button>
        </form>
        <div className="rcm-or">Or reach us instantly</div>
        <div className="rcm-alt">
          <a href={`tel:${SITE_CONFIG.phone}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.5-.9-2.1c-.2-.5-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
