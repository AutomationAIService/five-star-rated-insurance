import Image from "next/image"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
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

const COMPANY_LINKS = [{ label: "About Us" }, { label: "Blog" }, { label: "Contact" }]

const LEGAL_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "TCPA Disclosure" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-x-hidden bg-[#FFFFFF] text-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 — Company Info */}
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
            <div className="rounded-lg bg-yellow-400 p-6 text-[18px] text-blue-900">
              <p className="leading-relaxed text-blue-900">
                Connecting You to Protection With Integrity.
              </p>
              <div className="mt-4 space-y-3 leading-relaxed text-blue-900">
                <span className="flex items-start gap-2 text-blue-900">
                  <Phone className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span>
                    <span className="font-medium">Phone: </span>
                    (480)xxx-xxxx
                  </span>
                </span>
                <span className="flex items-start gap-2 text-blue-900">
                  <Mail className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span>
                    <span className="font-medium">Email: </span>
                    support@fivestarratedinsurance.com
                  </span>
                </span>
                <div className="flex items-start gap-2 text-blue-900">
                  <MapPin className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span>
                    Protegrity Office: 2680 S Val Vista Dr Bldg 15 Ste 185, Gilbert, AZ 85295
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 — Insurance Products */}
          <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-[18px] font-semibold text-white">
              Insurance Products
            </h4>
            <ul className="relative space-y-2">
              {INSURANCE_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="text-[16px] leading-8 text-white">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-[18px] font-semibold text-white">Company</h4>
            <ul className="relative space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="text-[16px] leading-8 text-white">{link.label}</span>
                </li>
              ))}
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="text-[16px] leading-8 text-white">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Partnership */}
          <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-base font-semibold text-white">Partnership</h4>
            <p className="relative text-sm leading-relaxed text-white">
              Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance
              Brokerage. Insurance products are offered through Protegrity Insurance Brokerage. Not
              available in all states. Coverage and availability vary by state, carrier, and individual
              circumstances.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-navy/10 pt-6 text-center text-sm text-navy md:mt-12 md:text-left">
          <p>
            &copy; {currentYear} Five Star Rated Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
