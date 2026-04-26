import { Phone } from "lucide-react"
import { ComparisonTable } from "./ComparisonTable"
import { FAQAccordion } from "./FAQAccordion"
import { RichTextRunner } from "./RichTextRunner"
import type { ContentBlock } from "@/src/data/blogPosts"

type BlogContentProps = {
  blocks: ContentBlock[]
}

/**
 * Renders an ordered array of `ContentBlock`s for a blog post body.
 * Each block type maps to a self-contained component so future posts
 * can extend the union type and renderer in one place.
 */
export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className="space-y-5 md:space-y-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2": {
            const id =
              block.id ?? slugify(block.text)
            return (
              <h2
                key={idx}
                id={id}
                className="scroll-mt-24 pt-4 font-heading text-2xl font-bold leading-tight text-navy md:pt-6 md:text-3xl"
              >
                {block.text}
              </h2>
            )
          }
          case "h3": {
            const id = block.id ?? slugify(block.text)
            return (
              <h3
                key={idx}
                id={id}
                className="scroll-mt-24 pt-2 font-heading text-xl font-bold leading-tight text-navy md:text-2xl"
              >
                {block.text}
              </h3>
            )
          }
          case "p": {
            return (
              <p
                key={idx}
                className="text-base leading-relaxed text-foreground md:text-[17px] md:leading-[1.75]"
              >
                {block.lead ? (
                  <strong className="font-semibold text-navy">
                    {block.lead}{" "}
                  </strong>
                ) : null}
                <RichTextRunner content={block.text} />
              </p>
            )
          }
          case "softCta": {
            return (
              <p
                key={idx}
                className="my-6 rounded-lg border border-navy/10 bg-navy/5 px-5 py-4 text-base italic leading-relaxed text-foreground md:text-[17px]"
              >
                <RichTextRunner content={block.text} />
              </p>
            )
          }
          case "midCta": {
            return (
              <div
                key={idx}
                className="my-7 flex flex-col items-stretch gap-4 rounded-lg border-l-4 border-gold bg-navy/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-base font-medium leading-relaxed text-foreground md:text-[17px]">
                  {block.intro}
                </p>
                <a
                  href={block.phoneHref}
                  className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  <Phone className="size-5 shrink-0" aria-hidden />
                  <span>Call {block.phoneLabel}</span>
                </a>
                {block.tail ? (
                  <p className="sr-only">{block.tail}</p>
                ) : null}
              </div>
            )
          }
          case "table": {
            return (
              <ComparisonTable
                key={idx}
                caption={block.caption}
                columns={block.columns}
                rows={block.rows}
                sourceLine={block.sourceLine}
              />
            )
          }
          case "faq": {
            return (
              <div key={idx}>
                {block.intro ? (
                  <p className="text-base leading-relaxed text-foreground md:text-[17px]">
                    {block.intro}
                  </p>
                ) : null}
                <FAQAccordion items={block.items} />
              </div>
            )
          }
          default:
            return null
        }
      })}
    </div>
  )
}

/** Lowercase + hyphenate a heading into a stable in-page anchor id. */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}
