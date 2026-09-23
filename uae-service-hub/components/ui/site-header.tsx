'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sparkles, Sofa, LayoutGrid, BedDouble, Blinds, Car, UtensilsCrossed,
  Home as HomeIcon, Building2, Briefcase, ChefHat, Gem,
} from 'lucide-react'
import { servicesNav } from '@/lib/data/services-nav'
import { emirates } from '@/lib/data/emirates'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'
import LanguageToggle from '@/components/LanguageToggle'

const SERVICE_ICONS: Record<string, typeof Sparkles> = {
  'sofa-cleaning': Sofa,
  'carpet-cleaning': LayoutGrid,
  'mattress-cleaning': BedDouble,
  'curtain-cleaning': Blinds,
  'car-interior-detailing': Car,
  'dining-chair-cleaning': UtensilsCrossed,
  'villa-deep-cleaning': HomeIcon,
  'apartment-cleaning': Building2,
  'office-cleaning': Briefcase,
  'restaurant-kitchen-cleaning': ChefHat,
  'marble-polishing': Gem,
  'floor-cleaning': Sparkles,
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function SiteHeader({ onOpenMobile, mobileOpen }: { onOpenMobile: () => void; mobileOpen: boolean }) {
  const scrolled = useScroll(45)
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-colors',
        scrolled && 'bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="rounded-md p-1 font-heading text-lg font-bold tracking-tight text-foreground hover:opacity-80">
            Madinat <span className="text-primary">Alhaya</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary">
                    {t.nav.home}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary">
                    {t.nav.about}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary data-[state=open]:bg-accent/10 data-[state=open]:text-primary">
                  {t.nav.services}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-border bg-popover p-2">
                  <ul className="grid w-[560px] grid-cols-2 gap-1 p-1">
                    {servicesNav.map((s) => {
                      const Icon = SERVICE_ICONS[s.id] ?? Sparkles
                      return (
                        <li key={s.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/services/${s.slug}`}
                              className="flex items-center gap-3 rounded-md p-2 hover:bg-accent/10"
                            >
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 text-primary">
                                <Icon className="size-4" />
                              </span>
                              <span className="text-sm font-medium text-foreground">
                                {t.serviceNames[s.id as keyof typeof t.serviceNames] ?? s.name}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Emirates dropdown — image preview on hover */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary data-[state=open]:bg-accent/10 data-[state=open]:text-primary">
                  {t.nav.emirates}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border border-border bg-popover p-2">
                  <EmiratesPreviewList emirateNames={t.emirateNames} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary">
                    {t.nav.blog}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/gallery" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary">
                    {t.nav.gallery}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 hover:bg-accent/10 hover:text-primary">
                    {t.nav.contact}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a href="https://www.facebook.com/alhayacleandubai/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="text-foreground/70 hover:text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/madinat-al-haya-building-cleaning-services-70a3363b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-foreground/70 hover:text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={onOpenMobile}
          className="border-border text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
        </Button>
      </nav>
    </header>
  )
}

/** Emirates dropdown list — hovering an emirate swaps a floating preview photo, matching the
 *  cursor-follow "selected work" pattern, but built from the site's real /images/emirates photos. */
function EmiratesPreviewList({ emirateNames }: { emirateNames: Record<string, string> }) {
  const [hovered, setHovered] = React.useState(0)
  return (
    <div className="flex w-[420px] gap-3 p-1">
      <ul className="flex-1 space-y-0.5">
        {emirates.map((e, i) => (
          <li key={e.id}>
            <NavigationMenuLink asChild>
              <Link
                href={`/${e.slug}`}
                onMouseEnter={() => setHovered(i)}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  hovered === i ? 'bg-accent/15 text-primary' : 'text-foreground hover:bg-accent/10',
                )}
              >
                {emirateNames[e.slug as keyof typeof emirateNames] ?? e.name}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
      <div className="relative h-[220px] w-[160px] shrink-0 overflow-hidden rounded-lg border border-border">
        {emirates.map((e, i) => (
          <Image
            key={e.id}
            src={e.image}
            alt={e.name}
            fill
            sizes="160px"
            className="object-cover transition-opacity duration-300"
            style={{ opacity: hovered === i ? 1 : 0 }}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <span className="text-xs font-semibold text-white">
            {emirateNames[emirates[hovered].slug as keyof typeof emirateNames] ?? emirates[hovered].name}
          </span>
        </div>
      </div>
    </div>
  )
}

export const SiteHeaderContactInfo = { phone: SITE_CONFIG.phoneDisplay }
