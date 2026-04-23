"use client"

import { Printer } from "lucide-react"

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.print()
        }
      }}
      className="inline-flex items-center gap-2 rounded-md border border-navy/30 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 print:hidden"
      aria-label="Print or save this page as PDF"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print or Save as PDF
    </button>
  )
}
