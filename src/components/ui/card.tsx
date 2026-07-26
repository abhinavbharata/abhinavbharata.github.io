import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Generic surface card. `interactive` adds a hover lift for clickable cards.
 */
export function Card({
  children,
  className,
  as: Tag = "div",
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  interactive?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-surface",
        interactive &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
