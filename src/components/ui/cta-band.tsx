import * as React from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

/**
 * Full-width closing call-to-action band. Renders an eyebrow, a heading, and
 * action children (usually buttons). Uses a subtle blueprint backdrop.
 */
export function CtaBand({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-t border-border", className)}>
      <Container wide className="relative overflow-hidden py-16 sm:py-20">
        <div
          className="bg-blueprint pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 -top-20 h-64 bg-[radial-gradient(55%_100%_at_50%_0%,var(--accent-soft),transparent)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          {eyebrow && <p className="eyebrow mb-4 text-center">{eyebrow}</p>}
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          {children && (
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
