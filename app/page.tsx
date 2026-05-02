import { Header, Footer, ScrollToTopOnMount } from "@/components/layout"
import type { Metadata } from "next"
import {
  HeroSection,
  TrustBadges,
  InsuranceTypes,
  Testimonials,
  CTABanner,
} from "@/components/sections"

const SITE_URL = "https://www.fivestarratedinsurance.com"

export const metadata: Metadata = {
  title: "Insurance Agency in Phoenix, AZ | Auto, Home, Life & Business Insurance Quotes",
  description:
    "Compare auto, home, life, business, commercial auto, and specialty insurance quotes in Phoenix, AZ through licensed insurance brokers backed by 465+ Google reviews.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Insurance Agency in Phoenix, AZ | Auto, Home, Life & Business Insurance Quotes",
    description:
      "Compare auto, home, life, business, commercial auto, and specialty insurance quotes in Phoenix, AZ through licensed insurance brokers backed by 465+ Google reviews.",
    url: SITE_URL,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <InsuranceTypes />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
