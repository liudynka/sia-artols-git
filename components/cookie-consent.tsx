"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

const COOKIE_CONSENT_KEY = "artols_cookie_consent"

type ConsentState = "accepted" | "rejected" | "customized" | null

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setShowBanner(false)
  }

  const handleRejectNonEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowCustomize(true)
  }

  const handleSaveCustom = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "customized")
    setShowBanner(false)
    setShowCustomize(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl bg-card border border-border rounded-lg shadow-lg p-6">
        {showCustomize ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-heading text-lg font-bold">Cookie Settings</h3>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Essential Cookies</p>
                  <p className="text-sm text-muted-foreground">Required for basic website functionality.</p>
                </div>
                <span className="text-sm text-muted-foreground">Always Active</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg opacity-50">
                <div>
                  <p className="font-medium text-foreground">Analytics Cookies</p>
                  <p className="text-sm text-muted-foreground">Not currently in use.</p>
                </div>
                <span className="text-sm text-muted-foreground">N/A</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleSaveCustom}>Save preferences</Button>
              <Button variant="outline" onClick={() => setShowCustomize(false)}>
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              We use cookies to ensure basic website functionality. Learn more in our{" "}
              <Link href="/privacy-cookies" className="text-primary hover:underline">
                Privacy & Cookies
              </Link>{" "}
              policy.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll}>Accept all cookies</Button>
              <Button variant="outline" onClick={handleRejectNonEssential}>
                Reject all non-essential
              </Button>
              <Button variant="ghost" onClick={handleCustomize}>
                Customize
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Hook to reset consent (for "Cookie settings" button)
export function useCookieConsent() {
  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    window.location.reload()
  }

  return { resetConsent }
}
