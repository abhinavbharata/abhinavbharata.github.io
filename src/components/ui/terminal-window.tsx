import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Terminal-style panel with macOS-like traffic-light dots and a monospaced
 * body. Used to display commands, illustrative solver output, and file trees.
 *
 * Decorative chrome is hidden from assistive tech; pass a meaningful label via
 * `aria-label` when the terminal conveys content not otherwise described.
 */
export function TerminalWindow({
  title = "terminal",
  children,
  className,
  bodyClassName,
  ariaLabel,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-panel shadow-sm",
        className,
      )}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface/60 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-danger/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-success/70" />
        </span>
        <span className="ml-2 font-mono text-xs text-muted">{title}</span>
      </div>
      <div
        className={cn(
          "overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed text-foreground/90",
          bodyClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
