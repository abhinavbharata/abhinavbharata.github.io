import * as React from "react";
import { ArrowDown, ShieldAlert, ShieldCheck } from "lucide-react";

import {
  cfdAgentChatExamples,
  cfdAgentCommands,
  cfdAgentCurrentRelease,
  cfdAgentExampleConfig,
  cfdAgentExplainableFiles,
  cfdAgentIllustrativeOutput,
  cfdAgentModules,
  cfdAgentResponsibleUse,
  cfdAgentRoadmap,
  cfdAgentStack,
  cfdAgentWorkflow,
} from "@/data/cfd-agent";
import { Section } from "@/components/projects/section";
import { WorkflowDiagram } from "@/components/ui/workflow-diagram";
import { FileTree } from "@/components/ui/file-tree";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { CodeBlock } from "@/components/ui/code-block";
import { Callout } from "@/components/ui/callout";
import { Badge } from "@/components/ui/badge";

const caseTree = `case-name/
├── 0/
│   ├── U
│   ├── p
│   ├── k
│   ├── omega
│   └── nut
├── constant/
│   ├── transportProperties
│   ├── turbulenceProperties
│   └── triSurface/
│       └── geometry.stl
└── system/
    ├── controlDict
    ├── fvSchemes
    ├── fvSolution
    ├── blockMeshDict
    ├── surfaceFeatureExtractDict
    ├── snappyHexMeshDict
    └── decomposeParDict`;

const generationFlow = `Natural-language request
        ↓
LLM interpretation
        ↓
Typed configuration
        ↓
Validation
        ↓
Deterministic OpenFOAM file generation`;

const solverSpecExample = `SolverSpec(
    name="simpleFoam",
    category="steady_incompressible",
    required_fields=["U", "p", "k", "omega", "nut"],
    turbulence_model="kOmegaSST",
    transport_model="Newtonian",
    mesh_workflow="snappyHexMesh",
)`;

/** The flagship-specific deep-dive, rendered inside the cfd-agent case study. */
export function CfdAgentDeepDive() {
  return (
    <div className="space-y-16">
      {/* Commands */}
      <Section
        eyebrow="CLI"
        title="Commands"
        description="A focused command surface covering setup, geometry, meshing, solving, monitoring, and interpretation."
      >
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-panel/60">
                <tr className="border-b border-border">
                  <th scope="col" className="px-4 py-3 font-mono text-[0.7rem] uppercase tracking-wide text-faint">
                    Command
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[0.7rem] uppercase tracking-wide text-faint">
                    Stage
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[0.7rem] uppercase tracking-wide text-faint">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody>
                {cfdAgentCommands.map((c) => (
                  <tr key={c.command} className="border-b border-border last:border-0 align-top">
                    <th scope="row" className="px-4 py-3 font-mono text-[0.78rem] text-accent">
                      {c.command}
                    </th>
                    <td className="px-4 py-3 text-muted">{c.stage}</td>
                    <td className="px-4 py-3 text-foreground/85">{c.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Workflow */}
      <Section
        eyebrow="Workflow"
        title="End-to-end pipeline"
        description="From a plain-English request to AI-assisted results interpretation, with validation guards between stages."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <WorkflowDiagram steps={cfdAgentWorkflow} ariaLabel="cfd-agent workflow" />
          <div className="space-y-4">
            <Callout tone="info" title="Determinism by design">
              Language models handle interpretation and explanation. Deterministic
              Python modules control simulation generation, execution,
              validation, and state.
            </Callout>
            <Callout tone="success" title="Engineering safeguards">
              Unit scaling and the geometry–mesh invariant guard fail loudly
              instead of silently — a completed command is not automatically a
              valid engineering state.
            </Callout>
          </div>
        </div>
      </Section>

      {/* Representative case */}
      <Section
        eyebrow="Representative case"
        title="A worked example"
        description="Illustrative — not actual project results. Do not infer Reynolds number, dimensions, pressure drop, cell count, runtime, residuals, or final values."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <blockquote className="rounded-lg border border-border bg-surface p-4 text-sm italic leading-relaxed text-foreground/90">
              “Create a steady incompressible simulation of water flowing
              through this pipe at an inlet velocity of 5 m/s.”
            </blockquote>
            <CodeBlock label="interpreted configuration">
              {cfdAgentExampleConfig.map((row) => (
                <div key={row.key} className="text-foreground/90">
                  <span className="text-muted">{row.key}:</span> {row.value}
                </div>
              ))}
            </CodeBlock>
          </div>
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wide text-faint">
              Workflow
            </p>
            <WorkflowDiagram
              compact
              ariaLabel="Representative case workflow"
              steps={[
                "STL analysis",
                "Unit detection",
                "Geometry validation",
                "Boundary identification",
                "OpenFOAM field generation",
                "Dictionary generation",
                "Background mesh",
                "Feature extraction",
                "Geometry-conforming mesh",
                "Mesh-quality validation",
                "Geometry–mesh invariant check",
                "Solver execution",
                "Residual monitoring",
                "Results interpretation",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Case generation */}
      <Section
        eyebrow="Case generation"
        title="Deterministic OpenFOAM case generation"
        description="The LLM never emits uncontrolled case files. A typed configuration drives deterministic generators."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <FileTree tree={caseTree} label="generated case" />
          <CodeBlock label="generation flow">{generationFlow}</CodeBlock>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          Files are generated from a typed configuration by deterministic Python
          code. The LLM does not directly produce uncontrolled arbitrary case
          files.
        </p>
      </Section>

      {/* Geometry–mesh invariant guard */}
      <Section
        eyebrow="Safeguard"
        title="Geometry–Mesh Invariant Guard"
      >
        <p className="text-base leading-relaxed text-muted">
          One of cfd-agent’s most important safeguards verifies that{" "}
          <code className="font-mono text-accent">snappyHexMesh</code> actually
          incorporated the supplied STL geometry into the computational mesh. A
          meshing command may complete while leaving only the original background
          box — and a solver could then produce plausible-looking results for the
          wrong domain. cfd-agent inspects{" "}
          <code className="font-mono text-accent">constant/polyMesh/boundary</code>{" "}
          and related mesh information; if expected geometry-derived patches are
          missing, it raises{" "}
          <code className="font-mono text-accent">GeometryMeshMismatchError</code>{" "}
          and blocks solver execution.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-danger/40 bg-panel/50 p-5">
            <div className="flex items-center gap-2 text-danger">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              <h3 className="font-heading text-sm font-semibold">Invalid state</h3>
            </div>
            <ul className="mt-3 space-y-1.5 font-mono text-[0.78rem] text-foreground/80">
              <li>STL supplied</li>
              <li>Meshing command completed</li>
              <li>Background box remains</li>
              <li>Expected geometry patches absent</li>
              <li className="text-danger">Solver execution blocked</li>
            </ul>
          </div>
          <div className="rounded-lg border border-success/40 bg-panel/50 p-5">
            <div className="flex items-center gap-2 text-success">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <h3 className="font-heading text-sm font-semibold">Valid state</h3>
            </div>
            <ul className="mt-3 space-y-1.5 font-mono text-[0.78rem] text-foreground/80">
              <li>STL supplied</li>
              <li>Geometry captured by mesh</li>
              <li>Expected boundary patches present</li>
              <li>Mesh quality reviewed</li>
              <li className="text-success">Solver execution allowed</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Live monitoring */}
      <Section
        eyebrow="Live monitoring"
        title="Live solver monitoring"
        description="Python launches OpenFOAM through subprocess execution and streams output live, parsing Time =, field residuals, iteration counts, continuity errors, convergence, and fatal errors."
      >
        <TerminalWindow
          title="cfd-agent run — illustrative"
          ariaLabel="Illustrative residual output; not actual results"
        >
          <pre className="whitespace-pre">{cfdAgentIllustrativeOutput}</pre>
        </TerminalWindow>
        <p className="mt-3 text-xs text-faint">
          Illustrative interface demonstration — not actual project results.
        </p>
      </Section>

      {/* Diagnosis + chat + explain */}
      <Section
        eyebrow="AI assistance"
        title="Diagnosis, chat, and explanation"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="font-heading text-sm font-semibold">AI-assisted diagnosis</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              When an OpenFOAM command fails, cfd-agent captures relevant output,
              identifies the simulation stage, sends context to Claude, and
              returns structured guidance.
            </p>
            <ul className="mt-3 space-y-1 font-mono text-[0.74rem] text-foreground/80">
              <li>Probable cause</li>
              <li>Evidence from the error log</li>
              <li>Recommended correction</li>
              <li>How to prevent the problem</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="font-heading text-sm font-semibold">
              <code className="font-mono">cfd-agent chat</code>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Case-aware conversation with the current simulation loaded as
              context. Example questions:
            </p>
            <ul className="mt-3 space-y-1 text-[0.78rem] text-foreground/80">
              {cfdAgentChatExamples.slice(0, 5).map((q) => (
                <li key={q} className="leading-snug">“{q}”</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="font-heading text-sm font-semibold">
              <code className="font-mono">cfd-agent explain</code>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Explains an OpenFOAM file in plain English. Supported files:
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cfdAgentExplainableFiles.map((f) => (
                <Badge key={f} tone="neutral">{f}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section
        eyebrow="Architecture"
        title="Module structure"
        description="Focused modules separate AI interpretation from deterministic generation, execution, and validation."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <CodeBlock label="cfd_agent/" copyText={`cfd_agent/\n├── agent.py\n├── case_generator.py\n├── runner.py\n├── geometry.py\n├── cli.py\n├── config.py\n└── exceptions.py`}>
            <span className="whitespace-pre text-muted">{`cfd_agent/
├── agent.py
├── case_generator.py
├── runner.py
├── geometry.py
├── cli.py
├── config.py
└── exceptions.py`}</span>
          </CodeBlock>
          <div className="space-y-3">
            {cfdAgentModules.map((m) => (
              <div key={m.name} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-mono text-sm font-semibold text-accent">{m.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {m.responsibilities.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech stack */}
      <Section eyebrow="Stack" title="Technology stack">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cfdAgentStack.map((group) => (
            <div key={group.group} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-heading text-sm font-semibold">{group.group}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((it) => (
                  <li key={it} className="text-sm text-foreground/85">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Current release */}
      <Section
        eyebrow="Release"
        title="v0.1.0 — Complete vertical workflow"
        description="v0.1.0 validates the complete end-to-end workflow for one important CFD problem class before the platform expands to broader physical models."
      >
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {cfdAgentCurrentRelease.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 rounded border border-border bg-surface px-3 py-2 text-sm text-foreground/85"
            >
              <ArrowDown className="hidden" aria-hidden="true" />
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              {f}
            </li>
          ))}
        </ul>
      </Section>

      {/* Roadmap */}
      <Section
        eyebrow="Roadmap"
        title="Scaling through a SolverSpec registry"
        description="Roadmap items are in development and not described as currently working. Conceptual example below."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <CodeBlock label="conceptual — SolverSpec">
            {solverSpecExample}
          </CodeBlock>
          <div>
            <p className="text-sm leading-relaxed text-muted">
              Future solver types will be represented through a structured
              registry defining required fields, physical dictionaries,
              thermophysical models, turbulence models, boundary-condition
              families, numerical templates, validation rules, and meshing
              workflow.
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {cfdAgentRoadmap.map((r) => (
                <Badge key={r} tone="neutral">{r}</Badge>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-faint">
              The long-term architecture is intended to support a significant
              portion of OpenFOAM’s approximately 60 solver families through
              structured and validated solver specifications. Current support is
              one problem class only.
            </p>
          </div>
        </div>
      </Section>

      {/* Responsible use */}
      <Section eyebrow="Responsible use" title="AI assistance does not replace CFD validation">
        <ul className="grid gap-2 sm:grid-cols-2">
          {cfdAgentResponsibleUse.map((r) => (
            <li
              key={r}
              className="flex items-start gap-2 rounded border border-border bg-surface px-3 py-2 text-sm leading-relaxed text-foreground/85"
            >
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
              {r}
            </li>
          ))}
        </ul>
        <Callout tone="warning" className="mt-6">
          cfd-agent reduces repetitive setup work and prevents avoidable workflow
          failures. It does not convert CFD into an unchecked one-click
          calculation.
        </Callout>
      </Section>
    </div>
  );
}
