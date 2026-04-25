"use client"

import { useId, useState, type KeyboardEvent } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { RichTextRunner } from "./RichTextRunner"
import type { FaqItem } from "@/src/data/blogPosts"

type FAQAccordionProps = {
  items: FaqItem[]
}

/**
 * Accessible FAQ accordion.
 *
 * Critical: every answer is **always rendered in the DOM** (using
 * `grid-rows-[1fr|0fr]` for the visual collapse) so search engines can
 * index the answer text for FAQ-rich-result eligibility even when the
 * panel is visually closed. Pair this with the FAQPage JSON-LD emitted
 * from the page wrapper.
 *
 * Keyboard support:
 *   - Enter / Space toggles the focused trigger
 *   - Tab moves between triggers (native button behavior)
 *
 * ARIA:
 *   - Triggers are `<button aria-expanded aria-controls>`
 *   - Panels are `<div role="region" aria-labelledby>` and never use
 *     `display: none` so SR users always see the content; visual
 *     collapse is purely cosmetic.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const baseId = useId()
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))

  const toggle = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggle(idx)
    }
  }

  return (
    <div className="my-6 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
      {items.map((item, idx) => {
        const isOpen = openIndices.has(idx)
        const triggerId = `${baseId}-trigger-${idx}`
        const panelId = `${baseId}-panel-${idx}`
        return (
          <div key={idx} className="bg-surface">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                onKeyDown={(event) => handleKeyDown(event, idx)}
                className={cn(
                  "flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left",
                  "font-heading text-base font-semibold text-foreground md:text-lg",
                  "transition-colors hover:bg-navy/5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy",
                )}
              >
                <span className="min-w-0 flex-1">{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-5 shrink-0 text-navy transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                <div className="px-5 pb-5 pt-0 text-base leading-relaxed text-foreground md:text-[17px]">
                  <RichTextRunner content={item.answer} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
