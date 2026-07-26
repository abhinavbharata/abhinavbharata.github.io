import * as React from "react";

import { cn } from "@/lib/cn";

type Tone =
  | "neutral"
  | "accent"
  | "copper"
  | "success"
  | "warning"
  | "danger";

const tones: Record<Tone, string> = {
  neutral:
    "bg-panel text-muted border-border",
  accent: "bg-accent-soft text-accent border-border",
  copper:
    "bg-[color-mix(in_oklab,var(--accent-2)_14%,transparent)] text-accent-2 border-border",
  success:
    "bg-[color-mix(in_oklab,var(--success)_16%,transparent)] text-success border-border",
  warning:
    "bg-[color-mix(in_oklab,var(--warning)_16%,transparent)] text-warning border-border",
  danger:
    "bg-[color-mix(in_oklab,var(--danger)_16%,transparent)] text-danger border-border",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] leading-5 tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type StatusValue =
  | "Completed"
  | "Ongoing"
  | "Working Prototype"
  | "Research";

const statusTone: Record<StatusValue, Tone> = {
  Completed: "success",
  Ongoing: "accent",
  "Working Prototype": "copper",
  Research: "neutral",
};

const dotTone: Record<StatusValue, string> = {
  Completed: "bg-success",
  Ongoing: "bg-accent",
  "Working Prototype": "bg-accent-2",
  Research: "bg-muted",
};

/** Status pill with a colored dot — color is never the only signal (text included). */
export function StatusBadge({
  status,
  className,
}: {
  status: StatusValue;
  className?: string;
}) {
  return (
    <Badge tone={statusTone[status]} className={className}>
      <span
        aria-hidden="true"
        className={cn("h-1.5 w-1.5 rounded-full", dotTone[status])}
      />
      {status}
    </Badge>
  );
}
