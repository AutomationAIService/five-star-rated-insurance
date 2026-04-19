import { Header, Footer } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TCPA Consent Disclosure | Five Star Rated Insurance",
  description: "TCPA consent disclosure for Five Star Rated Insurance communications.",
}

export default function TCPAConsentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            TCPA Consent Disclosure
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong className="text-foreground">Effective date:</strong> April 18, 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                1. What This Consent Means
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting your information on fivestarratedinsurance.com you expressly consent
                to be contacted by Five Star Rated Insurance and Protegrity Insurance Brokerage and
                their licensed agents at the phone number and email you provided. Contact may
                include calls, text messages, and emails including via automatic telephone dialing
                systems, artificial or prerecorded voice messages, and automated text messages.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                2. Consent Is Not Required
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your consent to receive automated marketing communications is not a condition of
                purchasing any insurance product or service. You may still receive a quote by
                calling us directly at our listed phone number.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                3. How To Opt Out
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To opt out of text messages reply STOP to any message we send. To opt out of calls,
                inform the agent you wish to be removed. To opt out of emails, click unsubscribe in
                any email we send. Requests are processed within 10 business days.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                4. Who Will Contact You
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is shared with Protegrity Insurance Brokerage, a licensed insurance
                brokerage in Arizona. They or their licensed agents will contact you to discuss your
                insurance needs and provide quotes. Your information is not sold to any other third
                parties.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
