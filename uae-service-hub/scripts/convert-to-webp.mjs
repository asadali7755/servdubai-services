import sharp from 'sharp'
import { readdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const DIRS = [
  'public/images/hero',
  'public/images/emirates',
  'public/images/services',
]

for (const dir of DIRS) {
  if (!existsSync(dir)) continue
  const files = readdirSync(dir)
  for (const file of files) {
    const ext = extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
    const input = join(dir, file)
    const output = join(dir, basename(file, ext) + '.webp')
    if (existsSync(output)) {
      console.log(`SKIP (exists): ${output}`)
      continue
    }
    try {
      await sharp(input).webp({ quality: 85 }).toFile(output)
      console.log(`CONVERTED: ${input} → ${output}`)
    } catch (e) {
      console.error(`FAILED: ${input}`, e.message)
    }
  }
}
console.log('Done.')
