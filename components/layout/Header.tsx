"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-navy border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-22">
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

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-navy font-semibold text-sm md:text-base"
            >
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{"{{PHONE_NUMBER}}"}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
