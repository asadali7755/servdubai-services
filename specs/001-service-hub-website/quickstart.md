# Quickstart: UAE Service Hub Website

**Feature**: `001-service-hub-website`
**Date**: 2026-04-15

## Prerequisites

- Node.js 18 LTS (`node -v` should show `v18.x.x` or higher)
- npm 9+ or pnpm 8+
- Git

## 1. Create Next.js Project

```bash
npx create-next-app@latest uae-service-hub \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd uae-service-hub
```

## 2. Install Dependencies

```bash
npm install framer-motion react-hook-form zod
npm install -D @types/node
```

## 3. Configure Environment

Create `.env.local` in project root:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER="+971547199189"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## 4. Configure Tailwind

Replace `tailwind.config.ts` content:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#151515',
        'background-light': '#1e1e1e',
        accent: '#c9a84c',          // gold
        'accent-light': '#e8c96a',
        surface: '#252525',
      },
      fontFamily: {
        heading: ['var(--font-josefin)', 'sans-serif'],
        body: ['var(--font-work)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

## 5. Configure Fonts in Root Layout

Edit `app/layout.tsx`:

```typescript
import { Josefin_Sans, Work_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['400', '700'],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work',
  weight: ['400', '600'],
})
```

## 6. Create Folder Structure

```bash
mkdir -p lib/data lib/utils lib/animations
mkdir -p components
mkdir -p public/images/{hero,services,emirates,logos}
```

## 7. Verify Dev Server

```bash
npm run dev
# Open http://localhost:3000
# Should show default Next.js page without errors
```

## 8. Verify TypeScript

```bash
npm run build
# Should compile with 0 errors (template pages only at this point)
```

## Common Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server on :3000 |
| `npm run build` | Production build + static export |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint check |
| `npx tsc --noEmit` | Type-check without building |

## Vercel Deployment

1. Push branch to GitHub
2. Import repo in Vercel dashboard
3. Set environment variables:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `+971547199189`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
4. Deploy — Vercel auto-detects Next.js
5. Verify live URL loads without console errors

## Validation Checklist

After setup, verify:

- [ ] `npm run dev` serves homepage at http://localhost:3000
- [ ] `npm run build` completes without TypeScript errors
- [ ] `npm run lint` reports 0 errors
- [ ] Tailwind dark background (#151515) visible in browser
- [ ] Josefin Sans and Work Sans fonts loaded (check Network tab)
- [ ] `.env.local` not committed to git (in `.gitignore`)
