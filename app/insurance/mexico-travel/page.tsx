import { Footer, Header } from "@/components/layout"
import { InsuranceProductPageContent } from "@/components/sections/InsuranceProductPageContent"
import { insuranceProductById } from "@/src/data/insuranceProducts"
import type { Metadata } from "next"

const product = insuranceProductById["mexico-travel"]

export const metadata: Metadata = {
  title: "Mexico Travel Insurance Quotes | Five Star Rated",
  description:
    "Get Mexico travel insurance quotes including rental car coverage, trip cancellation, and emergency medical. Quoted by Protegrity Insurance Brokerage.",
}

export default function MexicoTravelInsurancePage() {
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
