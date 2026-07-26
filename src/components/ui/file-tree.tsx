import * as React from "react";

import { cn } from "@/lib/cn";
import { CodeBlock } from "@/components/ui/code-block";

/**
 * File-tree display. Renders an ASCII/indented tree (as supplied in project
 * content) inside a CodeBlock with a "files" label.
 */
export function FileTree({
  tree,
  label = "files",
  className,
  ariaLabel,
}: {
  /** Pre-formatted ASCII tree string. */
  tree: string;
  label?: string;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <CodeBlock
      label={label}
      copyText={tree}
      className={cn(className)}
      ariaLabel={ariaLabel}
    >
      <span className="whitespace-pre text-muted">{tree}</span>
    </CodeBlock>
  );
}
