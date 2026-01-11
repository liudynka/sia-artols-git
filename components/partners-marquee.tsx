import Image from "next/image"

type LogoItem = {
  src: string
  alt: string
  width?: number
  height?: number
}

const logos: LogoItem[] = [
  { src: "/partners/logo-1.svg", alt: "Partner logo 1", width: 140, height: 40 },
  { src: "/partners/logo-2.svg", alt: "Partner logo 2", width: 140, height: 40 },
  { src: "/partners/logo-3.svg", alt: "Partner logo 3", width: 140, height: 40 },
  { src: "/partners/logo-4.svg", alt: "Partner logo 4", width: 140, height: 40 },
  { src: "/partners/logo-5.svg", alt: "Partner logo 5", width: 140, height: 40 },
  { src: "/partners/logo-6.svg", alt: "Partner logo 6", width: 140, height: 40 },
]

export function PartnersMarquee() {
  const loop = [...logos, ...logos]

  return (
    <section aria-label="Trusted partners" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-8">
          {/* Left label */}
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              160 TRUSTED PARTNERS ACROSS EUROPE
            </p>
          </div>

          {/* Marquee */}
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10" />

            <div
              className="flex w-max items-center gap-10 py-2 motion-reduce:animate-none"
              style={{
                animation: "partners-marquee 28s linear infinite",
              }}
            >
              {loop.map((logo, idx) => (
                <div
                  key={`${logo.src}-${idx}`}
                  className="flex items-center opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width ?? 140}
                    height={logo.height ?? 40}
                    className="h-10 w-auto object-contain"
                    priority={idx < logos.length}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
