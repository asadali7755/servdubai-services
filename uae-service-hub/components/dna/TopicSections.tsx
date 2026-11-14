import Link from 'next/link'
import { getPageTopics } from '@/lib/data/pageTopics'

/** Extra H2 topic sections for a page (lib/data/pageTopics.ts). Renders nothing when a page has none. */
export default function TopicSections({ path }: { path: string }) {
  const topics = getPageTopics(path)
  if (!topics.length) return null
  return (
    <section className="dn-sec" aria-label="More about this service">
      <div className="dn-wrap" style={{ display: 'grid', gap: 28, maxWidth: 820 }}>
        {topics.map((t) => (
          <div key={t.h2}>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '.8rem' }}>{t.h2}</h2>
            {t.paras.map((p, i) => (
              <p key={i} className="dn-p" style={{ marginBottom: '.8rem' }}>{p}</p>
            ))}
            {t.related && t.related.length > 0 && (
              <p className="dn-p" style={{ fontSize: '.95rem' }}>
                See also:{' '}
                {t.related.map((r, i) => (
                  <span key={r.href}>
                    {i > 0 && ' · '}
                    <Link href={r.href}>{r.text}</Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
