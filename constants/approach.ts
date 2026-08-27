export interface ApproachStepBullet {
  bold: string;
  rest: string;
}

export interface ApproachStep {
  step: string;
  icon: string;
  title: string;
  description: string;
  subtitle: string;
  bullets: ApproachStepBullet[];
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    icon: "mdi:magnify",
    title: "Discover",
    description:
      "Understand the real problem, constraints, and existing systems before writing a line of code.",
    subtitle: "The Foundation",
    bullets: [
      { bold: "Real requirements", rest: " gathered before any UI is drawn" },
      { bold: "Existing systems and constraints", rest: " mapped up front" },
      { bold: "Success measured", rest: " against the actual problem, not a guess" },
    ],
  },
  {
    step: "02",
    icon: "mdi:sitemap-outline",
    title: "Architect",
    description:
      "Design the data model, API boundaries, and component structure first — the shape of the system, not just the screens.",
    subtitle: "The Blueprint",
    bullets: [
      { bold: "Data model and API boundaries", rest: " designed before implementation" },
      { bold: "Component structure", rest: " planned to avoid duplicated logic across roles/views" },
      { bold: "Trade-offs made explicit", rest: " instead of discovered mid-build" },
    ],
  },
  {
    step: "03",
    icon: "mdi:code-braces",
    title: "Build",
    description:
      "Ship in small, reviewable increments with TypeScript and a component-driven architecture.",
    subtitle: "The Execution",
    bullets: [
      { bold: "Small, reviewable increments", rest: " instead of one giant unreviewable diff" },
      { bold: "TypeScript throughout", rest: " to catch mistakes before runtime" },
      { bold: "Shared component library", rest: " so multiple views stay consistent" },
    ],
  },
  {
    step: "04",
    icon: "mdi:shield-check-outline",
    title: "Test & Harden",
    description:
      "Cover critical flows with automated tests and treat security as a requirement, not an afterthought.",
    subtitle: "The Safety Net",
    bullets: [
      { bold: "Automated E2E coverage", rest: " on the flows that actually matter" },
      { bold: "Security treated as a requirement", rest: " — auth, input handling, and data exposure reviewed, not assumed" },
      { bold: "Regressions caught", rest: " before they reach production" },
    ],
  },
  {
    step: "05",
    icon: "mdi:rocket-launch-outline",
    title: "Ship & Support",
    description:
      "Deploy, monitor, and stay accountable for what's in production — including fixing what I didn't build.",
    subtitle: "The Follow-Through",
    bullets: [
      { bold: "Deployed and monitored", rest: " — not handed off and forgotten" },
      { bold: "Accountable in production", rest: " for what's live, not just what shipped" },
      { bold: "Fixes what's broken", rest: " even in code I didn't originally write" },
    ],
  },
];
