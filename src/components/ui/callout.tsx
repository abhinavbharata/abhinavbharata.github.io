import * as React from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { cn } from "@/lib/cn";

type Tone = "info" | "success" | "warning" | "danger" | "neutral";

const config: Record<
  Tone,
  { icon: React.ReactNode; border: string; text: string }
> = {
  info: {
    icon: <Info className="h-4 w-4 text-accent" />,
    border: "border-border",
    text: "text-foreground/90",
  },
  success: {
    icon: <CheckCircle2 className="h-4 w-4 text-success" />,
    border: "border-border",
    text: "text-foreground/90",
  },
  warning: {
    icon: <AlertTriangle className="h-4 w-4 text-warning" />,
    border: "border-border",
    text: "text-foreground/90",
  },
  danger: {
    icon: <XCircle className="h-4 w-4 text-danger" />,
    border: "border-border",
    text: "text-foreground/90",
  },
  neutral: {
    icon: <Info className="h-4 w-4 text-muted" />,
    border: "border-border",
    text: "text-foreground/90",
  },
};

/**
 * Technical callout box. Tone is reinforced by both an icon and text, never
 * by color alone.
 */
export function Callout({
  tone = "info",
  title,
  children,
  className,
}: {
  tone?: Tone;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const c = config[tone];
  return (
    <div
      className={cn(
        "rounded-lg border bg-panel/60 p-4 sm:p-5",
        c.border,
        className,
      )}
    >
      <div className="flex gap-3">
        <span className="mt-0.5 shrink-0" aria-hidden="true">
          {c.icon}
        </span>
        <div className={cn("min-w-0 flex-1 text-sm leading-relaxed", c.text)}>
          {title && <p className="font-semibold text-foreground">{title}</p>}
          <div className={cn(title && "mt-1")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
