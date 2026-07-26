import * as React from "react";
import { ArrowRight, Download, Mail, Sparkles, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-config";
import { profile } from "@/data/profile";

const infrastructureFlow = [
  "Engineering Requirement",
  "Mechanical & Thermal Design",
  "BIM & CFD Analysis",
  "Testing & Validation",
  "Reliable Infrastructure",
];

const agentFlow = [
  "Natural-Language Request",
  "CFD Configuration",
  "OpenFOAM Case",
  "Mesh & Solver",
  "Engineering Interpretation",
];

/**
 * Home hero. Establishes Abhinav's profession on the first screen and pairs the
 * engineering foundation flow with the cfd-agent innovation flow.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="bg-blueprint pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,var(--accent-soft),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[78rem] px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden="true" />
              {profile.primaryTitle} · {profile.location}
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Mechanical and Thermal Engineer Designing Mission-Critical
              Infrastructure and Intelligent Simulation Tools
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.positioning.supporting}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              <span className="inline-flex items-center gap-1.5 text-accent-2">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>{" "}
              {siteConfig.positioning.innovation}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">
                View Engineering Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/projects/cfd-agent" variant="outline">
                <Terminal className="h-4 w-4" />
                Explore cfd-agent
              </Button>
              {profile.resumeAvailable && (
                <Button href={profile.resumePath} variant="secondary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              )}
              <Button href="/contact" variant="ghost">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Technical visual: dual flow composition */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
              aria-label="Two parallel engineering workflows: infrastructure delivery and cfd-agent simulation automation"
              role="img"
            >
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <span className="eyebrow flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Engineering workflow
                </span>
                <StatusBadge status="Working Prototype" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FlowColumn
                  label="Infrastructure"
                  steps={infrastructureFlow}
                  tone="accent"
                />
                <FlowColumn
                  label="cfd-agent"
                  steps={agentFlow}
                  tone="copper"
                />
              </div>

              <p className="mt-4 border-t border-border pt-3 font-mono text-[0.7rem] text-faint">
                Wireframe geometry · flow paths · mesh · validation guards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowColumn({
  label,
  steps,
  tone,
}: {
  label: string;
  steps: string[];
  tone: "accent" | "copper";
}) {
  const dot =
    tone === "accent" ? "bg-accent text-accent" : "bg-accent-2 text-accent-2";
  return (
    <div>
      <p
        className={`mb-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] ${dot}`}
      >
        {label}
      </p>
      <ol className="space-y-1.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`grid h-5 w-5 shrink-0 place-items-center rounded border border-border font-mono text-[0.6rem] ${dot}`}
            >
              {i + 1}
            </span>
            <span className="font-mono text-[0.72rem] leading-tight text-muted">
              {s}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
