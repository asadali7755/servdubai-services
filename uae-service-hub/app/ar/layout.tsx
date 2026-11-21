/**
 * Arabic section (/ar). The root layout renders <html lang="en-AE">; this
 * inline script switches it to Arabic and right-to-left while the HTML is
 * still being parsed, so the page never paints left-to-right first.
 * useLocale() keeps <html> in step on client-side navigation.
 */
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.lang='ar';document.documentElement.dir='rtl'",
        }}
      />
      <div lang="ar" dir="rtl" className="ar-root">
        {children}
      </div>
    </>
  )
}
