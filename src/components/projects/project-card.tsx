import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

/** Category → icon-less label. Primary category surfaced first. */
function PrimaryCategories({ project }: { project: Project }) {
  const cats = project.category.slice(0, 3);
  return (
    <div className="flex flex-wrap gap-1.5">
      {cats.map((c) => (
        <Badge key={c} tone="neutral">
          {c}
        </Badge>
      ))}
    </div>
  );
}

/**
 * Project summary card for galleries and featured grids. Links to the case
 * study. Keeps the most scannable facts (status, role, tools, outcome) above
 * the fold for recruiters.
 */
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const hero = project.images[0];
  const isCfdAgent = project.slug === "cfd-agent";

  return (
    <Card interactive className={cn("group flex h-full flex-col", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col p-0 focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`View case study: ${project.title}`}
      >
        {/* Media / placeholder */}
        <div className="p-3 pb-0">
          <ImagePlaceholder
            label={hero?.alt ?? project.shortTitle ?? project.title}
            caption={undefined}
            aspect="16/10"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 pt-4">
          <div className="flex items-center justify-between gap-3">
            <PrimaryCategories project={project} />
            <StatusBadge status={project.status} />
          </div>

          <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
            {project.shortTitle ?? project.title}
          </h3>
          {project.tagline && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {project.tagline}
            </p>
          )}

          <dl className="mt-4 space-y-2 text-xs">
            {project.role && (
              <div className="flex gap-2">
                <dt className="w-16 shrink-0 font-mono uppercase tracking-wide text-faint">
                  Role
                </dt>
                <dd className="text-muted">{project.role}</dd>
              </div>
            )}
            {project.technologies.length > 0 && (
              <div className="flex gap-2">
                <dt className="w-16 shrink-0 font-mono uppercase tracking-wide text-faint">
                  Tools
                </dt>
                <dd className="text-muted">
                  {project.technologies.slice(0, 5).join(" · ")}
                  {project.technologies.length > 5 && " · …"}
                </dd>
              </div>
            )}
          </dl>

          <div className="mt-4 flex flex-1 items-end">
            <p className="line-clamp-2 text-sm leading-relaxed text-muted">
              {project.results[0] ?? project.summary}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium",
                isCfdAgent ? "text-accent-2" : "text-accent",
              )}
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {project.period && (
              <span className="font-mono text-[0.7rem] text-faint">
                {project.period}
              </span>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}
