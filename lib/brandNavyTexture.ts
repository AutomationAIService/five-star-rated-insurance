/**
 * Subtle repeating 5-point star tile (60×60) for brand navy backgrounds.
 * Matches former plus-pattern scale; white fill with parent opacity-5 for hero parity.
 */
/** One filled 5-point star per 60×60 tile (same grid size as former plus pattern). */
const BRAND_NAVY_STAR_TILE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g transform="translate(20 18)"><path fill="#ffffff" d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5L1 7.5h6.5z"/></g></svg>`

export const BRAND_NAVY_STAR_PATTERN_URL = `url("data:image/svg+xml,${encodeURIComponent(BRAND_NAVY_STAR_TILE_SVG)}")`
