"use client"

import { useOptionalCookieConsent } from "./CookieConsentProvider"

/**
 * Footer link that re-opens the cookie preferences modal. Rendered as a
 * <button> styled like the other footer links so keyboard users and screen
 * readers recognize it as an interactive control.
 *
 * Safe to render anywhere on the site: if it's somehow mounted outside the
 * provider (e.g. during prerender of an error boundary), it degrades to a
 * disabled button rather than throwing.
 */
export function CookiePreferencesButton({
  className,
}: {
  className?: string
}) {
  const ctx = useOptionalCookieConsent()
  const disabled = !ctx
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => ctx?.openPreferences()}
      className={
        className ??
        "text-[16px] leading-8 text-white underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-not-allowed disabled:opacity-60"
      }
    >
      Cookie Preferences
    </button>
  )
}
