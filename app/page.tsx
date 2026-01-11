import { PartnersMarquee } from "@/components/partners-marquee"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { PortfolioFeatureGrid } from "@/components/portfolio/portfolio-feature-grid"
import { portfolioFeatureItems } from "@/data/portfolio"
import { InnovationSplit } from "@/components/innovation-split"
import { KeyStrengths } from "@/components/key-strengths"
import { Zap, ShieldCheck, Truck, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { value: "2015", label: "Founded" },
  { value: "160+", label: "Partners" },
  { value: "10", label: "Countries Active" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Images grid (left) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <img
                      src="/aerial-view-of-green-agricultural-fields-in-europe.jpg"
                      alt="Agriculture fields"
                      className="h-44 w-full object-cover md:h-52 border-transparent border-none shadow-none"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <img
                      src="/logistics-trucks-and-cold-storage-warehouse.jpg"
                      alt="Teamwork"
                      className="h-56 w-full object-cover md:h-64"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-10">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <img
                      src="/modern-agricultural-facility-warehouse-in-baltic-r.jpg"
                      alt="Crops"
                      className="h-56 w-full object-cover md:h-64"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <img
                      src="/wheat-grain-food-commodities-warehouse.jpg"
                      alt="Agri operations"
                      className="h-44 w-full object-cover md:h-52"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copy (right) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground">
                <span>FOUNDED 2015</span>
                <span>·</span>
                <span>160 PARTNERS</span>
                <span>·</span>
                <span>10 COUNTRIES</span>
              </div>

              <h1 className="mt-6 font-heading text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Innovative wholesale.
                <br />
                Trusted supply chain.
              </h1>

              <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
                Agro-industrial holding. B2B wholesale partner for Western Europe. Innovation-driven, eco-minded,
                reliable in-house logistics.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  Send inquiry
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* Who We Are */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Who we are"
              subtitle="An agro-industrial holding delivering innovation-led supply chain solutions across Europe."
              variant="section"
            />
            <p className="text-muted-foreground leading-relaxed">
              Since 2015, Artols Investment has built a reputation as a reliable B2B wholesale partner. We combine
              extensive supplier networks, rigorous quality controls, and in-house logistics to serve European partners
              with agricultural commodities, dairy, produce, fertilizers, and farm supplies.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/about">About us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/modern-agricultural-facility-warehouse-in-baltic-r.jpg"
              alt="Artols Investment operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Product Portfolio */}
      <PortfolioFeatureGrid
        title="Product portfolio"
        subtitle="Comprehensive range of agricultural products and commodities for B2B wholesale."
        items={portfolioFeatureItems}
      />

      {/* Innovation Snapshot */}
      <InnovationSplit />

      {/* Why Partners Choose Us */}
      <KeyStrengths />

      {/* In-house Logistics */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/logistics-trucks-and-cold-storage-warehouse.jpg"
              alt="Artols Investment logistics operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeader
              title="In-house logistics"
              subtitle="Reliable delivery supported by our own logistics capabilities."
              variant="section"
            />
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Multimodal operations: road, rail, sea, and air cargo</span>
              </li>
              <li className="flex items-start gap-3">
                <Thermometer className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Temperature-controlled storage and transport</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Risk mitigation through diversified routing</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Air cargo solutions for urgent bulk consignments</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section variant="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to partner?</h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Contact our team to discuss your requirements and discover how we can support your supply chain.
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
