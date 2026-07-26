import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/** Compact monospaced pill for tools, technologies, and standards. */
export function ToolBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge tone="neutral" className={cn("font-[0.7rem]", className)}>
      {children}
    </Badge>
  );
}
