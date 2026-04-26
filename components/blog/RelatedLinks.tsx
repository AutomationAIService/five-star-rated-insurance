import Link from "next/link"
import { ArrowRight } from "lucide-react"

type RelatedLink = {
  label: string
  href: string
  description?: string
}

type RelatedLinksProps = {
  /** Section heading; defaults to "Related Resources". */
  title?: string
  links: RelatedLink[]
}

/**
 * Compact card grid of related internal links — used to keep the user
 * inside the site after they finish a post. Defaults to two-column on
 * tablet and up.
 */
export function RelatedLinks({
  title = "Related Resources",
  links,
}: RelatedLinksProps) {
  if (links.length === 0) return null

  return (
    <section
      aria-labelledby="related-resources-heading"
      className="my-10"
    >
      <h2
        id="related-resources-heading"
        className="mb-4 font-heading text-lg font-bold text-navy md:text-xl"
      >
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex h-full min-h-[64px] items-start justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3 shadow-sm transition-all hover:border-navy/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-base font-semibold text-navy md:text-lg">
                  {link.label}
                </span>
                {link.description ? (
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                    {link.description}
                  </span>
                ) : null}
              </span>
              <ArrowRight
                aria-hidden
                className="mt-1 size-5 shrink-0 text-navy transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
