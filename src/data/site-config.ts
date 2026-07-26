import { env } from "@/lib/env";

/**
 * Global site configuration. Used for SEO metadata, structured data,
 * sitemaps, and canonical URLs.
 */
export const siteConfig = {
  name: "Abhinav Bharata",
  shortName: "AB",
  formalName: "Abhinav Bharata",
  primaryTitle: "Mechanical and Thermal Engineer",
  extendedTitle:
    "Data Center Infrastructure | CFD | Revit BIM | Thermal Systems | Engineering Automation",
  /** Production origin. Falls back to localhost for local development. */
  url: env.siteUrl,
  description:
    "Portfolio of Abhinav Bharata, a mechanical and thermal engineer specializing in data-center infrastructure, CFD, Revit BIM, liquid cooling, power-module validation, OpenFOAM, and engineering automation.",
  locale: "en_US",
  twitterHandle: "",
  positioning: {
    central:
      "Mechanical and thermal engineer designing mission-critical infrastructure, advanced cooling systems, simulation-driven products, and intelligent engineering tools.",
    supporting:
      "I work across data-center infrastructure, Revit BIM, liquid cooling, CFD, mechanical systems, power-module validation, and engineering automation.",
    innovation:
      "I am currently developing cfd-agent, an AI-powered OpenFOAM assistant that transforms natural-language engineering requirements into structured, runnable CFD simulations.",
  },
} as const;
