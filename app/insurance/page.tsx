import { Footer, Header } from "@/components/layout"
import { InsuranceTypes } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Products | Five Star Rated Insurance",
  description:
    "Compare auto, home, life, business, commercial, specialty, Mexico travel, and other insurance options. Powered by Protegrity Insurance Brokerage.",
}

export default function InsuranceProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InsuranceTypes headingLevel="h1" />
      </main>
      <Footer />
    </div>
  )
}
