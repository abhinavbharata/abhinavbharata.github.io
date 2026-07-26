import * as React from "react";
import { MapPin } from "lucide-react";

import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";

/**
 * Vertical professional timeline. Each entry shows dates, title, organization,
 * location, overview, responsibilities, achievements, tools, and disciplines.
 */
export function ExperienceTimeline({
  items,
}: {
  items: ExperienceItem[];
}) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-[7px] top-3 w-px bg-border sm:left-[9px]"
      />
      {items.map((item, i) => (
        <li key={`${item.organization}-${i}`} className="relative pb-12 last:pb-0">
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2",
              item.current
                ? "border-accent bg-accent"
                : "border-border-strong bg-background",
            )}
          />
          <div className="pl-8 sm:pl-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-mono text-xs text-accent">
                {item.startDate} — {item.endDate}
              </p>
              <p className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {item.location}
              </p>
            </div>

            <h3 className="mt-1.5 font-heading text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-muted">{item.organization}</p>
            {item.organizationNote && (
              <p className="mt-1 text-xs italic leading-relaxed text-faint">
                {item.organizationNote}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.overview}
            </p>

            {item.responsibilities.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {item.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="relative pl-4 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent/70"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            )}

            {item.achievements.length > 0 && (
              <div className="mt-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                  Achievements
                </p>
                <ul className="mt-2 space-y-1.5">
                  {item.achievements.map((a) => (
                    <li
                      key={a}
                      className="relative pl-4 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-success"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.tools.map((t) => (
                <Badge key={t} tone="neutral">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
