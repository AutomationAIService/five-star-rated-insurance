"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { useCallback, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { insuranceProducts } from "@/src/data/insuranceProducts"
import { cn } from "@/lib/utils"

/** Seven product routes for desktop nav (excludes Mexico Travel, which stays on mobile menu only). */
const DESKTOP_PRODUCT_LINKS = insuranceProducts.filter((p) => p.id !== "mexico-travel")

const HOVER_CLOSE_MS = 220

const callButtonClass =
  "shrink-0 bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold/90 h-auto min-h-0 rounded-md"

function ProductsDropdown() {
  const [open, setOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setOpen(false), HOVER_CLOSE_MS)
  }, [clearCloseTimer])

  const handleTriggerPointerEnter = useCallback(() => {
    clearCloseTimer()
    setOpen(true)
  }, [clearCloseTimer])

  const handleContentPointerEnter = useCallback(() => {
    clearCloseTimer()
  }, [clearCloseTimer])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        onPointerEnter={handleTriggerPointerEnter}
        onPointerLeave={scheduleClose}
        className={cn(
          navigationMenuTriggerStyle(),
          "group h-9 gap-0 text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 data-[state=open]:bg-navy/10 sm:text-sm",
        )}
      >
        Products
        <ChevronDown
          className="relative top-[1px] ml-1 size-3 shrink-0 transition duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="bottom"
        sideOffset={8}
        collisionPadding={16}
        onPointerEnter={handleContentPointerEnter}
        onPointerLeave={scheduleClose}
        className={cn(
          "z-[100] w-[min(100vw-2rem,20rem)] p-1.5 shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
        )}
      >
        {DESKTOP_PRODUCT_LINKS.map((product) => (
          <DropdownMenuItem key={product.id} asChild>
            <Link
              href={product.pageRoute}
              className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-navy no-underline outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-0"
            >
              {product.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible bg-white text-navy border-b border-border shadow-sm">
      <div className="mx-auto flex min-h-[92px] w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-[96px] sm:px-5 sm:py-2 lg:h-[85px] lg:min-h-[85px] lg:gap-3 lg:px-6 lg:py-0 lg:pr-8">
        <span className="flex min-w-0 max-w-[calc(100%-7.75rem)] shrink items-center sm:max-w-[calc(100%-8.25rem)] lg:max-w-none lg:shrink-0">
          <Image
            src="/images/5%20Star%20Logo%20-%20Header_Footer.png"
            alt="Five Star Rated Insurance"
            width={195}
            height={118}
            className="h-auto w-auto max-w-full object-contain max-h-[76px] sm:max-h-[82px] md:max-h-[85px] md:max-w-[195px] lg:max-h-[85px] lg:max-w-[195px]"
            priority
            sizes="(max-width: 1023px) min(220px, 55vw), 195px"
          />
        </span>

        {/* Desktop: nav + CTA (lg+) */}
        <div className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
          <div className="flex min-w-0 items-center">
            <div className="ml-4 flex shrink-0 flex-nowrap items-center gap-5 xl:ml-10 2xl:ml-16">
              <ProductsDropdown />
              <span
                className={cn(
                  navigationMenuTriggerStyle(),
                  "inline-flex cursor-default text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                )}
              >
                About Us
              </span>
              <span
                className={cn(
                  navigationMenuTriggerStyle(),
                  "inline-flex cursor-default text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                )}
              >
                Blog
              </span>
              <span
                className={cn(
                  navigationMenuTriggerStyle(),
                  "inline-flex cursor-default text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                )}
              >
                Contact
              </span>
            </div>

            <Button
              type="button"
              tabIndex={-1}
              className={cn(
                callButtonClass,
                "ml-4 cursor-default lg:ml-6 xl:ml-8 pointer-events-none",
              )}
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                <Phone className="h-4 w-4 shrink-0" />
                <span>CALL NOW</span>
              </span>
            </Button>
          </div>
        </div>

        {/* Tablet & mobile: logo left; call + menu grouped on the right (48px targets) */}
        <div className="flex min-w-0 flex-1 justify-end items-center gap-2 sm:gap-3 lg:hidden">
          <Button
            type="button"
            tabIndex={-1}
            className="h-12 w-12 min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] shrink-0 flex-none cursor-default rounded-md border-0 bg-gold p-0 text-navy hover:bg-gold/90 pointer-events-none"
            aria-label="Call now"
          >
            <span className="flex items-center justify-center text-navy">
              <Phone className="size-6 shrink-0" aria-hidden />
            </span>
          </Button>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="h-12 min-h-[48px] w-12 min-w-[48px] shrink-0 rounded-md border-navy p-0 text-navy hover:bg-navy/5"
                aria-label="Open navigation menu"
              >
                <Menu className="size-7 shrink-0" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col overflow-y-auto sm:max-w-sm">
              <SheetHeader className="text-left">
                <SheetTitle className="font-heading text-navy">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-2 pb-8">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Insurance Products
                  </p>
                  <ul className="flex flex-col gap-1">
                    {insuranceProducts.map((product) => (
                      <li key={product.id}>
                        <span className="block rounded-md py-2 text-sm font-medium text-navy">
                          {product.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1 border-t border-border pt-4">
                  <span className="rounded-md py-2 text-sm font-medium text-navy">About Us</span>
                  <span className="rounded-md py-2 text-sm font-medium text-navy">Blog</span>
                  <span className="rounded-md py-2 text-sm font-medium text-navy">Contact</span>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
