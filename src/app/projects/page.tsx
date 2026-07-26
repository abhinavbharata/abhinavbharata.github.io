import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { CtaBand } from "@/components/ui/cta-band";
import { Button } from "@/components/ui/button";
import {
  getProjectCategories,
  projects,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by Abhinav Bharata — data-center infrastructure, CFD, Revit BIM, thermal systems, product development, testing and validation, and engineering AI.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Engineering work, with technical depth."
        description="Filter by discipline. Each card opens a full case study — problem, objectives, role, analysis, validation, and results."
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects" },
          ]}
        />
      </PageHeader>

      <Container wide className="py-16">
        <ProjectsGallery
          projects={projects}
          categories={getProjectCategories()}
        />
      </Container>

      <CtaBand eyebrow="Collaborate" title="Have a data-center, thermal, CFD, or automation challenge?">
        <Button href="/contact">Get in touch</Button>
        <Button href="/projects/cfd-agent" variant="secondary">
          Explore cfd-agent
        </Button>
      </CtaBand>
    </>
  );
}
