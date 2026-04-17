import type { Metadata } from 'next'
import { Josefin_Sans, Work_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['400', '700'],
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work',
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in UAE | Al Haya',
  description:
    'Al Haya offers 11 professional cleaning services across 7 UAE Emirates. Same-day service. Call or WhatsApp 0551275545.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${workSans.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: '#151515', color: '#ffffff', fontFamily: 'var(--font-work)' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
