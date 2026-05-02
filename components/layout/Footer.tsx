"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { CookiePreferencesButton } from "@/components/consent"
import { Phone, Mail, MapPin, X } from "lucide-react"

type SubcategoryEntry = string | { label: string; href: string }

const INSURANCE_PRODUCTS: {
  id: string
  title: string
  subcategories: SubcategoryEntry[]
}[] = [
  {
    id: "auto",
    title: "Auto Insurance",
    subcategories: [
      { label: "Regular Coverage", href: "/insurance/auto/regular-coverage" },
      { label: "Classic Coverage", href: "/insurance/auto/classic-coverage" },
      { label: "State Filings & SR-22", href: "/insurance/auto/state-filings-sr-22" },
    ],
  },
  {
    id: "home",
    title: "Home Insurance",
    subcategories: [
      { label: "Primary Home", href: "/insurance/home/primary-home" },
      { label: "Seasonal Home", href: "/insurance/home/seasonal-home" },
      { label: "Rental Home", href: "/insurance/home/rental-home" },
    ],
  },
  {
    id: "life",
    title: "Life Insurance",
    subcategories: [
      { label: "Term Life Options", href: "/insurance/life/term-life-options" },
      { label: "Whole Life Plans", href: "/insurance/life/whole-life-plans" },
      { label: "Family Protection", href: "/insurance/life/family-protection" },
    ],
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto",
    subcategories: [
      { label: "Fleet Coverage", href: "/insurance/commercial-auto/fleet-coverage" },
      { label: "Cargo Protection", href: "/insurance/commercial-auto/cargo-protection" },
      { label: "Business Liability", href: "/insurance/commercial-auto/business-liability" },
    ],
  },
  {
    id: "business",
    title: "Business Insurance",
    subcategories: [
      { label: "General Liability", href: "/insurance/business/general-liability" },
      { label: "Property Coverage", href: "/insurance/business/property-coverage" },
      { label: "Workers Compensation", href: "/insurance/business/workers-compensation" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Insurance",
    subcategories: [
      {
        label: "Motorcycle and ATV Coverage",
        href: "/insurance/specialty/motorcycle-and-atv-coverage",
      },
      {
        label: "Boat, Jet Ski and Watercraft Protection",
        href: "/insurance/specialty/boat-and-watercraft-coverage",
      },
      {
        label: "RV, Motorhome, and Trailer Options",
        href: "/insurance/specialty/rv-motorhome-and-trailer-options",
      },
    ],
  },
  {
    id: "mexico-travel",
    title: "Mexico Travel Insurance",
    subcategories: [
      {
        label: "Emergency Medical & Dental",
        href: "/insurance/mexico-travel/emergency-medical-and-dental",
      },
      {
        label: "Trip Cancellation & Interruption",
        href: "/insurance/mexico-travel/trip-cancellation-and-interruption",
      },
      {
        label: "Medical Evacuation & Repatriation",
        href: "/insurance/mexico-travel/medical-evacuation-and-repatriation",
      },
      { label: "Lost/Stolen Baggage", href: "/insurance/mexico-travel/lost-stolen-baggage" },
      {
        label: "Rental Car Coverage in Mexico",
        href: "/insurance/mexico-travel/rental-car-coverage-in-mexico",
      },
      {
        label: "Cancel For Any Reason (CFAR)",
        href: "/insurance/mexico-travel/cancel-for-any-reason-cfar",
      },
    ],
  },
  {
    id: "other",
    title: "Other Insurance",
    subcategories: [
      { label: "Umbrella Insurance", href: "/insurance/other/umbrella-insurance" },
      {
        label: "Flood and Earthquake Coverage",
        href: "/insurance/other/flood-and-earthquake-coverage",
      },
      { label: "Valuable Items Protection", href: "/insurance/other/valuable-items-protection" },
    ],
  },
]

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "TCPA Disclosure", href: "/tcpa-consent-disclosure" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  {
    label: "Do Not Sell or Share My Personal Information",
    href: "/do-not-sell-or-share",
  },
]

type InsuranceProduct = (typeof INSURANCE_PRODUCTS)[number]

function SubcategoryLine({ entry }: { entry: SubcategoryEntry }) {
  if (typeof entry === "string") {
    return <>{entry}</>
  }
  return (
    <Link
      href={entry.href}
      className="text-inherit underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {entry.label}
    </Link>
  )
}

function InsuranceFlyoutPanelContent({
  product,
  onClose,
  className,
}: {
  product: InsuranceProduct
  onClose: () => void
  className?: string
}) {
  return (
    <div className={className}>
      <div className="relative flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <h5 className="relative font-heading text-[18px] font-semibold text-white">{product.title}</h5>
        <button
          type="button"
          className="relative shrink-0 border-0 bg-transparent p-0 text-white"
          aria-label="Close subcategories panel"
          onClick={onClose}
        >
          <X className="h-6 w-6" aria-hidden />
        </button>
      </div>
      <ul className="relative mt-4 space-y-2 text-[16px] leading-8 text-white">
        {product.subcategories.map((sub) => {
          const key = typeof sub === "string" ? sub : sub.label
          return (
            <li key={key}>
              <SubcategoryLine entry={sub} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Footer() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()
  const activeProduct =
    expandedId !== null ? INSURANCE_PRODUCTS.find((p) => p.id === expandedId) : undefined

  const closePanel = () => setExpandedId(null)

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
            <div className="overflow-hidden rounded-lg bg-yellow-400 p-6 text-[18px] text-blue-900">
              <p className="leading-relaxed text-blue-900">
                Connecting You to Protection With Integrity.
              </p>
              <div className="mt-4 space-y-3 leading-relaxed text-blue-900">
                <span className="flex items-start gap-2 text-blue-900">
                  <Phone className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span className="min-w-0 whitespace-nowrap">
                    <span className="font-medium">Phone: </span>
                    (480)xxx-xxxx
                  </span>
                </span>
                <span className="flex items-start gap-2 text-blue-900">
                  <Mail className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span className="min-w-0 flex-1 break-all [overflow-wrap:anywhere]">
                    <span className="font-medium">Email: </span>
                    support@fivestarratedinsurance.com
                  </span>
                </span>
                <div className="flex items-start gap-2 text-blue-900">
                  <MapPin className="mt-0.5 h-[22px] w-[22px] shrink-0 text-blue-900" aria-hidden />
                  <span className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                    2680 S Val Vista Dr Bldg 15 Ste 185, Gilbert, AZ 85295
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 — Insurance Products */}
          <div
            className={`relative overflow-hidden bg-brand-navy p-6 text-white ${expandedId ? "lg:col-span-2" : ""}`}
          >
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-[18px] font-semibold text-white">
              Insurance Products
            </h4>
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
              <ul className="relative shrink-0 space-y-2 lg:min-w-[12rem]">
                {INSURANCE_PRODUCTS.map((product) => {
                  const isOpen = expandedId === product.id
                  const panelId = `footer-subcat-${product.id}`
                  return (
                    <li key={product.id}>
                      <button
                        type="button"
                        className="flex w-full touch-manipulation items-center justify-between gap-2 border-0 bg-transparent p-0 text-left font-inherit text-[16px] leading-8 text-white focus-visible:rounded-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={
                          isOpen
                            ? `Close ${product.title} subcategories panel`
                            : `Open ${product.title} subcategories panel`
                        }
                        onClick={() =>
                          setExpandedId((prev) => (prev === product.id ? null : product.id))
                        }
                      >
                        <span>{product.title}</span>
                        <span
                          aria-hidden
                          className={`inline-block shrink-0 transform transition-transform duration-200 ease-out lg:transform-none lg:transition-none ${
                            isOpen ? "rotate-180 lg:rotate-0" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      <div
                        id={panelId}
                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <ul className="mt-2 space-y-1 border-l border-white/20 pb-1 pl-4 text-[15px] leading-7 text-white">
                            {product.subcategories.map((sub) => {
                              const key = typeof sub === "string" ? sub : sub.label
                              return (
                                <li key={key}>
                                  <SubcategoryLine entry={sub} />
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              {activeProduct ? (
                <aside className="relative hidden min-h-[8rem] min-w-0 flex-1 overflow-hidden border-l border-white/10 pl-8 lg:block">
                  <BrandNavyStarOverlay />
                  <InsuranceFlyoutPanelContent
                    product={activeProduct}
                    onClose={closePanel}
                    className="relative"
                  />
                </aside>
              ) : null}
            </div>
          </div>

          {/* Column 3 — Company */}
          <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-[18px] font-semibold text-white">Company</h4>
            <ul className="relative space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-8 text-white underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-8 text-white underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton />
              </li>
            </ul>
          </div>

          {/* Column 4 — Partnership */}
          <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
            <BrandNavyStarOverlay />
            <h4 className="relative mb-4 font-heading text-base font-semibold text-white">Partnership</h4>
            <p className="relative text-sm leading-relaxed text-white">
              Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance
              Brokerage. Insurance products are offered through Protegrity Insurance Brokerage. Not
              available in all states. Coverage availability, eligibility, pricing, policy terms,
              and carrier options vary by state, carrier, coverage type, and individual circumstances.
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
