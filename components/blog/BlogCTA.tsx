import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import type { BlogFinalCta } from "@/src/data/blogPosts"

type BlogCTAProps = {
  data: BlogFinalCta
}

/**
 * Final post CTA card. Brand-colored navy background with star pattern,
 * a tappable phone number (44×44 minimum), and a button anchored to the
 * homepage Ava chatbot at `/#quote`.
 */
export function BlogCTA({ data }: BlogCTAProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-navy/10 bg-navy text-white shadow-lg">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={data.phoneHref}
            className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-bold text-navy shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:text-lg"
          >
            <Phone className="size-5 shrink-0 text-[#F5C518]" aria-hidden />
            <span>Call Protegrity Insurance: {data.phoneLabel}</span>
          </a>
          <Link
            href={data.quoteHref}
            className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md bg-[#F5C518] px-6 py-3 text-base font-bold uppercase tracking-wide text-navy shadow-sm transition-colors hover:bg-[#F5C518]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:text-lg"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Link>
        </div>
        <p className="mt-6 text-center text-sm leading-relaxed text-white/80 md:text-base">
          {data.trustLine}
        </p>
      </div>
    </div>
  )
}
