"use client"

import { useState } from "react"
import Image from "next/image"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Phone, Mail, MapPin, X } from "lucide-react"

const INSURANCE_PRODUCTS = [
  {
    id: "auto",
    title: "Auto Insurance",
    subcategories: ["Regular Coverage", "Classic Coverage", "State Filings & SR-22"],
  },
  {
    id: "home",
    title: "Home Insurance",
    subcategories: ["Primary Home", "Seasonal Home", "Rental Home"],
  },
  {
    id: "life",
    title: "Life Insurance",
    subcategories: ["Term Life Options", "Whole Life Plans", "Family Protection"],
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto",
    subcategories: ["Fleet Coverage", "Cargo Protection", "Business Liability"],
  },
  {
    id: "business",
    title: "Business Insurance",
    subcategories: ["General Liability", "Property Coverage", "Workers Compensation"],
  },
  {
    id: "specialty",
    title: "Specialty Insurance",
    subcategories: [
      "Motorcycle and ATV Coverage",
      "Boat, Jet Ski and Watercraft Protection",
      "RV, Motorhome, and Trailer Options",
    ],
  },
  {
    id: "mexico-travel",
    title: "Mexico Travel Insurance",
    subcategories: [
      "Emergency Medical & Dental",
      "Trip Cancellation & Interruption",
      "Medical Evacuation & Repatriation",
      "Lost/Stolen Baggage",
      "Rental Car Coverage in Mexico",
      "Cancel For Any Reason (CFAR)",
    ],
  },
  {
    id: "other",
    title: "Other Insurance",
    subcategories: [
      "Umbrella Insurance",
      "Flood and Earthquake Coverage",
      "Valuable Items Protection",
    ],
  },
]

const COMPANY_LINKS = [{ label: "About Us" }, { label: "Blog" }, { label: "Contact" }]

const LEGAL_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "TCPA Disclosure" },
]

type InsuranceProduct = (typeof INSURANCE_PRODUCTS)[number]

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
        {product.subcategories.map((sub) => (
          <li key={sub}>{sub}</li>
        ))}
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
                  return (
                    <li key={product.id}>
                      <div className="text-[16px] leading-8 text-white">
                        <span>{product.title}</span>{" "}
                        <button
                          type="button"
                          className="inline border-0 bg-transparent p-0 font-inherit text-[16px] leading-8 text-white"
                          aria-expanded={isOpen}
                          aria-label={
                            isOpen
                              ? `Close ${product.title} subcategories panel`
                              : `Open ${product.title} subcategories panel`
                          }
                          onClick={() =>
                            setExpandedId((prev) => (prev === product.id ? null : product.id))
                          }
                        >
                          ▼
                        </button>
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

      {activeProduct ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/50 lg:hidden"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default border-0 bg-transparent p-0"
            aria-label="Close subcategories panel"
            onClick={closePanel}
          />
          <div className="relative z-[1] max-h-[90vh] overflow-y-auto rounded-t-2xl bg-brand-navy p-6 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.35)]">
            <BrandNavyStarOverlay />
            <InsuranceFlyoutPanelContent product={activeProduct} onClose={closePanel} className="relative" />
          </div>
        </div>
      ) : null}
    </footer>
  )
}
