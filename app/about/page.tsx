import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { PillarCard } from "@/components/ui/pillar-card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Handshake, ShieldCheck, Target, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Artols Investment",
  description:
    "Learn about SIA Artols Investment — an innovation-driven agro-industrial holding founded in 2015, serving 160+ partners across 10 European countries.",
}

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description: "Embracing data-driven approaches and modern technology to enhance agricultural outcomes.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnership",
    description: "Building long-term relationships based on mutual trust and shared success.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Responsibility",
    description: "Commitment to sustainable practices and ethical business conduct.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Reliability",
    description: "Consistent delivery and dependable supply chain performance.",
  },
]

const countries = [
  "Latvia",
  "Germany",
  "France",
  "Netherlands",
  "Belgium",
  "Luxembourg",
  "Austria",
  "Switzerland",
  "Ireland",
  "United Kingdom",
  "Iceland",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="relative bg-foreground text-primary-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/modern-corporate-agribusiness-office-in-europe.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            About Artols Investment
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            An agro-industrial holding delivering innovation-led B2B wholesale supply chain solutions across Western
            Europe.
          </p>
        </div>
      </section>

      {/* Holding Overview - uses section variant */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="Our holding" variant="section" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              SIA Artols Investment operates as an agro-industrial holding company, coordinating activities across
              agricultural trading, supply chain management, and innovation-driven land enhancement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve as a bridge between verified suppliers and European partners, ensuring quality, reliability, and
              efficiency at every stage of the supply chain. Our portfolio spans food commodities, dairy products, fresh
              and frozen produce, fertilizers, and agricultural supplies.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/agricultural-trading-warehouse-with-grain-silos.jpg"
              alt="Artols Investment operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Timeline - uses section variant sizing */}
      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-8">
            <span className="font-heading text-3xl font-bold text-primary">2015</span>
            <span className="text-foreground font-medium">Year Founded</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">A decade of growth</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Since our founding in 2015, we have grown from a regional trading company to a trusted supply chain partner
            serving major markets across Europe. Our steady expansion reflects our commitment to quality and innovation.
          </p>
        </div>
      </Section>

      {/* Mission & Values - uses section variant */}
      <Section>
        <SectionHeader
          title="Mission & values"
          subtitle="Guided by principles that drive sustainable growth and trusted partnerships."
          centered
          variant="section"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value) => (
            <PillarCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      {/* Geography & Stats - uses section variant */}
      <Section variant="muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="European presence" variant="section" />
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Active in {countries.length} countries</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our operations span from Latvia across Western Europe, serving partners in key agricultural and industrial
              markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <span
                  key={country}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="font-heading text-4xl font-bold text-primary">160+</p>
              <p className="mt-2 text-sm text-muted-foreground">Partners</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="font-heading text-4xl font-bold text-primary">10</p>
              <p className="mt-2 text-sm text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Block - uses subsection variant */}
      <Section>
        <div className="bg-card border border-border rounded-lg p-8 max-w-2xl">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Legal information</h3>
          <address className="not-italic text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Company:</strong> SIA Artols Investment
            </p>
            <p>
              <strong className="text-foreground">Address:</strong> Riga, Latvia
            </p>
            <p>
              <strong className="text-foreground">Registration No.:</strong> [PLACEHOLDER]
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> [LEAD EMAIL PLACEHOLDER]
            </p>
          </address>
        </div>
      </Section>

      {/* CTA - uses section variant sizing */}
      <Section variant="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Partner with us</h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Discover how Artols Investment can support your supply chain needs.
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
