"use client"

import { useEffect } from "react"

/**
 * Ensures the page lands at the very top on mount.
 *
 * Mount this component at the top of any route whose entry scroll position
 * should always be the top of the page (e.g. the homepage). It disables the
 * browser's automatic scroll restoration while mounted so the back/forward
 * navigation does not bounce the user to a stale position before the manual
 * reset runs.
 */
export function ScrollToTopOnMount() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const history = window.history
    const previousScrollRestoration =
      "scrollRestoration" in history ? history.scrollRestoration : undefined

    if ("scrollRestoration" in history) {
      try {
        history.scrollRestoration = "manual"
      } catch {
        // Some browsers throw in certain sandboxed contexts; ignore.
      }
    }

    const scrollToTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
      } catch {
        window.scrollTo(0, 0)
      }
    }

    scrollToTop()
    const raf = window.requestAnimationFrame(scrollToTop)

    return () => {
      window.cancelAnimationFrame(raf)
      if ("scrollRestoration" in history && previousScrollRestoration) {
        try {
          history.scrollRestoration = previousScrollRestoration
        } catch {
          // Ignore browsers that refuse to reset the value.
        }
      }
    }
  }, [])

  return null
}

export default ScrollToTopOnMount
