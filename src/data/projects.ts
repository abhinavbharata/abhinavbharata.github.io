import type { Project } from "@/types";

/**
 * All portfolio projects. Content is sourced from the prompt and résumé.
 * Images are placeholders until approved assets are provided. No invented
 * numerical results, mesh counts, residuals, or client identifiers.
 */

const confidentialInfrastructure =
  "Certain project details and visuals are generalized or omitted to protect confidential client and employer information. The critical-infrastructure OEM is not identified.";

export const projects: Project[] = [
  /* ---------------------------------------------------------------------- */
  /* cfd-agent — flagship                                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: "cfd-agent",
    title: "cfd-agent — AI-Powered OpenFOAM CFD Simulation Assistant",
    shortTitle: "cfd-agent",
    tagline: "Natural language to a complete OpenFOAM simulation.",
    category: [
      "CFD",
      "OpenFOAM",
      "Engineering AI",
      "Python",
      "Scientific Computing",
      "Simulation Automation",
      "Software Engineering",
    ],
    status: "Working Prototype",
    period: "Current",
    summary:
      "cfd-agent is an AI-powered command-line engineering assistant that converts a plain-English CFD problem into a structured and runnable OpenFOAM simulation. It supports the workflow from initial physics interpretation and STL geometry analysis through OpenFOAM case generation, meshing, solver execution, convergence monitoring, troubleshooting, and results interpretation. The current v0.1.0 release supports steady-state incompressible internal-flow simulations using simpleFoam, the k-ω SST turbulence model, STL geometry, and snappyHexMesh.",
    problem:
      "OpenFOAM is powerful but has a steep learning curve. A working simulation requires many interdependent field and dictionary files across 0/, constant/, and system/, and the user must understand solver selection, physical models, fluid properties, turbulence models, boundary conditions, geometry units, mesh generation, numerical schemes, linear-solver controls, residuals, convergence, fatal errors, and physical interpretation. Worse, a simulation can sometimes execute even when the geometry scale is wrong, the boundary conditions are inconsistent, the intended geometry was not incorporated into the mesh, or the numerical solution is not physically meaningful.",
    objectives: [
      "Make OpenFOAM easier to use without removing the engineering decisions required for a trustworthy CFD workflow.",
      "Generate complete, deterministic OpenFOAM cases from a typed configuration rather than uncontrolled LLM output.",
      "Catch silent workflow failures — such as a mesh that never captured the supplied geometry — before solver execution.",
      "Provide case-aware diagnosis, explanation, and results interpretation that still require engineering review.",
    ],
    constraints: [
      "Language models must handle interpretation and explanation only; simulation generation, execution, and validation stay deterministic.",
      "Current scope is one controlled problem class (steady incompressible internal flow) before broadening.",
      "AI assistance must not be presented as automatic CFD validation.",
    ],
    role: "Sole developer — CFD knowledge, Python architecture, AI integration, CLI design, testing, and documentation.",
    responsibilities: [
      "Designed the natural-language-to-OpenFOAM workflow and module architecture.",
      "Implemented STL geometry analysis, unit detection, and scaling.",
      "Built deterministic case generation for simpleFoam with k-ω SST.",
      "Implemented the meshing pipeline (blockMesh, surfaceFeatureExtract, snappyHexMesh, checkMesh).",
      "Implemented live solver monitoring with residual parsing and convergence / fatal-error detection.",
      "Implemented the geometry–mesh invariant guard that blocks execution when geometry patches are missing.",
      "Integrated the Anthropic Claude API for interpretation, diagnosis, explanation, and chat.",
      "Applied strict typing, linting, formatting, and an 80% minimum coverage gate.",
    ],
    technologies: [
      "Python 3.10+",
      "OpenFOAM",
      "simpleFoam",
      "snappyHexMesh",
      "blockMesh",
      "surfaceFeatureExtract",
      "checkMesh",
      "k-ω SST",
      "NumPy",
      "numpy-stl",
      "Anthropic Claude API",
      "Click",
      "Rich",
      "Ruff",
      "Mypy (strict)",
      "Pytest",
    ],
    methods: [
      "LLM-to-typed-configuration pipeline",
      "Deterministic file generation",
      "Subprocess orchestration",
      "Regex-based residual and mesh-statistics parsing",
      "Registry-based solver specification",
      "Automated testing with coverage gate",
    ],
    results: [
      "Delivered v0.1.0 — a complete vertical workflow for steady incompressible internal flow.",
      "Automated STL analysis, unit detection, case generation, meshing, solving, monitoring, and interpretation end-to-end.",
      "Introduced a geometry–mesh invariant guard that blocks solver execution when expected geometry patches are absent.",
    ],
    metrics: [
      {
        label: "Release",
        value: "v0.1.0",
        context: "Complete vertical workflow for one CFD problem class.",
      },
      {
        label: "Coverage gate",
        value: "≥ 80%",
        context: "Minimum test coverage enforced in CI.",
      },
      {
        label: "Solver families (long-term target)",
        value: "≈ 60",
        context: "OpenFOAM solver families the architecture is intended to support over time; not currently supported.",
      },
    ],
    images: [
      {
        src: "/projects/cfd-agent/workflow.svg",
        alt: "cfd-agent workflow diagram from natural-language request to results interpretation",
        caption: "End-to-end workflow (representative).",
        placeholder: true,
      },
      {
        src: "/projects/cfd-agent/terminal.svg",
        alt: "Illustrative cfd-agent terminal output showing residual parsing",
        caption: "Illustrative interface demonstration — not actual results.",
        placeholder: true,
      },
    ],
    industry: "Engineering Software / CFD",
    disciplines: [
      "CFD",
      "OpenFOAM",
      "Software Architecture",
      "AI Engineering",
      "Simulation Automation",
    ],
    deliverables: [
      "Click + Rich CLI",
      "Deterministic OpenFOAM case generator",
      "Geometry analysis and unit scaling",
      "Geometry–mesh invariant guard",
      "Live solver monitoring",
      "AI-assisted diagnosis, explanation, and chat",
    ],
    validationMethod:
      "Geometry–mesh invariant validation, checkMesh review, residual and convergence monitoring, and engineering review of generated cases.",
    designProcess: [
      "Scope the v0.1.0 problem class: steady incompressible internal flow with STL geometry and snappyHexMesh.",
      "Separate AI interpretation from deterministic generation so configurations are explicit and reviewable.",
      "Add engineering safeguards (unit scaling, geometry–mesh guard) that fail loudly instead of silently.",
      "Wrap OpenFOAM subprocess execution with live parsing for residuals, mesh statistics, and fatal errors.",
    ],
    analysis: [
      "STL bounding-box, surface-area, and coordinate-range analysis drive automatic unit detection.",
      "millimeter-to-meter scaling is applied when geometry appears to use millimeter units, as an engineering safeguard to be reviewed.",
      "constant/polyMesh/boundary is inspected to confirm expected geometry-derived patches are present before solving.",
    ],
    architecture: [
      "cfd_agent/agent.py — Claude API integration, interpretation, case-aware chat, diagnosis, results interpretation, file explanation.",
      "cfd_agent/case_generator.py — directory creation, boundary-condition fields, transport and turbulence configuration, solver controls, numerical schemes, mesh dictionaries, decomposition settings.",
      "cfd_agent/runner.py — OpenFOAM subprocess execution, meshing pipeline, solver execution, live output, residual and mesh-statistics parsing, convergence and fatal-error detection, geometry–mesh invariant validation.",
      "cfd_agent/geometry.py — STL loading, bounding box, surface area, unit detection, scaling, boundary analysis, geometry warnings.",
      "cfd_agent/cli.py — Click commands, Rich interface, prompts, progress, workflow orchestration, user-facing errors.",
      "cfd_agent/config.py — solver registry, turbulence models, fluid definitions, supported configurations, validation rules.",
      "cfd_agent/exceptions.py — base exception, configuration/STL/meshing/solver errors, geometry–mesh mismatch, consistent reporting.",
    ],
    validation: [
      "Geometry–Mesh Invariant Guard: verifies snappyHexMesh incorporated the supplied STL by inspecting constant/polyMesh/boundary; raises GeometryMeshMismatchError and blocks solving when expected patches are absent.",
      "checkMesh statistics are parsed and reported for engineering review.",
      "Residual streaming, convergence detection, and fatal-error monitoring surface solver state live.",
      "Principle: a completed software command is not necessarily a valid engineering state.",
    ],
    lessons: [
      "A meshing command can complete successfully while leaving only the background box — silent failures are the most dangerous.",
      "Deterministic generation from a typed configuration is more trustworthy than free-form LLM file output.",
      "Reducing setup friction is valuable only if the tool still forces engineering review at the right points.",
    ],
    roadmap: [
      "Compressible flow",
      "Heat transfer",
      "Conjugate heat transfer",
      "Multiphase VOF",
      "Combustion",
      "Transient flow",
      "Laminar flow",
      "External aerodynamics",
      "Buoyancy-driven flow",
      "Rotating machinery",
      "cfMesh",
      "2D simulations",
      "Wedge cases",
      "Expanded parallel execution",
      "Additional geometry workflows",
    ],
    confidentialityNote:
      "Roadmap items are in development and not described as currently working. The long-term architecture is intended to support a significant portion of OpenFOAM's approximately 60 solver families through structured solver specifications; current support is one problem class only.",
    relatedProjects: [
      "data-center-compute-cfd",
      "hybrid-inverter-cooling",
      "portable-heat-pump",
    ],
    featured: false,
    seoTitle: "cfd-agent | AI-Powered OpenFOAM Simulation Assistant",
    seoDescription:
      "cfd-agent is a Python-based engineering assistant that converts natural-language CFD requirements into structured OpenFOAM cases with automated geometry analysis, meshing, solver monitoring, diagnostics, and results interpretation.",
  },

  /* ---------------------------------------------------------------------- */
  /* AC Power Module Heat-Load Testing                                       */
  /* ---------------------------------------------------------------------- */
  {
    slug: "ac-power-module-testing",
    title: "AC Power Module Heat-Load Testing and Thermal Validation",
    shortTitle: "AC Power Module Testing",
    tagline:
      "Staged heat-load validation of 480 V AC three-phase power modules under N+1 redundancy.",
    category: ["Testing and Validation", "Data Centers", "Thermal Engineering"],
    status: "Completed",
    period: "Current assignment",
    summary:
      "Planned and executed staged heat-load testing of 480 V AC three-phase power modules, instrumenting the enclosure to verify thermal acceptance criteria across 25%, 50%, 75%, and 100% load under an N+1 redundancy configuration.",
    problem:
      "Power modules and UPS systems in mission-critical enclosures must be shown to hold the enclosure temperature target of 23 ± 5 °C across their full operating envelope without corrective action. Heat-load validation requires careful instrumentation planning, controlled load staging, and rigorous result evaluation.",
    objectives: [
      "Plan instrumentation and acceptance criteria before testing.",
      "Capture temperature and airflow data across 25/50/75/100% load stages.",
      "Verify functional performance under N+1 redundancy.",
      "Support FAT, SAT, and commissioning with defensible evidence.",
    ],
    constraints: [
      "No numerical readings beyond what is measured and recorded.",
      "Enclosure temperature target fixed at 23 ± 5 °C.",
      "Acceptance criteria defined before testing.",
    ],
    role: "Thermal validation engineer — instrumentation planning, execution, analysis, and reporting.",
    responsibilities: [
      "Specified instrumentation: optical-fiber thermocouples, calibrated temperature loggers, and airflow meters for CFM measurement.",
      "Defined acceptance criteria and the staged load profile.",
      "Collected temperature and airflow data across load stages.",
      "Performed thermal analysis and result evaluation.",
      "Supported FAT/SAT and functional-performance validation.",
    ],
    technologies: [
      "Optical-fiber thermocouples",
      "Calibrated temperature loggers",
      "Airflow meters (CFM)",
      "480 V AC three-phase power modules",
    ],
    methods: [
      "Instrumentation planning",
      "Staged load testing (25/50/75/100%)",
      "N+1 redundancy validation",
      "Acceptance-criteria-based evaluation",
    ],
    results: [
      "The design passed the defined acceptance criteria without corrective action.",
      "Thermal performance verified across 25%, 50%, 75%, and 100% load under N+1 redundancy.",
    ],
    metrics: [
      {
        label: "Load stages",
        value: "25 / 50 / 75 / 100%",
        context: "Staged heat-load validation of power modules.",
      },
      {
        label: "Redundancy",
        value: "N+1",
        context: "Validated configuration during heat-load testing.",
      },
      {
        label: "Enclosure target",
        value: "23 ± 5 °C",
        context: "Acceptance criterion; passed without corrective action.",
      },
    ],
    images: [
      {
        src: "/projects/ac-power-module-testing/setup.svg",
        alt: "Heat-load test setup with power modules and sensor locations",
        caption: "Placeholder — test setup and sensor locations.",
        placeholder: true,
      },
      {
        src: "/projects/ac-power-module-testing/acceptance.svg",
        alt: "Acceptance matrix across load stages",
        caption: "Placeholder — acceptance matrix.",
        placeholder: true,
      },
    ],
    industry: "Data Center / Mission-Critical Infrastructure",
    disciplines: [
      "Testing & Validation",
      "Thermal Engineering",
      "Commissioning",
    ],
    deliverables: [
      "Instrumentation plan",
      "Staged load profile and acceptance criteria",
      "Heat-load test report",
      "FAT/SAT support",
    ],
    validationMethod:
      "Staged heat-load testing against pre-defined acceptance criteria with optical-fiber thermocouples, calibrated loggers, and airflow meters.",
    designProcess: [
      "Defined acceptance criteria and instrumentation before testing.",
      "Executed the staged load profile (25/50/75/100%) under N+1 redundancy.",
      "Evaluated results against criteria and documented the outcome.",
    ],
    analysis: [
      "Temperature histories reviewed against the 23 ± 5 °C enclosure target.",
      "Airflow (CFM) mapped to confirm adequate cooling distribution.",
      "Functional performance confirmed at each load stage.",
    ],
    lessons: [
      "Pre-defining acceptance criteria keeps validation objective and defensible.",
      "Staged loading under N+1 surfaces redundancy behavior that single-point tests miss.",
    ],
    confidentialityNote: confidentialInfrastructure,
    relatedProjects: ["modular-data-center-design", "data-center-compute-cfd"],
    featured: true,
    seoTitle: "AC Power Module Heat-Load Testing | Thermal Validation",
    seoDescription:
      "Staged heat-load testing and thermal validation of 480 V AC three-phase power modules under N+1 redundancy, with optical-fiber thermocouples, calibrated loggers, and airflow measurement.",
  },

  /* ---------------------------------------------------------------------- */
  /* Modular Data Center Infrastructure                                      */
  /* ---------------------------------------------------------------------- */
  {
    slug: "modular-data-center-design",
    title: "Modular Data Center Enclosures and Power Infrastructure",
    shortTitle: "Modular Data Center",
    tagline:
      "Mechanical BIM for modular data-center enclosures, power skids, and power houses.",
    category: ["Data Centers", "BIM", "Thermal Engineering"],
    status: "Ongoing",
    period: "Current assignment",
    summary:
      "Produce mechanical BIM construction documents for modular data-center enclosures, power skids, and power houses across SD, DD, and CD phases, coordinating mechanical design, thermal integration, enclosure systems, and validation.",
    problem:
      "Modular data-center infrastructure must integrate mechanical equipment arrangement, cooling interfaces, penetrations, and sealing across multiple disciplines while remaining constructable, serviceable, and leak-tight over the enclosure life.",
    objectives: [
      "Deliver mechanical BIM across SD, DD, and CD phases.",
      "Coordinate mechanical, electrical, structural, manufacturing, and fire-protection disciplines.",
      "Resolve wall and enclosure penetrations, leakage, and sealing problems.",
      "Support constructability, service access, and factory walk-throughs.",
    ],
    constraints: [
      "Mechanical-design scope only — not full ownership of electrical power-distribution architecture.",
      "Confidential OEM; details generalized to protect client information.",
    ],
    role: "Senior mechanical/BIM engineer — design, coordination, and remediation.",
    responsibilities: [
      "Produce mechanical BIM construction documents for enclosures, power skids, and power houses.",
      "Arrange mechanical equipment and cooling interfaces.",
      "Coordinate cross-discipline clash resolution.",
      "Develop remediation proposals for penetrations, leakage, and sealing.",
      "Develop BIM families and support factory walk-throughs.",
    ],
    technologies: [
      "Revit",
      "Autodesk Inventor",
      "BIM coordination",
      "SD/DD/CD documentation",
    ],
    methods: [
      "BIM coordination",
      "Penetration and leakage remediation",
      "Constructability and service-access review",
      "Factory walk-through support",
    ],
    results: [
      "Delivered coordinated mechanical BIM across SD, DD, and CD phases.",
      "Resolved enclosure penetrations and leakage through documented remediation proposals.",
      "Supported factory walk-throughs and validation activities.",
    ],
    metrics: [
      {
        label: "Documentation phases",
        value: "SD / DD / CD",
        context: "Mechanical BIM deliverables for modular infrastructure.",
      },
      {
        label: "Disciplines coordinated",
        value: "5+",
        context: "Mechanical, electrical, structural, manufacturing, fire-protection.",
      },
    ],
    images: [
      {
        src: "/projects/modular-data-center-design/enclosure.svg",
        alt: "Modular data-center enclosure BIM arrangement",
        caption: "Placeholder — modular enclosure arrangement.",
        placeholder: true,
      },
      {
        src: "/projects/modular-data-center-design/power-skid.svg",
        alt: "Power skid mechanical equipment arrangement",
        caption: "Placeholder — power skid layout.",
        placeholder: true,
      },
    ],
    industry: "Data Center / Mission-Critical Infrastructure",
    disciplines: [
      "Data Center Infrastructure",
      "BIM",
      "Mechanical Design",
      "Thermal Engineering",
    ],
    deliverables: [
      "SD/DD/CD mechanical BIM",
      "Mechanical equipment arrangement",
      "Penetration and leakage remediation proposals",
      "BIM families",
    ],
    validationMethod:
      "Factory walk-throughs and functional-performance review; heat-load validation covered in the AC power module project.",
    lessons: [
      "Cross-discipline coordination is where most modular-infrastructure risk lives.",
      "Leakage and sealing are mechanical issues that compound if not caught during BIM coordination.",
    ],
    confidentialityNote: confidentialInfrastructure,
    relatedProjects: ["liquid-cooling-bim", "ac-power-module-testing"],
    featured: true,
    seoTitle: "Modular Data Center Enclosures & Power Infrastructure | BIM",
    seoDescription:
      "Mechanical Revit BIM for modular data-center enclosures, power skids, and power houses across SD, DD, and CD phases, with cross-discipline coordination and leakage remediation.",
  },

  /* ---------------------------------------------------------------------- */
  /* Liquid-Cooling BIM Development                                          */
  /* ---------------------------------------------------------------------- */
  {
    slug: "liquid-cooling-bim",
    title: "Liquid-Cooling BIM Development",
    shortTitle: "Liquid-Cooling BIM",
    tagline:
      "BIM-ready liquid-cooling content: coolant runs, cooling members, drip trays, and piping.",
    category: ["BIM", "Data Centers", "Thermal Engineering"],
    status: "Ongoing",
    period: "Current assignment",
    summary:
      "Develop BIM-ready liquid-cooling content — coolant distribution runs, cooling members, drip trays, and piping — including parametric Revit families and Autodesk Inventor redesigns for BIM integration.",
    problem:
      "Liquid-cooling systems must be modeled with enough parametric flexibility to route coolant distribution, integrate cooling members and drip trays, and coordinate with mechanical equipment interfaces while remaining maintainable and leak-conscious.",
    objectives: [
      "Deliver parametric, BIM-ready liquid-cooling families.",
      "Route coolant distribution runs and piping with maintainability in mind.",
      "Integrate cooling members and drip trays with mechanical equipment.",
      "Coordinate across mechanical and adjacent disciplines.",
    ],
    constraints: [
      "Families must be parametric to support varied enclosure layouts.",
      "Leakage and serviceability considered throughout.",
    ],
    role: "Mechanical/BIM engineer — family development, routing, and Inventor redesign.",
    responsibilities: [
      "Developed parametric Revit families for liquid-cooling components.",
      "Modeled coolant distribution runs, cooling members, drip trays, and piping.",
      "Redesigned components in Autodesk Inventor for BIM integration.",
      "Coordinated mechanical equipment interfaces across disciplines.",
    ],
    technologies: ["Revit", "Autodesk Inventor", "Parametric BIM families"],
    methods: [
      "Parametric family development",
      "Coolant routing and piping layout",
      "Maintainability and leakage review",
      "Cross-discipline coordination",
    ],
    results: [
      "Produced BIM-ready liquid-cooling content integrated with mechanical equipment.",
      "Improved maintainability through routing and drip-tray design.",
    ],
    metrics: [
      {
        label: "Component types",
        value: "Coolant runs · members · drip trays · piping",
        context: "Parametric Revit families delivered for liquid cooling.",
      },
    ],
    images: [
      {
        src: "/projects/liquid-cooling-bim/routing.svg",
        alt: "Liquid-cooling pipe routing in a Revit model",
        caption: "Placeholder — coolant pipe routing.",
        placeholder: true,
      },
      {
        src: "/projects/liquid-cooling-bim/family.svg",
        alt: "Parametric liquid-cooling Revit family",
        caption: "Placeholder — parametric family.",
        placeholder: true,
      },
    ],
    industry: "Data Center / Mission-Critical Infrastructure",
    disciplines: ["BIM", "Thermal Engineering", "Mechanical Design"],
    deliverables: [
      "Parametric Revit families",
      "Coolant distribution routing",
      "Inventor redesigns for BIM integration",
    ],
    validationMethod:
      "Coordination review and maintainability/leakage assessment within the BIM model.",
    lessons: [
      "Parametric families pay off across many enclosure variants.",
      "Drip-tray and routing decisions made in BIM prevent serviceability problems later.",
    ],
    confidentialityNote: confidentialInfrastructure,
    relatedProjects: ["modular-data-center-design", "ac-power-module-testing"],
    featured: true,
    seoTitle: "Liquid-Cooling BIM Development | Revit & Inventor",
    seoDescription:
      "BIM-ready liquid-cooling content in Revit and Autodesk Inventor: coolant distribution runs, cooling members, drip trays, piping, and parametric families for data-center infrastructure.",
  },

  /* ---------------------------------------------------------------------- */
  /* Portable Heat Pump System                                              */
  /* ---------------------------------------------------------------------- */
  {
    slug: "portable-heat-pump",
    title: "Portable Heat Pump System",
    shortTitle: "Portable Heat Pump",
    tagline:
      "Counter-flow plate heat-exchanger optimization improving heating capacity by 28%.",
    category: ["Thermal Engineering", "CFD", "Product Development"],
    status: "Completed",
    period: "Graduate work",
    summary:
      "Designed a portable heat pump around a plate-type heat exchanger, applying conjugate heat-transfer analysis and the effectiveness-NTU method to a counter-flow configuration with fin-geometry optimization.",
    problem:
      "A compact, portable heat pump must deliver meaningful heating capacity across extreme ambient conditions while keeping component temperatures within a safe band and remaining mechanically packageable.",
    objectives: [
      "Maximize heating capacity with a counter-flow plate heat exchanger.",
      "Maintain component temperatures within 35–55 °C.",
      "Validate performance under extreme ambient conditions.",
      "Package the system mechanically.",
    ],
    constraints: [
      "Compact mechanical envelope.",
      "Performance targets tied to extreme ambient operation.",
    ],
    role: "Thermal/design engineer — analysis, geometry optimization, and packaging.",
    responsibilities: [
      "Modeled a plate-type heat exchanger in counter-flow configuration.",
      "Applied conjugate heat-transfer analysis and the effectiveness-NTU method.",
      "Optimized fin geometry for heating capacity.",
      "Defined active cooling pathways and mechanical packaging.",
    ],
    technologies: ["ANSYS Fluent", "SolidWorks", "Effectiveness-NTU"],
    methods: [
      "Conjugate heat-transfer analysis",
      "Effectiveness-NTU methodology",
      "Counter-flow configuration",
      "Fin-geometry optimization",
      "Extreme-ambient analysis",
    ],
    results: [
      "Improved heating capacity by 28%.",
      "Maintained component temperatures within 35–55 °C.",
      "Validated behavior under extreme ambient conditions.",
    ],
    metrics: [
      {
        label: "Heating capacity",
        value: "+28%",
        context: "Improvement from counter-flow and fin-geometry optimization.",
      },
      {
        label: "Component temps",
        value: "35–55 °C",
        context: "Maintained across extreme ambient conditions.",
      },
    ],
    images: [
      {
        src: "/projects/portable-heat-pump/hx.svg",
        alt: "Counter-flow plate heat exchanger model",
        caption: "Placeholder — plate heat-exchanger model.",
        placeholder: true,
      },
    ],
    industry: "Thermal / Product Development",
    disciplines: ["Thermal Engineering", "CFD", "Product Development"],
    deliverables: [
      "Heat-exchanger design and analysis",
      "Fin-geometry optimization",
      "Mechanical packaging concept",
    ],
    validationMethod: "Conjugate heat-transfer simulation with effectiveness-NTU checks.",
    lessons: [
      "Effectiveness-NTU gives a fast, defensible sanity check against CFD results.",
      "Fin-geometry gains are real but must be weighed against packaging pressure drop.",
    ],
    relatedProjects: ["hybrid-inverter-cooling", "data-center-compute-cfd"],
    featured: true,
    seoTitle: "Portable Heat Pump System | Thermal & CFD Design",
    seoDescription:
      "Portable heat pump design using a counter-flow plate heat exchanger, conjugate heat-transfer analysis, effectiveness-NTU, and fin-geometry optimization, improving heating capacity by 28%.",
  },

  /* ---------------------------------------------------------------------- */
  /* Hybrid Inverter and Air-Conditioning System                            */
  /* ---------------------------------------------------------------------- */
  {
    slug: "hybrid-inverter-cooling",
    title: "Hybrid Inverter and Air-Conditioning System",
    shortTitle: "Hybrid Inverter Cooling",
    tagline:
      "Inverter cooling + AC integration: 18% thermal-efficiency gain, 22% fewer parts.",
    category: ["Thermal Engineering", "CFD", "Product Development"],
    status: "Completed",
    period: "2024–2026",
    summary:
      "Led development of a compact hybrid inverter and air-conditioning system for 3 kW and 6 kW power systems, integrating inverter cooling and air-conditioning into a single mechanical enclosure with CFD-driven thermal distribution.",
    problem:
      "Combining inverter cooling and air-conditioning in one compact enclosure risks hotspots, part-count bloat, and long design-to-validation cycles. The system had to improve thermal efficiency while becoming simpler and faster to validate.",
    objectives: [
      "Integrate inverter cooling and air-conditioning in a compact layout.",
      "Improve thermal efficiency and reduce component count.",
      "Shorten the design-to-validation cycle.",
      "Coordinate mechanical, electrical, and firmware design reviews.",
    ],
    constraints: [
      "3 kW and 6 kW power-system variants.",
      "Prototype thermal performance within 5% of targets.",
    ],
    role: "Thermal and systems design lead — promoted from CAD/simulation to design leadership.",
    responsibilities: [
      "Designed mechanical enclosures and thermal-distribution layouts.",
      "Ran CFD and structural simulation.",
      "Applied DFMA across the assembly.",
      "Coordinated mechanical, electrical, and firmware design reviews.",
      "Validated prototypes against thermal targets.",
    ],
    technologies: [
      "SolidWorks",
      "SolidWorks Simulation",
      "ANSYS Fluent",
      "DFMA",
    ],
    methods: [
      "CFD thermal-distribution analysis",
      "Structural simulation",
      "DFMA",
      "Prototype validation",
      "Multidisciplinary design reviews",
    ],
    results: [
      "Improved thermal efficiency by 18%.",
      "Reduced component count by 22%.",
      "Reduced the design-to-validation cycle from 16 weeks to 10 weeks.",
      "Maintained prototypes within 5% of thermal-performance targets.",
    ],
    metrics: [
      {
        label: "Thermal efficiency",
        value: "+18%",
        context: "Hybrid inverter + air-conditioning system.",
      },
      {
        label: "Component count",
        value: "−22%",
        context: "Reduction through DFMA and layout integration.",
      },
      {
        label: "Design-to-validation",
        value: "16 → 10 weeks",
        context: "Cycle reduction across the development program.",
      },
    ],
    images: [
      {
        src: "/projects/hybrid-inverter-cooling/enclosure.svg",
        alt: "Hybrid inverter and air-conditioning mechanical enclosure",
        caption: "Placeholder — compact system enclosure.",
        placeholder: true,
      },
    ],
    industry: "Power Electronics / Product Development",
    disciplines: [
      "Thermal Engineering",
      "CFD",
      "Product Development",
      "Mechanical Design",
    ],
    deliverables: [
      "Mechanical enclosure design",
      "Thermal-distribution layout",
      "DFMA-optimized assembly",
      "Validated prototypes",
    ],
    validationMethod:
      "CFD and structural simulation plus prototype testing against thermal targets.",
    lessons: [
      "Integrating functions reduces part count but raises thermal-distribution complexity.",
      "Design reviews across mechanical, electrical, and firmware are what made the 16→10-week cycle possible.",
    ],
    relatedProjects: ["portable-heat-pump", "data-center-compute-cfd", "cfd-agent"],
    featured: true,
    seoTitle: "Hybrid Inverter & Air-Conditioning Cooling | Thermal Design",
    seoDescription:
      "Compact hybrid inverter and air-conditioning system for 3 kW and 6 kW power systems: 18% thermal-efficiency improvement, 22% component-count reduction, and a 16-to-10-week design-cycle reduction.",
  },

  /* ---------------------------------------------------------------------- */
  /* Data Center Compute Thermal Analysis (CFD)                             */
  /* ---------------------------------------------------------------------- */
  {
    slug: "data-center-compute-cfd",
    title: "Data Center Compute Thermal Analysis",
    shortTitle: "Compute Thermal CFD",
    tagline:
      "CHT analysis of a high-density compute assembly: −12 °C peak, +20% uniformity.",
    category: ["CFD", "Data Centers", "Thermal Engineering"],
    status: "Completed",
    period: "Graduate work",
    summary:
      "Performed conjugate heat-transfer analysis of a high-density compute assembly in ANSYS Fluent using the k-epsilon turbulence model, identifying and mitigating hotspot regions through airflow and heat-sink interface changes.",
    problem:
      "High-density compute assemblies develop localized hotspots that threaten reliability. Airflow distribution (0.5–5 m/s), aluminum heat-sink interfaces, and boundary-layer effects all interact to govern peak temperatures.",
    objectives: [
      "Model conjugate heat transfer in a high-density compute assembly.",
      "Identify and mitigate hotspot regions.",
      "Improve thermal uniformity across the assembly.",
    ],
    constraints: [
      "No invented mesh counts or solver residuals.",
      "Airflow range 0.5–5 m/s; aluminum heat-sink interfaces.",
    ],
    role: "CFD engineer — model setup, analysis, and design recommendations.",
    responsibilities: [
      "Built the conjugate heat-transfer model in ANSYS Fluent.",
      "Applied the k-epsilon turbulence model.",
      "Assessed boundary-layer effects and hotspot formation.",
      "Evaluated airflow and heat-sink interface changes.",
    ],
    technologies: ["ANSYS Fluent", "k-epsilon", "Conjugate heat transfer"],
    methods: [
      "Conjugate heat-transfer modeling",
      "k-epsilon turbulence",
      "Hotspot and boundary-layer assessment",
      "Before/after comparison",
    ],
    results: [
      "Identified three hotspot regions exceeding 85 °C.",
      "Reduced peak temperature by 12 °C.",
      "Improved thermal uniformity by 20%.",
    ],
    metrics: [
      {
        label: "Hotspots",
        value: "3 regions > 85 °C",
        context: "Identified before mitigation.",
      },
      {
        label: "Peak temperature",
        value: "−12 °C",
        context: "Reduction after airflow and interface changes.",
      },
      {
        label: "Thermal uniformity",
        value: "+20%",
        context: "Improvement across the assembly.",
      },
    ],
    images: [
      {
        src: "/projects/data-center-compute-cfd/domain.svg",
        alt: "Computational domain and mesh for the compute assembly",
        caption: "Placeholder — computational domain and mesh.",
        placeholder: true,
      },
      {
        src: "/projects/data-center-compute-cfd/contours.svg",
        alt: "Velocity and temperature contours with hotspot locations",
        caption: "Placeholder — velocity/temperature contours and hotspots.",
        placeholder: true,
      },
    ],
    industry: "Data Center / Thermal Engineering",
    disciplines: ["CFD", "Thermal Engineering", "Data Center Infrastructure"],
    deliverables: [
      "Conjugate heat-transfer model",
      "Hotspot assessment",
      "Mitigation recommendations and before/after comparison",
    ],
    validationMethod:
      "Conjugate heat-transfer simulation in ANSYS Fluent; mesh and residuals to be confirmed with actual case data.",
    lessons: [
      "Hotspots are often a boundary-layer and interface problem, not just a bulk-flow problem.",
      "Reporting peak reduction alongside uniformity gives a more honest picture than either alone.",
    ],
    relatedProjects: ["cfd-agent", "modular-data-center-design", "portable-heat-pump"],
    featured: true,
    seoTitle: "Data Center Compute Thermal Analysis | CFD",
    seoDescription:
      "Conjugate heat-transfer CFD of a high-density compute assembly in ANSYS Fluent with k-epsilon turbulence: identified three hotspots above 85 °C, cut peak temperature by 12 °C, and improved thermal uniformity by 20%.",
  },
];

/* ----------------------------- selectors ------------------------------- */

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getRelatedProjects(slug: string): Project[] {
  const project = getProjectBySlug(slug);
  if (!project?.relatedProjects?.length) return [];
  return project.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter((p): p is Project => Boolean(p));
}

/** Distinct, ordered category list for the projects filter bar. */
export function getProjectCategories(): string[] {
  const order = [
    "All",
    "Data Centers",
    "Thermal Engineering",
    "CFD",
    "BIM",
    "Product Development",
    "Testing and Validation",
    "Engineering AI",
    "Research",
    "Software Engineering",
  ];
  const present = new Set(projects.flatMap((p) => p.category));
  return order.filter((c, i) => i === 0 || present.has(c));
}
