import * as React from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { profile } from "@/data/profile";

const engineeringFlow = [
  "Engineering Requirement",
  "Mechanical & Thermal Design",
  "BIM & CFD Analysis",
  "Testing & Validation",
  "Reliable Infrastructure",
];

const focusAreas = [
  "Data Centers",
  "Thermal Systems",
  "CFD",
  "Revit BIM",
  "Validation",
];

/**
 * Home hero. Establishes Abhinav's profession on the first screen. cfd-agent is
 * intentionally not referenced on the home page (it has its own dedicated
 * route); the hero presents the core engineering workflow only.
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
            <p className="eyebrow mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden="true" />
              Mechanical Engineer · Data Center &amp; Thermal Systems
              <span className="text-faint">· {profile.location}</span>
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Mechanical engineer working on data-center thermal systems
              and infrastructure design.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.positioning.supporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">
                View Engineering Projects
                <ArrowRight className="h-4 w-4" />
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

          {/* Technical visual: engineering workflow */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
              aria-label="Engineering workflow from requirement through validation to reliable infrastructure"
              role="img"
            >
              <div className="mb-4 border-b border-border pb-3">
                <span className="eyebrow">Engineering workflow</span>
              </div>

              <ol className="space-y-2.5">
                {engineeringFlow.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-border bg-panel font-mono text-[0.65rem] text-accent">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-tight text-foreground/90">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-5 border-t border-border pt-3">
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
                  Focus
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {focusAreas.map((f) => (
                    <li
                      key={f}
                      className="rounded border border-border bg-panel px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
