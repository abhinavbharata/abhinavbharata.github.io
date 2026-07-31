/**
 * Shared portfolio content types.
 *
 * These describe the shape of the structured data under `src/data/`. Pages and
 * components import types from here so content stays consistent and any missing
 * optional field renders gracefully.
 */

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectStatus =
  | "Completed"
  | "Ongoing"
  | "Working Prototype"
  | "Research";

export type ProjectMetric = {
  label: string;
  value: string;
  /** Short context so a metric is never presented as a universal claim. */
  context?: string;
};

export type ProjectImage = {
  /** Path under /public. */
  src: string;
  alt: string;
  caption?: string;
  /** True when no real asset exists yet — the UI renders a labeled placeholder. */
  placeholder?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  /** One-line pitch used on cards. */
  tagline?: string;
  category: string[];
  status: ProjectStatus;
  /** Human-readable period, e.g. "2024–2026" or "Current". */
  period?: string;
  startDate?: string;
  endDate?: string;
  summary: string;
  problem: string;
  objectives: string[];
  constraints: string[];
  role: string;
  responsibilities: string[];
  technologies: string[];
  methods: string[];
  results: string[];
  metrics: ProjectMetric[];
  images: ProjectImage[];

  /* Case-study metadata sidebar */
  industry?: string;
  disciplines?: string[];
  deliverables?: string[];
  validationMethod?: string;

  /* Optional case-study sections */
  designProcess?: string[];
  analysis?: string[];
  architecture?: string[];
  validation?: string[];
  lessons?: string[];
  roadmap?: string[];

  confidentialityNote?: string;
  relatedProjects?: string[];
  personalProject?: boolean;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export type ExperienceItem = {
  title: string;
  organization: string;
  /** Neutral descriptor when the client/employer is confidential. */
  organizationNote?: string;
  startDate: string;
  endDate: string;
  location: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
  disciplines: string[];
  current?: boolean;
};

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string[];
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type SkillGroup = {
  id: string;
  title: string;
  description?: string;
  skills: string[];
};

/* -------------------------------------------------------------------------- */
/* Research                                                                   */
/* -------------------------------------------------------------------------- */

export type ResearchStatus =
  | "Working Prototype"
  | "Completed"
  | "Ongoing"
  | "Research";

export type ResearchItem = {
  slug: string;
  title: string;
  question: string;
  method: string[];
  tools: string[];
  finding: string;
  relevance: string;
  status: ResearchStatus;
  relatedProject?: string;
  featured?: boolean;
};

/* -------------------------------------------------------------------------- */
/* Home / shared content                                                      */
/* -------------------------------------------------------------------------- */

export type CapabilityCard = {
  id: string;
  title: string;
  points: string[];
};

export type Metric = {
  value: string;
  label: string;
  context?: string;
};

export type PhilosophyPrinciple = {
  text: string;
};
