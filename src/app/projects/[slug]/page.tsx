import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StatusBadge } from "@/components/ui/badge";
import { Section, ContentLayout } from "@/components/projects/section";
import { MetadataSidebar } from "@/components/projects/metadata-sidebar";
import { RelatedProjects } from "@/components/projects/related-projects";
import { CfdAgentDeepDive } from "@/components/cfd-agent/deep-dive";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { ConfidentialityNote } from "@/components/ui/confidentiality-note";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { JsonLd } from "@/components/ui/json-ld";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { siteConfig } from "@/data/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

function Bullets({
  items,
  tone = "accent",
}: {
  items: string[];
  tone?: "accent" | "success";
}) {
  if (!items.length) return null;
  const color = tone === "accent" ? "bg-accent/70" : "bg-success";
  return (
    <ul className="space-y-2">
      {items.map((x) => (
        <li
          key={x}
          className="relative pl-4 text-sm leading-relaxed text-foreground/85"
        >
          <span
            aria-hidden="true"
            className={`absolute left-0 top-2.5 h-1 w-1 rounded-full ${color}`}
          />
          {x}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);
  const isCfdAgent = project.slug === "cfd-agent";

  const jsonLd = isCfdAgent
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: "cfd-agent",
        description: project.seoDescription,
        url: `${siteConfig.url}/projects/cfd-agent`,
        codeRepository: siteConfig.url,
        applicationCategory: "ScientificApplication",
        programmingLanguage: "Python",
        runtimePlatform: "OpenFOAM",
        author: { "@type": "Person", name: "Abhinav Bharata" },
        keywords: project.category.join(", "),
        softwareVersion: "0.1.0",
      }
    : {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: project.title,
        description: project.seoDescription,
        url: `${siteConfig.url}/projects/${project.slug}`,
        author: { "@type": "Person", name: "Abhinav Bharata" },
        keywords: project.category.join(", "),
      };

  return (
    <>
      <JsonLd data={jsonLd} />
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <Container wide className="relative py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.shortTitle ?? project.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            {project.category.slice(0, 4).map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-panel px-2.5 py-0.5 font-mono text-[0.7rem] text-muted"
              >
                {c}
              </span>
            ))}
            {project.period && (
              <span className="font-mono text-[0.7rem] text-faint">
                {project.period}
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
          )}
        </Container>
      </header>

      <Container wide className="py-16">
        <ContentLayout
          sidebar={<MetadataSidebar project={project} />}
        >
          <div className="space-y-14">
            {/* Summary */}
            <Section eyebrow="Summary" title="Overview">
              <p className="text-base leading-relaxed text-foreground/90">
                {project.summary}
              </p>
            </Section>

            {/* Problem */}
            <Section eyebrow="Problem" title="Engineering problem">
              <p className="text-base leading-relaxed text-muted">
                {project.problem}
              </p>
            </Section>

            {/* Objectives + constraints */}
            <div className="grid gap-8 sm:grid-cols-2">
              <Section eyebrow="Objectives" title="Objectives">
                <Bullets items={project.objectives} />
              </Section>
              <Section eyebrow="Constraints" title="Constraints">
                <Bullets items={project.constraints} tone="success" />
              </Section>
            </div>

            {/* Role */}
            <Section eyebrow="Role" title="My role">
              <p className="text-base leading-relaxed text-foreground/90">
                {project.role}
              </p>
              {project.responsibilities.length > 0 && (
                <div className="mt-4">
                  <Bullets items={project.responsibilities} />
                </div>
              )}
            </Section>

            {/* cfd-agent deep dive (flagship only) */}
            {isCfdAgent && <CfdAgentDeepDive />}

            {/* Design process */}
            {project.designProcess && project.designProcess.length > 0 && (
              <Section eyebrow="Process" title="Design process">
                <Bullets items={project.designProcess} />
              </Section>
            )}

            {/* Analysis & simulation */}
            {project.analysis && project.analysis.length > 0 && (
              <Section eyebrow="Analysis" title="Analysis and simulation">
                <Bullets items={project.analysis} />
              </Section>
            )}

            {/* Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <Section
                eyebrow="Architecture"
                title="System / product architecture"
              >
                <ul className="space-y-2">
                  {project.architecture.map((a) => (
                    <li
                      key={a}
                      className="rounded-md border border-border bg-surface px-3.5 py-2 font-mono text-[0.78rem] leading-relaxed text-foreground/85"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Validation */}
            {project.validation && project.validation.length > 0 && (
              <Section eyebrow="Validation" title="Testing and validation">
                <Bullets items={project.validation} tone="success" />
              </Section>
            )}

            {/* Results */}
            <Section eyebrow="Results" title="Results">
              <Bullets items={project.results} tone="success" />
              {project.metrics.length > 0 && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-border bg-surface p-4"
                    >
                      <p className="font-heading text-xl font-semibold text-foreground">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-foreground/90">
                        {m.label}
                      </p>
                      {m.context && (
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {m.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Section>

            {/* Lessons */}
            {project.lessons && project.lessons.length > 0 && (
              <Section eyebrow="Lessons" title="Lessons learned">
                <Callout tone="info">
                  <ul className="space-y-1.5">
                    {project.lessons.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </Callout>
              </Section>
            )}

            {/* Gallery */}
            {project.images.length > 0 && (
              <Section eyebrow="Gallery" title="Technical gallery">
                <div className="grid gap-5 sm:grid-cols-2">
                  {project.images.map((img) => (
                    <ImagePlaceholder
                      key={img.src}
                      label={img.alt}
                      caption={img.caption}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs text-faint">
                  Placeholders for approved media — see the README to add images.
                </p>
              </Section>
            )}

            {/* Confidentiality */}
            {project.confidentialityNote && (
              <ConfidentialityNote note={project.confidentialityNote} />
            )}
          </div>
        </ContentLayout>

        {/* Related */}
        <div className="mt-16">
          <RelatedProjects projects={related} />
        </div>
      </Container>

      <CtaBand
        eyebrow="Work with me"
        title="Discuss a data-center, thermal, CFD, or automation project."
      >
        <Button href="/contact">Start a conversation</Button>
        <Button href="/projects" variant="secondary">
          All projects
        </Button>
      </CtaBand>
    </>
  );
}
