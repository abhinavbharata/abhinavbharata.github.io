import { env } from "@/lib/env";

/**
 * Professional identity for Abhinav Bharata.
 *
 * Fields sourced from the résumé. Optional public assets (LinkedIn, GitHub,
 * headshot, résumé PDF) read from environment variables and resolve to `null`
 * when not configured so the UI can hide or disable the corresponding control.
 */
export const profile = {
  name: "Abhinav Bharata",
  primaryTitle: "Mechanical Engineer · Data Center & Thermal Systems",
  extendedTitle:
    "Data Center Infrastructure | CFD | Revit BIM | Thermal Systems | Engineering Automation",
  location: "Pelzer, South Carolina",
  phone: "+1 (443) 851-0407",
  phoneHref: "tel:+14438510407",
  email: "bharata.abhinav@gmail.com",
  emailHref: "mailto:bharata.abhinav@gmail.com",
  /** Public links. `null` when unavailable. */
  linkedinUrl: env.linkedinUrl || null,
  githubUrl: env.githubUrl || null,
  cfdAgentRepository: env.cfdAgentRepository || null,
  cfdAgentDemo: env.cfdAgentDemo || null,
  /** Path under /public. File may not exist yet — see README. */
  resumePath: "/resume/abhinav-bharata-resume.pdf",
  resumeAvailable: true,
  /** Image path under /public. `null` until a headshot is provided. */
  headshot: null as string | null,
  /** Personal domain. `null` when not configured. */
  domain: null as string | null,
} as const;

export type Profile = typeof profile;
