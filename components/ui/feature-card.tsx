import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  className?: string
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const content = (
    <>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="font-heading text-xl font-bold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      {href && <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn more</span>}
    </>
  )

  const cardClasses = cn(
    "bg-card border border-border rounded-lg p-6 transition-shadow hover:shadow-md",
    href && "group cursor-pointer",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    )
  }

  return <div className={cardClasses}>{content}</div>
}
