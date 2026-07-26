import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Hero } from "@/components/home/hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { MetricsGrid } from "@/components/ui/metric";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import {
  capabilityCards,
  engineeringMetrics,
  philosophy,
} from "@/data/home";
import { getFeaturedProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const currentRole = experience[0];

  return (
    <>
      <Hero />

      {/* Professional specialties */}
      <Container wide className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Professional specialties"
          title="Four disciplines, one engineering practice"
          description="Mechanical systems, thermal engineering, CFD, and engineering automation — applied together to data-center and product problems."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <Card className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-md border border-border bg-panel font-mono text-sm text-accent"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
                    {c.id}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-3.5 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/70"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Current role */}
      {currentRole && (
        <div className="border-y border-border bg-panel/40">
          <Container wide className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Current role"
                  title={currentRole.title}
                />
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-foreground/90">
                    {currentRole.organization}.
                  </span>{" "}
                  {currentRole.organizationNote}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/experience" variant="secondary" size="sm">
                    Full experience
                  </Button>
                  <Button href="/contact" variant="ghost" size="sm">
                    Discuss a role
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Produce mechanical BIM construction documents across SD, DD, and CD phases.",
                    "Support modular data-center enclosures, power skids, and power houses.",
                    "Develop liquid-cooling layouts and BIM-ready mechanical content.",
                    "Support heat-load testing of power modules and UPS systems.",
                    "Participate in FAT, SAT, and commissioning validation.",
                    "Coordinate across mechanical, electrical, structural, manufacturing, and fire-protection disciplines.",
                  ].map((point) => (
                    <li
                      key={point}
                      className="rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-foreground/85"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Featured projects */}
      <Container wide className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected engineering projects"
            className="mb-0"
          />
          <Button href="/projects" variant="ghost" size="sm">
            All projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>

      {/* Metrics */}
      <div className="border-y border-border bg-panel/40">
        <Container wide className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Engineering metrics"
            title="Measurable outcomes, with context"
            description="Each figure is tied to a specific project or program — not presented as a universal claim."
          />
          <div className="mt-8">
            <MetricsGrid metrics={engineeringMetrics} />
          </div>
        </Container>
      </div>

      {/* Philosophy */}
      <Container wide className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Engineering philosophy"
          title="Principles that govern the work"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal key={p.text} delay={i * 0.05}>
              <Card className="h-full p-6">
                <span className="font-heading text-2xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {p.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Closing CTA */}
      <CtaBand
        eyebrow="Let’s build"
        title="Let’s design reliable, efficient, and scalable engineering systems."
      >
        <Button href="/contact">
          <Mail className="h-4 w-4" />
          Discuss an Opportunity
        </Button>
        {profile.resumeAvailable && (
          <Button href={profile.resumePath} variant="secondary">
            <Download className="h-4 w-4" />
            View Resume
          </Button>
        )}
      </CtaBand>
    </>
  );
}
