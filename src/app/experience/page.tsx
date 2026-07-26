import type { Metadata } from "next";
import { Download } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience for Abhinav Bharata across data-center infrastructure, thermal engineering, CFD, Revit BIM, product development, and commissioning.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Seven years across thermal, CFD, mechanical, product, and infrastructure engineering."
        description="A detailed professional timeline — responsibilities, achievements, tools, and disciplines for each role."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Experience" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <div className="mx-auto max-w-3xl">
          {profile.resumeAvailable && (
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-surface p-5">
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">
                  Prefer a single-page summary?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Download the résumé PDF, or view the digital résumé.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button href={profile.resumePath} size="sm">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button href="/resume" variant="secondary" size="sm">
                  Digital résumé
                </Button>
              </div>
            </div>
          )}

          <SectionHeading
            eyebrow="Timeline"
            title="Professional history"
            className="mb-8"
          />
          <ExperienceTimeline items={experience} />
        </div>
      </Container>

      <CtaBand eyebrow="Next step" title="Looking for a mechanical, thermal, or data-center engineer?">
        <Button href="/contact">Start a conversation</Button>
        <Button href="/projects" variant="secondary">
          See the work
        </Button>
      </CtaBand>
    </>
  );
}
