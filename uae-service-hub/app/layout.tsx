import type { Metadata } from 'next'
import { Josefin_Sans, Work_Sans } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
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
    'Al Haya offers 11 professional cleaning services across 7 UAE Emirates. Same-day service. Call or WhatsApp +971 55 127 5545.',
  verification: {
    google: 'kcRs3u_-iV5Ou0Op2OAvNBajnVhBwo3epUrUm0gEKCg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${workSans.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('al-haya-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
      </head>

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

        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
