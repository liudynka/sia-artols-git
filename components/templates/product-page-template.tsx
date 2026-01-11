import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { ProcessStep } from "@/components/ui/process-step"
import { Check, MapPin, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { PortfolioPage } from "@/data/portfolio"

interface ProductPageTemplateProps {
  data: PortfolioPage
}

export function ProductPageTemplate({ data }: ProductPageTemplateProps) {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="relative bg-foreground text-primary-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <Image src={data.heroImage || "/placeholder.svg"} alt="" fill className="object-cover" priority />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {data.title}
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl text-pretty">{data.subtitle}</p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacts">Send inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commonly Supplied - uses section variant */}
      <Section>
        <SectionHeader
          title="Commonly Supplied"
          subtitle="Our typical product range in this category includes:"
          variant="section"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.commonlySupplied.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Formats & Packaging - uses section variant */}
      <Section variant="muted">
        <SectionHeader title="Typical Formats & Packaging" variant="section" />
        <div className="flex flex-wrap gap-3">
          {data.formatsPackaging.map((format, index) => (
            <span key={index} className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground">
              {format}
            </span>
          ))}
        </div>
      </Section>

      {/* How We Work - uses section variant */}
      <Section>
        <SectionHeader
          title="How We Work"
          subtitle="Our structured process ensures quality and reliability at every step."
          variant="section"
        />
        <div className="max-w-2xl">
          {data.processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === data.processSteps.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* Cooperation Formats - uses section variant */}
      <Section variant="muted">
        <SectionHeader title="Cooperation Formats" variant="section" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.cooperationFormats.map((format, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-foreground">{format}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Geography - uses section variant */}
      <Section>
        <SectionHeader title="Geography" subtitle="We deliver across Latvia and Western Europe." variant="section" />
        <div className="flex items-start gap-3 mb-6">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground">Active in: {data.geography.join(", ")}</p>
        </div>
      </Section>

      {/* In-house Logistics - uses section variant */}
      <Section variant="muted">
        <SectionHeader
          title="In-house Logistics"
          subtitle="Our logistics capabilities support reliable, timely delivery."
          variant="section"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.logisticsPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA - uses section variant sizing */}
      <Section variant="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{data.ctaHeadline}</h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            {data.ctaDescription}
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
