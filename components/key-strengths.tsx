"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"

const CARD_H = 800
const STICKY_TOP = 72
const STACK_GAP = 24
const HEADER_BLOCK_HEIGHT = 200 // Section header + its padding
const FRAME_PADDING = 24 // Extra padding to ensure border is visible
const EXTRA_BOTTOM_SPACER = 180 // Spacer after frame/sticky area

const strengths = [
  {
    id: "innovation",
    kicker: "Innovation",
    title: "Innovation",
    description: "Data-driven approaches and in-house R&D capabilities for modern agriculture.",
    image: "/agricultural-technology-innovation-data-analytics.jpg",
  },
  {
    id: "speed",
    kicker: "Speed",
    title: "Speed",
    description: "Fast response times and streamlined procurement processes.",
    image: "/fast-delivery-truck-logistics-speed-efficiency.jpg",
  },
  {
    id: "breadth",
    kicker: "Breadth",
    title: "Breadth",
    description: "Diverse portfolio spanning food commodities, dairy, produce, and agro-inputs.",
    image: "/diverse-agricultural-products-food-commodities-var.jpg",
  },
  {
    id: "vetted-sourcing",
    kicker: "Vetted sourcing",
    title: "Vetted sourcing",
    description: "Rigorous supplier verification and quality control at every step.",
    image: "/quality-control-inspection-supplier-verification-a.jpg",
  },
  {
    id: "in-house-logistics",
    kicker: "In-house logistics",
    title: "In-house logistics",
    description: "Own logistics operations ensuring reliable, controlled delivery.",
    image: "/logistics-warehouse-trucks-fleet-delivery-operatio.jpg",
  },
  {
    id: "cold-storage",
    kicker: "Cold storage & risk mitigation",
    title: "Cold storage & risk mitigation",
    description: "Temperature-controlled facilities and diversified routing strategies.",
    image: "/cold-storage-refrigerated-warehouse-temperature-co.jpg",
  },
]

function StrengthCard({ strength }: { strength: (typeof strengths)[0] }) {
  return (
    <div
      className="flex flex-col md:flex-row border border-border bg-background rounded-2xl"
      style={{ height: `${CARD_H}px` }}
    >
      {/* Image - left side on desktop, with equal inset padding */}
      <div className="relative w-full md:w-1/2 h-48 md:h-full flex-shrink-0 p-4 md:p-6">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image src={strength.image || "/placeholder.svg"} alt={strength.title} fill className="object-cover" />
        </div>
      </div>

      {/* Text content - right side on desktop, with equal inset padding */}
      <div className="flex flex-col justify-start pt-8 md:pt-[calc(2rem+50px)] p-4 md:p-6 w-full md:w-1/2">
        {/* Kicker */}
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{strength.kicker}</span>

        {/* Title */}
        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {strength.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">{strength.description}</p>
      </div>
    </div>
  )
}

function AnimatedCard({
  strength,
  index,
  scrollYProgress,
  totalCards,
}: {
  strength: (typeof strengths)[0]
  index: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  totalCards: number
}) {
  const segmentStart = index === 0 ? 0 : index / totalCards
  const segmentEnd = index === 0 ? 0 : (index + 1) / totalCards

  const y = useTransform(scrollYProgress, [segmentStart, segmentEnd], index === 0 ? ["0%", "0%"] : ["100%", "0%"])

  return (
    <motion.div
      className="absolute inset-x-0 top-0 bg-background"
      style={{
        y,
        zIndex: index + 1,
      }}
    >
      <StrengthCard strength={strength} />
    </motion.div>
  )
}

export function KeyStrengths() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const cardsCount = strengths.length
  // Section min-height based on cards.length for proper scroll runway
  const scrollRunway = HEADER_BLOCK_HEIGHT + cardsCount * CARD_H + EXTRA_BOTTOM_SPACER

  if (prefersReducedMotion || isMobile) {
    return (
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Why partners choose us"
            subtitle="Six pillars that define our approach to B2B supply chain excellence."
            centered
            variant="section"
          />

          <div className="flex flex-col gap-6">
            {strengths.map((strength) => (
              <StrengthCard key={strength.id} strength={strength} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div ref={containerRef} style={{ height: `${scrollRunway}px` }} className="relative">
        <div
          className="sticky"
          style={{
            top: `${STICKY_TOP}px`,
            height: `${HEADER_BLOCK_HEIGHT + CARD_H + FRAME_PADDING}px`,
          }}
        >
          <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                title="Why partners choose us"
                subtitle="Six pillars that define our approach to B2B supply chain excellence."
                centered
                variant="section"
              />
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Outer frame wrapper with border - wraps the entire sticky viewport for cards */}
              <div
                className="border border-border rounded-2xl bg-background"
                style={{
                  height: `${CARD_H + FRAME_PADDING}px`,
                  paddingBottom: `${FRAME_PADDING}px`,
                }}
              >
                {/* Cards container - height exactly CARD_H to show full card including bottom border */}
                <div
                  className="relative"
                  style={{
                    height: `${CARD_H}px`,
                  }}
                >
                  {strengths.map((strength, index) => (
                    <AnimatedCard
                      key={strength.id}
                      strength={strength}
                      index={index}
                      scrollYProgress={scrollYProgress}
                      totalCards={cardsCount}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explicit bottom spacer after frame/sticky area */}
      <div style={{ height: `${EXTRA_BOTTOM_SPACER}px` }} aria-hidden="true" />
    </section>
  )
}
