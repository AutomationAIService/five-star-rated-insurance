import { Footer, Header } from "@/components/layout"
import { InsuranceProductPageContent } from "@/components/sections/InsuranceProductPageContent"
import { insuranceProductById } from "@/src/data/insuranceProducts"
import type { Metadata } from "next"

const product = insuranceProductById.other

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
}

export default function OtherInsurancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InsuranceProductPageContent product={product} />
      </main>
      <Footer />
    </div>
  )
}
