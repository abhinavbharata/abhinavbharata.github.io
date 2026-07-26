import * as React from "react";

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";

/**
 * Engineering metric tile. Value-first, with a short context line so the
 * metric is never read as a universal claim. Reveals on scroll.
 */
export function MetricTile({
  value,
  label,
  context,
  className,
}: {
  value: string;
  label: string;
  context?: string;
  className?: string;
}) {
  return (
    <Reveal
      as="div"
      className={cn(
        "relative rounded-lg border border-border bg-surface p-5",
        className,
      )}
    >
      <div className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-foreground/90">{label}</div>
      {context && (
        <p className="mt-2 text-xs leading-relaxed text-muted">{context}</p>
      )}
    </Reveal>
  );
}

/** Responsive grid of metric tiles. */
export function MetricsGrid({
  metrics,
  className,
}: {
  metrics: { value: string; label: string; context?: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
        className,
      )}
    >
      {metrics.map((m) => (
        <MetricTile key={m.label} {...m} />
      ))}
    </div>
  );
}
