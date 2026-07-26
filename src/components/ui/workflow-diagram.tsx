import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Vertical workflow/flow diagram. Renders an ordered list of steps connected
 * by a rail with arrow heads. Responsive (always vertical) and accessible via
 * a labeled <ol>. Used for the cfd-agent pipeline and case-study processes.
 */
export function WorkflowDiagram({
  steps,
  ariaLabel,
  className,
  compact = false,
}: {
  steps: string[];
  ariaLabel?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <ol
      className={cn("relative", className)}
      aria-label={ariaLabel}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[11px] top-2 w-px bg-border"
      />
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step} className="relative flex gap-4">
            <span
              aria-hidden="true"
              className={cn(
                "z-10 mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border bg-surface font-mono text-[0.65rem] text-accent",
                isLast && "border-accent/60 text-accent",
              )}
            >
              {i + 1}
            </span>
            <p
              className={cn(
                "font-mono text-sm leading-6 text-foreground/90",
                compact ? "pb-3" : "pb-5",
              )}
            >
              {step}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
