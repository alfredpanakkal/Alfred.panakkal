/**
 * Portfolio Data File (portfolioData.ts)
 * ----------------------------------------------------
 * You can easily edit all text, projects, credentials,
 * and experience in this single file.
 */

export interface ProjectItem {
  id: string;
  num: string;
  category: string;
  title: string;
  isDetailed?: boolean; // If true, shows Problem / Built / Why it matters layout
  problem?: string;
  built?: string;
  whyItMatters?: string;
  description?: string; // For compact layout projects
  tech: string;
  statusText?: string;
  liveUrl?: string;
  sourceUrl: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  status: string;
  summary: string;
  duties: string[];
}

export interface CredentialItem {
  name: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export const PERSONAL_INFO = {
  name: "Alfred Panakkal",
  fullName: "Alfred Panakkal Jose",
  label: "Seafarer & Full-Stack Developer",
  heroBio:
    "Third Officer on ocean-going oil tankers. I write software for the same world — navigation, operations, and the gaps that show up when connectivity is thin and the work cannot wait.",
  aboutTitle: "Two crafts, one standard of attention",
  aboutParagraphs: [
    "As a Third Officer on ocean-going tankers, the work is watchkeeping, passage planning, bridge equipment, and safety management. Months at sea under constrained satellite connectivity made it obvious how much operational work still depends on paper logs, fragmented schedules, and tools that assume a stable network.",
    "I learned full-stack development the same way I learned the bridge: by needing it. Every application I publish starts from a real bottleneck — turning repetitive manual records into software that still works when the link drops.",
    "The through-line is not “maritime themed apps.” It is procedural care. A watch and a codebase both fail the same way: quietly, then all at once, if the details are treated as optional."
  ],
  metaStats: [
    { label: "Role", value: "Third Officer" },
    { label: "Work", value: "Tanker fleet" },
    { label: "Based", value: "Palakkad, Kerala, India" },
    { label: "Code", value: "@alfredpanakkal" }
  ],
  contact: {
    heading: "Write when you have something specific",
    subheading:
      "Maritime technology, open-source collaboration, or engineering work. If I am underway, replies follow ship's time and the satellite window.",
    email: "alpha.coil966@passinbox.com",
    githubUrl: "https://github.com/alfredpanakkal",
    githubHandle: "github.com/alfredpanakkal",
    linkedinUrl: "https://www.linkedin.com/in/alfredpanakkal",
    linkedinHandle: "linkedin.com/in/alfredpanakkal"
  },
  footer: {
    year: "2026",
    copyrightName: "Alfred Panakkal Jose",
    location: "Palakkad, Kerala, India"
  }
};

export const CREDENTIALS: CredentialItem[] = [
  {
    name: "Certificate of Competency",
    detail: "STCW II/1 — Officer in Charge of a Navigational Watch (unlimited vessels), DGS approved"
  },
  {
    name: "GMDSS",
    detail: "General Operator's Certificate for global radio distress monitoring"
  },
  {
    name: "Bridge systems",
    detail: "ECDIS, Radar / ARPA simulator certification (Transas, JRC, Furuno)"
  },
  {
    name: "Safety",
    detail: "Advanced Fire Fighting (STCW A-VI/3), Medical First Aid, PSCRB"
  },
  {
    name: "Education",
    detail: "B.Sc. Nautical Science / pre-sea maritime training — celestial & terrestrial navigation, ship stability, cargo, maritime law, BRM"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Third Officer / Navigational Watchkeeping Officer",
    organization: "Ocean-going tanker fleet",
    status: "Active duty",
    summary:
      "Responsible for navigational watches, passage-plan compliance, bridge equipment, and onboard safety during international tanker voyages.",
    duties: [
      "Keep safe navigational watches using ECDIS, radar, ARPA, and satellite navigation in open ocean and high-density traffic.",
      "Execute passage plans, chart corrections, and Notices to Mariners; check compass error by celestial and terrestrial bearings.",
      "Operate and test bridge systems: dual ECDIS, S-band and X-band radar with ARPA, and GMDSS (Inmarsat-C, MF/HF DSC, VHF).",
      "Support tanker cargo and ballast work — IGS oxygen monitoring, BWMS and stability checks, COW safety, and LSA maintenance.",
      "Coordinate passage logs, voyage reporting, and bond-store inventory under tight timeframes."
    ]
  },
  {
    title: "Full-stack developer & open-source creator",
    organization: "@alfredpanakkal",
    status: "Ongoing",
    summary:
      "Design, ship, and maintain open-source web applications for maritime productivity and offline use.",
    duties: [
      "Build production apps in React, Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.",
      "Engineer offline-first caching and local storage for users on constrained satellite bandwidth.",
      "Keep interfaces restrained, documented, and usable on a phone as well as a desktop."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "navarea-warning-plotter",
    num: "01",
    category: "Maritime",
    title: "Navarea Warning Plotter",
    isDetailed: true,
    problem: "NAVAREA warnings still arrive as radio text. Plotting hazard zones onto a voyage is slow, manual, and easy to miss on watch.",
    built: "A geospatial tool for plotting NAVAREA warnings, danger areas, and hazard zones onto a chart-like view.",
    whyItMatters: "Gives watchkeepers a spatial picture of active hazards along a planned track instead of reconstructing them from text.",
    tech: "TypeScript  ·  React  ·  Geospatial  ·  Tailwind CSS",
    statusText: "In development",
    sourceUrl: "https://github.com/alfredpanakkal/Navarea-warning---plotter"
  },
  {
    id: "helm-almanac",
    num: "02",
    category: "Maritime",
    title: "Helm Almanac",
    isDetailed: true,
    problem: "Vessel schedules, nautical events, and astronomical references live in separate books and PDFs — little use when the satellite link drops.",
    built: "A maritime almanac that unifies vessel schedules, nautical events, and navigational reference data in an offline-ready interface.",
    whyItMatters: "Keeps operational reference material available during watch, including under constrained bandwidth at sea.",
    tech: "TypeScript  ·  React  ·  Next.js  ·  Tailwind CSS",
    liveUrl: "https://helmalmanac.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/Helm-Almanac"
  },
  {
    id: "bond-vault",
    num: "03",
    category: "Operations",
    title: "Bond Vault",
    isDetailed: false,
    description: "An inventory system for tracking, auditing, and managing bond stock — designed around the logs officers already keep.",
    tech: "TypeScript  ·  Next.js  ·  PostgreSQL",
    liveUrl: "https://helmbond.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/BOND-VAULT"
  },
  {
    id: "seatime-nri-calc",
    num: "04",
    category: "Tools",
    title: "Seatime & NRI Calculator",
    isDetailed: false,
    description: "A calculator for sea-time days, NRI tax exemption status, and contract records, stored locally in the browser.",
    tech: "TypeScript  ·  React  ·  LocalStorage",
    liveUrl: "https://helm-nri.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/seafarer-calculator-nri-seatime-calc"
  },
  {
    id: "helm-productivity",
    num: "05",
    category: "Tools",
    title: "Helm Productivity",
    isDetailed: false,
    description: "A productivity suite for watchkeeping, tasks, and routines — structured around shipboard time, not a 9-to-5 week.",
    tech: "TypeScript  ·  React  ·  Tailwind CSS",
    liveUrl: "https://helmproductivity.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/The-Helm---Productivity-app"
  },
  {
    id: "helm-fasting",
    num: "06",
    category: "Health",
    title: "Helm Fasting",
    isDetailed: false,
    description: "A progressive web app for intermittent fasting and health logging that works offline through long voyages.",
    tech: "TypeScript  ·  React  ·  PWA",
    liveUrl: "https://helmfasting.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/The-Helm-Fasting"
  },
  {
    id: "mudhra-converter",
    num: "07",
    category: "Tools",
    title: "Mudhra Converter",
    isDetailed: false,
    description: "A fast converter for currency and measurements, kept deliberately thin for port calls and daily work.",
    tech: "TypeScript  ·  React  ·  Tailwind CSS",
    liveUrl: "https://mudhra-converter.vercel.app",
    sourceUrl: "https://github.com/alfredpanakkal/MUDHRA.CONVERTER"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development",
    skills: "TypeScript  ·  JavaScript  ·  React  ·  Next.js  ·  Node.js  ·  Python"
  },
  {
    title: "Tools",
    skills: "Git  ·  GitHub  ·  Tailwind CSS  ·  PostgreSQL  ·  SQLite  ·  Vercel"
  },
  {
    title: "Maritime",
    skills: "Navigational watchkeeping  ·  COLREGs  ·  ECDIS  ·  Radar / ARPA  ·  GMDSS  ·  Tanker cargo & safety"
  }
];
