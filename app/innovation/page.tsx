import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { ProcessStep } from "@/components/ui/process-step"
import { FeatureCard } from "@/components/ui/feature-card"
import { Button } from "@/components/ui/button"
import { FlaskConical, Microscope, FileCheck, BarChart3, Droplets, Thermometer, Beaker, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation | Artols Investment",
  description:
    "Discover our data-driven soil restoration approach and in-house laboratory capabilities at Artols Investment.",
}

const soilRestorationSteps = [
  {
    title: "Soil analysis",
    description:
      "Comprehensive diagnostic assessment of soil composition, contamination levels, and nutrient profiles using our in-house laboratory capabilities.",
  },
  {
    title: "Reclamation strategy",
    description:
      "Data-driven development of a tailored restoration plan based on analysis results and site-specific conditions.",
  },
  {
    title: "Site planning",
    description: "Detailed implementation roadmap including resource allocation, timeline, and milestone definitions.",
  },
  {
    title: "Implementation",
    description:
      "Execution of restoration methods selected based on diagnostics — chemical, biochemical, or specialized crop rotations.",
  },
  {
    title: "Monitoring",
    description: "Ongoing assessment of results with iterative optimization to achieve target soil health indicators.",
  },
]

const restorationMethods = [
  {
    title: "Chemical & biochemical",
    description:
      "Application of targeted treatments to neutralize contaminants and restore soil chemistry, applied based on diagnostic results.",
    icon: <Beaker className="h-6 w-6" />,
  },
  {
    title: "Thermal solutions",
    description: "Heat-based treatment methods for specific contamination scenarios where applicable.",
    icon: <Thermometer className="h-6 w-6" />,
  },
  {
    title: "Specialized crop rotations",
    description: "Strategic planting sequences to naturally remediate soil and restore organic matter content.",
    icon: <Droplets className="h-6 w-6" />,
  },
]

const labCapabilities = [
  "Soil analysis",
  "Fertilizers analysis",
  "Product quality testing",
  "Batch documentation support",
]

const labEquipment = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    name: "Spectrophotometry",
    description: "Nutrient and quality indicator measurement",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    name: "Chromatography methods",
    description: "Quality profiling and composition analysis",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    name: "pH/EC meters & titration",
    description: "Acidity and electrical conductivity testing",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    name: "Moisture & ash content",
    description: "Product composition verification",
  },
  {
    icon: <FlaskConical className="h-5 w-5" />,
    name: "Microbiology screening",
    description: "Pathogen and microbial assessment workflows",
  },
  {
    icon: <Beaker className="h-6 w-6" />,
    name: "Sample preparation",
    description: "Drying, milling, and homogenization",
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    name: "Standardized reporting",
    description: "Batch documentation preparation",
  },
]

export default function InnovationPage() {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="relative bg-foreground text-primary-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/agricultural-laboratory-soil-testing-facility.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Innovation
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            Data-driven, eco-minded innovation for sustainable agricultural advancement and soil restoration.
          </p>
        </div>
      </section>

      {/* Soil Restoration Process - uses section variant */}
      <Section>
        <SectionHeader
          title="Soil restoration process"
          subtitle="A structured, data-driven approach to enhancing agricultural land productivity."
          variant="section"
        />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card border border-border rounded-lg p-6">
            {soilRestorationSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === soilRestorationSteps.length - 1}
              />
            ))}
          </div>
          <div className="relative h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/soil-analysis-scientist-taking-samples-in-field.jpg"
              alt="Soil restoration process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Restoration Methods - uses section variant */}
      <Section variant="muted">
        <SectionHeader
          title="Restoration methods"
          subtitle="Methods applied depending on diagnostic results and site-specific conditions."
          centered
          variant="section"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restorationMethods.map((method) => (
            <FeatureCard key={method.title} title={method.title} description={method.description} icon={method.icon} />
          ))}
        </div>
      </Section>

      {/* In-house Laboratory - uses section variant */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="In-house laboratory"
              subtitle="Ongoing analytical support for quality assurance and product verification."
              variant="section"
            />
            <ul className="space-y-3 mb-8">
              {labCapabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-3">
                  <FlaskConical className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/contacts">Send inquiry</Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/laboratory-equipment-testing-agricultural-samples.jpg"
              alt="In-house laboratory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Lab Equipment & Methods - uses section variant */}
      <Section variant="muted">
        <SectionHeader
          title="Laboratory capabilities"
          subtitle="Professional equipment and standardized methods for reliable analysis."
          centered
          variant="section"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {labEquipment.map((item) => (
            <div key={item.name} className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA - uses section variant sizing */}
      <Section variant="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Interested in our approach?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Contact our team to learn more about our innovation capabilities and how we can support your agricultural
            projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacts">Send inquiry</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
