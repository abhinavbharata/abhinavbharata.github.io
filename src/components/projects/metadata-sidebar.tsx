import * as React from "react";

import type { Project } from "@/types";

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;
  return (
    <div className="border-t border-border py-3 first:border-t-0 first:pt-0">
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm text-foreground/90">{children}</dd>
    </div>
  );
}

/**
 * Technical metadata sidebar for case studies. Renders only fields that are
 * present on the project, so optional data degrades gracefully.
 */
export function MetadataSidebar({ project }: { project: Project }) {
  return (
    <aside className="rounded-lg border border-border bg-surface p-5">
      <p className="eyebrow">Project Metadata</p>
      <dl className="mt-3">
        <Row label="Industry">{project.industry}</Row>
        <Row label="Role">{project.role}</Row>
        <Row label="Duration">
          {project.period ?? [project.startDate, project.endDate].filter(Boolean).join(" – ")}
        </Row>
        <Row label="Status">{project.status}</Row>
        <Row label="Software">
          {project.technologies.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded border border-border bg-panel px-1.5 py-0.5 font-mono text-[0.7rem] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </Row>
        <Row label="Disciplines">
          {project.disciplines && (
            <span className="text-muted">{project.disciplines.join(" · ")}</span>
          )}
        </Row>
        <Row label="Deliverables">
          {project.deliverables && (
            <ul className="list-disc space-y-1 pl-4 text-muted">
              {project.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </Row>
        <Row label="Validation">{project.validationMethod}</Row>
        <Row label="Key metrics">
          {project.metrics.length > 0 && (
            <ul className="space-y-2">
              {project.metrics.map((m) => (
                <li key={m.label} className="flex flex-col">
                  <span className="font-heading text-base font-semibold text-foreground">
                    {m.value}
                  </span>
                  <span className="text-xs text-muted">{m.label}</span>
                </li>
              ))}
            </ul>
          )}
        </Row>
      </dl>
    </aside>
  );
}
