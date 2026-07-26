/**
 * Structured content for the cfd-agent flagship page. Kept separate so the
 * page component stays declarative. Commands, modules, and the workflow match
 * the project specification; illustrative outputs are clearly labeled.
 */

export type CfdAgentCommand = {
  command: string;
  stage: string;
  function: string;
};

export const cfdAgentCommands: CfdAgentCommand[] = [
  {
    command: "cfd-agent init <case>",
    stage: "Setup",
    function:
      "Interprets the engineering description, analyzes STL geometry, requests fluid and boundary-condition details, and creates the complete OpenFOAM case.",
  },
  {
    command: "cfd-agent analyze <stl>",
    stage: "Geometry",
    function:
      "Calculates the bounding box and surface area, identifies likely units, detects boundaries, and displays warnings.",
  },
  {
    command: "cfd-agent mesh",
    stage: "Meshing",
    function:
      "Runs blockMesh, surfaceFeatureExtract, snappyHexMesh, and checkMesh, then reports mesh-quality statistics.",
  },
  {
    command: "cfd-agent run",
    stage: "Solve",
    function:
      "Runs the configured solver with live residual streaming, convergence detection, and fatal-error monitoring.",
  },
  {
    command: "cfd-agent results",
    stage: "Post-processing",
    function:
      "Extracts residuals, runtime, and convergence information and provides AI-assisted physical interpretation.",
  },
  {
    command: "cfd-agent chat",
    stage: "Expert assistance",
    function:
      "Opens an interactive conversation with the current simulation loaded as context.",
  },
  {
    command: "cfd-agent explain <file>",
    stage: "Documentation",
    function: "Explains an OpenFOAM file in plain English.",
  },
  {
    command: "cfd-agent status",
    stage: "Monitoring",
    function:
      "Reports whether the simulation is complete, failed, incomplete, or awaiting another stage.",
  },
];

export const cfdAgentWorkflow: string[] = [
  "Plain-English Engineering Request",
  "AI Physics Interpretation",
  "Typed Simulation Configuration",
  "STL Geometry Analysis",
  "Unit and Scale Validation",
  "OpenFOAM Case Generation",
  "blockMesh",
  "surfaceFeatureExtract",
  "snappyHexMesh",
  "checkMesh",
  "Geometry–Mesh Invariant Validation",
  "OpenFOAM Solver Execution",
  "Live Residual Monitoring",
  "Convergence and Error Detection",
  "AI-Assisted Results Interpretation",
];

export type CfdAgentModule = {
  name: string;
  responsibilities: string[];
};

export const cfdAgentModules: CfdAgentModule[] = [
  {
    name: "agent.py",
    responsibilities: [
      "Claude API integration",
      "Natural-language interpretation",
      "Case-aware chat",
      "Error diagnosis",
      "Results interpretation",
      "File explanation",
    ],
  },
  {
    name: "case_generator.py",
    responsibilities: [
      "Directory creation",
      "Boundary-condition fields",
      "Transport properties",
      "Turbulence configuration",
      "Solver controls",
      "Numerical schemes",
      "Mesh dictionaries",
      "Decomposition settings",
    ],
  },
  {
    name: "runner.py",
    responsibilities: [
      "OpenFOAM subprocess execution",
      "Meshing pipeline",
      "Solver execution",
      "Live output",
      "Residual parsing",
      "Mesh-statistics parsing",
      "Convergence detection",
      "Fatal-error detection",
      "Geometry–mesh invariant validation",
    ],
  },
  {
    name: "geometry.py",
    responsibilities: [
      "STL loading",
      "Bounding box",
      "Surface area",
      "Unit detection",
      "Scaling",
      "Boundary analysis",
      "Geometry warnings",
    ],
  },
  {
    name: "cli.py",
    responsibilities: [
      "Click commands",
      "Rich interface",
      "User prompts",
      "Progress output",
      "Workflow orchestration",
      "User-facing errors",
    ],
  },
  {
    name: "config.py",
    responsibilities: [
      "Solver registry",
      "Turbulence models",
      "Fluid definitions",
      "Supported configurations",
      "Validation rules",
    ],
  },
  {
    name: "exceptions.py",
    responsibilities: [
      "Base exception",
      "Configuration errors",
      "STL errors",
      "Meshing errors",
      "Solver errors",
      "Geometry–mesh mismatch",
      "Consistent error reporting",
    ],
  },
];

export const cfdAgentStack: { group: string; items: string[] }[] = [
  {
    group: "CFD",
    items: [
      "OpenFOAM",
      "simpleFoam",
      "blockMesh",
      "surfaceFeatureExtract",
      "snappyHexMesh",
      "checkMesh",
      "k-ω SST turbulence",
    ],
  },
  {
    group: "Programming",
    items: [
      "Python 3.10+",
      "NumPy",
      "numpy-stl",
      "Subprocess management",
      "Regular expressions",
      "Typed configuration",
    ],
  },
  {
    group: "AI",
    items: [
      "Anthropic Claude API",
      "Natural-language interpretation",
      "Error diagnosis",
      "Technical explanation",
      "Results interpretation",
      "Case-aware chat",
    ],
  },
  {
    group: "CLI",
    items: [
      "Click",
      "Rich",
      "Live progress",
      "Residual streaming",
      "Structured status output",
    ],
  },
  {
    group: "Quality",
    items: [
      "pyproject.toml",
      "Setuptools",
      "Ruff",
      "Mypy with strict typing",
      "Pytest",
      "Coverage gate ≥ 80%",
    ],
  },
];

export const cfdAgentCurrentRelease: string[] = [
  "Steady-state flow",
  "Incompressible fluid",
  "Internal-flow application",
  "simpleFoam",
  "k-ω SST",
  "STL geometry",
  "blockMesh",
  "surfaceFeatureExtract",
  "snappyHexMesh",
  "checkMesh",
  "Full case generation",
  "Geometry analysis",
  "Unit scaling",
  "Geometry–mesh invariant validation",
  "Solver execution",
  "Live residual streaming",
  "Convergence detection",
  "Fatal-error detection",
  "Results extraction",
  "AI-assisted diagnosis",
  "AI-assisted interpretation",
  "Case-aware chat",
  "File explanation",
];

/** Representative interpreted configuration for the example case. */
export const cfdAgentExampleConfig: { key: string; value: string }[] = [
  { key: "Physics", value: "Steady incompressible turbulent flow" },
  { key: "Solver", value: "simpleFoam" },
  { key: "Fluid", value: "Water" },
  { key: "Inlet velocity", value: "5 m/s" },
  { key: "Turbulence model", value: "k-omega SST" },
  { key: "Geometry", value: "STL" },
  { key: "Meshing workflow", value: "snappyHexMesh" },
];

/** Illustrative solver output (clearly not actual results). */
export const cfdAgentIllustrativeOutput = `Time = 420

smoothSolver: Solving for Ux
Initial residual = 2.4e-05
Final residual   = 7.1e-07

GAMG: Solving for p
Initial residual = 1.8e-04
Final residual   = 9.2e-06

Status: Converging`;

/** Responsible-use principles (§40). */
export const cfdAgentResponsibleUse: string[] = [
  "Engineers must review generated cases.",
  "Geometry and units must be verified.",
  "Boundary conditions must represent the physical system.",
  "Solver selection must match the governing physics.",
  "Turbulence models require engineering judgment.",
  "Mesh quality must be assessed.",
  "Mesh-independence studies remain necessary.",
  "Domain-independence studies may be necessary.",
  "Residual convergence does not guarantee physical convergence.",
  "Conservation quantities should be reviewed.",
  "Engineering outputs must be checked.",
  "Simulations should be compared with analytical, experimental, or published reference cases where appropriate.",
  "AI-generated diagnoses require engineering review.",
];

export const cfdAgentRoadmap: string[] = [
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
];

/** Example questions supported by `cfd-agent chat`. */
export const cfdAgentChatExamples: string[] = [
  "Why is the pressure residual oscillating?",
  "Is this turbulence model appropriate?",
  "What does this boundary condition mean?",
  "Why did snappyHexMesh fail?",
  "Which mesh warning is most important?",
  "What does this fvSolution entry control?",
  "What should I verify before trusting the result?",
];

/** Files supported by `cfd-agent explain <file>`. */
export const cfdAgentExplainableFiles: string[] = [
  "controlDict",
  "fvSchemes",
  "fvSolution",
  "blockMeshDict",
  "snappyHexMeshDict",
  "transportProperties",
  "turbulenceProperties",
  "U",
  "p",
  "k",
  "omega",
  "nut",
];
