import { RichTextRunner } from "./RichTextRunner"
import type { RichText } from "@/src/data/blogPosts"

type ComparisonTableProps = {
  caption: string
  columns: string[]
  rows: string[][]
  sourceLine?: RichText
}

/**
 * Responsive data table. On narrow screens the table itself stays a
 * grid (no list collapse) and scrolls horizontally inside its wrapper —
 * a `tabindex` is exposed so keyboard users can scroll it. Header bar uses
 * navy / white-text for brand contrast; rows alternate for scan-ability.
 */
export function ComparisonTable({
  caption,
  columns,
  rows,
  sourceLine,
}: ComparisonTableProps) {
  return (
    <figure className="my-8 md:my-10">
      <div
        role="region"
        aria-label={caption}
        tabIndex={0}
        className="relative -mx-4 overflow-x-auto rounded-lg border border-border bg-surface shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-navy md:mx-0"
      >
        <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-[15px]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-navy text-white">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border-b border-navy/40 px-4 py-3 text-left font-heading text-sm font-semibold uppercase tracking-wide text-white md:px-5"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={
                  rowIdx % 2 === 0
                    ? "bg-surface"
                    : "bg-[color:var(--page-bg)]"
                }
              >
                {row.map((cell, cellIdx) => {
                  const isFirst = cellIdx === 0
                  return (
                    <td
                      key={cellIdx}
                      className={
                        "border-b border-border px-4 py-3 align-top text-foreground md:px-5 " +
                        (isFirst ? "font-semibold text-navy" : "")
                      }
                    >
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sourceLine ? (
        <figcaption className="mt-2 px-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
          <RichTextRunner content={sourceLine} />
        </figcaption>
      ) : null}
    </figure>
  )
}
