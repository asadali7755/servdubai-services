/**
 * AI Deep Guides — long-form, research-backed articles produced by the
 * autonomous SEO agent pipeline. Kept separate from the hand-written
 * BlogPost list so they can render with their own distinct premium design.
 * The pipeline writes/updates content/ai-guides.json on publish.
 */
import guides from '../../content/ai-guides.json'

export interface AiGuideFaq {
  question: string
  answer: string
}

export interface AiGuide {
  slug: string
  title: string
  h1: string
  description: string
  excerpt: string
  image: string
  datePublished: string
  dateModified?: string
  readMins: number
  primaryKeyword: string
  bodyHtml: string
  faqs: AiGuideFaq[]
  schema: unknown
  generatedBy: 'ai-agent'
}

/*
 * No prices on the site (client decision, Oct 2026) — the boss quotes every job
 * on WhatsApp. The guides are written by an external bot, so as a safety net any
 * money amount is stripped at build time: whole tables / list items / paragraphs
 * / headings containing a price are dropped, and price sentences are removed from
 * plain-text fields (FAQ answers, schema, descriptions).
 */
const PRICE = /(?:AED|Dhs|dirhams?)\s?\d|\d[\d,.]*\s?(?:AED|dirhams?)\b/i
const QUOTE_LINE = 'Every job is quoted individually — send a photo on WhatsApp and we confirm the price before booking.'

function stripPriceHtml(html: string): string {
  if (!PRICE.test(html)) return html
  let out = html.replace(/<table\b[\s\S]*?<\/table>/gi, (t) => (PRICE.test(t) ? '' : t))
  for (const tag of ['li', 'p', 'tr', 'h4', 'h3', 'h2', 'blockquote']) {
    const re = new RegExp(`<${tag}\\b[^>]*>(?:(?!<${tag}\\b)[\\s\\S])*?<\\/${tag}>`, 'gi')
    out = out.replace(re, (m) => (PRICE.test(m) ? '' : m))
  }
  return out.replace(/<(ul|ol)\b[^>]*>\s*<\/\1>/gi, '')
}

function stripPriceText(text: string): string {
  if (!PRICE.test(text)) return text
  const kept = text.split(/(?<=[.!?])\s+(?=[A-Z])/).filter((s) => !PRICE.test(s)).join(' ').trim()
  return kept ? `${kept} ${QUOTE_LINE}` : QUOTE_LINE
}

/*
 * Unverified promises are stripped the same way (client decision, Oct 2026): no
 * satisfaction guarantee / free re-clean, no 24/7 availability (hours are
 * Mon–Sat 9 AM – 10 PM), no "best / only one in Dubai". Headings that make the
 * claim are dropped with their section; paragraph sentences making the claim are removed.
 */
const CLAIM = new RegExp(
  [
    'satisfaction guarantee', 'satisfaction guaranteed', 'guaranteed satisfaction', '100\\s?% satisf',
    '\\bre[-\u2011]?clean\\w*[^.]{0,60}?(?:no (?:additional|extra) (?:charge|cost)|free of charge|for free|without charge|at no (?:extra |additional )?(?:charge|cost)|until you|guarantee)',
    '24/7 (?:[\\w-]+ ){0,2}(?:support|availability|emergency|hotline|call|line|response|service|booking|cleaning|team|crew)',
    '(?:available|reachable|open|respond|answer|operates?) 24/7', 'round[- ]the[- ]clock', '(?:our|the) (?:uae |dedicated )?call[-\u2011 ]?cent(?:er|re)', '24/7 call',
    'best cleaning company', 'only one in dubai', 'account manager',
  ].join('|'),
  'i',
)
const plain = (h: string) => h.replace(/<[^>]+>/g, ' ')

function stripClaimHtml(html: string): string {
  if (!CLAIM.test(html)) return html
  let out = html
  // a heading that makes the claim goes with its whole section
  for (const lvl of [2, 3, 4]) {
    const re = new RegExp(`<h${lvl}\\b[^>]*>[\\s\\S]*?<\\/h${lvl}>[\\s\\S]*?(?=<h[1-${lvl}]\\b|$)`, 'gi')
    out = out.replace(re, (sec) => {
      const head = sec.match(new RegExp(`<h${lvl}\\b[^>]*>([\\s\\S]*?)<\\/h${lvl}>`, 'i'))
      return head && CLAIM.test(plain(head[1])) ? '' : sec
    })
  }
  for (const tag of ['li', 'tr', 'blockquote']) {
    const re = new RegExp(`<${tag}\\b[^>]*>(?:(?!<${tag}\\b)[\\s\\S])*?<\\/${tag}>`, 'gi')
    out = out.replace(re, (m) => (CLAIM.test(plain(m)) ? '' : m))
  }
  out = out.replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi, (m, attrs: string, inner: string) => {
    if (!CLAIM.test(plain(inner))) return m
    const kept = inner.split(/(?<=[.!?])\s+(?=[A-Z<])/).filter((s) => !CLAIM.test(plain(s)))
    return kept.length ? `<p${attrs}>${kept.join(' ')}</p>` : ''
  })
  return out.replace(/<(ul|ol)\b[^>]*>\s*<\/\1>/gi, '').replace(/<table\b[^>]*>(?:(?!<tr\b)[\s\S])*?<\/table>/gi, '')
}

function stripClaimText(text: string): string {
  if (!CLAIM.test(text)) return text
  // a bare claim inside a comma list ("eco-friendly service, 24/7 availability, …") just loses that item
  text = text.replace(/,\s*(?:24\/7 availability|round[- ]the[- ]clock service)(?=,)/gi, '')
  if (!CLAIM.test(text)) return text
  return text.split(/(?<=[.!?])\s+(?=[A-Z])/).filter((s) => !CLAIM.test(s)).join(' ').trim()
}

/** FAQ entries whose question is about a removed claim, or whose answer is now empty, are dropped */
function cleanFaqs<T extends { question?: string; answer?: string; name?: string; acceptedAnswer?: { text?: string } }>(list: T[]): T[] {
  return list.filter((f) => {
    const q = f.question ?? f.name ?? ''
    const a = f.answer ?? f.acceptedAnswer?.text ?? ''
    return !CLAIM.test(q) && a.trim().length > 0
  })
}

function deepStrip<T>(v: T, key = ''): T {
  if (typeof v === 'string') {
    return (key === 'bodyHtml' ? stripClaimHtml(stripPriceHtml(v)) : stripClaimText(stripPriceText(v))) as T
  }
  if (Array.isArray(v)) return v.map((x) => deepStrip(x, key)) as T
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, deepStrip(x, k)])) as T
  }
  return v
}

export const aiGuides: AiGuide[] = (guides as AiGuide[]).map((g) => {
  const s = deepStrip(g)
  const schema = Array.isArray(s.schema)
    ? (s.schema as Record<string, unknown>[]).map((it) =>
        it['@type'] === 'FAQPage' && Array.isArray(it.mainEntity)
          ? { ...it, mainEntity: cleanFaqs(it.mainEntity as { name?: string; acceptedAnswer?: { text?: string } }[]) }
          : it,
      )
    : s.schema
  return { ...s, faqs: cleanFaqs(s.faqs), schema }
})

export const getAiGuide = (slug: string): AiGuide | undefined =>
  aiGuides.find((g) => g.slug === slug)

export const isAiGuideSlug = (slug: string): boolean =>
  aiGuides.some((g) => g.slug === slug)
