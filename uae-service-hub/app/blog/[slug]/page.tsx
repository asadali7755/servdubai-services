import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import { blogPosts, getBlogPost } from '@/lib/data/blog'
import { getServiceBySlug } from '@/lib/data/services'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
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

      <div className="city-main max-w-3xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <a href="/blog" style={{ color: '#c9a84c' }}>Blog</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <span className="text-white city-crumb-cur">{post.h1}</span>
        </nav>

        {/* Title + meta */}
        <h1 className="city-page-h1" style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {post.h1}
        </h1>
        <div className="city-page-sub" style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Madinat Alhaya Building Cleaning Services · {dateLabel} · {post.readMins} min read
        </div>

        {/* Hero image */}
        <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image src={post.image} alt={post.h1} title={post.title} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        {/* Intro */}
        {post.intro.map((p, i) => (
          <p key={i} className="blog-p" style={{ color: '#c3cad6', fontSize: '1.075rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>{p}</p>
        ))}

        {/* Sections */}
        {post.sections.map((sec, i) => (
          <div key={i} style={{ marginTop: '2rem' }}>
            <h2 className="city-crumb-cur" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.45rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem' }}>
              {sec.heading}
            </h2>
            {sec.body?.map((p, j) => (
              <p key={j} className="blog-p" style={{ color: '#c3cad6', fontSize: '1.075rem', lineHeight: 1.8, marginBottom: '1rem' }}>{p}</p>
            ))}
            {sec.bullets && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {sec.bullets.map((b, k) => (
                  <li key={k} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', color: '#c3cad6', fontSize: '1.02rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#25D366', fontWeight: 800, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    <span className="blog-p">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Cost table */}
        {post.costTable && (
          <div style={{ marginTop: '2.25rem' }}>
            <h2 className="city-crumb-cur" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.45rem', fontWeight: 700, color: '#fff', marginBottom: '0.9rem' }}>
              {post.costTable.title}
            </h2>
            <div style={{ border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', overflow: 'hidden' }}>
              {post.costTable.rows.map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.85rem 1.1rem', background: i % 2 === 0 ? 'rgba(201,168,76,0.05)' : 'transparent', borderBottom: i < post.costTable!.rows.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span className="blog-p" style={{ color: '#dbe1ea', fontSize: '1rem' }}>{row.label}</span>
                  <span style={{ color: '#d9b85c', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' }}>{row.price}</span>
                </div>
              ))}
            </div>
            {post.costTable.note && (
              <p className="blog-p" style={{ color: '#9aa3b2', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '0.75rem', fontStyle: 'italic' }}>{post.costTable.note}</p>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="city-cta-block rounded-xl p-8 text-center" style={{ marginTop: '2.5rem', marginBottom: '2.5rem', background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-josefin)' }}>Get a Free Quote Today</h2>
          <p className="text-gray-400 mb-6">Same-day service across Dubai &amp; all UAE Emirates · Transparent pricing</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ background: '#25D366', color: '#111111' }}>WhatsApp Now</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-block px-8 py-4 rounded-full font-semibold text-lg" style={{ border: '2px solid #c9a84c', color: '#c9a84c' }}>Call {SITE_CONFIG.phone}</a>
          </div>
        </div>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <div className="city-faq-block" style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '12px', padding: '2rem', marginBottom: '2.5rem' }}>
            <h2 className="city-crumb-cur" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {post.faqs.map((faq, i) => (
                <div key={i} className="city-faq-item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                  <div className="city-faq-q" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{faq.question}</div>
                  <p className="city-faq-a" style={{ color: '#c3cad6', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related services */}
        {related.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <h2 className="city-crumb-cur" style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem' }}>Related Services</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {related.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} style={{ padding: '0.5rem 1.15rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: '#d9b85c', borderRadius: '500px', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none' }}>{s.name}</Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/blog" style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}>← Back to all articles</Link>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
