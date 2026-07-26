"use client";

import * as React from "react";
import { LayoutGrid } from "lucide-react";

import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { ProjectCard } from "@/components/projects/project-card";
import { EmptyState } from "@/components/ui/states";

/**
 * Filterable project gallery. Filtering is client-side and keyboard
 * accessible; each filter button reports its selected state with aria-pressed.
 */
export function ProjectsGallery({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = React.useState(categories[0] ?? "All");

  const filtered = React.useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const selected = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={selected}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-xs tracking-wide transition-colors",
                selected
                  ? "border-accent/60 bg-accent-soft text-accent"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState
            title="No projects in this category yet"
            description="Try a different filter, or view all engineering work."
          >
            <button
              type="button"
              onClick={() => setActive("All")}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground hover:border-border-strong"
            >
              <LayoutGrid className="h-4 w-4" />
              View all
            </button>
          </EmptyState>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
