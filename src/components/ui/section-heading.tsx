import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Standard section heading with an optional monospaced eyebrow (section
 * identifier / project code), a title, and supporting copy. Keeps heading
 * hierarchy consistent across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-3 flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
