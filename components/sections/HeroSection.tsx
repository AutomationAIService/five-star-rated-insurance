import Image from "next/image"
import { QuoteAssistant } from "@/components/quote-assistant"
import { CheckCircle } from "lucide-react"

const HERO_BENEFITS = [
  "Compare quotes from top-rated carriers",
  "Save up to 40% on your premium",
  "Licensed agents available 24/7",
]

export function HeroSection() {
  return (
    <section 
      id="quote"
      className="relative bg-gradient-to-br from-navy via-navy to-navy/95 text-primary-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
        {/* Hero Logo - Main Focal Point */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="bg-[#F8FAFC] rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 w-[90%] max-w-[620px]">
            <Image
              src="/images/logo-hero.png"
              alt="Five Star Rated Insurance"
              width={500}
              height={385}
              className="w-[260px] md:w-[380px] lg:w-[500px] h-auto object-contain mx-auto"
              priority
            />
          </div>
        </div>

        {/* Headline and Subheadline - Below Logo */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 text-balance">
            {"{{HERO_HEADLINE_PLACEHOLDER}}"}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            {"{{HERO_SUBHEADLINE_PLACEHOLDER}}"}
          </p>

          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            {HERO_BENEFITS.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm md:text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-primary-foreground/60">
            {"{{HERO_TRUST_TEXT_PLACEHOLDER}}"}
          </p>
        </div>

        {/* Quote Assistant - Below Hero Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <QuoteAssistant />
          </div>
        </div>
      </div>
    </section>
  )
}
