import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/layout/social-links";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abhinav Bharata about data-center infrastructure, mechanical and thermal engineering, CFD, Revit BIM, product design, testing and validation, OpenFOAM automation, and engineering-software collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk engineering."
        description="Open to conversations involving data-center infrastructure, mechanical and thermal engineering, CFD, Revit BIM, product design, testing and validation, OpenFOAM automation, and engineering-software collaboration."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </div>

          {/* Details */}
          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-24">
              <Card className="p-6">
                <h2 className="font-heading text-base font-semibold text-foreground">
                  Direct contact
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={profile.emailHref}
                      className="group flex items-start gap-3 text-muted hover:text-foreground"
                    >
                      <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-xs text-faint">Email</span>
                        {profile.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.phoneHref}
                      className="group flex items-start gap-3 text-muted hover:text-foreground"
                    >
                      <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-xs text-faint">Phone</span>
                        {profile.phone}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-faint">Location</span>
                      {profile.location}
                    </span>
                  </li>
                </ul>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="mb-2 text-xs text-faint">Elsewhere</p>
                  <SocialLinks size="sm" includeEmail={false} />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Response time &amp; privacy
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Messages are reviewed during business days. The form uses a
                  honeypot field to reduce spam and does not store submissions in
                  a database. Prefer email? Reach me directly at{" "}
                  <a
                    href={profile.emailHref}
                    className="text-accent hover:underline"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
              </Card>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
