import type { ResearchItem } from "@/types";

/**
 * Research and technical work, with cfd-agent featured first. Findings are
 * kept defensible — nothing is presented as validated beyond its stated scope.
 */
export const research: ResearchItem[] = [
  {
    slug: "cfd-agent",
    title: "cfd-agent — Natural-Language OpenFOAM Automation",
    question:
      "How can natural-language AI reduce OpenFOAM setup complexity while preserving transparent configuration, deterministic execution, validation, and engineering review?",
    method: [
      "Natural-language interpretation",
      "Typed configuration",
      "Deterministic case generation",
      "Geometry analysis",
      "Automated meshing",
      "Solver execution",
      "Live residual parsing",
      "Geometry–mesh validation",
      "Structured diagnosis",
      "Case-aware interpretation",
    ],
    tools: [
      "Python",
      "OpenFOAM",
      "Anthropic Claude API",
      "Click",
      "Rich",
      "NumPy",
    ],
    finding:
      "A complete vertical workflow can be automated for a controlled simulation class while maintaining explicit configuration, validation checks, and engineering review points.",
    relevance:
      "Reduces repetitive CFD setup work and prevents avoidable workflow failures without removing the engineering decisions required for a trustworthy simulation.",
    status: "Working Prototype",
    relatedProject: "cfd-agent",
    featured: true,
  },
  {
    slug: "data-center-compute-thermal",
    title: "Data Center Compute Thermal Analysis",
    question:
      "How do airflow distribution and heat-sink interface design govern hotspot formation in high-density compute assemblies?",
    method: [
      "Conjugate heat-transfer modeling",
      "k-epsilon turbulence",
      "Boundary-layer and hotspot assessment",
    ],
    tools: ["ANSYS Fluent"],
    finding:
      "Identified three hotspot regions above 85 °C and reduced peak temperature by 12 °C while improving thermal uniformity by 20% through airflow and interface changes.",
    relevance:
      "Demonstrates system-level thermal evaluation for high-density compute — directly applicable to data-center cooling design.",
    status: "Completed",
    relatedProject: "data-center-compute-cfd",
  },
  {
    slug: "heat-exchanger-optimization",
    title: "Heat-Exchanger Optimization",
    question:
      "How can counter-flow plate heat-exchanger geometry be optimized to maximize heating capacity across extreme ambient conditions?",
    method: [
      "Effectiveness-NTU methodology",
      "Conjugate heat-transfer analysis",
      "Fin-geometry optimization",
    ],
    tools: ["ANSYS Fluent", "SolidWorks"],
    finding:
      "Improved heating capacity by 28% and held component temperatures within 35–55 °C across extreme ambient conditions.",
    relevance:
      "Quantifies the trade-off between heat-transfer performance and mechanical packaging constraints.",
    status: "Completed",
    relatedProject: "portable-heat-pump",
  },
  {
    slug: "conjugate-heat-transfer",
    title: "Conjugate Heat-Transfer Analysis",
    question:
      "How should solid–fluid coupling be resolved when evaluating thermal devices with internal flow paths?",
    method: ["Conjugate heat-transfer modeling", "Internal flow optimization"],
    tools: ["ANSYS Fluent", "SolidWorks"],
    finding:
      "Internal flow-geometry optimization maintained operating temperatures within target bands and extended system life.",
    relevance:
      "Establishes a repeatable CHT workflow applicable to power electronics and handheld thermal devices.",
    status: "Completed",
    relatedProject: "portable-heat-pump",
  },
  {
    slug: "thermal-device-development",
    title: "Handheld Thermal Device Development",
    question:
      "Which material and geometry choices prevent thermal degradation in a compact handheld device?",
    method: ["DSC analysis", "Alloy selection (6061-T6, 7075-T73)", "Flow optimization"],
    tools: ["SolidWorks", "ANSYS Fluent"],
    finding:
      "Held operating temperatures within 40–65 °C and extended system life by 25%.",
    relevance:
      "Links material science decisions to measurable thermal and service-life outcomes.",
    status: "Completed",
  },
  {
    slug: "composite-drone-design",
    title: "Composite Drone Component Design",
    question:
      "How can composite drone components be redesigned to reduce mass while preserving FEA stress margins?",
    method: ["Composite design", "FEA", "DFMA"],
    tools: ["SolidWorks", "FEA"],
    finding:
      "Reduced component mass by 20% across more than 12 components while improving FEA stress margins.",
    relevance:
      "Shows structured lightweighting that balances strength, mass, and manufacturability.",
    status: "Completed",
  },
  {
    slug: "iot-environmental-monitoring",
    title: "IoT Environmental Monitoring",
    question:
      "How can distributed sensing improve yield and reduce resource waste in environmental monitoring?",
    method: [
      "Temperature, humidity, and dissolved-oxygen sensing",
      "Cloud analytics integration",
    ],
    tools: ["IoT sensors", "Cloud analytics"],
    finding:
      "Improved yield by 5% and reduced resource waste by 12% through sensor-driven decisions.",
    relevance:
      "Demonstrates closed-loop measurement-to-action systems applicable to facility monitoring.",
    status: "Completed",
  },
  {
    slug: "vibration-controls-instruction",
    title: "Vibration and Controls Laboratory Instruction",
    question:
      "How can laboratory materials be redesigned to strengthen understanding of control-system fundamentals?",
    method: ["Laboratory redesign", "Experiment-based instruction"],
    tools: ["Vibration & controls rigs", "Laboratory instrumentation"],
    finding:
      "Redesigned materials improved undergraduate understanding across 40+ sessions supporting 60+ students.",
    relevance:
      "Reinforces foundational dynamics and controls reasoning used in mechanical and thermal analysis.",
    status: "Completed",
  },
];
