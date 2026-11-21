'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n/LanguageProvider'

/** A real link (crawlable) to the same page in the other language. */
export default function LanguageToggle({ className = 'lang-toggle-btn' }: { className?: string }) {
  const { locale, altHref } = useLocale()
  const toAr = locale === 'en'

  return (
    <Link
      href={altHref}
      hrefLang={toAr ? 'ar' : 'en'}
      lang={toAr ? 'ar' : 'en'}
      aria-label={toAr ? 'Switch to Arabic' : 'Switch to English'}
      className={className}
    >
      {toAr ? 'العربية' : 'English'}
    </Link>
  )
}
