import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import AiGuideArticle from '@/components/AiGuideArticle'
import { blogPosts, getBlogPost } from '@/lib/data/blog'
import { aiGuides, getAiGuide } from '@/lib/data/aiGuides'
import { getServiceBySlug } from '@/lib/data/services'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import QuoteCard from '@/components/QuoteCard'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false

export async function generateStaticParams() {
  return [
    ...blogPosts.map((p) => ({ slug: p.slug })),
    ...aiGuides.map((g) => ({ slug: g.slug })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getAiGuide(slug)
  if (guide) {
    return buildMetadata({
      title: guide.title,
      description: guide.description,
      path: `/blog/${slug}`,
      imageUrl: `https://servedubai.ae${guide.image}`,
    })
  }
  const post = getBlogPost(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    imageUrl: `https://servedubai.ae${post.image}`,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const guide = getAiGuide(slug)
  if (guide) return <AiGuideArticle guide={guide} />

  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]

  const articleSchema = buildArticleSchema({
    headline: post.h1,
    description: post.description,
    path: `/blog/${slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: post.image,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.h1, url: `/blog/${slug}` },
  ])
  const faqSchema = post.faqs.length > 0 ? buildFAQSchema(post.faqs) : null

  const dateLabel = new Date(post.datePublished).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="city-main max-w-3xl mx-auto px-4 py-12 bp-main">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 bp-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="mx-2 bp-breadcrumb-sep">/</span>
          <a href="/blog">Blog</a>
          <span className="mx-2 bp-breadcrumb-sep">/</span>
          <span className="text-white city-crumb-cur">{post.h1}</span>
        </nav>

        {/* Title + meta */}
        <h1 className="city-page-h1 bp-h1">{post.h1}</h1>
        <div className="city-page-sub bp-meta">
          Madinat Alhaya Building Cleaning Services · {dateLabel} · {post.readMins} min read
        </div>

        {/* Hero image */}
        <div className="bp-hero-img">
          <Image src={post.image} alt={post.h1} title={post.title} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        {/* Intro */}
        {post.intro.map((p, i) => (
          <p key={i} className="blog-p bp-p">{p}</p>
        ))}

        {/* Sections */}
        {post.sections.map((sec, i) => (
          <div key={i} className="bp-section">
            <h2 className="city-crumb-cur bp-section-h2">{sec.heading}</h2>
            {sec.body?.map((p, j) => (
              <p key={j} className="blog-p bp-p">{p}</p>
            ))}
            {sec.bullets && (
              <ul className="bp-bullets">
                {sec.bullets.map((b, k) => (
                  <li key={k} className="bp-bullet">
                    <span className="bp-bullet-check">✓</span>
                    <span className="blog-p">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Cost table */}
        {post.costTable && (
          <div className="bp-cost-wrap">
            <h2 className="city-crumb-cur bp-section-h2">{post.costTable.title}</h2>
            <div className="bp-cost-table">
              {post.costTable.rows.map((row, i) => (
                <div key={i} className={`bp-cost-row${i % 2 === 0 ? ' bp-cost-row-even' : ''}`} style={i < post.costTable!.rows.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.06)' } : undefined}>
                  <span className="blog-p bp-cost-label">{row.label}</span>
                  <span className="bp-cost-price">{row.price}</span>
                </div>
              ))}
            </div>
            {post.costTable.note && (
              <p className="blog-p bp-cost-note">{post.costTable.note}</p>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="city-cta-block rounded-xl p-8 text-center bp-cta-block">
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>Get a Free Quote Today</h2>
          <p className="text-gray-400 mb-6">Same-day service across Dubai &amp; all UAE Emirates · Transparent pricing</p>
          <div className="bp-cta-btns">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-semibold text-lg bp-cta-wa">WhatsApp Now</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-block px-8 py-4 rounded-full font-semibold text-lg bp-cta-call">Call {SITE_CONFIG.phone}</a>
          </div>
          <QuoteCard id="quote-blog-post" source={`Blog post — ${post.title}`} className="page-quote-card" />
        </div>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <div className="city-faq-block bp-faq-block">
            <h2 className="city-crumb-cur bp-faq-h2">Frequently Asked Questions</h2>
            <div className="bp-faq-list">
              {post.faqs.map((faq, i) => (
                <div key={i} className="city-faq-item bp-faq-item">
                  <div className="city-faq-q bp-faq-q">{faq.question}</div>
                  <p className="city-faq-a bp-faq-a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related services */}
        {related.length > 0 && (
          <div className="bp-related-wrap">
            <h2 className="city-crumb-cur bp-related-h2">Related Services</h2>
            <div className="bp-related-pills">
              {related.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} className="bp-related-pill">{s.name}</Link>
              ))}
            </div>
          </div>
        )}

        <div className="bp-back-wrap">
          <Link href="/blog" className="bp-back-link">← Back to all articles</Link>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
