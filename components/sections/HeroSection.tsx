import Image from "next/image"
import { QuoteAssistant } from "@/components/quote-assistant"

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

      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Hero Logo */}
        <div className="mb-8 flex justify-center md:mb-10">
          <div className="w-fit max-w-full rounded-lg bg-[#F8FAFC] p-2 shadow-md md:p-2.5 lg:p-3">
            <Image
              src="/images/logo-hero.png"
              alt="Five Star Rated Insurance"
              width={500}
              height={385}
              className="block h-auto w-[220px] object-contain md:w-[300px] lg:w-[400px]"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-4 text-balance text-[11px] font-semibold leading-snug text-gold sm:text-xs md:text-sm">
            <span className="uppercase tracking-[0.06em]">
              Authorized marketing partner of Protegrity Insurance Brokerage
            </span>
          </p>
          <h1 className="mb-4 text-balance font-heading text-2xl font-bold leading-tight text-primary-foreground md:text-3xl lg:text-4xl">
            Compare Insurance Quotes in Phoenix, AZ
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-primary-foreground/90 md:text-lg">
            Chat with Ava to start your quote and book with Protegrity.
          </p>
        </div>

        {/* CTA handoff: label sits directly above chat for instant next step */}
        <div className="mx-auto w-full max-w-xl">
          <p
            id="hero-chat-cta"
            className="mb-3 text-center font-heading text-base font-semibold tracking-tight text-primary-foreground md:text-lg"
          >
            Select Your Insurance Type Below
          </p>
          <div className="flex justify-center" aria-labelledby="hero-chat-cta">
            <div className="w-full max-w-xl">
              <QuoteAssistant />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
