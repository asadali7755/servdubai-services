'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/ui/site-header'
import { KineticMobileMenu } from '@/components/ui/kinetic-mobile-menu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <SiteHeader mobileOpen={mobileOpen} onOpenMobile={() => setMobileOpen((v) => !v)} />
      <KineticMobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
