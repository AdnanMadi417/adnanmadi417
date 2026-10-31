export interface ProjectLink {
  buttonText: string;
  buttonLink: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  location: string;
  image: string;
  summary: string;
  outcome?: string;
  tags: string[];
  descriptions: string[];
  sections?: ProjectSection[];
  links: ProjectLink[];
  featured?: boolean;
}

type ProjectItemInput = Omit<ProjectItem, "slug">;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const PROJECTS_INPUT: ProjectItemInput[] = [
  {
    title: "Recycling Hub — Waste Management Platform",
    description: "Full-Stack Software Engineer",
    location: "Recycling Hub",
    image: "/assets/imgs/Recycling_Hub.png",
    featured: true,
    summary:
      "Full-stack waste-management platform and public website, built with Django REST Framework and Next.js, backed by a Playwright regression suite.",
    tags: [
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Playwright",
    ],

    descriptions: [],

    // Sections still to write (hidden until filled in):
    // - The Problem: how pickups, quotes, and records were handled before
    //   this platform, and what was slow, manual, or error-prone about it.
    // - My Role: team size, who you worked with, and anything you owned
    //   beyond the code.
    // - Architecture & Stack: what the internal platform UI is built with,
    //   how it shares data with the website, which flows the Playwright
    //   suite covers, hosting/deployment, auth, and integrations.
    // - Key Challenges, Results (only outcomes you can back up), and
    //   What I'd Do Differently.
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Recycling Hub is a DOE-registered e-waste collector serving households and businesses across the Klang Valley, Malaysia. I built both the waste-management platform and the public website, using Django REST Framework and Next.js.",
          "The website takes free doorstep pickup bookings from individuals, bulk collection quote requests from offices, warehouses, and factories, and callback requests, in English and Bahasa Malaysia.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "Full-stack software engineer, responsible for the platform end to end: the Django REST Framework API and PostgreSQL data model, the Next.js frontend, and the Playwright regression suite.",
        ],
      },
      {
        heading: "Architecture & Stack",
        paragraphs: [
          "Backend: Django REST Framework API on PostgreSQL.",
          "Frontend: Next.js and TypeScript for the public website.",
          "Testing: Playwright regression suite.",
        ],
      },
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://recyclinghub.eco/",
      },
    ],
  },
  {
    title: "Unibexs — Partner Management Platform",
    description: "Full-time · Software Engineer",
    location: "Unibexs",
    image: "/assets/imgs/unibexs-dashboard.avif",
    featured: true,
    summary:
      "Multi-role partner management platform for a SaaS product, with role-based portals for different user types.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Playwright",
    ],

    descriptions: [
      "Joined an existing multi-role platform connecting business partners, applicants, and internal staff, and took ownership of both new feature delivery and a full security hardening pass across the codebase.",
      "Built and maintained 5 distinct role-based portals (Admin, Partner, Account Manager, Reviewer, Data Entry) sharing a common component library, letting each role work from a tailored view without duplicating logic.",
      "Led a security remediation effort that resolved 10+ vulnerabilities, including a stored-XSS hole in rich-text rendering, an authentication bypass where route access trusted a client-editable cookie instead of a verified session, two account-enumeration leaks on public OTP endpoints, and a data-integrity bug that let a stale admin edit silently overwrite another admin's concurrent changes.",
      "Redacted PII and auth tokens from observability trace data before export, closing a leak that exposed live credentials to anyone with dashboard access.",
      "Designed self-service onboarding flows — partner registration, team-member invitations, and staff invitations — each with OTP verification and document upload, replacing what had been manual, staff-mediated account creation.",
      "Diagnosed and fixed a broken production deployment pipeline caused by a dependency lockfile mismatch, restoring CI for the whole team.",
      "Maintained a 20+ test Playwright E2E suite covering registration, authentication, and invitation flows, catching regressions before they reached production.",
      "Built with Next.js, React, TypeScript, Tailwind CSS, Playwright, and OpenTelemetry.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "http://app.unibexs.com/",
      },
    ],
  },
  {
    title: "IKA EDU Platform",
    description: "Product & Engineering Lead",
    location: "Freelance Project",
    image: "/assets/imgs/IKA_EDU.png",
    featured: true,
    summary:
      "Training academy platform with a public program catalog, admin dashboard, and digital certificate verification.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Playwright",
      "DigitalOcean",
    ],

    descriptions: [
      "Digitized a fully manual training academy from the ground up — IKA had no website, no digital system, and managed all programs, certificates, and client communication manually before this project.",
      "Developed a public training catalog with dynamic filtering across 20+ specialized fields, replacing phone and email inquiries and giving IKA their first-ever online presence, improving program accessibility by 60%.",
      "Built a multi-role management dashboard (Admin & Account Manager) to handle programs, trainers, locations, and registrations, reducing manual administrative workload by 50%.",
      "Implemented a digital certificate issuance and real-time verification system, eliminating paper-based management and reducing manual verification effort by 70%.",
      "Developed an automated PDF quotation generator, replacing manually prepared proposals and reducing proposal preparation time by 80%.",
      "Designed a contracted programs module for custom organizational training requests, streamlining client onboarding from manual communication to a structured digital workflow.",
      "Integrated secure cloud file storage via DigitalOcean Spaces for certificates, program materials, and media, eliminating local file management overhead.",
      "Delivered a production-grade platform using React, TypeScript, Tailwind CSS, and Framer Motion, with end-to-end test coverage via Playwright, deployed on Vercel.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://ika-edu.com/",
      },
    ],
  },
  {
    title: "IESCO Scholarship Application",
    description: "Frontend Developer",
    location:
      "International Educational Scientific and Cultural Organization (IESCO)",
    image: "/assets/imgs/IESCO_Scholarship_Application.png",
    summary:
      "Online scholarship application portal with guided, validated registration — cut submission time by 40% and processing time by 30%, with 25% more successful registrations.",
    outcome: "40% faster submissions",
    tags: [
      "Vue.js",
      "JavaScript",
      "Bootstrap",
    ],

    descriptions: [
      "Designed and developed responsive scholarship application interfaces to streamline registration workflows and improve accessibility across devices.",
      "Optimized application submission processes, reducing user completion time by approximately 40% and decreasing processing workload by 30%.",
      "Implemented intuitive form layouts and validation-aware UI interactions that increased successful applicant submissions by 25%.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://applications.iesco.my/?_gl=1*n14rfl*_ga*NDMzNDQ4MzAwLjE3ODUxNTY0NjI.*_ga_0Q2KKETZ36*czE3ODc2MzI0MjMkbzQkZzAkdDE3ODc2MzI0MzAkajUzJGwwJGgxNTA5MzQxMzM.#apply",
      },
    ],
  },
  {
    title: "Palestinian Forum Malaysia Website",
    description: "Product Manager & Frontend Developer",
    location: "Palestinian Forum Malaysia (PFM)",
    image: "/assets/imgs/PFMY_Website.png",
    featured: true,
    summary:
      "Bilingual community platform for Palestinian Forum Malaysia, with projects, events, news, and beneficiary and membership sign-up.",
    tags: [
      "React",
      "TypeScript",
    ],

    descriptions: [
      "Led the product and built the frontend for the official platform of Palestinian Forum Malaysia, a community organization uniting Palestinians and supporters across Malaysia through advocacy and humanitarian aid.",
      "Defined the product scope and roadmap, translating the organization's community, advocacy, and aid work into a structured site covering projects, events, news, and blogs.",
      "Built bilingual English and Arabic support, including right-to-left layouts for Arabic readers.",
      "Developed beneficiary registration, sign-in, and online membership application flows, moving community sign-ups from manual handling to a digital process.",
      "Built project and event listings split by status (active, completed, upcoming, past), plus a newsletter subscription for campaign updates and urgent appeals.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://www.pfmy.org/",
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = PROJECTS_INPUT.map((item) => ({
  ...item,
  slug: slugify(item.title),
}));

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featured);
}
