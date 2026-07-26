import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Centered max-width content container with responsive horizontal padding.
 * `wide` extends to a 1200px rail for galleries and dashboards.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  wide?: boolean;
}) {
  return (
    <Tag
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", wide ? "max-w-[78rem]" : "max-w-6xl", className)}
    >
      {children}
    </Tag>
  );
}
