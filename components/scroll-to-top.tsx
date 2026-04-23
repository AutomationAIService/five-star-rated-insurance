'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls the window to the top whenever the pathname changes.
 *
 * - Does NOT fire on search param or hash changes, so anchor links like
 *   `/privacy-policy#california-rights` keep their native browser behavior.
 * - Uses `behavior: 'instant'` so navigation feels immediate.
 * - Does not touch `history.scrollRestoration`, so the browser's built-in
 *   scroll restoration for back/forward navigation is preserved.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop
