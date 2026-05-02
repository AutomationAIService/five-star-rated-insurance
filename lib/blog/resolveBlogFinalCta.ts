import type { BlogFinalCta, BlogPost } from "@/src/data/blogPosts"

const WORKERS_COMP_SLUG = "workers-compensation-insurance-arizona"

/**
 * Applies Workers' Comp-specific CTA defaults on designated posts while preserving
 * phone labels/hrefs authored in `blogPosts.ts`.
 */
export function resolveBlogFinalCta(post: BlogPost): BlogFinalCta {
  const base = post.finalCta
  if (post.slug === WORKERS_COMP_SLUG) {
    return {
      ...base,
      headline: base.headline,
      intro:
        "Compare Arizona workers' compensation quotes with licensed brokers, share payroll and class codes once, then review multiple admitted carriers side by side.",
      quoteHref: "/#quote",
      trustLine:
        "Workers’ compensation specialists · Multiple carriers quoted side by side · Licensed Arizona brokers · 465+ five-star Google reviews",
    }
  }
  return base
}
