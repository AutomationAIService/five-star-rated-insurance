import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const INSURANCE_LINKS = [
  { href: "/insurance/auto", label: "Auto Insurance" },
  { href: "/insurance/home", label: "Home Insurance" },
  { href: "/insurance/life", label: "Life Insurance" },
  { href: "/insurance/commercial-auto", label: "Commercial Auto" },
  { href: "/insurance/business", label: "Business Insurance" },
  { href: "/insurance/specialty", label: "Specialty Insurance" },
  { href: "/insurance/other", label: "Other Insurance" },
]

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
]

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/tcpa-consent", label: "TCPA Disclosure" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-x-hidden bg-[#FFFFFF] text-navy">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/5%20Star%20Logo%20-%20Header_Footer.png"
                alt="Five Star Rated Insurance"
                width={156}
                height={94}
                className="h-auto w-[156px] object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-navy">
              Connecting You to Protection With Integrity.
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-navy">
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-start gap-2 text-navy transition-colors hover:text-navy/80">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium">Phone: </span>
                  {"{{PHONE_NUMBER}}"}
                </span>
              </a>
              <a href="mailto:support@fivestarratedinsurance.com" className="flex items-start gap-2 text-navy transition-colors hover:text-navy/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium">Email: </span>
                  support@fivestarratedinsurance.com
                </span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Partner Office: 2680 S Val Vista Dr Bldg 15 Ste 185, Gilbert, AZ 85295
                </span>
              </div>
            </div>
            <p className="mt-6 border-t border-navy/10 pt-6 text-sm leading-relaxed text-navy">
              Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance
              Brokerage. Insurance products are offered through Protegrity Insurance Brokerage. Not
              available in all states. Coverage and availability vary by state, carrier, and individual
              circumstances.
            </p>
          </div>

          {/* Insurance, Company, Legal: full bleed navy; content stays in container */}
          <div className="min-w-0 lg:col-span-3">
            <div className="w-screen bg-navy py-6 text-white ml-[calc(50%-50vw)]">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
                  {/* Insurance Links */}
                  <div>
                    <h4 className="mb-4 font-heading text-base font-semibold text-white">
                      Insurance Products
                    </h4>
                    <ul className="space-y-2">
                      {INSURANCE_LINKS.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-white transition-colors hover:text-white/80"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h4 className="mb-4 font-heading text-base font-semibold text-white">
                      Company
                    </h4>
                    <ul className="space-y-2">
                      {COMPANY_LINKS.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-white transition-colors hover:text-white/80"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Legal Links */}
                  <div>
                    <h4 className="mb-4 font-heading text-base font-semibold text-white">
                      Legal
                    </h4>
                    <ul className="space-y-2">
                      {LEGAL_LINKS.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-white transition-colors hover:text-white/80"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-navy/10 pt-8">
          <p className="text-center text-sm text-navy">
            &copy; {currentYear} Five Star Rated Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
