"use client"

import { Settings2 } from "lucide-react"

import { useOptionalCookieConsent } from "@/components/consent"

/**
 * Inline "Manage cookie preferences" button rendered on the Cookie Policy
 * page. Reopens the consent modal from the provider. Rendered as a link-
 * style button so it fits inside running prose.
 */
export function ManageCookiesButton() {
  const ctx = useOptionalCookieConsent()
  return (
    <button
      type="button"
      onClick={() => ctx?.openPreferences()}
      disabled={!ctx}
      className="inline-flex items-center gap-2 rounded-md border border-navy/30 bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 print:hidden"
      aria-label="Open cookie preferences"
    >
      <Settings2 className="h-4 w-4" aria-hidden />
      Manage cookie preferences
    </button>
  )
}
