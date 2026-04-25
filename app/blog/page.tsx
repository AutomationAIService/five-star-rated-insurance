import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Footer, Header } from "@/components/layout"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { blogImageCardUrl } from "@/lib/blog/images"
import { publishedBlogPosts, type BlogPost } from "@/src/data/blogPosts"

export const metadata: Metadata = {
  title: "Blog | Five Star Rated Insurance",
  description:
    "Insurance tips, guides, and resources from the Five Star Rated Insurance team.",
  alternates: {
    canonical: "https://fivestarratedinsurance.com/blog",
  },
}

export default function BlogPage() {
  const posts = publishedBlogPosts
  const isSinglePost = posts.length === 1

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
          <BrandNavyStarOverlay />
          <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                Insurance Tips & Resources
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                Stay informed with guides, tips, and updates from the Five Star Rated Insurance
                team.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div
                className={cn(
                  "grid gap-6",
                  isSinglePost
                    ? "grid-cols-1 justify-items-center"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {posts.map((post) => (
                  <PublishedPostCard
                    key={post.slug}
                    post={post}
                    className={isSinglePost ? "w-full max-w-xl" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Cards                                                                     */
/* -------------------------------------------------------------------------- */

function PublishedPostCard({
  post,
  className,
}: {
  post: BlogPost
  className?: string
}) {
  return (
    <Card
      className={cn(
        "group flex flex-col gap-0 overflow-hidden border-border bg-surface py-0 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        aria-label={`Read: ${post.title}`}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={blogImageCardUrl(post.image.src)}
            alt={post.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy shadow-sm">
            {post.category}
          </span>
        </div>
        <CardContent className="flex flex-1 flex-col gap-3 pt-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-3.5 shrink-0" aria-hidden />
              {post.displayDate}
            </span>
            <span className="text-muted-foreground/40" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5 shrink-0" aria-hidden />
              {post.readTime}
            </span>
          </div>
          <h2 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-navy md:text-xl">
            {post.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0 pb-6">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy underline-offset-4 group-hover:underline">
            Read More
            <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Link>
    </Card>
  )
}
