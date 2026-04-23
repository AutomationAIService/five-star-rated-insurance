import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Footer, Header } from "@/components/layout"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Five Star Rated Insurance",
  description:
    "Skip the forms. Chat with Ava to get connected fast to Protegrity Insurance Brokerage's licensed Arizona team for quoting, coverage, and service.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
          <BrandNavyStarOverlay />
          <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                Get Connected to Protegrity's Licensed Team
              </h1>
              <p className="mb-6 text-balance text-lg font-semibold text-gold md:text-xl">
                Skip the forms. Start a conversation with Ava and we will route you to a licensed
                Protegrity agent fast.
              </p>
              <p className="text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                Ava, our interactive chat assistant, replaces outdated contact forms that sit in an
                inbox for days. Phoenix-area customers can share basic details in a natural
                conversation, and those details are routed directly to Protegrity Insurance
                Brokerage's licensed Arizona team for quoting, coverage, and ongoing service.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-2xl px-4">
            <div
              className="relative overflow-hidden rounded-xl bg-brand-navy p-6 text-primary-foreground md:p-10"
              aria-labelledby="contact-chat-cta"
            >
              <BrandNavyStarOverlay />
              <div className="relative mx-auto w-full max-w-xl">
                <p
                  id="contact-chat-cta"
                  className="mb-3 text-center font-heading text-base font-semibold tracking-tight text-primary-foreground md:text-lg"
                >
                  Select Your Insurance Type Below
                </p>
                <div className="flex justify-center">
                  <div className="w-full max-w-xl">
                    <QuoteAssistant />
                  </div>
                </div>
              </div>
            </div>

            <Card className="mt-10 border-border bg-surface">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground md:text-2xl">
                  Other Ways to Reach Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Prefer to connect by phone or email instead of chat? Use the details below. All
                  quoting, policy binding, and ongoing service is handled by Protegrity Insurance
                  Brokerage's licensed Arizona team.
                </p>
                <ul className="space-y-4 text-base text-foreground">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
                    <span>
                      Phone:{" "}
                      <span className="font-medium text-navy underline-offset-4">
                        {"{{PHONE_NUMBER}}"}
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
                    <span>
                      Email:{" "}
                      <span className="font-medium text-navy underline-offset-4">
                        support@fivestarratedinsurance.com
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
                    <span>
                      Protegrity Office: 2680 S Val Vista Dr Bldg 15 Ste 185, Gilbert, AZ 85295
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Quoted by Protegrity Insurance Brokerage
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
