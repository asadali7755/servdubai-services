'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(9, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  'Sofa Deep Cleaning & Shampooing',
  'Carpet Cleaning & Shampooing',
  'Mattress Deep Cleaning',
  'Curtain Cleaning',
  'Car Interior Detailing',
  'Dining Chair Cleaning',
  'Villa Deep Cleaning',
  'Apartment Cleaning',
  'Office Cleaning',
  'Restaurant & Kitchen Cleaning',
  'Marble Polishing & Restoration',
]

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    const msg = `Hi, I'm ${data.name}. I'm interested in ${data.service}. My number: ${data.phone}. ${data.message}`
    window.open(getWhatsAppLink(data.service), '_blank')
  }

  const inputStyle = {
    background: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '0.5rem',
    color: '#fff',
    padding: '0.75rem 1rem',
    width: '100%',
    minHeight: '44px',
    outline: 'none',
  }

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-josefin)' }}
        >
          Contact Us
        </h1>
        <h2 className="text-gray-400 mb-8" style={{ fontWeight: 400, fontSize: '1rem' }}>
          Fill in the form below and we&apos;ll open WhatsApp with your details pre-filled. We respond instantly.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
            <input {...register('name')} placeholder="Ahmed Al Rashid" style={inputStyle} />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
            <input {...register('phone')} placeholder="0501234567" style={inputStyle} />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Service Required</label>
            <select {...register('service')} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">Select a service...</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              {...register('message')}
              rows={4}
              placeholder="Tell us your location, preferred time, and any specific requirements..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '1rem',
              background: '#25D366',
              color: '#111111',
              fontWeight: '600',
              borderRadius: '0.5rem',
              minHeight: '48px',
              cursor: 'pointer',
              border: 'none',
              fontSize: '1rem',
            }}
          >
            Send via WhatsApp
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Or call directly:{' '}
          <a href="tel:0551275545" style={{ color: '#c9a84c' }}>0551275545</a>
        </p>

        {/* Google Business Profile Section */}
        <div style={{ marginTop: '3rem' }}>
          <h2
            style={{
              color: '#c9a84c',
              fontFamily: 'var(--font-josefin)',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
            }}
          >
            Find Us on Google
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Check our reviews, location & business hours on Google.
          </p>
          <div
            style={{
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid #333',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2426037257887!2d55.362276599999994!3d25.2960519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc6fe655c83%3A0x2790bef8b91a957!2sAL%20HAYA%20cleaning%20services!5e0!3m2!1sen!2s!4v1777990342134!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Haya Cleaning Services on Google Maps"
            />
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a
              href="https://share.google/bDF6NqN3sJvO2nxSr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                background: '#c9a84c',
                color: '#111111',
                fontWeight: '600',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              View Our Google Business Profile ↗
            </a>
          </div>
        </div>
      </div>
      <SpecialistSitesBanner />
      <WhatsAppButton />
    </>
  )
}
