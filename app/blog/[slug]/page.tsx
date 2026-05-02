import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { Footer, Header } from "@/components/layout"
import { BlogFeaturedImage } from "@/components/blog/BlogFeaturedImage"
import { BlogPhotoAttribution } from "@/components/blog/BlogPhotoAttribution"
import {
  AuthorBio,
  BlogContent,
  BlogCTA,
  BlogHero,
  BlogLegalDisclaimer,
  BlogReferences,
  KeyTakeaways,
  RelatedLinks,
} from "@/components/blog"
import { blogImageAbsoluteUrl, blogImageOpenGraphUrl } from "@/lib/blog/images"
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  type BlogPost,
  type ContentBlock,
  type FaqItem,
  type RichText,
  type RichTextRun,
} from "@/src/data/blogPosts"
import { resolveBlogFinalCta } from "@/lib/blog/resolveBlogFinalCta"

const SITE_URL = "https://fivestarratedinsurance.com"
const SITE_NAME = "Five Star Rated Insurance"

/* -------------------------------------------------------------------------- */
/*  Static params + metadata                                                  */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) {
    return {
      title: `Blog | ${SITE_NAME}`,
      description: "Insurance tips, guides, and resources from the Five Star Rated Insurance team.",
    }
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`
  const ogImageUrl = blogImageAbsoluteUrl(
    blogImageOpenGraphUrl(post.image.src),
    SITE_URL,
  )
  const openGraphImages = [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: post.image.alt,
    },
  ]

  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      publishedTime: post.publishedISO,
      modifiedTime: post.modifiedISO,
      authors: [post.author.name],
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.metaDescription,
      images: [ogImageUrl],
    },
  }
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD helpers                                                           */
/* -------------------------------------------------------------------------- */

/** Flatten a `RichText` to a plain string for use inside JSON-LD payloads. */
function richTextToPlain(input: RichText): string {
  if (typeof input === "string") return input
  return input
    .map((run: RichTextRun) => {
      if (typeof run === "string") return run
      if ("citation" in run) return ""
      if ("link" in run) return run.text
      return ""
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim()
}

/** Pull all FAQ items out of the post content blocks. */
function collectFaqs(blocks: ContentBlock[]): FaqItem[] {
  const out: FaqItem[] = []
  for (const block of blocks) {
    if (block.type === "faq") out.push(...block.items)
  }
  return out
}

function buildBlogPostingSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedISO,
    dateModified: post.modifiedISO,
    inLanguage: "en-US",
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: [
      blogImageAbsoluteUrl(blogImageOpenGraphUrl(post.image.src), SITE_URL),
    ],
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
      ...(post.author.credential
        ? {
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "license",
              name: post.author.credential,
            },
          }
        : {}),
      ...(post.author.location
        ? {
            workLocation: {
              "@type": "Place",
              name: post.author.location,
            },
          }
        : {}),
      ...(post.author.url ? { url: post.author.url } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/5%20Star%20Logo%20-%20Header_Footer.png`,
      },
    },
  }
}

function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: richTextToPlain(faq.answer),
      },
    })),
  }
}

function buildBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const finalCta = resolveBlogFinalCta(post)

  const faqs = collectFaqs(post.content)
  const blogPostingSchema = buildBlogPostingSchema(post)
  const faqSchema = buildFaqSchema(faqs)
  const breadcrumbSchema = buildBreadcrumbSchema(post)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <BlogHero
          title={post.title}
          category={post.category}
          authorName={post.author.name}
          displayDate={post.displayDate}
          readTime={post.readTime}
          image={post.heroImage}
        />

        <article className="bg-surface">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto max-w-[800px]">
              {/* In-page breadcrumb (visible) — schema is emitted via JSON-LD below */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 text-sm text-muted-foreground"
              >
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link
                      href="/"
                      className="rounded-sm underline-offset-2 hover:text-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-muted-foreground/50">
                    /
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="rounded-sm underline-offset-2 hover:text-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    >
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden className="text-muted-foreground/50">
                    /
                  </li>
                  <li
                    aria-current="page"
                    className="min-w-0 truncate font-medium text-foreground"
                  >
                    {post.breadcrumbLabel ?? post.category}
                  </li>
                </ol>
              </nav>

              <BlogFeaturedImage image={post.image} />

              <KeyTakeaways data={post.keyTakeaways} />

              <BlogContent blocks={post.content} />

              <section
                aria-labelledby="final-cta-heading"
                className="mt-12"
              >
                <h2
                  id="final-cta-heading"
                  className="scroll-mt-24 pt-2 font-heading text-2xl font-bold leading-tight text-navy md:text-3xl"
                >
                  {finalCta.headline}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground md:text-[17px] md:leading-[1.75]">
                  {finalCta.intro}
                </p>
                <BlogCTA data={finalCta} />
              </section>

              <RelatedLinks
                links={
                  post.relatedLinks ?? [
                    {
                      label: "Home Insurance",
                      href: "/insurance/home",
                      description:
                        "Compare carriers and coverage options for your Phoenix-area home.",
                    },
                    {
                      label: "Auto Insurance",
                      href: "/insurance/auto",
                      description:
                        "Bundle home and auto for an average 20% discount with major carriers.",
                    },
                    {
                      label: "Back to Blog",
                      href: "/blog",
                      description:
                        "More guides and insurance resources from our licensed Arizona team.",
                    },
                  ]
                }
              />

              <BlogReferences references={post.references} />

              <AuthorBio author={post.author} />

              <BlogLegalDisclaimer />

              <BlogPhotoAttribution image={post.image} />

              <footer className="mt-8 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <p>{post.footer.lastUpdated}</p>
                <p className="mt-1">{post.footer.copyright}</p>
                <p className="mt-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 rounded-sm font-medium text-navy underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    Back to all blog posts
                  </Link>
                </p>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  )
}
