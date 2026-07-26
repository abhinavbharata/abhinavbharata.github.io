import * as React from "react";

import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";

/** Skill group panel — title + a wrap of monospaced skill pills. */
export function SkillGroupCard({
  title,
  description,
  skills,
  className,
  tone = "neutral",
}: {
  title: string;
  description?: string;
  skills: string[];
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{description}</p>
      )}
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <li
            key={s}
            className={cn(
              "rounded border px-2 py-1 font-mono text-[0.72rem] leading-4",
              tone === "accent"
                ? "border-accent/40 bg-accent-soft text-accent"
                : "border-border bg-panel text-muted",
            )}
          >
            {s}
          </li>
        ))}
      </ul>
    </Card>
  );
}
