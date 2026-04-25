import type { BlogPostImage } from "@/src/data/blogPosts"

const UNSPLASH_HOME =
  "https://unsplash.com/?utm_source=fivestarratedinsurance&utm_medium=referral&utm_content=creditCopyText"

type BlogPhotoAttributionProps = {
  image: BlogPostImage
}

/**
 * Unsplash-style credit line. Renders only when photographer + profile URL exist.
 */
export function BlogPhotoAttribution({ image }: BlogPhotoAttributionProps) {
  if (!image.photographer?.trim() || !image.photographerUrl?.trim()) {
    return null
  }

  return (
    <p className="mt-8 text-center text-xs italic leading-relaxed text-muted-foreground sm:text-sm">
      Photo by{" "}
      <a
        href={image.photographerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-navy underline decoration-navy/40 underline-offset-2 hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
      >
        {image.photographer}
      </a>{" "}
      on{" "}
      <a
        href={UNSPLASH_HOME}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-navy underline decoration-navy/40 underline-offset-2 hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
      >
        Unsplash
      </a>
    </p>
  )
}
