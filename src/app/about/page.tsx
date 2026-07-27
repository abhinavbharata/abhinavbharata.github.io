import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/projects/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { aboutPhilosophy } from "@/data/home";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Abhinav Bharata — a mechanical engineer working across data-center infrastructure, thermal systems, CFD, Revit BIM, and product development.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering across infrastructure, simulation, and product development."
        description="A mechanical engineer with more than seven years of experience across thermal systems, CFD, mechanical design, product development, and mission-critical infrastructure."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Section eyebrow="Introduction" title="Profile">
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I am a Mechanical Engineer with more than seven
                  years of experience across thermal systems, CFD, mechanical
                  design, product development, and mission-critical
                  infrastructure. My work spans concept development, simulation,
                  BIM documentation, multidisciplinary coordination, testing,
                  validation, and commissioning.
                </p>
                <p>
                  My current work includes modular data-center enclosures, power
                  skids, power houses, Revit BIM documents, liquid-cooling
                  systems, heat-load testing of power modules and UPS systems,
                  FAT, SAT, commissioning validation, and enclosure leakage and
                  sealing remediation.
                </p>
              </div>
            </Section>

            <Section
              className="mt-14"
              eyebrow="Engineering automation"
              title="cfd-agent — engineering software from engineering experience"
            >
              <p className="text-base leading-relaxed text-muted">
                Alongside my infrastructure and thermal engineering work, I am
                developing{" "}
                <Link
                  href="/projects/cfd-agent"
                  className="font-medium text-accent hover:underline"
                >
                  cfd-agent
                </Link>
                , an AI-powered OpenFOAM assistant. The project combines CFD
                knowledge, Python software architecture, natural-language
                interpretation, deterministic simulation generation, mesh
                validation, solver monitoring, and engineering review.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted">
                <Sparkles className="h-4 w-4 text-accent-2" aria-hidden="true" />
                Software and AI serve the engineering practice — not the other
                way around.
              </div>
            </Section>

            <Section
              className="mt-14"
              eyebrow="Engineering philosophy"
              title="How I approach the work"
            >
              <ul className="space-y-2.5">
                {aboutPhilosophy.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar: education */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div>
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
                  Education
                </p>
                <div className="space-y-4">
                  {education.map((e) => (
                    <Card key={e.degree} className="p-5">
                      <p className="font-heading text-base font-semibold text-foreground">
                        {e.degree}
                      </p>
                      <p className="mt-1 text-sm text-muted">{e.institution}</p>
                      <p className="mt-1 font-mono text-xs text-faint">
                        {e.startDate} — {e.endDate}
                      </p>
                      {e.details && e.details.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {e.details.map((d) => (
                            <li key={d} className="text-xs leading-relaxed text-muted">
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Career timeline */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Career timeline"
            title="From mechanical engineer to critical-infrastructure and automation work"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((role) => (
              <Card key={role.title} className="p-5">
                <p className="font-mono text-[0.7rem] text-accent">
                  {role.startDate} — {role.endDate}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">
                  {role.title.split("—")[0].trim()}
                </p>
                <p className="text-xs text-muted">{role.organization}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {role.disciplines.slice(0, 3).join(" · ")}
                </p>
              </Card>
            ))}
            <Card className="flex items-center justify-center p-5 text-center">
              <div>
                <Sparkles className="mx-auto h-5 w-5 text-accent-2" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-foreground">
                  + cfd-agent
                </p>
                <p className="text-xs text-muted">
                  Engineering-software development
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      <CtaBand eyebrow="Let’s connect" title="Open to data-center, thermal, CFD, and engineering-automation roles.">
        <Button href="/contact">Get in touch</Button>
        <Button href="/projects" variant="secondary">
          Explore projects
        </Button>
      </CtaBand>
    </>
  );
}
