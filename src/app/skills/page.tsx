import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SkillGroupCard } from "@/components/skills/skill-group-card";
import { Callout } from "@/components/ui/callout";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import {
  confirmedStandards,
  expandingStandards,
  skillGroups,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills and Capabilities",
  description:
    "Capabilities by discipline: data-center and critical infrastructure, CAD/BIM, thermal and mechanical systems, CFD, product development, engineering AI, and programming.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills and Capabilities"
        title="Organized by discipline, grounded in shipped work."
        description="Capabilities across data-center infrastructure, CAD/BIM, thermal systems, CFD, product development, engineering AI, programming, and codes & standards."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Skills" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <SectionHeading
                eyebrow={group.id}
                title={group.title}
                description={group.description}
                className="mb-5"
              />
              <SkillGroupCard
                title={group.title}
                skills={group.skills}
              />
            </div>
          ))}
        </div>

        {/* Codes & standards */}
        <div className="mt-16 space-y-8 border-t border-border pt-12">
          <SectionHeading
            eyebrow="Codes & Standards"
            title="Codes and standards"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <SkillGroupCard
              title={confirmedStandards.title}
              skills={confirmedStandards.skills}
            />
            <div className="space-y-3">
              <SkillGroupCard
                title={expandingStandards.title}
                description={expandingStandards.description}
                skills={expandingStandards.skills}
                tone="accent"
              />
              <Callout tone="info">
                These standards are shown as in-progress study, not as confirmed
                professional experience.
              </Callout>
            </div>
          </div>
        </div>
      </Container>

      <CtaBand eyebrow="Apply it" title="Need these capabilities on your next program?">
        <Button href="/contact">Get in touch</Button>
        <Button href="/experience" variant="secondary">
          See the experience
        </Button>
      </CtaBand>
    </>
  );
}
