import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/badge";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Research and Technical Work",
  description:
    "Research and technical work by Abhinav Bharata — featuring cfd-agent, CFD, conjugate heat transfer, heat-exchanger optimization, composite design, IoT monitoring, and controls instruction.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  const [featured, ...rest] = research;

  return (
    <>
      <PageHeader
        eyebrow="Research & Technical Work"
        title="Questions, methods, and defensible findings."
        description="Each entry states the research question, method, tools, current finding, engineering relevance, and status."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Research" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        {/* Featured: cfd-agent */}
        {featured && (
          <Card className="mb-12 overflow-hidden border-accent/30 p-0">
            <div className="border-b border-border bg-accent-soft/40 px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="eyebrow text-accent">Featured research</span>
                <StatusBadge status={featured.status} />
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm italic leading-relaxed text-muted">
                {featured.question}
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                    Method
                  </p>
                  <ul className="mt-2 space-y-1">
                    {featured.method.map((m) => (
                      <li key={m} className="text-sm text-foreground/85">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                    Tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {featured.tools.map((t) => (
                      <Badge key={t} tone="neutral">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-md border border-border bg-panel/50 p-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                  Current finding
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                  {featured.finding}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground/90">Relevance:</span>{" "}
                {featured.relevance}
              </p>

              {featured.relatedProject && (
                <Link
                  href={`/projects/${featured.relatedProject}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View the cfd-agent case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Card>
        )}

        {/* Other research */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <Card key={item.slug} className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <StatusBadge status={item.status} />
              </div>
              <p className="mt-3 text-xs italic leading-relaxed text-muted">
                {item.question}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                {item.finding}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tools.slice(0, 4).map((t) => (
                  <Badge key={t} tone="neutral">{t}</Badge>
                ))}
              </div>
              <div className="mt-auto pt-4">
                {item.relatedProject ? (
                  <Link
                    href={`/projects/${item.relatedProject}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Related project
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                ) : (
                  <span className="text-xs text-faint">{item.status}</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBand eyebrow="Collaborate" title="Interested in research or technical collaboration?">
        <Button href="/contact">Get in touch</Button>
        <Button href="/projects/cfd-agent" variant="secondary">
          Explore cfd-agent
        </Button>
      </CtaBand>
    </>
  );
}
