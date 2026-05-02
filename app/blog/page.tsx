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

const POSTS_PER_PAGE = 6

export const metadata: Metadata = {
  title: "Arizona Insurance Guides | Auto, Home, Business & Life Insurance Tips",
  description:
    "Read practical Arizona insurance guides for auto, home, business, commercial auto, workers' compensation, life insurance, and specialty coverage.",
  alternates: {
    canonical: "https://www.fivestarratedinsurance.com/blog",
  },
  openGraph: {
    title: "Arizona Insurance Guides | Auto, Home, Business & Life Insurance Tips",
    description:
      "Read practical Arizona insurance guides for auto, home, business, commercial auto, workers' compensation, life insurance, and specialty coverage.",
    url: "https://www.fivestarratedinsurance.com/blog",
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "website",
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const requestedPage = Number.parseInt(resolvedSearchParams?.page ?? "1", 10)
  const posts = publishedBlogPosts
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1
  const pageStart = (currentPage - 1) * POSTS_PER_PAGE
  const visiblePosts = posts.slice(pageStart, pageStart + POSTS_PER_PAGE)
  const isSinglePost = visiblePosts.length === 1

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
          <BrandNavyStarOverlay />
          <div className="container relative mx-auto flex min-h-[200px] items-center justify-center px-5 py-10 md:min-h-[240px] md:px-6 md:py-[60px] lg:min-h-[280px] lg:pb-[60px] lg:pt-20">
            <div className="mx-auto max-w-[700px] text-center">
              <nav
                aria-label="Breadcrumb"
                className="mb-2 text-xs leading-relaxed text-primary-foreground/70 md:mb-3 md:text-sm"
              >
                <Link
                  href="/"
                  className="rounded-sm underline-offset-2 hover:text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Home
                </Link>
                <span aria-hidden className="mx-1.5">
                  /
                </span>
                <span aria-current="page">Blog</span>
              </nav>
              <h1 className="mb-3 text-balance font-heading text-[32px] font-bold leading-[1.2] text-primary-foreground md:mb-4 md:text-[40px] lg:text-5xl">
                Arizona Insurance Guides
              </h1>
              <p className="mx-auto max-w-[90%] text-sm font-normal leading-[1.5] text-primary-foreground/90 md:max-w-[700px] md:text-lg lg:text-xl">
                Practical tips on auto, home, business, life, and specialty coverage for Arizona
                residents and businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-16 lg:py-20">
          <div className="mx-auto w-full md:container md:px-4">
            <div className="mx-auto max-w-[1200px]">
              <div
                className={cn(
                  "grid gap-y-6 md:gap-5 lg:gap-x-6 lg:gap-y-8",
                  isSinglePost
                    ? "grid-cols-1 justify-items-center"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {visiblePosts.map((post) => (
                  <PublishedPostCard
                    key={post.slug}
                    post={post}
                    className={isSinglePost ? "w-full max-w-xl" : undefined}
                  />
                ))}
              </div>
              <BlogPagination currentPage={currentPage} totalPages={totalPages} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  return (
    <nav
      aria-label="Blog pagination"
      className="mx-4 mt-10 flex flex-wrap items-center justify-center gap-2 md:mx-0 md:mt-12"
    >
      <PaginationLink
        href={getBlogPageHref(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </PaginationLink>
      {Array.from({ length: totalPages }, (_, idx) => {
        const page = idx + 1
        return (
          <PaginationLink
            key={page}
            href={getBlogPageHref(page)}
            active={page === currentPage}
          >
            {page}
          </PaginationLink>
        )
      })}
      <PaginationLink
        href={getBlogPageHref(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </PaginationLink>
    </nav>
  )
}

function PaginationLink({
  href,
  active,
  disabled,
  children,
}: {
  href: string
  active?: boolean
  disabled?: boolean
  children: React.ReactNode
}) {
  const className = cn(
    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
    active
      ? "border-navy bg-navy text-white"
      : "border-border bg-surface text-navy hover:bg-navy/5",
    disabled && "pointer-events-none opacity-45",
  )

  if (disabled) {
    return (
      <span aria-disabled="true" className={className}>
        {children}
      </span>
    )
  }

  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={className}>
      {children}
    </Link>
  )
}

function getBlogPageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${page}`
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
        "group mx-4 flex flex-col gap-0 overflow-hidden rounded-xl border-border bg-surface py-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-md md:mx-0",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        aria-label={`Read: ${post.title}`}
      >
        <div className="relative aspect-video min-h-[200px] w-full overflow-hidden bg-muted md:min-h-0">
          <Image
            src={blogImageCardUrl(post.image.src)}
            alt={post.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 inline-flex items-center rounded bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-navy shadow-sm md:rounded-full md:px-3 md:text-xs">
            {post.category}
          </span>
        </div>
        <CardContent className="flex flex-1 flex-col gap-0 px-4 pt-4 md:gap-3 md:px-6 md:pt-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-[13px] text-[#666666] md:gap-x-3 md:py-0 md:text-xs md:text-muted-foreground">
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
          <h2 className="line-clamp-3 min-h-11 font-heading text-lg font-bold leading-[1.4] text-navy transition-colors group-hover:text-navy md:min-h-0 md:text-xl md:font-semibold md:leading-snug md:text-foreground">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-[1.6] text-[#555555] md:mt-0 md:text-base md:leading-relaxed md:text-muted-foreground">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
          <span className="inline-flex min-h-11 items-center gap-1 py-3 text-sm font-semibold text-navy underline-offset-4 group-hover:underline md:min-h-0 md:py-0">
            Read More
            <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Link>
    </Card>
  )
}
