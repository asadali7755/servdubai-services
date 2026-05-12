import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Al Haya Cleaning Services | Book a Clean in UAE',
  description:
    'Contact Al Haya Cleaning Services to book professional cleaning across UAE. Same-day service. Call or WhatsApp +971 55 127 5545 for a free instant quote.',
  alternates: {
    canonical: 'https://servedubai.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
