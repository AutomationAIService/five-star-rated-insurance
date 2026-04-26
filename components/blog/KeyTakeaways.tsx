import { RichTextRunner } from "./RichTextRunner"
import type { BlogKeyTakeaways } from "@/src/data/blogPosts"

type KeyTakeawaysProps = {
  data: BlogKeyTakeaways
}

/**
 * Light-yellow callout with a navy left-border accent and a checkmark list.
 * Matches the brand's gold/navy contrast without overpowering the article.
 */
export function KeyTakeaways({ data }: KeyTakeawaysProps) {
  const title = data.title ?? "Key Takeaways"

  return (
    <aside
      aria-labelledby="key-takeaways-heading"
      className="my-8 rounded-r-lg border-l-4 border-[#1E3A5F] bg-[#F5F5F0] p-6 md:my-10 md:p-7"
    >
      <h2
        id="key-takeaways-heading"
        className="mb-4 font-heading text-lg font-bold text-navy md:text-xl"
      >
        {title}
      </h2>
      <ul className="space-y-3 text-base leading-relaxed text-foreground md:text-[17px]">
        {data.items.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-navy"
            />
            <span className="min-w-0 flex-1">
              <RichTextRunner content={item} />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
