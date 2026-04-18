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
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
            TCPA Consent Disclosure
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                {"{{TCPA_SECTION_1_TITLE_PLACEHOLDER}}"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"{{TCPA_SECTION_1_CONTENT_PLACEHOLDER}}"}
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                {"{{TCPA_SECTION_2_TITLE_PLACEHOLDER}}"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"{{TCPA_SECTION_2_CONTENT_PLACEHOLDER}}"}
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                {"{{TCPA_SECTION_3_TITLE_PLACEHOLDER}}"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"{{TCPA_SECTION_3_CONTENT_PLACEHOLDER}}"}
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl mb-4">
                {"{{TCPA_SECTION_4_TITLE_PLACEHOLDER}}"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"{{TCPA_SECTION_4_CONTENT_PLACEHOLDER}}"}
              </p>
            </section>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Last updated: {"{{LAST_UPDATED_DATE_PLACEHOLDER}}"}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
