/**
 * Blog image URL helpers — Unsplash crops for display, cards, and Open Graph.
 * For non-Unsplash URLs, values pass through unchanged.
 */

const UNSPLASH_HOST = "images.unsplash.com"

export function isUnsplashImageUrl(src: string): boolean {
  try {
    return new URL(src).hostname === UNSPLASH_HOST
  } catch {
    return false
  }
}

function buildUnsplashCropUrl(src: string, w: number, h: number): string {
  const parsed = new URL(src)
  if (parsed.hostname !== UNSPLASH_HOST) return src
  const base = new URL(`${parsed.origin}${parsed.pathname}`)
  base.searchParams.set("auto", "format")
  base.searchParams.set("fit", "crop")
  base.searchParams.set("w", String(w))
  base.searchParams.set("h", String(h))
  base.searchParams.set("q", "85")
  return base.toString()
}

/** In-article hero & full-width contexts (16:9). */
export function blogImageDisplayUrl(src: string): string {
  return isUnsplashImageUrl(src) ? buildUnsplashCropUrl(src, 1920, 1080) : src
}

/** Blog index cards (16:9, smaller payload). */
export function blogImageCardUrl(src: string): string {
  return isUnsplashImageUrl(src) ? buildUnsplashCropUrl(src, 1200, 675) : src
}

/** Social sharing — 1.91:1 close to 1200×630. */
export function blogImageOpenGraphUrl(src: string): string {
  return isUnsplashImageUrl(src) ? buildUnsplashCropUrl(src, 1200, 630) : src
}

/** Absolute URL for JSON-LD and meta tags. */
export function blogImageAbsoluteUrl(src: string, siteOrigin: string): string {
  const origin = siteOrigin.replace(/\/$/, "")
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src
  }
  const path = src.startsWith("/") ? src : `/${src}`
  return `${origin}${path}`
}
