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
        "Benefits for emergency medical transport to an appropriate facility—or back to Arizona when medically necessary—including air ambulance where the plan provides it.",
    },
    {
      name: "Lost/stolen baggage",
      description:
        "Coverage for lost, stolen, or delayed baggage and personal effects during your Mexico trip—plus reimbursement for essentials when bags arrive late.",
    },
    {
      name: "Cancel for any reason (CFAR)",
      description:
        "Optional upgrade that refunds part of prepaid trip costs when you cancel outside standard covered reasons—subject to eligibility windows and policy percentages.",
    },
  ],
}

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
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
