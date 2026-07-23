import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import type { AiGuide } from '@/lib/data/aiGuides'

/**
 * Premium editorial rendering for AI-researched deep guides. Matches the
 * site's Light Gold Luxury theme (cream canvas, gold accents, Josefin + Work
 * Sans) but distinguished by a magazine layout, floating article card, drop
 * cap and "AI-Researched" badge. Server component.
 */
export default function AiGuideArticle({ guide }: { guide: AiGuide }) {
  const dateLabel = new Date(guide.datePublished).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guide.schema ?? []) }}
      />

      <article className="aig">
        {/* ── Hero ── */}
        <header className="aig-hero">
          <div className="aig-hero-img">
            <Image src={guide.image} alt={guide.h1} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
            <div className="aig-hero-scrim" />
          </div>
          <div className="aig-hero-inner">
            <nav className="aig-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/blog">Blog</Link><span>/</span>
              <span className="cur">Deep Guide</span>
            </nav>
            <span className="aig-badge"><span className="aig-badge-dot" />AI-Researched Deep Guide</span>
            <h1 className="aig-title">{guide.h1}</h1>
            <div className="aig-meta">
              <span>Madinat Al Haya</span><span className="sep">•</span>
              <span>{dateLabel}</span><span className="sep">•</span>
              <span>{guide.readMins} min read</span>
              {guide.primaryKeyword && <span className="aig-kw">◆ {guide.primaryKeyword}</span>}
            </div>
          </div>
        </header>

        {/* ── Floating article card ── */}
        <div className="aig-canvas">
          <div className="aig-body" dangerouslySetInnerHTML={{ __html: guide.bodyHtml }} />

          {/* CTA */}
          <div className="aig-cta">
            <h2>Get a Free Quote Today</h2>
            <p>Same-day professional service across Dubai &amp; all UAE Emirates · Transparent pricing</p>
            <div className="aig-cta-btns">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="aig-btn-wa">WhatsApp Now</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="aig-btn-call">Call {SITE_CONFIG.phone}</a>
            </div>
          </div>

          {/* FAQ */}
          {guide.faqs.length > 0 && (
            <section className="aig-faq">
              <h2 className="aig-faq-h">Frequently Asked Questions</h2>
              {guide.faqs.map((f, i) => (
                <details key={i} className="aig-faq-item" open={i === 0}>
                  <summary>{f.question}<span className="aig-faq-plus">+</span></summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </section>
          )}

          <div className="aig-back"><Link href="/blog">← Back to all articles</Link></div>
        </div>
      </article>

      <WhatsAppButton />

      <style>{`
        .aig { --gold:#b8912f; --gold-lt:#c9a84c; --ink:#1a1510; --ink-2:#4a4030; --ink-3:#7a6f5c;
          --cream:#fdfcf8; --panel:#f7f2e8; --line:rgba(26,21,16,0.09);
          font-family:var(--font-work), sans-serif; background:var(--cream); }

        /* Hero */
        .aig-hero { position:relative; min-height:clamp(360px,52vh,540px); display:flex; align-items:flex-end; overflow:hidden; }
        .aig-hero-img { position:absolute; inset:0; }
        .aig-hero-scrim { position:absolute; inset:0; background:linear-gradient(180deg, rgba(12,9,6,0.35) 0%, rgba(12,9,6,0.25) 45%, rgba(12,9,6,0.88) 100%); }
        .aig-hero-inner { position:relative; width:100%; max-width:900px; margin:0 auto; padding:0 24px 52px; }
        .aig-crumb { display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#e6dcc4; margin-bottom:16px; }
        .aig-crumb a { color:#f0d27a; text-decoration:none; }
        .aig-crumb .cur { color:#fff; }
        .aig-badge { display:inline-flex; align-items:center; gap:8px; font-size:0.7rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase;
          padding:7px 15px; border-radius:999px; color:#1a1510; background:linear-gradient(90deg,#f0d27a,#c9a84c); box-shadow:0 8px 24px -8px rgba(201,168,76,0.6); }
        .aig-badge-dot { width:7px; height:7px; border-radius:50%; background:#1a1510; animation:aigpulse 1.8s infinite; }
        @keyframes aigpulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .aig-title { font-family:var(--font-josefin), sans-serif; font-weight:700; color:#fff; line-height:1.12;
          font-size:clamp(2rem,4.8vw,3.15rem); margin:16px 0 14px; text-shadow:0 2px 24px rgba(0,0,0,0.55); }
        .aig-meta { display:flex; flex-wrap:wrap; align-items:center; gap:10px; font-size:0.9rem; color:#eadfca; }
        .aig-meta .sep { color:#c9a84c; }
        .aig-kw { margin-left:4px; color:#f0d27a; background:rgba(0,0,0,0.28); border:1px solid rgba(240,210,122,0.4);
          padding:3px 13px; border-radius:999px; font-size:0.8rem; font-weight:600; }

        /* Floating article card */
        .aig-canvas { position:relative; max-width:760px; margin:-44px auto 64px; padding:clamp(28px,5vw,60px);
          background:#fff; border-radius:22px; box-shadow:0 24px 70px -30px rgba(26,21,16,0.35), 0 2px 0 rgba(201,168,76,0.15);
          border:1px solid var(--line); }

        /* Body typography — high contrast on white */
        .aig-body { font-size:1.14rem; line-height:1.85; color:var(--ink-2); }
        .aig-body > :first-child { margin-top:0; }
        .aig-body > p:first-of-type::first-letter { float:left; font-family:var(--font-josefin), sans-serif; font-weight:700;
          font-size:3.5rem; line-height:0.82; padding:6px 12px 0 0; color:var(--gold); }
        .aig-body h2 { font-family:var(--font-josefin), sans-serif; font-size:clamp(1.5rem,3vw,2rem); font-weight:700; color:var(--ink);
          margin:2.6rem 0 1rem; padding-bottom:0.5rem; border-bottom:2px solid rgba(201,168,76,0.35); line-height:1.25; }
        .aig-body h3 { font-family:var(--font-josefin), sans-serif; font-size:1.3rem; font-weight:700; color:var(--gold); margin:1.9rem 0 0.7rem; }
        .aig-body p { margin:1.1rem 0; }
        .aig-body strong { color:var(--ink); font-weight:700; }
        .aig-body a { color:var(--gold); font-weight:600; text-decoration:none; border-bottom:1.5px solid rgba(184,145,47,0.35); }
        .aig-body a:hover { border-bottom-color:var(--gold); }
        .aig-body ul, .aig-body ol { margin:1.2rem 0; padding:0; list-style:none; display:flex; flex-direction:column; gap:0.7rem; }
        .aig-body ul li { position:relative; padding-left:30px; }
        .aig-body ul li::before { content:''; position:absolute; left:0; top:0.5rem; width:9px; height:9px; border-radius:50%;
          background:var(--gold); box-shadow:0 0 0 4px rgba(201,168,76,0.15); }
        .aig-body ol { counter-reset:aig; }
        .aig-body ol li { position:relative; padding-left:38px; counter-increment:aig; }
        .aig-body ol li::before { content:counter(aig); position:absolute; left:0; top:0; width:26px; height:26px; border-radius:50%;
          background:linear-gradient(135deg,#f0d27a,#c9a84c); color:#1a1510; font-size:0.82rem; font-weight:700;
          display:flex; align-items:center; justify-content:center; }
        .aig-body table { width:100%; border-collapse:collapse; margin:1.8rem 0; font-size:1rem;
          border:1px solid rgba(201,168,76,0.3); border-radius:12px; overflow:hidden; }
        .aig-body th { background:rgba(201,168,76,0.14); color:var(--ink); text-align:left; padding:13px 16px; font-weight:700;
          font-family:var(--font-josefin), sans-serif; }
        .aig-body td { padding:12px 16px; border-top:1px solid var(--line); color:var(--ink-2); }
        .aig-body tr:nth-child(even) td { background:rgba(201,168,76,0.04); }
        .aig-body blockquote { margin:1.7rem 0; padding:16px 22px; background:var(--panel);
          border-left:4px solid var(--gold); border-radius:0 12px 12px 0; color:var(--ink); font-style:italic; }
        .aig-body code { background:var(--panel); padding:2px 7px; border-radius:5px; font-size:0.9em; color:#8a6d1f; }

        /* CTA */
        .aig-cta { text-align:center; margin:3rem 0 2.5rem; padding:42px 28px; border-radius:18px;
          background:linear-gradient(135deg,#1a1510 0%,#2d1f0a 55%,#3a2a05 100%); border:1px solid rgba(201,168,76,0.3); }
        .aig-cta h2 { font-family:var(--font-josefin), sans-serif; font-size:1.75rem; font-weight:700; color:#fff; margin:0 0 8px; }
        .aig-cta p { color:#d8ceba; margin:0 0 22px; }
        .aig-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .aig-btn-wa { background:#25D366; color:#0a0e17; font-weight:700; font-size:1.02rem; padding:14px 30px; border-radius:999px; text-decoration:none; }
        .aig-btn-call { border:2px solid #c9a84c; color:#f0d27a; font-weight:700; font-size:1.02rem; padding:12px 28px; border-radius:999px; text-decoration:none; }

        /* FAQ */
        .aig-faq { margin:2.5rem 0 0.5rem; }
        .aig-faq-h { font-family:var(--font-josefin), sans-serif; font-size:1.65rem; font-weight:700; color:var(--ink); margin:0 0 1.1rem; }
        .aig-faq-item { background:var(--cream); border:1px solid var(--line); border-radius:12px; margin-bottom:12px; overflow:hidden; }
        .aig-faq-item summary { list-style:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:14px;
          padding:18px 22px; font-family:var(--font-josefin), sans-serif; font-size:1.06rem; font-weight:700; color:var(--ink); }
        .aig-faq-item summary::-webkit-details-marker { display:none; }
        .aig-faq-plus { color:var(--gold); font-size:1.5rem; font-weight:400; transition:transform 0.2s; flex-shrink:0; }
        .aig-faq-item[open] .aig-faq-plus { transform:rotate(45deg); }
        .aig-faq-item p { margin:0; padding:0 22px 20px; color:var(--ink-2); line-height:1.75; }

        .aig-back { margin-top:1.75rem; padding-top:1.5rem; border-top:1px solid var(--line); }
        .aig-back a { color:var(--gold); font-weight:700; text-decoration:none; }
      `}</style>
    </>
  )
}
