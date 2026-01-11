import { Section } from "@/components/ui/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy & Cookies | Artols Investment",
  description: "Privacy notice and cookie policy for Artols Investment website.",
}

export default function PrivacyCookiesPage() {
  return (
    <>
      {/* Hero - H1 uses hero variant sizing */}
      <section className="bg-foreground text-primary-foreground py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Privacy & cookies</h1>
          <p className="mt-5 text-lg text-primary-foreground/80 leading-relaxed">
            How we handle your data and use cookies on our website.
          </p>
        </div>
      </section>

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto">
          <section id="privacy" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Privacy notice</h2>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Data controller</h3>
            <p className="text-muted-foreground leading-relaxed">
              SIA Artols Investment, Riga, Latvia, Registration No. [PLACEHOLDER], is the data controller responsible
              for processing your personal data.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Data we collect</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you submit an inquiry through our contact form, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name (optional)</li>
              <li>Company name (optional)</li>
              <li>Email address (required)</li>
              <li>Message content (required)</li>
              <li>Any attachments you choose to include</li>
            </ul>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Purpose of processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              We process your data solely to respond to your inquiry and communicate with you regarding potential
              business relationships. Your data is stored in our CRM system for this purpose.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Data retention</h3>
            <p className="text-muted-foreground leading-relaxed">
              We retain your inquiry data for [RETENTION PERIOD PLACEHOLDER] or until you request its deletion,
              whichever comes first.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Your rights</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, contact us at [LEAD EMAIL PLACEHOLDER].
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Cookies</h2>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">What are cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device when you visit our website. They help us provide you
              with a better experience and understand how our site is used.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Essential cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use only essential cookies required for the basic functionality of our website. These cookies do not
              collect personal information and cannot be disabled.
            </p>
            <div className="mt-4 bg-muted rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2 font-heading font-bold text-foreground">Cookie</th>
                    <th className="pb-2 font-heading font-bold text-foreground">Purpose</th>
                    <th className="pb-2 font-heading font-bold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="py-2 pr-4">cookie_consent</td>
                    <td className="py-2 pr-4">Stores your cookie preferences</td>
                    <td className="py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">Analytics & tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              We currently do not use analytics or tracking cookies on this website.
            </p>

            <h3 id="cookie-settings" className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">
              Cookie settings
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              You can manage your cookie preferences at any time by clicking the &quot;Cookie settings&quot; link in the
              footer of our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding this policy, contact us at [LEAD EMAIL PLACEHOLDER].
            </p>
          </section>

          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </Section>
    </>
  )
}
