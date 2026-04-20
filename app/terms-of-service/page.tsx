import { Header } from "@/components/layout"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            maxWidth: 800,
            margin: "0 auto",
            padding: 40,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.6,
          }}
        >
          <h1 style={{ fontSize: "1.75rem", marginTop: 0, marginBottom: 24 }}>
            Terms of Service
          </h1>
          <p style={{ marginBottom: 32, fontSize: "0.95rem" }}>
            <strong>Effective date:</strong> April 18, 2026
          </p>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>1. Company identity</h2>
            <p style={{ margin: "0 0 12px" }}>
              <strong>Five Star Rated Insurance</strong> (“we,” “us,” or “our”) is a{" "}
              <strong>marketing company only</strong>. We are{" "}
              <strong>not</strong> a licensed insurance agency, insurance brokerage,
              insurer, or producer. We do not sell insurance, bind coverage, or
              transact insurance business. Any insurance products, quotes, or
              services are provided solely by appropriately licensed third parties as
              described below.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              2. Affiliate disclosure and licensed partner
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              Five Star Rated Insurance operates as a marketing partner of{" "}
              <strong>Protegrity Insurance Brokerage</strong>. Protegrity Insurance
              Brokerage holds the insurance licenses required to offer, solicit, and
              place insurance and is responsible for obtaining and providing all
              quotes, policy options, and insurance-related services made available
              through our marketing channels. Your relationship for insurance
              transactions is with Protegrity Insurance Brokerage and applicable
              carriers, not Five Star Rated Insurance as an agency or brokerage.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              3. No insurance advice
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              Information on this website or in our communications is for general
              informational and marketing purposes only. It does{" "}
              <strong>not</strong> constitute insurance, legal, tax, or financial
              advice. You should consult a qualified licensed professional regarding
              your specific situation. We make no representation that any particular
              coverage or carrier is suitable for you.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              4. TCPA consent agreement
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              By providing your telephone number and requesting information or a
              quote, you consent to be contacted by us, Protegrity Insurance
              Brokerage, and/or participating carriers or service providers at the
              number you provide, including through calls or text messages, which may
              be sent using an automatic telephone dialing system, artificial or
              prerecorded voice, or other automated technology. Message and data
              rates may apply. Consent is not a condition of purchase of any goods or
              services. You may revoke consent or opt out of marketing communications
              in accordance with instructions provided in those communications and
              applicable law.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              5. FTC affiliate disclosure
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              Five Star Rated Insurance may receive compensation when you interact
              with our website, submit a request for information, or obtain a quote
              or policy through our marketing relationship with Protegrity Insurance
              Brokerage or other partners. This material connection may affect how
              products or services are presented. We aim to describe relationships
              clearly; if you have questions about how we are compensated, contact
              us using the information below.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              6. Limitation of liability
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              To the fullest extent permitted by applicable law, Five Star Rated
              Insurance and its owners, employees, and contractors shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or for any loss of profits, data, or goodwill,
              arising out of or related to your use of our website or services or
              reliance on any content. Our total liability for any claim arising
              from these terms or your use of the site shall not exceed the greater
              of (a) the amount you paid us, if any, for access to the specific
              service giving rise to the claim in the twelve (12) months preceding
              the claim, or (b) one hundred U.S. dollars ($100). Some jurisdictions do
              not allow certain limitations; in those cases, our liability is
              limited to the maximum permitted by law.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              7. Intellectual property
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              All content on this website—including text, graphics, logos, and
              layout—is owned by Five Star Rated Insurance or its licensors and is
              protected by copyright, trademark, and other intellectual property
              laws. You may not copy, modify, distribute, or create derivative works
              without our prior written permission, except for temporary viewing and
              personal, non-commercial use as permitted by law.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              8. Governing law
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              These Terms of Service are governed by the laws of the{" "}
              <strong>State of Arizona</strong>, without regard to conflict-of-law
              principles. You agree that exclusive venue for any dispute arising out
              of or relating to these terms or the website shall be the state and
              federal courts located in <strong>Maricopa County, Arizona</strong>, and
              you consent to personal jurisdiction there.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>
              9. Changes to terms
            </h2>
            <p style={{ margin: "0 0 12px" }}>
              We may update these Terms of Service from time to time. The effective
              date at the top of this page will be revised when material changes are
              made. Your continued use of the website after changes are posted
              constitutes your acceptance of the revised terms. We encourage you
              to review this page periodically.
            </p>
          </section>

          <section style={{ marginBottom: 0 }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: 12 }}>10. Contact</h2>
            <p style={{ margin: 0 }}>
              For questions about these Terms of Service, contact us at:{" "}
              <span style={{ color: "#000000" }}>support@fivestarratedinsurance.com</span>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
