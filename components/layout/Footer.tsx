import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const INSURANCE_LINKS = [
  { label: "Auto Insurance" },
  { label: "Home Insurance" },
  { label: "Life Insurance" },
  { label: "Commercial Auto" },
  { label: "Business Insurance" },
  { label: "Specialty Insurance" },
  { label: "Mexico Travel Insurance" },
  { label: "Other Insurance" },
]

const COMPANY_LINKS = [{ label: "About Us" }, { label: "Contact" }, { label: "Blog" }]

const LEGAL_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "TCPA Disclosure" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-x-hidden bg-[#FFFFFF] text-navy">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="inline-block">
              <Image
                src="/images/5%20Star%20Logo%20-%20Header_Footer.png"
                alt="Five Star Rated Insurance"
                width={156}
                height={94}
                className="h-auto w-[156px] object-contain"
              />
            </span>
            <p className="text-sm leading-relaxed text-navy">
              Connecting You to Protection With Integrity.
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-navy">
              <span className="flex items-start gap-2 text-navy">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium">Phone: </span>
                  {"{{PHONE_NUMBER}}"}
                </span>
              </span>
              <span className="flex items-start gap-2 text-navy">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium">Email: </span>
                  support@fivestarratedinsurance.com
                </span>
              </span>
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
                          <span className="text-sm text-white">{link.label}</span>
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
                          <span className="text-sm text-white">{link.label}</span>
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
                          <span className="text-sm text-white">{link.label}</span>
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
