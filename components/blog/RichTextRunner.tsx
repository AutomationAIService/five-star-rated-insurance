import Link from "next/link"
import type { ReactNode } from "react"
import type { RichText, RichTextRun } from "@/src/data/blogPosts"

type RichTextProps = {
  content: RichText
  /** Optional class for the citation marker `<sup>` element. */
  citationClassName?: string
}

/**
 * Renders a `RichText` value (string or array of `RichTextRun`s) into a
 * stable list of inline React nodes. Supports:
 *   - plain strings
 *   - inline links (`{ link, text, external? }`) — externals open in a new
 *     tab with `rel="noopener noreferrer"`
 *   - citation markers (`{ citation: n }`) — rendered as a superscript
 *     anchor that jumps to `#ref-{n}` on the same page
 */
export function RichTextRunner({
  content,
  citationClassName = "ml-0.5 text-[0.7em] font-semibold text-navy align-super leading-none",
}: RichTextProps): ReactNode {
  const runs: RichTextRun[] = typeof content === "string" ? [content] : content

  return (
    <>
      {runs.map((run, idx) => {
        if (typeof run === "string") {
          return <span key={idx}>{run}</span>
        }
        if ("citation" in run) {
          const n = run.citation
          return (
            <sup key={idx} className={citationClassName}>
              <a
                href={`#ref-${n}`}
                aria-label={`Reference ${n}`}
                className="rounded-sm px-0.5 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              >
                [{n}]
              </a>
            </sup>
          )
        }
        if ("link" in run) {
          if (run.external) {
            return (
              <a
                key={idx}
                href={run.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy underline decoration-navy/40 underline-offset-2 transition-colors hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                {run.text}
              </a>
            )
          }
          return (
            <Link
              key={idx}
              href={run.link}
              className="font-medium text-navy underline decoration-navy/40 underline-offset-2 transition-colors hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              {run.text}
            </Link>
          )
        }
        return null
      })}
    </>
  )
}
