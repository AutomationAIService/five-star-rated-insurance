import { Footer, Header } from "@/components/layout"
import { InsuranceTypes } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Insurance Agency in Phoenix, AZ | Auto, Home, Life & Business Insurance Quotes",
  description:
    "Compare auto, home, life, business, commercial auto, specialty, Mexico travel, umbrella, flood, earthquake, and other coverage through licensed brokers backed by 465+ Google reviews.",
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
