"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#insurance-types", label: "Coverage Options" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#quote", label: "Get Quote" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-navy border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-header.png"
              alt="Five Star Rated Insurance"
              width={145}
              height={87}
              className="w-[110px] md:w-[145px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/80 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-navy/70">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span>{"{{AVG_RATING}}"} Rating</span>
            </div>
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-navy font-semibold"
            >
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{"{{PHONE_NUMBER}}"}</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-navy/80 hover:text-navy transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:{{PHONE_NUMBER}}"
              className="flex items-center gap-2 py-2 text-gold font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>{"{{PHONE_NUMBER}}"}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
