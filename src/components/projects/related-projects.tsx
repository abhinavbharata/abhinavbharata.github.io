import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types";

/** "Related projects" block rendered at the foot of each case study. */
export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section aria-label="Related projects" className="mt-16">
      <SectionHeading
        eyebrow="Related work"
        title="Related projects"
        className="mb-6"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
