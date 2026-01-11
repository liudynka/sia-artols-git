"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ChevronDown, Menu, X } from "lucide-react"

const portfolioItems = [
  { label: "Food commodities", href: "/portfolio/food-commodities" },
  { label: "Dairy", href: "/portfolio/dairy" },
  { label: "Fresh & frozen produce", href: "/portfolio/fresh-frozen-produce" },
  { label: "Fertilizers", href: "/portfolio/fertilizers" },
  { label: "Agricultural supplies", href: "/portfolio/agricultural-supplies" },
]

const navItems = [
  { label: "Innovation", href: "/innovation" },
  { label: "Partnership", href: "/partnership" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-200",
        scrolled ? "bg-background/70 backdrop-blur-md !shadow-none !border-b-0" : "bg-card border-b border-border",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Product portfolio
                <ChevronDown className="h-4 w-4" />
              </button>

              {portfolioOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild>
              <Link href="/contacts">Send inquiry</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product portfolio</p>
              {portfolioItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button asChild className="w-full">
              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                Send inquiry
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
