import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Standard case-study / page section wrapper. Renders an eyebrow (section
 * identifier), an optional title (h2 by default), and children. Keeps section
 * rhythm consistent across long-form pages.
 */
export function Section({
  eyebrow,
  title,
  description,
  children,
  id,
  className,
  titleAs: Title = "h2",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  titleAs?: React.ElementType;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-6 max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-2 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          {title && (
            <Title className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {title}
            </Title>
          )}
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/** Two-column content layout used by case studies (main + sidebar). */
export function ContentLayout({
  sidebar,
  children,
  className,
}: {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  if (!sidebar) {
    return <div className={cn("", className)}>{children}</div>;
  }
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12", className)}>
      <div className="lg:col-span-8">{children}</div>
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">{sidebar}</div>
      </div>
    </div>
  );
}
