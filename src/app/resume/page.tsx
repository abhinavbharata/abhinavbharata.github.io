import type { Metadata } from "next";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/projects/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/print-button";
import { SocialLinks } from "@/components/layout/social-links";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Digital résumé for Abhinav Bharata — mechanical and thermal engineer: experience, education, skills, and the cfd-agent engineering-software project.",
  alternates: { canonical: "/resume" },
};

const cfdAgentHighlights = [
  "Developed a Python-based natural-language assistant that converts engineering descriptions into complete OpenFOAM simulation cases.",
  "Automated STL analysis, unit detection, case generation, meshing, solver execution, residual monitoring, and results interpretation.",
  "Implemented a geometry–mesh invariant guard that blocks solver execution when snappyHexMesh fails to incorporate the intended STL geometry.",
  "Built live residual parsing, convergence detection, fatal-error monitoring, and AI-assisted failure diagnosis.",
  "Structured the application into focused AI, geometry, case-generation, execution, configuration, CLI, and exception modules.",
  "Applied strict type checking, automated testing, linting, formatting, and an 80% minimum test-coverage gate.",
  "Delivered v0.1.0 for steady incompressible internal flow using simpleFoam, k-ω SST, and snappyHexMesh.",
  "Designed a registry-based roadmap for compressible, thermal, multiphase, combustion, and additional solver families.",
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Résumé"
        title={`${profile.name} — ${profile.primaryTitle}`}
        description={profile.extendedTitle}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Résumé" },
            ]}
          />
          <span className="ml-auto flex flex-wrap gap-2">
            {profile.resumeAvailable && (
              <Button href={profile.resumePath} size="sm">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            )}
            <PrintButton />
          </span>
        </div>
      </PageHeader>

      <Container wide className="py-16">
        <div className="mx-auto max-w-4xl">
          {/* Contact / summary */}
          <Card className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  {profile.name}
                </p>
                <p className="text-sm text-muted">{profile.primaryTitle}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                  <a href={profile.emailHref} className="inline-flex items-center gap-1.5 hover:text-foreground">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    {profile.email}
                  </a>
                  <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:text-foreground">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    {profile.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {profile.location}
                  </span>
                </div>
              </div>
              <SocialLinks size="sm" includeEmail={false} />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Mechanical and thermal engineer with 7+ years across thermal
              systems, CFD, mechanical design, product development, and
              mission-critical infrastructure — from concept and simulation
              through BIM documentation, multidisciplinary coordination, testing,
              validation, and commissioning.
            </p>
          </Card>

          {/* Selected engineering software project */}
          <Section className="mt-12" eyebrow="Selected software project" title="cfd-agent — AI-Powered OpenFOAM CFD Simulation Assistant">
            <Card className="p-5">
              <ul className="space-y-1.5">
                {cfdAgentHighlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-4 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent-2"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </Card>
          </Section>

          {/* Experience */}
          <Section className="mt-12" eyebrow="Experience" title="Professional experience">
            <div className="space-y-6">
              {experience.map((role) => (
                <div
                  key={`${role.organization}-${role.startDate}`}
                  className="border-l-2 border-border pl-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {role.title} ·{" "}
                      <span className="text-muted">{role.organization}</span>
                    </p>
                    <p className="font-mono text-xs text-faint">
                      {role.startDate} — {role.endDate} · {role.location}
                    </p>
                  </div>
                  {role.achievements.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {role.achievements.map((a) => (
                        <li
                          key={a}
                          className="relative pl-4 text-sm leading-relaxed text-foreground/85"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent/70"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {role.tools.slice(0, 6).map((t) => (
                      <Badge key={t} tone="neutral">{t}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section className="mt-12" eyebrow="Education" title="Education">
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                  <p className="text-sm text-muted">
                    {e.institution} ·{" "}
                    <span className="font-mono text-xs text-faint">
                      {e.startDate} — {e.endDate}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills highlights */}
          <Section className="mt-12" eyebrow="Skills" title="Skills highlights">
            <div className="space-y-4">
              {skillGroups.map((g) => (
                <div key={g.id}>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                    {g.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <Badge key={s} tone="neutral">{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </Container>
    </>
  );
}
