import Image from "next/image"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { VoiceflowAvaEmbed } from "@/components/voiceflow/VoiceflowAvaEmbed"

export function HeroSection() {
  return (
    <section 
      id="quote"
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground"
    >
      <BrandNavyStarOverlay />

      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h1 className="mb-4 text-balance font-heading text-2xl font-bold leading-tight text-primary-foreground md:text-3xl lg:text-4xl">
            Compare Insurance Quotes in Phoenix, AZ
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-primary-foreground/90 md:text-lg">
            Chat with Ava to start your quote and book with Protegrity.
          </p>
        </div>

        <div className="mx-auto mb-8 flex w-fit max-w-full flex-col items-center gap-4 rounded-xl bg-[#FFFFFF] px-6 py-5 md:mb-10 md:gap-5 md:px-8 md:py-6">
          <Image
            src="/images/5%20Star%20Logo%20-%20Hero.png"
            alt="Five Star Rated Insurance"
            width={234}
            height={140}
            className="h-auto w-[234px] object-contain"
            priority
          />
          <p className="max-w-[min(100%,22rem)] text-center text-balance text-[11px] font-semibold leading-snug text-navy sm:text-xs md:max-w-none md:text-sm">
            <span className="uppercase tracking-[0.06em]">
              AUTHORIZED MARKETING PARTNER OF PROTEGRITY INSURANCE BROKERAGE
            </span>
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <p
            id="hero-chat-cta"
            className="mb-3 text-center font-heading text-base font-semibold tracking-tight text-primary-foreground md:text-lg"
          >
            Select Your Insurance Type Below
          </p>
          <div className="flex justify-center" aria-labelledby="hero-chat-cta">
            <div className="w-full max-w-xl">
              <VoiceflowAvaEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
