import Image from "next/image"
import { User } from "lucide-react"
import type { BlogAuthor } from "@/src/data/blogPosts"

type AuthorBioProps = {
  author: BlogAuthor
}

/**
 * Bottom-of-post author card. Gracefully degrades when no avatar is
 * provided (renders an initial-style placeholder so the layout stays
 * consistent until a headshot is uploaded).
 */
export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <section
      aria-labelledby="author-bio-heading"
      className="my-10 rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
    >
      <h2
        id="author-bio-heading"
        className="mb-5 font-heading text-xl font-bold text-navy md:text-2xl"
      >
        About the Author
      </h2>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <div className="shrink-0">
          {author.avatarSrc ? (
            <Image
              src={author.avatarSrc}
              alt={`Headshot of ${author.name}`}
              width={96}
              height={96}
              className="size-24 rounded-full object-cover ring-2 ring-navy/10"
            />
          ) : (
            <div
              aria-hidden
              className="flex size-24 items-center justify-center rounded-full bg-navy/10 text-navy ring-2 ring-navy/10"
              title="Author headshot coming soon"
            >
              <User className="size-12" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-lg font-bold text-foreground md:text-xl">
            {author.name}
          </p>
          <p className="mt-1 text-sm font-medium text-navy md:text-base">
            {author.title}
            {author.credential ? (
              <span className="text-muted-foreground"> | {author.credential}</span>
            ) : null}
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-[17px]">
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
