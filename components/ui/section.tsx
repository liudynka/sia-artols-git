import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: "default" | "muted" | "primary"
}

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8",
        variant === "muted" && "bg-muted",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "default" && "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
