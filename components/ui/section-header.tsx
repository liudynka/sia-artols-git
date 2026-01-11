import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  // - hero: H1, largest (only for page hero sections)
  // - section: H2, based on Product Portfolio style
  // - subsection: H3, smaller for nested content
  variant?: "hero" | "section" | "subsection"
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  variant = "section",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center", className)}>
      {variant === "hero" && (
        <h1 className="font-heading font-bold text-foreground text-balance text-4xl md:text-5xl lg:text-6xl tracking-tight">
          {title}
        </h1>
      )}
      {variant === "section" && (
        <h2 className="font-heading font-bold text-foreground text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
          {title}
        </h2>
      )}
      {variant === "subsection" && (
        <h3 className="font-heading font-bold text-foreground text-balance text-2xl md:text-3xl">{title}</h3>
      )}
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-pretty mt-5 text-lg leading-relaxed",
            centered && "max-w-2xl mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
