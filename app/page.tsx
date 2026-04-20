import { Header, Footer, ScrollToTopOnMount } from "@/components/layout"
import { 
  HeroSection, 
  TrustBadges, 
  InsuranceTypes, 
  Testimonials, 
  CTABanner 
} from "@/components/sections"

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
