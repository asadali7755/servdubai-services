'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { Locale } from './translations'
import { arPathFor, enPathFor, isArPath } from './routes'

/**
 * The language comes from the URL: pages under /ar are Arabic, everything
 * else is English. Because the server knows the path, the Arabic text is in
 * the server HTML (indexable), not swapped in after load.
 */
export function useLocale() {
  const pathname = usePathname() ?? '/'
  const locale: Locale = isArPath(pathname) ? 'ar' : 'en'

  useEffect(() => {
    // Client-side navigation between / and /ar does not re-run the inline
    // script in app/ar/layout.tsx, so keep <html> in step here.
    document.documentElement.setAttribute('lang', locale === 'ar' ? 'ar' : 'en-AE')
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  }, [locale])

  /** The same page in the other language, or the other home page. */
  const altHref = locale === 'ar' ? enPathFor(pathname) : (arPathFor(pathname) ?? '/ar')

  return { locale, altHref }
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
