import { Footer, Header } from "@/components/layout"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Five Star Rated Insurance",
  description:
    "Insurance tips, guides, and resources from the Five Star Rated Insurance team.",
}

const HERO_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

const PLACEHOLDER_POSTS = [
  {
    slug: "sample-1",
    title: "How to Compare Auto Insurance Quotes Like a Pro",
    excerpt:
      "Learn what to look for when comparing carriers, limits, and deductibles so you can choose coverage with confidence.",
  },
  {
    slug: "sample-2",
    title: "Home Insurance 101: Replacement Cost vs. Market Value",
    excerpt:
      "A quick guide to how dwelling coverage is calculated and why it matters after a claim.",
  },
  {
    slug: "sample-3",
    title: "When to Review Your Coverage (Hint: More Often Than You Think)",
    excerpt:
      "Life changes fast—here are the milestones that should trigger an insurance check-in.",
  },
] as const

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy/95 text-primary-foreground">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: HERO_PATTERN }}
            />
          </div>
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PLACEHOLDER_POSTS.map((post) => (
                <Card
                  key={post.slug}
                  className="flex flex-col gap-0 overflow-hidden border-border bg-surface py-0 shadow-sm"
                >
                  <div className="relative aspect-video w-full bg-muted">
                    <Image
                      src="/icon.svg"
                      alt=""
                      fill
                      className="object-contain p-10 opacity-30"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-3 pt-6">
                    <h2 className="font-heading text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href={`/blog#${post.slug}`}
                      className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
                    >
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
