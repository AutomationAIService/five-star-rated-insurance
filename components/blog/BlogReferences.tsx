import type { BlogReference } from "@/src/data/blogPosts"

type BlogReferencesProps = {
  references: BlogReference[]
}

/**
 * Numbered list of external references. Each `<li>` carries an
 * `id="ref-{n}"` so inline citation `<sup>[n]</sup>` markers from
 * `RichTextRunner` can jump to it. All links open in a new tab with
 * `rel="noopener noreferrer"`.
 */
export function BlogReferences({ references }: BlogReferencesProps) {
  if (references.length === 0) return null

  return (
    <section
      aria-labelledby="references-heading"
      className="my-10 rounded-lg border border-border bg-[color:var(--page-bg)] p-6 md:p-8"
    >
      <h2
        id="references-heading"
        className="mb-4 font-heading text-lg font-bold text-navy md:text-xl"
      >
        Sources & References
      </h2>
      <ol className="space-y-2 text-sm leading-relaxed text-foreground md:text-base">
        {references.map((ref, idx) => {
          const n = idx + 1
          return (
            <li
              key={ref.url}
              id={`ref-${n}`}
              className="scroll-mt-24 flex gap-2 break-words"
            >
              <span className="font-semibold text-navy">{n}.</span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 flex-1 text-navy underline decoration-navy/40 underline-offset-2 hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                {ref.label}
              </a>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
