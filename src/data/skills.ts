import type { SkillGroup } from "@/types";

/**
 * Capabilities organized by discipline. The final group lists standards
 * Abhinav is currently studying — these are intentionally kept separate so they
 * are never presented as confirmed professional experience.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "data-center",
    title: "Data Center and Critical Infrastructure",
    skills: [
      "Modular data-center enclosures",
      "Power skids",
      "Power houses",
      "Power-module testing",
      "UPS thermal validation",
      "Heat-load testing",
      "N+1 redundancy testing",
      "FAT",
      "SAT",
      "Commissioning",
      "Mechanical equipment arrangement",
      "Cross-discipline coordination",
    ],
  },
  {
    id: "cad-bim",
    title: "CAD and BIM",
    skills: [
      "Revit",
      "SD documentation",
      "DD documentation",
      "CD documentation",
      "Parametric Revit families",
      "SolidWorks",
      "Autodesk Inventor",
      "AutoCAD",
      "Fusion 360",
      "Mechanical layouts",
      "Construction documentation",
      "Equipment integration",
    ],
  },
  {
    id: "thermal-mechanical",
    title: "Thermal and Mechanical Systems",
    skills: [
      "HVAC",
      "Glycol cooling loops",
      "Liquid cooling",
      "Direct evaporative cooling",
      "Air-side duct design",
      "Heat-load calculations",
      "Heat exchangers",
      "Fire-suppression piping coordination",
      "Mechanical enclosures",
      "Thermal distribution",
    ],
  },
  {
    id: "cfd-simulation",
    title: "CFD and Simulation",
    skills: [
      "ANSYS Fluent",
      "OpenFOAM",
      "CFD",
      "FEA",
      "Conjugate heat transfer",
      "Turbulence modeling",
      "k-epsilon",
      "k-ω SST",
      "Flow optimization",
      "Heat-transfer analysis",
      "Residual analysis",
      "Mesh-quality evaluation",
      "Convergence assessment",
      "Thermal validation",
    ],
  },
  {
    id: "product-development",
    title: "Product Development",
    skills: [
      "Concept development",
      "Design reviews",
      "DFMA",
      "FMEA",
      "GD&T",
      "DOE",
      "Root-cause analysis",
      "Prototype validation",
      "Design optimization",
      "Vendor coordination",
      "Contractor coordination",
    ],
  },
  {
    id: "engineering-ai",
    title: "Engineering AI and Automation",
    skills: [
      "Natural-language engineering interfaces",
      "Anthropic Claude API",
      "LLM-to-structured-configuration workflows",
      "OpenFOAM case automation",
      "Solver orchestration",
      "Python CLI development",
      "Live process monitoring",
      "Residual parsing",
      "AI-assisted diagnostics",
      "Engineering validation guards",
      "Typed Python",
      "Registry-based architecture",
      "Automated testing",
      "Simulation workflow design",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    skills: [
      "Python",
      "MATLAB",
      "NumPy",
      "Data visualization",
      "Engineering scripting",
      "Simulation automation",
    ],
  },
];

export const confirmedStandards: SkillGroup = {
  id: "standards-confirmed",
  title: "Codes and Standards — Confirmed",
  skills: [
    "ASHRAE 90.1",
    "ASHRAE 55",
    "Seismic and climate-specific building-code coordination",
    "Federal, state, and municipal code considerations",
  ],
};

/**
 * Standards currently being studied. Rendered separately and clearly labeled
 * as in-progress knowledge, not as confirmed professional experience.
 */
export const expandingStandards: SkillGroup = {
  id: "standards-expanding",
  title: "Currently Expanding Knowledge",
  description:
    "Actively studying these data-center and mission-critical standards. Not presented as confirmed professional experience.",
  skills: ["ASHRAE TC 9.9", "TIA-942", "Uptime Institute Tier Standards"],
};
