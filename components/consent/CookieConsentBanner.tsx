"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"

import { useCookieConsent } from "./CookieConsentProvider"

/**
 * First-visit consent banner, anchored to the bottom of the viewport.
 *
 * Design requirements:
 *  - Three equal-weight buttons (Accept All, Reject Non-Essential, Customize).
 *    Any visual hierarchy that makes Reject harder to find than Accept has
 *    been flagged by California's AG as a CCPA dark pattern. Buttons share
 *    the same size, padding, border width, and contrast.
 *  - All non-essential categories default to OFF. The user must take an
 *    affirmative action to opt in.
 *  - Does not block the page. Scroll, links, and form submissions all
 *    continue to work while the banner is visible.
 *  - Keyboard navigable, announced to screen readers via role="region" +
 *    aria-labelledby, and hidden from layout entirely once a choice is made.
 */
export function CookieConsentBanner() {
  const {
    bannerVisible,
    gpcDetected,
    acceptAll,
    rejectAll,
    openPreferences,
  } = useCookieConsent()
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (bannerVisible && acceptRef.current) {
      // Focus into the banner so keyboard users can act without a mouse.
      // Delayed with a microtask to avoid fighting the page's own focus.
      const id = window.setTimeout(() => acceptRef.current?.focus(), 50)
      return () => window.clearTimeout(id)
    }
  }, [bannerVisible])

  if (!bannerVisible) return null

  return (
    <div
      role="region"
      aria-labelledby="cookie-banner-heading"
      aria-describedby="cookie-banner-body"
      className="fixed inset-x-0 bottom-0 z-[60] animate-in fade-in slide-in-from-bottom-4 duration-300 print:hidden"
    >
      <div className="mx-auto max-w-6xl px-3 pb-3 md:pb-4">
        <div className="rounded-lg border border-border bg-white text-foreground shadow-2xl ring-1 ring-black/5 md:rounded-xl">
          <div className="flex flex-col gap-4 p-4 md:flex-row md:items-start md:gap-6 md:p-5">
            <div className="flex shrink-0 items-start gap-3 md:max-w-[60%]">
              <ShieldCheck
                className="mt-0.5 hidden h-6 w-6 shrink-0 text-navy md:block"
                aria-hidden
              />
              <div className="space-y-2">
                <h2
                  id="cookie-banner-heading"
                  className="font-heading text-base font-semibold text-foreground md:text-lg"
                >
                  Your cookie choices
                </h2>
                <p
                  id="cookie-banner-body"
                  className="text-sm leading-relaxed text-foreground/80"
                >
                  We use cookies to make the site work, measure performance, and
                  (where applicable) show relevant ads. You can accept all, reject
                  non-essential cookies, or customize your choices. Read our{" "}
                  <Link
                    href="/cookie-policy"
                    className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                  >
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                {gpcDetected ? (
                  <p className="rounded-md border border-green-300 bg-green-50 p-2 text-xs leading-relaxed text-green-900">
                    We detected a Global Privacy Control signal and have applied
                    your privacy preferences automatically. Non-essential cookies
                    are off. You can still enable Functional cookies below if you
                    want.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-stretch md:justify-end">
              <button
                type="button"
                onClick={openPreferences}
                className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Reject Non-Essential
              </button>
              <button
                ref={acceptRef}
                type="button"
                onClick={acceptAll}
                className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
