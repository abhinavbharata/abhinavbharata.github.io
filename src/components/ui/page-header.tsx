import * as React from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

/**
 * Standard interior-page hero. Renders an eyebrow, an H1, supporting copy,
 * and optional meta/actions. Keeps page heading hierarchy consistent (each
 * interior page has exactly one H1, rendered here).
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  meta,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("relative overflow-hidden border-b border-border", className)}>
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <Container wide className="relative py-14 sm:py-20">
        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
        {meta && (
          <div className="mt-8 border-t border-border pt-5">{meta}</div>
        )}
      </Container>
    </header>
  );
}
