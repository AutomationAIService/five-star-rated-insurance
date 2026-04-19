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
    title: `${product.title} | Five Star Rated Insurance`,
    description: product.heroDescription,
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
          className="relative bg-gradient-to-br from-navy via-navy to-navy/95 text-primary-foreground overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-balance mb-4">
                {product.title}
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
