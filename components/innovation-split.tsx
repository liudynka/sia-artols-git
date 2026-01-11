import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function InnovationSplit() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image (left on md+) */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/soil-analysis-scientist-taking-samples-in-field.jpg"
            alt="Soil restoration and analysis in agricultural field"
            fill
            className="object-cover"
          />
        </div>
        {/* Text (right on md+) */}
        <div>
          <SectionHeader
            title="Innovation"
            subtitle="Soil restoration and data-driven improvement for sustainable agriculture."
            variant="section"
          />
          <p className="text-muted-foreground leading-relaxed">
            Our in-house laboratory delivers comprehensive soil diagnostics to identify deficiencies and develop
            tailored reclamation strategies. Through continuous data-driven monitoring, we help optimize land
            productivity while supporting long-term sustainability goals.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/innovation">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
