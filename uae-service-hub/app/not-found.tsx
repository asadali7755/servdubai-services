import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1
        className="text-3xl font-bold text-white mb-3"
        style={{ fontFamily: 'var(--font-josefin)' }}
      >
        Page Not Found
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        We couldn&apos;t find the page you were looking for. It may have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: '#c9a84c', color: '#151515', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
      >
        Return to Homepage
      </Link>
    </div>
  )
}
