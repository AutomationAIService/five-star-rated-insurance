"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  insuranceProductById,
  type InsuranceProductId,
} from "@/src/data/insuranceProducts"
import { cn } from "@/lib/utils"

type ProductSubcategoryLink = {
  title: string
  href: string
}

type ProductCategoryNav = {
  id: InsuranceProductId
  subcategories: ProductSubcategoryLink[]
}

const PRODUCT_CATEGORY_NAV: ProductCategoryNav[] = [
  {
    id: "auto",
    subcategories: [
      { title: "Regular Coverage", href: "/insurance/auto/regular-coverage" },
      { title: "Classic Coverage", href: "/insurance/auto/classic-coverage" },
      { title: "State Filings & SR-22", href: "/insurance/auto/state-filings-sr-22" },
    ],
  },
  {
    id: "home",
    subcategories: [
      { title: "Primary Home", href: "/insurance/home/primary-home" },
      { title: "Seasonal Home", href: "/insurance/home/seasonal-home" },
      { title: "Rental Home", href: "/insurance/home/rental-home" },
    ],
  },
  {
    id: "life",
    subcategories: [
      { title: "Term Life Options", href: "/insurance/life/term-life-options" },
      { title: "Whole Life Plans", href: "/insurance/life/whole-life-plans" },
      { title: "Family Protection", href: "/insurance/life/family-protection" },
    ],
  },
  {
    id: "commercial-auto",
    subcategories: [
      { title: "Fleet Coverage", href: "/insurance/commercial-auto/fleet-coverage" },
      { title: "Cargo Protection", href: "/insurance/commercial-auto/cargo-protection" },
      { title: "Business Liability", href: "/insurance/commercial-auto/business-liability" },
    ],
  },
  {
    id: "business",
    subcategories: [
      { title: "General Liability", href: "/insurance/business/general-liability" },
      { title: "Property Coverage", href: "/insurance/business/property-coverage" },
      { title: "Workers Compensation", href: "/insurance/business/workers-compensation" },
    ],
  },
  {
    id: "specialty",
    subcategories: [
      {
        title: "Motorcycle and ATV Coverage",
        href: "/insurance/specialty/motorcycle-and-atv-coverage",
      },
      {
        title: "Boat, Jet Ski and Watercraft Protection",
        href: "/insurance/specialty/boat-and-watercraft-coverage",
      },
      {
        title: "RV, Motorhome, and Trailer Options",
        href: "/insurance/specialty/rv-motorhome-and-trailer-options",
      },
    ],
  },
  {
    id: "mexico-travel",
    subcategories: [
      {
        title: "Emergency Medical & Dental",
        href: "/insurance/mexico-travel/emergency-medical-and-dental",
      },
      {
        title: "Trip Cancellation & Interruption",
        href: "/insurance/mexico-travel/trip-cancellation-and-interruption",
      },
      {
        title: "Medical Evacuation & Repatriation",
        href: "/insurance/mexico-travel/medical-evacuation-and-repatriation",
      },
      { title: "Lost/Stolen Baggage", href: "/insurance/mexico-travel/lost-stolen-baggage" },
      {
        title: "Rental Car Coverage in Mexico",
        href: "/insurance/mexico-travel/rental-car-coverage-in-mexico",
      },
      {
        title: "Cancel For Any Reason (CFAR)",
        href: "/insurance/mexico-travel/cancel-for-any-reason-cfar",
      },
    ],
  },
  {
    id: "other",
    subcategories: [
      { title: "Umbrella Insurance", href: "/insurance/other/umbrella-insurance" },
      {
        title: "Flood and Earthquake Coverage",
        href: "/insurance/other/flood-and-earthquake-coverage",
      },
      {
        title: "Valuable Items Protection",
        href: "/insurance/other/valuable-items-protection",
      },
    ],
  },
]

export function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [expandedCategoryId, setExpandedCategoryId] = useState<InsuranceProductId | null>(
    null,
  )

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible bg-white text-navy border-b border-border shadow-sm">
      <div className="mx-auto flex min-h-[92px] w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-[96px] sm:px-5 sm:py-2 lg:h-[85px] lg:min-h-[85px] lg:gap-3 lg:px-6 lg:py-0 lg:pr-8">
        <span className="flex min-w-0 shrink items-center">
          <Link
            href="/"
            className="inline-flex max-w-full shrink-0 outline-offset-2 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
          >
            <Image
              src="/images/5%20Star%20Logo%20-%20Header_Footer.png"
              alt="Five Star Rated Insurance"
              width={195}
              height={118}
              className="h-auto w-auto max-w-full object-contain max-h-[76px] sm:max-h-[82px] md:max-h-[85px] md:max-w-[195px] lg:max-h-[85px] lg:max-w-[195px]"
              priority
              sizes="(max-width: 1023px) min(220px, 55vw), 195px"
            />
          </Link>
        </span>

        {/* Right cluster: CALL NOW + hamburger — shown at every breakpoint */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            type="button"
            tabIndex={-1}
            aria-label="Call now"
            className={cn(
              "shrink-0 flex-none cursor-default rounded-md border-0 bg-gold text-navy hover:bg-gold/90 pointer-events-none",
              "h-12 w-12 min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] p-0",
              "lg:h-auto lg:w-auto lg:min-h-0 lg:min-w-0 lg:max-h-none lg:max-w-none lg:px-4 lg:py-2 lg:text-sm lg:font-semibold",
            )}
          >
            <span className="flex items-center justify-center gap-2 text-navy">
              <Phone className="size-6 shrink-0 lg:size-4" aria-hidden />
              <span className="hidden whitespace-nowrap lg:inline">CALL NOW</span>
            </span>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-12 min-h-[48px] w-12 min-w-[48px] shrink-0 rounded-md border-navy p-0 text-navy hover:bg-navy/5"
            aria-label="Open navigation menu"
            aria-expanded={navOpen}
            aria-controls="site-nav-drawer"
            onClick={() => setNavOpen(true)}
          >
            <Menu className="size-7 shrink-0" aria-hidden />
          </Button>

          <Sheet
            open={navOpen}
            onOpenChange={(open) => {
              setNavOpen(open)
              if (!open) {
                setExpandedCategoryId(null)
              }
            }}
          >
            <SheetContent
              id="site-nav-drawer"
              side="right"
              className="flex w-full flex-col overflow-y-auto sm:max-w-sm lg:max-w-md"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="font-heading text-navy">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation and insurance product categories
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-2 pb-8">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Insurance Products
                  </p>
                  <ul className="flex flex-col gap-1">
                    {PRODUCT_CATEGORY_NAV.map((category) => {
                      const product = insuranceProductById[category.id]
                      const isExpanded = expandedCategoryId === category.id
                      return (
                        <li key={product.id}>
                          <button
                            type="button"
                            className="flex w-full items-center gap-2 rounded-md py-2 text-left text-sm font-medium text-navy hover:bg-navy/5"
                            aria-expanded={isExpanded}
                            aria-controls={`site-nav-sub-${category.id}`}
                            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${product.title} subcategories`}
                            onClick={() =>
                              setExpandedCategoryId((current) =>
                                current === category.id ? null : category.id,
                              )
                            }
                          >
                            <span className="min-w-0 flex-1">{product.title}</span>
                            <ChevronDown
                              className={cn(
                                "size-4 shrink-0 transition-transform",
                                isExpanded && "rotate-180",
                              )}
                              aria-hidden
                            />
                          </button>
                          {isExpanded ? (
                            <ul
                              id={`site-nav-sub-${category.id}`}
                              className="ml-3 mt-1 flex flex-col border-l border-border pl-3"
                            >
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.href}>
                                  <Link
                                    href={subcategory.href}
                                    className="block rounded-md py-1.5 text-sm text-navy/90 hover:bg-navy/5 hover:text-navy"
                                    onClick={() => setNavOpen(false)}
                                  >
                                    {subcategory.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="flex flex-col gap-1 border-t border-border pt-4">
                  <Link
                    href="/about"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-navy/5"
                    onClick={() => setNavOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-navy/5"
                    onClick={() => setNavOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-navy/5"
                    onClick={() => setNavOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
