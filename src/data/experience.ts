import type { ExperienceItem } from "@/types";

/**
 * Professional experience, ordered most-recent first. Sourced from the
 * résumé. The current assignment uses neutral wording for the confidential
 * critical-infrastructure OEM.
 */
export const experience: ExperienceItem[] = [
  {
    title: "Senior Engineer — Critical Infrastructure and Data Center Design",
    organization: "L&T Technology Services",
    organizationNote:
      "Deployed through L&T Technology Services to support a leading critical-infrastructure OEM.",
    startDate: "February 2026",
    endDate: "Present",
    location: "Pelzer, South Carolina",
    overview:
      "Deliver mechanical BIM construction documents and validation support for modular data-center enclosures, power skids, and power houses across SD, DD, and CD phases.",
    responsibilities: [
      "Produce mechanical BIM construction documents in Revit for modular data-center enclosures, power skids, and power houses.",
      "Support SD, DD, and CD design phases with coordinated mechanical deliverables.",
      "Develop BIM-ready liquid-cooling content, including coolant distribution runs, cooling members, drip trays, and piping.",
      "Redesign components in Autodesk Inventor for BIM integration.",
      "Execute factory walk-through tests and heat-load validation.",
      "Support power-module and UPS thermal testing.",
      "Participate in FAT and SAT activities.",
      "Support commissioning and functional-performance validation.",
      "Develop remediation proposals for enclosure penetrations, leakage, and sealing problems.",
      "Coordinate with electrical, structural, and fire-protection teams.",
    ],
    achievements: [
      "Maintained enclosure temperature target of 23 ± 5 °C across staged heat-load validation.",
      "Validated thermal performance at 25%, 50%, 75%, and 100% load under N+1 redundancy.",
      "Resolved enclosure leakage and sealing issues through documented remediation proposals.",
    ],
    tools: [
      "Revit",
      "Autodesk Inventor",
      "BIM coordination",
      "FAT/SAT",
      "Commissioning",
    ],
    disciplines: [
      "Data Center Infrastructure",
      "BIM",
      "Thermal Engineering",
      "Testing & Validation",
      "Commissioning",
    ],
    current: true,
  },
  {
    title: "Thermal and Systems Design Engineer",
    organization: "Fortified Energy Systems",
    startDate: "September 2024",
    endDate: "February 2026",
    location: "United States",
    overview:
      "Promoted from CAD and simulation responsibilities to design leadership, directing hybrid inverter and air-conditioning system development for 3 kW and 6 kW power systems.",
    responsibilities: [
      "Directed hybrid inverter and air-conditioning system development.",
      "Designed mechanical enclosures and thermal layouts for 3 kW and 6 kW power systems.",
      "Applied DFMA principles across the mechanical design.",
      "Conducted SolidWorks Simulation and ANSYS Fluent analysis.",
      "Coordinated mechanical, electrical, and firmware design reviews.",
      "Maintained prototypes within 5% of thermal-performance targets.",
      "Reduced fabrication rework through design-for-manufacturing controls.",
    ],
    achievements: [
      "Improved thermal efficiency by 18%.",
      "Reduced component count by 22%.",
      "Reduced the design-to-validation cycle from 16 weeks to 10 weeks.",
      "Maintained prototype performance within 5% of thermal targets.",
    ],
    tools: [
      "SolidWorks",
      "SolidWorks Simulation",
      "ANSYS Fluent",
      "DFMA",
      "GD&T",
    ],
    disciplines: [
      "Thermal Engineering",
      "CFD",
      "Product Development",
      "Mechanical Design",
    ],
  },
  {
    title: "Thermal Design and Simulation Engineer (Intern)",
    organization: "High Potential Designs",
    startDate: "January 2024",
    endDate: "August 2024",
    location: "United States",
    overview:
      "Developed a handheld thermal device, optimizing internal flow geometry and material selection to prevent thermal degradation and extend service life.",
    responsibilities: [
      "Developed a handheld thermal device.",
      "Optimized internal flow geometry using SolidWorks and ANSYS Fluent.",
      "Maintained operating temperatures between 40 °C and 65 °C.",
      "Conducted DSC analysis to inform material selection.",
      "Selected aluminum alloys including 6061-T6 and 7075-T73.",
      "Improved manufacturability of the thermal assembly.",
    ],
    achievements: [
      "Maintained component temperatures within 40–65 °C and prevented thermal degradation.",
      "Extended system life by 25%.",
      "Improved manufacturability through alloy selection and geometry optimization.",
    ],
    tools: ["SolidWorks", "ANSYS Fluent", "DSC analysis"],
    disciplines: ["Thermal Engineering", "CFD", "Product Development"],
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "University of Maryland, Baltimore County (UMBC)",
    startDate: "August 2023",
    endDate: "May 2024",
    location: "Baltimore, Maryland",
    overview:
      "Led vibration and controls laboratory instruction, redesigning lab materials to strengthen undergraduate understanding of control-system fundamentals.",
    responsibilities: [
      "Led more than 40 laboratory sessions.",
      "Supported more than 60 undergraduate students.",
      "Taught vibration and controls experiments.",
      "Redesigned laboratory materials.",
    ],
    achievements: [
      "Improved student understanding of control-system fundamentals through redesigned laboratory materials.",
    ],
    tools: ["Laboratory instrumentation", "Vibration & controls rigs"],
    disciplines: ["Engineering Instruction", "Vibration & Controls"],
  },
  {
    title: "Thermal Design and Simulation Engineer",
    organization: "Yangtsofour",
    startDate: "January 2022",
    endDate: "June 2022",
    location: "India",
    overview:
      "Developed thermal-management systems, optimizing flow paths with CFD and standardizing validation procedures across multiple iterations.",
    responsibilities: [
      "Developed thermal-management systems.",
      "Optimized flow paths with CFD.",
      "Used thermal imaging and DSC testing to characterize performance.",
      "Standardized validation procedures across more than 12 iterations.",
    ],
    achievements: [
      "Improved heat transfer by 30%.",
      "Reduced material use by 15%.",
      "Standardized validation procedures across more than 12 iterations.",
    ],
    tools: ["ANSYS Fluent", "Thermal imaging", "DSC testing"],
    disciplines: ["Thermal Engineering", "CFD", "Testing & Validation"],
  },
  {
    title: "Research Associate and Mechanical Design Engineer",
    organization: "Robic Rufarm",
    startDate: "January 2018",
    endDate: "December 2021",
    location: "India",
    overview:
      "Designed composite drone components and integrated IoT environmental-monitoring systems, applying DFMA to reduce assembly time and manufacturing cost.",
    responsibilities: [
      "Designed more than 12 composite drone components.",
      "Integrated IoT environmental-monitoring systems using temperature, humidity, and dissolved-oxygen sensors.",
      "Connected sensor information to cloud analytics.",
      "Applied DFMA across the mechanical assembly.",
    ],
    achievements: [
      "Reduced component mass by 20% while improving FEA stress margins.",
      "Improved yield by 5% and reduced resource waste by 12%.",
      "Reduced assembly time by 15% and manufacturing costs by 8%.",
    ],
    tools: ["SolidWorks", "FEA", "IoT sensors", "Cloud analytics", "DFMA"],
    disciplines: [
      "Mechanical Design",
      "Product Development",
      "IoT Systems",
      "Research",
    ],
  },
  {
    title: "Mechanical Engineer",
    organization: "Sanghi Industries",
    startDate: "June 2017",
    endDate: "December 2017",
    location: "India",
    overview:
      "Supported new product development and product lifecycle management, applying statistical methods to reduce downtime and improve throughput.",
    responsibilities: [
      "Supported new product development and product lifecycle management.",
      "Performed production analysis using DOE, SPC, and Minitab.",
    ],
    achievements: [
      "Reduced downtime by 10%.",
      "Improved manufacturing throughput by 8%.",
    ],
    tools: ["DOE", "SPC", "Minitab"],
    disciplines: ["Manufacturing Engineering", "Product Development"],
  },
];
