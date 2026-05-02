/**
 * Educational / legal disclaimer appended to every published blog article.
 */
export function BlogLegalDisclaimer() {
  return (
    <aside
      className="mt-10 rounded-xl border border-border bg-muted/40 px-5 py-6 text-sm leading-relaxed text-muted-foreground"
      aria-label="Disclaimer"
    >
      <p className="font-heading text-base font-semibold text-foreground">Disclaimer</p>
      <p className="mt-3">
        This article is for general information only and is not legal, tax, or insurance advice.
        Coverage availability, eligibility, pricing, policy terms, and carrier options vary by
        state, carrier, coverage type, and individual circumstances.
      </p>
      <p className="mt-3">
        Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance
        Brokerage. Insurance products are offered through Protegrity Insurance Brokerage. Not
        available in all states.
      </p>
      <p className="mt-3">
        Speak with a licensed insurance professional before making coverage decisions.
      </p>
    </aside>
  )
}
