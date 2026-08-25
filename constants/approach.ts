export interface ApproachStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    icon: "mdi:magnify",
    title: "Discover",
    description:
      "Understand the real problem, constraints, and existing systems before writing a line of code.",
  },
  {
    step: "02",
    icon: "mdi:sitemap-outline",
    title: "Architect",
    description:
      "Design the data model, API boundaries, and component structure first — the shape of the system, not just the screens.",
  },
  {
    step: "03",
    icon: "mdi:code-braces",
    title: "Build",
    description:
      "Ship in small, reviewable increments with TypeScript and a component-driven architecture.",
  },
  {
    step: "04",
    icon: "mdi:shield-check-outline",
    title: "Test & Harden",
    description:
      "Cover critical flows with automated tests and treat security as a requirement, not an afterthought.",
  },
  {
    step: "05",
    icon: "mdi:rocket-launch-outline",
    title: "Ship & Support",
    description:
      "Deploy, monitor, and stay accountable for what's in production — including fixing what I didn't build.",
  },
];
