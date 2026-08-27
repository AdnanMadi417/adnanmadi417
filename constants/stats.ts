export interface Stat {
  value: string;
  label: string;
  arrow: boolean;
  filled: boolean;
}

// Every number here traces back to a real bullet already on the site
// (see constants/projects.ts, the Confidential Client Project / Unibexs
// entry, and the IKA EDU Platform entry) — nothing invented here.
export const STATS: Stat[] = [
  {
    value: "10+",
    label: "Security vulnerabilities remediated in a single engagement",
    arrow: false,
    filled: true,
  },
  {
    value: "5",
    label: "Role-based portals shipped from one shared component library",
    arrow: false,
    filled: false,
  },
  {
    value: "20+",
    label: "Automated Playwright E2E tests guarding critical flows",
    arrow: false,
    filled: true,
  },
  {
    value: "80%",
    label: "Reduction in manual admin work on a shipped platform",
    arrow: true,
    filled: false,
  },
];
