import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, type BlogPost } from '@/lib/data/blog'
import { aiGuides } from '@/lib/data/aiGuides'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Tips & Guides Dubai | Sofa, Carpet, Villa Cleaning Costs & FAQ',
    description:
      'Expert cleaning guides for Dubai — how much does sofa cleaning cost in Dubai, villa deep cleaning vs regular cleaning, marble polishing vs crystallization, move-out cleaning checklists & more. Practical advice from Madinat Alhaya.',
    path: '/blog',
  }),
  keywords: [
    'sofa cleaning cost Dubai', 'villa deep cleaning cost Dubai', 'carpet cleaning price Dubai',
    'marble polishing cost Dubai', 'how often deep clean Dubai', 'move out cleaning checklist Dubai',
    'difference marble polishing crystallization', 'how to remove sand villa Dubai',
    'upholstery cleaning tips UAE', 'cleaning guides Dubai', 'mattress cleaning how often UAE',
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
])

function categoryOf(p: BlogPost): string {
  const t = p.title.toLowerCase()
  if (t.includes('cost') || t.includes('price')) return 'Pricing Guide'
  if (t.includes('how often')) return 'Care Tips'
  if (t.includes('checklist')) return 'Checklist'
  return 'Guide'
}

const ArrowReadMore = ({ label = 'Read article' }: { label?: string }) => (
  <span className="blog-readmore">
    {label}
    <span className="arw">→</span>
  </span>
)

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="blog-wrap city-main">
        {/* ambient floating accents */}
        <div className="blog-blob b1" />
        <div className="blog-blob b2" />

        <div className="blog-inner max-w-6xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
          <nav className="text-sm mb-8" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
            <a href="/" style={{ color: '#c9a84c' }}>Home</a>
            <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
            <span className="text-white city-crumb-cur">Blog</span>
          </nav>

          <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Cleaning Tips &amp; Guides
          </div>
          <h1 className="city-page-h1" style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.9rem, 4.2vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12 }}>
            The Madinat Alhaya Cleaning Blog
          </h1>
          <div className="blog-title-accent" />
          <p className="city-page-sub" style={{ color: '#9ca3af', fontSize: '1.075rem', lineHeight: 1.7, margin: '1rem 0 2.75rem', maxWidth: '720px' }}>
            Practical, Dubai-specific cleaning advice — real prices, care schedules, and checklists to help you keep your home spotless and make smart booking decisions.
          </p>

          {/* ── AI DEEP GUIDES (distinct, agent-generated) ── */}
          {aiGuides.length > 0 && (
            <section className="aig-shelf">
              <div className="aig-shelf-head">
                <span className="aig-shelf-badge">
                  <span className="aig-shelf-dot" />
                  AI-Researched
                </span>
                <h2 className="aig-shelf-title">In-Depth Cleaning Guides</h2>
                <p className="aig-shelf-sub">
                  Long-form, research-backed guides — competitor-analysed and written to answer every question in detail.
                </p>
              </div>
              <div className="aig-shelf-grid">
                {aiGuides.slice(0, 6).map((g) => (
                  <Link key={g.slug} href={`/blog/${g.slug}`} className="aig-shelf-card">
                    <div className="aig-shelf-img">
                      <Image src={g.image} alt={g.h1} fill unoptimized style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw, 380px" loading="lazy" />
                      <span className="aig-shelf-pill">Deep Guide · {g.readMins} min</span>
                    </div>
                    <div className="aig-shelf-body">
                      <h3>{g.h1}</h3>
                      <p>{g.excerpt}</p>
                      <span className="aig-shelf-more">Read the guide <span className="arw">→</span></span>
                    </div>
                  </Link>
                ))}
              </div>

              <style>{`
                .aig-shelf { position:relative; margin:0 0 3.5rem; padding:clamp(20px,3vw,32px); border-radius:22px;
                  background:linear-gradient(180deg, rgba(201,168,76,0.09), rgba(201,168,76,0.03));
                  border:1px solid rgba(201,168,76,0.28); }
                .aig-shelf-head { margin-bottom:22px; }
                .aig-shelf-badge { display:inline-flex; align-items:center; gap:7px; font-size:0.68rem; font-weight:700; letter-spacing:0.16em;
                  text-transform:uppercase; color:#1a1510; padding:6px 14px; border-radius:999px;
                  background:linear-gradient(90deg,#f0d27a,#c9a84c); box-shadow:0 6px 18px -6px rgba(201,168,76,0.55); }
                .aig-shelf-dot { width:6px; height:6px; border-radius:50%; background:#1a1510; animation:aigsp 1.8s infinite; }
                @keyframes aigsp { 0%,100%{opacity:1} 50%{opacity:0.3} }
                .aig-shelf-title { font-family:var(--font-josefin), sans-serif; font-size:clamp(1.5rem,3vw,2.05rem); font-weight:700; color:#1a1510; margin:14px 0 6px; }
                .aig-shelf-sub { color:#6b5f48; font-size:1rem; line-height:1.6; margin:0; max-width:640px; }
                .aig-shelf-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }
                .aig-shelf-card { display:flex; flex-direction:column; border-radius:16px; overflow:hidden; text-decoration:none;
                  background:#fff; border:1px solid rgba(201,168,76,0.25); box-shadow:0 10px 30px -18px rgba(26,21,16,0.35);
                  transition:transform 0.18s, box-shadow 0.18s, border-color 0.18s; }
                .aig-shelf-card:hover { transform:translateY(-4px); border-color:rgba(201,168,76,0.55); box-shadow:0 18px 40px -20px rgba(26,21,16,0.4); }
                .aig-shelf-img { position:relative; aspect-ratio:16/9; }
                .aig-shelf-pill { position:absolute; top:11px; left:11px; font-size:0.72rem; font-weight:700; color:#1a1510;
                  background:linear-gradient(90deg,#f0d27a,#c9a84c); padding:5px 12px; border-radius:999px; box-shadow:0 4px 12px -4px rgba(0,0,0,0.4); }
                .aig-shelf-body { padding:17px 19px 19px; display:flex; flex-direction:column; gap:8px; }
                .aig-shelf-body h3 { font-family:var(--font-josefin), sans-serif; font-size:1.14rem; font-weight:700; color:#1a1510; line-height:1.3; margin:0; }
                .aig-shelf-body p { color:#6b5f48; font-size:0.92rem; line-height:1.55; margin:0; flex:1; }
                .aig-shelf-more { color:#b8912f; font-weight:700; font-size:0.9rem; margin-top:4px; }
                .aig-shelf-more .arw { transition:margin 0.18s; }
                .aig-shelf-card:hover .aig-shelf-more .arw { margin-left:5px; }
              `}</style>
            </section>
          )}

          {/* ── FEATURED POST ── */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="blog-featured">
              <div className="blog-featured-img">
                <Image src={featured.image} alt={featured.h1} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 640px" />
                <span className="blog-cat">Featured · {categoryOf(featured)}</span>
              </div>
              <div className="blog-featured-body">
                <div style={{ color: '#9aa3b2', fontSize: '0.8rem', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{featured.readMins} min read</div>
                <h2 className="blog-card-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.8rem' }}>{featured.h1}</h2>
                <p className="blog-card-excerpt" style={{ fontSize: '1.02rem', flex: 'unset' }}>{featured.excerpt}</p>
                <ArrowReadMore label="Read the guide" />
              </div>
            </Link>
          )}

          {/* ── GRID ── */}
          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-img">
                  <Image src={post.image} alt={post.h1} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, 360px" loading="lazy" />
                  <span className="blog-cat">{categoryOf(post)}</span>
                  <span className="blog-readpill">{post.readMins} min</span>
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.h1}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <ArrowReadMore />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
