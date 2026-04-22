import { Footer, Header } from "@/components/layout"
import { InsuranceProductPageContent } from "@/components/sections/InsuranceProductPageContent"
import { insuranceProductById } from "@/src/data/insuranceProducts"
import type { Metadata } from "next"

const baseProduct = insuranceProductById["mexico-travel"]

/**
 * Extends the shared mexico-travel product with the three additional
 * subcategory cards required on this overview page. The cards reuse the
 * exact same `InsuranceProductPageContent` card rendering, so styling,
 * typography, spacing, grid layout and (non-clickable) behavior match the
 * existing three cards 1:1.
 */
const product = {
  ...baseProduct,
  coverageItems: [
    ...baseProduct.coverageItems,
    {
      name: "Medical evacuation and repatriation",
      description:
        "Coverage for emergency medical transport to an adequate facility or return to the U.S., including air ambulance services and repatriation of remains when medically necessary.",
    },
    {
      name: "Lost/stolen baggage",
      description:
        "Reimbursement for lost, delayed, or stolen luggage and personal belongings during your trip to Mexico, plus coverage for essentials when baggage arrives late.",
    },
    {
      name: "Cancel for any reason (CFAR)",
      description:
        "Upgraded cancellation flexibility that reimburses a portion of your non-refundable trip costs when you need to cancel for reasons outside the standard covered list.",
    },
  ],
}

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
