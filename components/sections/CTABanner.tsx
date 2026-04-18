import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Image
                src="/images/shield-icon.png"
                alt=""
                width={28}
                height={28}
                className="w-[24px] md:w-[28px] h-auto object-contain"
              />
              <span className="text-gold font-medium">{"{{CTA_BADGE_TEXT_PLACEHOLDER}}"}</span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-balance">
              {"{{CTA_HEADLINE_PLACEHOLDER}}"}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              {"{{CTA_SUBHEADLINE_PLACEHOLDER}}"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold"
            >
              <Link href="#quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <span className="text-primary-foreground/60">or</span>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:{{PHONE_NUMBER}}">
                <Phone className="mr-2 w-5 h-5" />
                {"{{PHONE_NUMBER}}"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
