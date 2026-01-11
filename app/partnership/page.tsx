import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { ProcessStep } from "@/components/ui/process-step"
import { PillarCard } from "@/components/ui/pillar-card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Zap, Layers, ShieldCheck, Truck, Thermometer, Users, Building, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partnership | Artols Investment",
  description:
    "Partner with Artols Investment — trusted B2B supply chain solutions for C-level stakeholders and procurement leadership across Europe.",
}

const targetAudience = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "C-level stakeholders",
    description: "Strategic decision-makers seeking reliable supply chain partnerships.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Procurement leadership",
    description: "Purchasing directors and managers optimizing supplier networks.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Supply chain executives",
    description: "Operations leaders focused on efficiency and risk mitigation.",
  },
]

const partnershipSteps = [
  {
    title: "Send inquiry",
    description: "Reach out through our contact form with your initial requirements and context.",
  },
  {
    title: "Align requirements",
    description: "Our team works with you to understand specifications, volumes, and delivery needs.",
  },
  {
    title: "Delivery plan",
    description: "We develop a tailored supply plan and establish the partnership framework.",
  },
]

const pillars = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description: "Data-driven approaches and in-house R&D capabilities.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Speed",
    description: "Fast response times and streamlined processes.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Breadth",
    description: "Diverse portfolio across agricultural categories.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Vetted sourcing",
    description: "Rigorous supplier verification and quality control.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "In-house logistics",
    description: "Own logistics ensuring reliable delivery.",
  },
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "Cold storage",
    description: "Temperature-controlled facilities and transport.",
  },
]

const stats = [
  { value: "2015", label: "Founded" },
  { value: "160+", label: "Partners" },
  { value: "10", label: "Countries" },
]

export default function PartnershipPage() {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="relative bg-foreground text-primary-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/business-handshake-partnership-meeting-corporate.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Partnership
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            Building trusted, long-term B2B relationships with European partners through reliable supply chain
            solutions.
          </p>
        </div>
      </section>

      {/* Who We Work With - uses section variant */}
      <Section>
        <SectionHeader
          title="Who we work with"
          subtitle="Supporting strategic decision-makers across European organizations."
          centered
          variant="section"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {targetAudience.map((audience) => (
            <PillarCard
              key={audience.title}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>
      </Section>

      {/* How to Start - uses section variant */}
      <Section variant="muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="How to start"
              subtitle="A straightforward process to begin our partnership."
              variant="section"
            />
            <div className="bg-card border border-border rounded-lg p-6">
              {partnershipSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === partnershipSteps.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/business-team-meeting-discussing-supply-chain.jpg"
              alt="Partnership process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Us - uses section variant */}
      <Section>
        <SectionHeader
          title="Why partner with us"
          subtitle="Six pillars that define our commitment to your success."
          centered
          variant="section"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </Section>

      {/* Stats - uses section variant sizing */}
      <Section variant="muted">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            Trusted track record
          </h2>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA - uses section variant sizing */}
      <Section variant="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to partner?</h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Contact our team to discuss your requirements and explore how we can support your supply chain.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacts">Send inquiry</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
