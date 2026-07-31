import { env } from "@/lib/env";

/**
 * Global site configuration. Used for SEO metadata, structured data,
 * sitemaps, and canonical URLs.
 */
export const siteConfig = {
  name: "Abhinav Bharata",
  shortName: "AB",
  formalName: "Abhinav Bharata",
  primaryTitle: "Mechanical Engineer · Data Center & Thermal Systems",
  extendedTitle:
    "Data Center Infrastructure | CFD | Revit BIM | Thermal Systems",
  /** Production origin. Falls back to localhost for local development. */
  url: env.siteUrl,
  description:
    "Portfolio of Abhinav Bharata, a mechanical engineer specializing in data-center infrastructure, thermal systems, CFD, Revit BIM, liquid cooling, and power-module validation.",
  locale: "en_US",
  twitterHandle: "",
  positioning: {
    central:
      "Mechanical engineer working on data-center thermal systems and infrastructure design.",
    supporting:
      "Currently producing BIM construction documents and running thermal validation for data-center enclosures and power modules, with a background in CFD, liquid cooling, and mechanical product design.",
    innovation:
      "I am currently developing cfd-agent, an AI-powered OpenFOAM assistant that transforms natural-language engineering requirements into structured, runnable CFD simulations.",
  },
} as const;
