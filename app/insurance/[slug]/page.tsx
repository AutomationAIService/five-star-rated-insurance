import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Header, Footer } from "@/components/layout"
import { QuoteAssistant } from "@/components/quote-assistant"
import { insuranceProducts } from "@/src/data/insuranceProducts"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

function getProductBySlug(slug: string) {
  return insuranceProducts.find((p) => p.pageRoute === `/insurance/${slug}`)
}

export function generateStaticParams() {
  return insuranceProducts.map((product) => ({
    slug: product.pageRoute.replace("/insurance/", ""),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) {
    return { title: "Insurance | Five Star Rated Insurance" }
  }
  return {
    title: product.seoTitle,
    description: product.seoDescription,
  }
}

export default async function InsuranceProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section
          id="quote"
          className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground"
        >
          <BrandNavyStarOverlay />
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-balance mb-4">
                {product.pageH1}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                {product.heroDescription}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <QuoteAssistant />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
