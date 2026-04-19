import { Header, Footer } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Five Star Rated Insurance",
  description: "Privacy policy for Five Star Rated Insurance. Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong className="text-foreground">Effective date:</strong> April 18, 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                1. Company identity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Five Star Rated Insurance</strong> is a{" "}
                <strong className="text-foreground">marketing and lead generation company only</strong>.
                We are not a licensed insurance agency, brokerage, or insurer. We operate in
                affiliation with{" "}
                <strong className="text-foreground">Protegrity Insurance Brokerage</strong>, which
                holds the insurance licenses required to offer, solicit, and place coverage and to
                provide quotes and insurance services. Insurance transactions and licensed activities
                are conducted through Protegrity and applicable carriers, not through Five Star
                Rated Insurance as a licensed entity.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                2. Information we collect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on how you interact with us, we may collect: your name; email address;
                telephone number; ZIP or postal code; the type of insurance you are interested in;
                Internet Protocol (IP) address; browser and device information; the date and time of
                your consent (including TCPA or similar consent records where applicable); and
                information collected through cookies and similar technologies as described below.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                3. How we use your information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to connect you with{" "}
                <strong className="text-foreground">Protegrity Insurance Brokerage</strong> and its
                licensed representatives, to facilitate insurance quotes and related services, to send
                confirmations and service messages, and to operate, maintain, and improve our
                website and marketing.{" "}
                <strong className="text-foreground">
                  We do not sell your personal information to third parties outside of Protegrity
                  Insurance Brokerage
                </strong>{" "}
                in connection with the services described here; information is shared as needed for
                Protegrity to provide quotes and insurance-related services and as otherwise
                described in this policy or required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                4. TCPA disclosure
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By providing your telephone number and, where applicable, agreeing to be contacted,
                you consent to receive calls and text messages from us, Protegrity Insurance
                Brokerage, and/or participating carriers or service providers at the number you
                provide, including through automated or prerecorded means. Message and data rates
                may apply.{" "}
                <strong className="text-foreground">
                  Consent is not required as a condition of purchasing any goods or services.
                </strong>{" "}
                You may opt out of marketing text messages by following the instructions in those
                messages, including replying{" "}
                <strong className="text-foreground">STOP</strong> where that option is offered.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                5. CAN-SPAM and email communications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Commercial emails we send will identify the sender, include a valid postal address
                where required, and provide a clear way to opt out of future marketing emails. You
                may unsubscribe from marketing emails using the link or instructions provided in
                those messages. Transactional or service-related emails may continue as permitted by
                law.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                6. Gramm-Leach-Bliley Act (GLBA)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Where nonpublic personal information you provide is subject to the Gramm-Leach-Bliley
                Act, Protegrity Insurance Brokerage and applicable licensees maintain privacy notices
                and safeguards appropriate for financial and insurance information. We limit
                collection and use of such information to legitimate business purposes and share it
                only as described in this policy, with our licensed partners, or as required or
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                7. Arizona compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Five Star Rated Insurance is not an Arizona-licensed insurance producer or adjuster.
                Marketing and lead generation are conducted consistent with applicable rules, including
                those under{" "}
                <strong className="text-foreground">Arizona Revised Statutes Title 20</strong> and
                related regulations as they apply to our activities.{" "}
                <strong className="text-foreground">
                  Protegrity Insurance Brokerage holds the Arizona insurance licenses
                </strong>{" "}
                required for offering and placing insurance products made available through our
                marketing.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                8. Cookies and tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to remember preferences, measure site
                traffic, and improve your experience. We use{" "}
                <strong className="text-foreground">Google Analytics</strong> (or similar analytics
                services) to understand how visitors use our website. You may control cookies through
                your browser settings; blocking cookies may affect certain features of the site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                9. Data retention and security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain information only as long as needed for the purposes described in this
                policy, to comply with legal obligations, and to resolve disputes. We use reasonable
                administrative, technical, and organizational measures to protect information
                against unauthorized access, loss, or misuse.{" "}
                <strong className="text-foreground">
                  You may request deletion of your personal information
                </strong>{" "}
                where applicable; we will respond in accordance with applicable law and may retain
                certain records where required.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                10. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or your information, contact us at{" "}
                <a
                  href="mailto:support@fivestarratedinsurance.com"
                  className="text-foreground underline hover:no-underline"
                >
                  support@fivestarratedinsurance.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                11. Changes to this policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. The effective date at the top
                of this page will be revised when we make material changes. Your continued use of our
                website after changes are posted constitutes your acceptance of the updated policy,
                except where your consent is required by law.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
