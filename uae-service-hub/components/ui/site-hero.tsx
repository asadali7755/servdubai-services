'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useRequestCall } from '@/components/RequestCallModal'
import QuoteCard from '@/components/QuoteCard'

function InfoIcon({ type }: { type: 'website' | 'phone' | 'address' }) {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  }
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>
}

interface SiteHeroProps {
  badge: string
  title: string
  subtitle: string
  backgroundImage: string
  backgroundAlt: string
  getFreeQuoteLabel: string
  learnMoreLabel: string
  ourWebsitesLabel: string
  contactInfo: { website: string; phone: string; address: string }
  isAr?: boolean
  className?: string
}

export function SiteHero({
  badge, title, subtitle, backgroundImage, backgroundAlt,
  getFreeQuoteLabel, learnMoreLabel, ourWebsitesLabel, contactInfo, isAr, className,
}: SiteHeroProps) {
  const { open: openCallModal } = useRequestCall()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  return (
    <motion.section
      className={cn('relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row', className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left: content */}
      <div className="flex w-full flex-col justify-between p-6 sm:p-10 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
        <div>
          <motion.main variants={containerVariants}>
            <motion.span variants={itemVariants} className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {badge}
            </motion.span>
            <motion.h1
              className="font-heading text-4xl font-bold leading-[1.1] text-foreground md:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants} />
            <motion.p className="mb-8 max-w-md text-base text-muted-foreground" variants={itemVariants}>
              {subtitle}
            </motion.p>
            <motion.div className="flex flex-wrap items-center gap-x-6 gap-y-3" variants={itemVariants}>
              <button
                type="button"
                onClick={() => document.getElementById('hero-quote-phone')?.focus()}
                className="text-base font-bold tracking-wide text-primary transition-colors hover:text-primary/80"
              >
                {getFreeQuoteLabel} →
              </button>
              <button
                type="button"
                onClick={openCallModal}
                className="text-base font-bold tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                Request a Call
              </button>
              <a href="/about" className="text-base font-bold tracking-wide text-foreground/80 transition-colors hover:text-primary">
                {learnMoreLabel}
              </a>
              <a href="/websites" className="text-base font-bold tracking-wide text-foreground/80 transition-colors hover:text-primary">
                {ourWebsitesLabel}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 max-w-sm">
              <QuoteCard id="hero-quote" isAr={isAr} source="Hero Form" />
            </motion.div>
          </motion.main>
        </div>

        <motion.footer className="mt-12 w-full" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-4 text-xs text-muted-foreground sm:grid-cols-3">
            <div className="flex items-center">
              <InfoIcon type="website" />
              <span>{contactInfo.website}</span>
            </div>
            <div className="flex items-center">
              <InfoIcon type="phone" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <InfoIcon type="address" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Right: image reveal */}
      <motion.div
        className="relative min-h-[280px] w-full overflow-hidden md:min-h-full md:w-1/2 lg:w-2/5"
        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
        animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={backgroundImage} alt={backgroundAlt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
      </motion.div>
    </motion.section>
  )
}
