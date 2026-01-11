import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

/**
 * PortfolioFeatureGrid - Reusable image-card grid component
 *
 * Reuse recommendations:
 * 1) Innovation page "Methods" section (as image-card grid)
 * 2) Partnership page "How to start / Why us" if presented as visual cards
 * 3) Portfolio template pages for "Featured subcategories" section (optional)
 */

export interface PortfolioFeatureItem {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
}

interface PortfolioFeatureGridProps {
  items: PortfolioFeatureItem[]
  title: string
  subtitle: string
}

export function PortfolioFeatureGrid({ items, title, subtitle }: PortfolioFeatureGridProps) {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <SectionHeader title={title} subtitle={subtitle} centered variant="section" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[20px]">
          {items.map((item, index) => {
            let colStartClass = ""
            if (index === 3) colStartClass = "lg:col-start-1"
            if (index === 4) colStartClass = "lg:col-start-3"

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative overflow-hidden rounded-[var(--radius)]
                  min-h-[280px] sm:min-h-[320px] lg:min-h-[420px]
                  lg:col-span-2
                  ${colStartClass}
                `}
              >
                {/* Background image - full bleed */}
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle top gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-black/35 px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-tight whitespace-nowrap">
                      {item.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
