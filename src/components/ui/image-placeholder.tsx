import * as React from "react";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Intentional-looking placeholder for media not yet provided. Shows an icon,
 * a label, and an optional caption so the slot reads as "awaiting asset"
 * rather than broken.
 */
export function ImagePlaceholder({
  label,
  caption,
  className,
  aspect = "16/10",
}: {
  label: string;
  caption?: string;
  className?: string;
  aspect?: "16/10" | "16/9" | "4/3" | "square";
}) {
  const ratio: Record<string, string> = {
    "16/10": "aspect-[16/10]",
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    square: "aspect-square",
  };
  return (
    <figure className={cn("not-prose", className)}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-blueprint-fine",
          ratio[aspect],
        )}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <ImageIcon className="h-6 w-6 text-faint" aria-hidden="true" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            {label}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
