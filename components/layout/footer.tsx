"use client"

import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { useCookieConsent } from "@/components/cookie-consent"

export function Footer() {
  const { resetConsent } = useCookieConsent()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md">
              SIA Artols Investment — Innovation-driven agro-industrial holding and trusted B2B supply chain partner for
              Western Europe.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-primary-foreground transition-colors">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-primary-foreground transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-primary-foreground transition-colors">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Contact</h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-2">
              <p>Riga, Latvia</p>
              <p>
                Email:{" "}
                <a href="mailto:info@artols.lv" className="hover:text-primary-foreground transition-colors">
                  [LEAD EMAIL PLACEHOLDER]
                </a>
              </p>
              <p>Reg. No.: [PLACEHOLDER]</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SIA Artols Investment. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-cookies" className="hover:text-primary-foreground transition-colors">
              Privacy & Cookies
            </Link>
            <button onClick={resetConsent} className="hover:text-primary-foreground transition-colors">
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
