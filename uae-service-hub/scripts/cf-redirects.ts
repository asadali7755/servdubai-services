// Writes public/_redirects for Cloudflare Pages from the redirects() list in
// next.config.ts. A static export cannot run Next.js redirects, so the list
// stays the single source of truth and this file is regenerated from it.
// Run from the project root. Host-based rules (has: [{ type: 'host' }]) are skipped: functions/_middleware.js
// handles those. Run after changing redirects():  npx tsx scripts/cf-redirects.ts
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import config from '../next.config';

type R = { source: string; destination: string; permanent?: boolean; statusCode?: number; has?: unknown[]; missing?: unknown[] };

const root = process.cwd();
const toCf = (p: string, isDest: boolean) =>
  p.replace(/:(\w+)\*/g, isDest ? ':splat' : '*').replace(/:(\w+)\+/g, isDest ? ':splat' : '*');

async function main() {
const list = ((await (config as { redirects?: () => Promise<R[]> }).redirects?.()) ?? []) as R[];
const lines: string[] = [];
const skipped: string[] = [];
const seen = new Set<string>();
for (const r of list) {
  if (r.has || r.missing) { skipped.push(`${r.source} (host/condition rule, handled in functions/_middleware.js)`); continue; }
  if (/[()]/.test(r.source)) { skipped.push(`${r.source} (regex param not supported by _redirects)`); continue; }
  const src = toCf(r.source, false);
  if (seen.has(src)) continue;
  seen.add(src);
  const status = r.statusCode ?? (r.permanent === false ? 302 : 301);
  lines.push(`${src} ${toCf(r.destination, true)} ${status}`);
}
writeFileSync(path.join(root, 'public/_redirects'), lines.join('\n') + '\n');
console.log(`public/_redirects: ${lines.length} rules`);
if (skipped.length) console.log('skipped:\n  ' + skipped.join('\n  '));
}
main();
