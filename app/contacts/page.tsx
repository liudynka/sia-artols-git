import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Building } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacts | Artols Investment",
  description: "Get in touch with Artols Investment. Send your inquiry and our team will respond promptly.",
}

export default function ContactsPage() {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="bg-foreground text-primary-foreground py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Contact us
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            Send us your inquiry and our team will get back to you shortly.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - uses section variant */}
          <div>
            <SectionHeader
              title="Get in touch"
              subtitle="We're here to answer your questions and discuss your needs."
              variant="section"
            />

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Address</h3>
                  <p className="text-muted-foreground">Riga, Latvia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">[LEAD EMAIL PLACEHOLDER]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-primary">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Registration</h3>
                  <p className="text-muted-foreground">Reg. No.: [PLACEHOLDER]</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden border border-border h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139437.2144857477!2d23.933927!3d56.9496487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1704893845261!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Artols Investment location in Riga, Latvia"
              />
            </div>
          </div>

          {/* Contact Form - uses subsection variant sizing */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Send an inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
