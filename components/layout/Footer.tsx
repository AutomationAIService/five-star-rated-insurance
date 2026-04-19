import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const INSURANCE_LINKS = [
  { href: "#", label: "Auto Insurance" },
  { href: "#", label: "Home Insurance" },
  { href: "#", label: "Life Insurance" },
  { href: "#", label: "Commercial Auto" },
  { href: "#", label: "Business Insurance" },
]

const COMPANY_LINKS = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Blog" },
]

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/tcpa-consent", label: "TCPA Disclosure" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-[#F8FAFC] rounded-xl p-3 md:p-4 inline-block">
                <Image
                  src="/images/logo-footer.png"
                  alt="Five Star Rated Insurance"
                  width={180}
                  height={140}
                  className="w-[150px] md:w-[180px] h-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {"{{COMPANY_TAGLINE_PLACEHOLDER}}"}
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>{"{{PHONE_NUMBER}}"}</span>
              </a>
              <a href="mailto:quotes@fivestarratedinsurance.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>quotes@fivestarratedinsurance.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{"{{ADDRESS_PLACEHOLDER}}"}</span>
              </div>
            </div>
          </div>

          {/* Insurance Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Insurance Products</h4>
            <ul className="space-y-2">
              {INSURANCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Five Star Rated Insurance. All rights reserved.</p>
            <p>{"{{LICENSING_DISCLAIMER_PLACEHOLDER}}"}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
