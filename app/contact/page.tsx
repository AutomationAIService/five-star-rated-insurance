import { ContactForm } from "@/components/contact/ContactForm"
import { Footer, Header } from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Five Star Rated Insurance",
  description:
    "Get in touch with Five Star Rated Insurance. Phone, email, and message — we are here to help.",
}

const HERO_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy/95 text-primary-foreground">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: HERO_PATTERN }}
            />
          </div>
          <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                Get In Touch
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                Have questions? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-2xl px-4">
            <Card className="mb-10 border-border bg-surface">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground md:text-2xl">
                  Contact details
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                    <span>Address: 2680 S Val Vista Dr Bldg 15 Ste 185, Gilbert, AZ 85295</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-surface">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground md:text-2xl">
                  Send a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ContactForm />
                <p className="text-center text-sm text-muted-foreground">
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
