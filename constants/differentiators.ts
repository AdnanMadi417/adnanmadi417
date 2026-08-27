export interface Differentiator {
  icon: string;
  title: string;
  body: string;
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "mdi:shield-check-outline",
    title: "Security Isn't an Afterthought",
    body: "I've led a security remediation effort resolving 10+ vulnerabilities in a live production system — stored XSS, auth bypasses, and account-enumeration leaks. I look for these by default, not just when asked.",
  },
  {
    icon: "mdi:sitemap-outline",
    title: "I Own the System, Not Just the Screen",
    body: "Shared component libraries across multiple role-based portals, a fixed CI pipeline that had broken deployment for the team, PII redacted from observability data before it leaked — I fix what's broken, even when I didn't build it.",
  },
  {
    icon: "mdi:test-tube",
    title: "Tested Before It Ships",
    body: "Critical flows are covered by automated Playwright E2E tests, not manual spot-checks. Regressions get caught before they reach production, not after a user reports them.",
  },
];
