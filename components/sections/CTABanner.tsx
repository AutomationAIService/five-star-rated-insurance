import { Phone } from "lucide-react"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

const ctaButtonClassName =
  "bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wide text-base h-12 px-8 rounded-md shadow-lg shadow-black/20 border-0"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-primary-foreground md:py-20">
      <BrandNavyStarOverlay />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
              <Image
                src="/images/shield-icon.png"
                alt=""
                width={48}
                height={48}
                className="h-auto w-[36px] md:w-[44px] lg:w-[48px] object-contain"
              />
              <span className="text-gold font-semibold tracking-wide uppercase text-sm md:text-base">
                BACKED BY 465+ FIVE STAR GOOGLE REVIEWS
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-balance text-primary-foreground">
              Compare Top Rates Before You Renew And Overpay.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed">
              Start your request online and connect directly with the licensed brokers at Protegrity
              Insurance Brokerage. Review your best options for auto, home, and life coverage with zero
              pressure.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:items-center lg:w-auto lg:shrink-0">
            <Button
              type="button"
              tabIndex={-1}
              size="lg"
              className={cn(ctaButtonClassName, "cursor-default pointer-events-none")}
            >
              GET QUOTE
            </Button>
            <Button
              type="button"
              tabIndex={-1}
              size="lg"
              className={cn(ctaButtonClassName, "cursor-default pointer-events-none")}
            >
              <span className="inline-flex items-center">
                <Phone className="mr-2 size-5 shrink-0 text-navy" aria-hidden />
                CALL NOW
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
