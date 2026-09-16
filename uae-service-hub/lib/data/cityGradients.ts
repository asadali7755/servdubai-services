/**
 * Distinct diagonal gradients for the combo-page feed cards — same idea as
 * marblepro.ae/locations, where every city block on the page gets its own
 * jewel-tone color. Here each SECTION on one page (intro, local context,
 * benefits, process, FAQ, final CTA) gets a different gradient from this
 * palette, rotated by a per-city offset so different area pages don't all
 * start on the same color either.
 */
const GRADIENT_PALETTE: string[] = [
  'linear-gradient(135deg, #1c2c4b 0%, #3a4a6b 50%, #5b6c8e 100%)', // navy
  'linear-gradient(135deg, #4a2c1c 0%, #6b4a3a 50%, #8e6c5b 100%)', // terracotta
  'linear-gradient(135deg, #1c4b4a 0%, #3a6b6a 50%, #5b8e8c 100%)', // teal
  'linear-gradient(135deg, #2d2a3a 0%, #4a4658 50%, #6e6779 100%)', // charcoal plum
  'linear-gradient(135deg, #1c3a2f 0%, #3a5c4e 50%, #5b8072 100%)', // deep green
  'linear-gradient(135deg, #4b3a1c 0%, #6b553a 50%, #8e745b 100%)', // bronze
  'linear-gradient(135deg, #3a1c1c 0%, #553a3a 50%, #745b5b 100%)', // rust
  'linear-gradient(135deg, #2c1c4b 0%, #4a3a6b 50%, #6c5b8e 100%)', // indigo
  'linear-gradient(135deg, #1c334b 0%, #3a516b 50%, #5b748e 100%)', // ocean blue
  'linear-gradient(135deg, #1c3a4b 0%, #3a556b 50%, #5b768e 100%)', // deep teal-blue
]

const hashSlug = (slug: string): number =>
  slug.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0)

/** Returns `count` distinct gradients, one per section on the page, offset per city so pages don't all start on the same color. */
export const getSectionGradients = (citySlug: string, count: number): string[] => {
  const offset = hashSlug(citySlug) % GRADIENT_PALETTE.length
  return Array.from(
    { length: count },
    (_, i) => GRADIENT_PALETTE[(offset + i) % GRADIENT_PALETTE.length]
  )
}
