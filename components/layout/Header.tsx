"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
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
import { insuranceProducts } from "@/src/data/insuranceProducts"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-navy border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 h-18 md:h-22">
          <Link href="/" className="flex shrink-0 min-w-0 items-center">
            <Image
              src="/images/5%20Star%20Logo%20-%20Header_Footer.png"
              alt="Five Star Rated Insurance"
              width={156}
              height={94}
              className="h-auto w-[156px] object-contain"
              priority
            />
          </Link>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-1 gap-y-2 sm:gap-x-2 md:gap-x-4">
            <NavigationMenu className="shrink-0">
              <NavigationMenuList className="flex-wrap">
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
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className="shrink-0 bg-gold hover:bg-gold/90 text-navy font-semibold text-sm md:text-base"
            >
              <a href="tel:{{PHONE_NUMBER}}" className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>CALL NOW</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
