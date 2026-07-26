import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/projects/section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for the Abhinav Bharata engineering portfolio website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy policy"
        description="How this website handles information. Kept intentionally short and plain."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          <Section eyebrow="Overview" title="The short version">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                This is a static marketing portfolio. It does not require you to
                create an account, and it does not run advertising or sell-tracked
                profiles.
              </p>
              <p>
                The only personal information this site processes is what you
                choose to submit through the contact form, and only to reply to
                your inquiry.
              </p>
            </div>
          </Section>

          <Section eyebrow="Contact form" title="What happens when you get in touch">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                When you submit the contact form, the information you enter
                (name, email, organization, role, subject, reason, and message)
                is sent to{" "}
                <span className="font-mono text-foreground/90">
                  {profile.email}
                </span>{" "}
                so your message can receive a reply.
              </p>
              <p>
                If email delivery is configured through a third-party provider
                (for example, Resend), that provider transmits the message on
                this site’s behalf. No submission information is stored in a
                database by this website; retention is governed by the email
                provider and the recipient mailbox.
              </p>
              <p>
                If delivery is not configured, the form provides a mailto link so
                your email client can send the message directly — no data passes
                through this site’s server in that case.
              </p>
            </div>
          </Section>

          <Section eyebrow="Analytics & cookies" title="Analytics and cookies">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                This site does not set advertising cookies and does not include
                analytics by default. Any future analytics will be limited,
                privacy-respecting, and disclosed here before it is enabled.
              </p>
              <p>
                A theme preference (light or dark) is stored in your browser’s
                local storage so the site remembers your choice. It never leaves
                your device.
              </p>
            </div>
          </Section>

          <Section eyebrow="Hosting" title="Hosting and third parties">
            <p className="text-sm leading-relaxed text-muted">
              This site is hosted on Vercel, which processes standard server logs
              (such as IP address and request time) as part of delivering the
              site and protecting it from abuse. Vercel’s handling of that data is
              governed by its own privacy policy.
            </p>
          </Section>

          <Section eyebrow="Your rights" title="Your choices">
            <p className="text-sm leading-relaxed text-muted">
              You can contact{" "}
              <a href={profile.emailHref} className="text-accent hover:underline">
                {profile.email}
              </a>{" "}
              to request deletion of any message you previously sent, or to ask
              any question about this policy.
            </p>
          </Section>

          <p className="border-t border-border pt-6 font-mono text-xs text-faint">
            Last updated: {new Date().getFullYear()}.
          </p>
        </div>
      </Container>
    </>
  );
}
