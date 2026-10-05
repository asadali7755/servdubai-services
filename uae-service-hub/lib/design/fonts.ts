import { Fraunces } from 'next/font/google'

/** Serif display face used by "serif" page-DNA headings (and the old combo pages). */
export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500'],
  style: ['normal'],
  display: 'swap',
})
