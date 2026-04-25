import Image from "next/image"
import { blogImageDisplayUrl } from "@/lib/blog/images"
import type { BlogPostImage } from "@/src/data/blogPosts"

type BlogFeaturedImageProps = {
  image: BlogPostImage
}

/**
 * Full-width hero inside the article column (below breadcrumb, above body).
 * 16:9 aspect, rounded corners, LCP-friendly `priority`.
 */
export function BlogFeaturedImage({ image }: BlogFeaturedImageProps) {
  const src = blogImageDisplayUrl(image.src)

  return (
    <figure className="mb-8 overflow-hidden rounded-xl border border-border bg-muted shadow-sm md:mb-10">
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 832px) 100vw, 800px"
          priority
        />
      </div>
    </figure>
  )
}
