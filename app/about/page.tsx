import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Footer, Header } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Five Star Rated Insurance",
  description:
    "Learn about Five Star Rated Insurance and our partnership with Protegrity Insurance Brokerage.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
          <BrandNavyStarOverlay />
          <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                About Five Star Rated Insurance
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                Five Star Rated Insurance connects customers with Protegrity Insurance Brokerage, a
                licensed brokerage with a 5.0 Google rating, 466 reviews, access to 30+ carriers,
                and coverage across 40 states.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Our mission
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We help people compare rates and find the right coverage with zero pressure—clear
              options, honest guidance, and support from a brokerage team that puts your needs first.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-background py-12 md:py-16">
          <div className="container mx-auto flex justify-center px-4">
            <Button
              type="button"
              tabIndex={-1}
              size="lg"
              className="w-full max-w-md cursor-default bg-brand-navy font-semibold text-white hover:bg-brand-navy/90 pointer-events-none sm:w-auto sm:min-w-[280px]"
            >
              <span className="flex items-center justify-center">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
