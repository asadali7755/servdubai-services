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

function deepStrip<T>(v: T, key = ''): T {
  if (typeof v === 'string') return (key === 'bodyHtml' ? stripPriceHtml(v) : stripPriceText(v)) as T
  if (Array.isArray(v)) return v.map((x) => deepStrip(x, key)) as T
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, deepStrip(x, k)])) as T
  }
  return v
}

export const aiGuides: AiGuide[] = (guides as AiGuide[]).map((g) => deepStrip(g))

export const getAiGuide = (slug: string): AiGuide | undefined =>
  aiGuides.find((g) => g.slug === slug)

export const isAiGuideSlug = (slug: string): boolean =>
  aiGuides.some((g) => g.slug === slug)
