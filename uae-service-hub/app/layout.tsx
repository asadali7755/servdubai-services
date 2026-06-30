import type { Metadata } from 'next'
import { Josefin_Sans, Work_Sans } from 'next/font/google'
import Script from 'next/script'
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
  title: 'Cleaning Services Dubai & UAE | Madinat Alhaya Building Cleaning Services',
  description:
    'Best cleaning services Dubai, Abu Dhabi & Sharjah. Villa cleaning, sofa cleaning, carpet cleaning, marble polishing, office cleaning across 7 UAE Emirates. Same-day service. Call +971 55 127 5545.',
  keywords: [
    'cleaning services Dubai', 'cleaning company Dubai', 'cleaning services UAE',
    'deep cleaning Dubai', 'professional cleaning services Dubai', 'best cleaning company in Dubai',
    'cleaning services Abu Dhabi', 'cleaning services Sharjah', 'home cleaning services Dubai',
    'villa deep cleaning Dubai', 'sofa cleaning Dubai', 'carpet cleaning Dubai',
    'marble polishing Dubai', 'office cleaning Dubai', 'apartment cleaning Dubai',
    'mattress cleaning Dubai', 'curtain cleaning Dubai', 'cleaning services near me Dubai',
    'house cleaning Dubai', 'move in move out cleaning Dubai', 'same-day cleaning Dubai',
    'cleaning services Ajman', 'cleaning services RAK', 'cleaning services Fujairah',
    'cleaning services Umm Al Quwain', 'eco-friendly cleaning Dubai', 'best cleaning services UAE',
  ],
  verification: {
    google: 'kcRs3u_-iV5Ou0Op2OAvNBajnVhBwo3epUrUm0gEKCg',
  },
  // Geo targeting — UAE/Dubai
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, United Arab Emirates',
    'geo.position': '25.2048;55.2708',
    'ICBM': '25.2048, 55.2708',
    'language': 'en-AE',
    'content-language': 'en-AE',
  },
  alternates: {
    canonical: 'https://servedubai.ae',
    languages: {
      'en-AE': 'https://servedubai.ae',
      'en-US': 'https://servedubai.ae',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Cleaning Services Dubai & UAE | Madinat Alhaya Building Cleaning Services',
    description:
      'Best cleaning services Dubai, Abu Dhabi & Sharjah. Villa cleaning, sofa cleaning, carpet cleaning, marble polishing, office cleaning across 7 UAE Emirates.',
    url: 'https://servedubai.ae',
    siteName: 'Madinat Alhaya Building Cleaning Services',
    locale: 'en_AE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AE" className={`${josefin.variable} ${workSans.variable}`} data-theme="light" suppressHydrationWarning>
      <head />

      {/* GTM — head script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MXKNSJ4');`,
        }}
      />

      <body className="min-h-screen flex flex-col theme-body">
        {/* GTM — noscript fallback (body start) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MXKNSJ4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
