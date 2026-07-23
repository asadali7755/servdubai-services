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

export const aiGuides: AiGuide[] = guides as AiGuide[]

export const getAiGuide = (slug: string): AiGuide | undefined =>
  aiGuides.find((g) => g.slug === slug)

export const isAiGuideSlug = (slug: string): boolean =>
  aiGuides.some((g) => g.slug === slug)
