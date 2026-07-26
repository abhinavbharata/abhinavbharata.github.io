import type { CapabilityCard, Metric, PhilosophyPrinciple } from "@/types";

/** Four professional specialties shown on the home page (§12). */
export const capabilityCards: CapabilityCard[] = [
  {
    id: "data-center",
    title: "Data Center Infrastructure",
    points: [
      "Modular data-center enclosures",
      "Power skids",
      "Power houses",
      "Cooling integration",
      "Revit BIM documents",
      "FAT/SAT support",
    ],
  },
  {
    id: "thermal",
    title: "Thermal Engineering",
    points: [
      "Heat-load analysis",
      "HVAC",
      "Liquid cooling",
      "Glycol cooling loops",
      "Conjugate heat transfer",
      "Thermal validation",
    ],
  },
  {
    id: "cfd",
    title: "CFD and Simulation",
    points: [
      "ANSYS Fluent",
      "OpenFOAM",
      "Airflow analysis",
      "Heat transfer",
      "Turbulence modeling",
      "Design optimization",
    ],
  },
  {
    id: "automation",
    title: "Engineering Automation",
    points: [
      "Python",
      "Natural-language interfaces",
      "Simulation workflow automation",
      "Live process monitoring",
      "AI-assisted diagnostics",
      "Validation guards",
    ],
  },
];

/** Engineering metrics with context so none read as a universal claim (§12). */
export const engineeringMetrics: Metric[] = [
  {
    value: "7+",
    label: "Years of engineering experience",
    context: "Across thermal, CFD, mechanical, product, and infrastructure work.",
  },
  {
    value: "50+",
    label: "CFD & simulation projects",
    context: "ANSYS Fluent and OpenFOAM analyses over the career.",
  },
  {
    value: "+18%",
    label: "Thermal-efficiency improvement",
    context: "Hybrid inverter and air-conditioning system.",
  },
  {
    value: "−22%",
    label: "Component-count reduction",
    context: "Through DFMA and layout integration.",
  },
  {
    value: "16 → 10 wks",
    label: "Design-cycle reduction",
    context: "Design-to-validation cycle on the hybrid system program.",
  },
  {
    value: "25/50/75/100%",
    label: "Heat-load validation stages",
    context: "Power-module testing under N+1 redundancy.",
  },
  {
    value: "N+1",
    label: "Redundancy validation",
    context: "Verified during staged heat-load testing.",
  },
  {
    value: "±5%",
    label: "Prototype vs. thermal target",
    context: "Maintained within 5% of thermal-performance targets.",
  },
];

export const philosophy: PhilosophyPrinciple[] = [
  {
    text: "Simulation should reduce uncertainty, not replace physical validation.",
  },
  {
    text: "Automation should reduce repetitive work without hiding engineering assumptions.",
  },
  {
    text: "Reliable infrastructure requires mechanical, thermal, electrical, structural, and operational coordination.",
  },
];

/** About-page engineering philosophy principles (§13). */
export const aboutPhilosophy: string[] = [
  "Design decisions should be supported by analysis and testing.",
  "Thermal performance must be evaluated at system level.",
  "Simulation should complement physical validation.",
  "Good engineering balances performance, reliability, manufacturability, serviceability, cost, and safety.",
  "Cross-disciplinary coordination is essential in mission-critical infrastructure.",
  "Automation should expose important assumptions rather than hide them.",
  "Successful software execution does not automatically prove engineering validity.",
];
