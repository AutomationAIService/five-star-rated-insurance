"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { insuranceProducts } from "@/src/data/insuranceProducts"
import { cn } from "@/lib/utils"

const callButtonClass =
  "shrink-0 bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold/90 h-auto min-h-0 rounded-md"

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible bg-white text-navy border-b border-border shadow-sm">
      <div className="mx-auto flex min-h-[92px] w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-[96px] sm:px-5 sm:py-2 lg:h-[85px] lg:min-h-[85px] lg:gap-3 lg:px-6 lg:py-0 lg:pr-8">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100%-7.75rem)] shrink items-center sm:max-w-[calc(100%-8.25rem)] lg:max-w-none lg:shrink-0"
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

        {/* Desktop: nav + CTA (lg+) */}
        <div className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
          <div className="flex min-w-0 items-center">
            <NavigationMenu className="ml-4 max-w-none shrink-0 flex-none xl:ml-10 2xl:ml-16">
              <NavigationMenuList className="flex-nowrap !flex-none gap-5">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy bg-transparent hover:bg-navy/5 focus:bg-navy/5 data-[state=open]:bg-navy/10">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[min(100vw-2rem,20rem)] gap-0.5 p-2">
                      {insuranceProducts.map((product) => (
                        <li key={product.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={product.pageRoute}
                              className="block select-none rounded-md px-3 py-2.5 text-sm font-medium leading-none text-navy no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {product.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                      )}
                    >
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blog"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                      )}
                    >
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-navy bg-transparent text-xs hover:bg-navy/5 focus:bg-navy/5 sm:text-sm",
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className={cn(callButtonClass, "ml-4 lg:ml-6 xl:ml-8")}>
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-center gap-2 whitespace-nowrap">
                <Phone className="h-4 w-4 shrink-0" />
                <span>CALL NOW</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Tablet & mobile: logo left; call + menu grouped on the right (48px targets) */}
        <div className="flex min-w-0 flex-1 justify-end items-center gap-2 sm:gap-3 lg:hidden">
          <Button
            asChild
            className="h-12 w-12 min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] shrink-0 flex-none rounded-md border-0 bg-gold p-0 text-navy hover:bg-gold/90"
            aria-label="Call now"
          >
            <a
              href="tel:{{PHONE_NUMBER}}"
              className="flex items-center justify-center text-navy"
            >
              <Phone className="size-6 shrink-0" aria-hidden />
            </a>
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
                        <Link
                          href={product.pageRoute}
                          className="block rounded-md py-2 text-sm font-medium text-navy hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-1 border-t border-border pt-4">
                  <Link
                    href="/about"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md py-2 text-sm font-medium text-navy hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileNavOpen(false)}
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
