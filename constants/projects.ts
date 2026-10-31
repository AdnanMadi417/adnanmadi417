export interface ProjectLink {
  buttonText: string;
  buttonLink: string;
}

export interface ProjectItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  location: string;
  image: string;
  descriptions: string[];
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

// Ordered latest to oldest.
const PROJECTS_INPUT: ProjectItemInput[] = [
  {
    title: "Recycling Hub — E-Waste Collection Platform",
    category: "Full Stack Projects",
    description: "Lead Developer",
    location: "Recycling Hub",
    image: "/assets/imgs/Recycling_Hub.png",
    featured: true,

    descriptions: [
      "Lead developer on both the public website and the system behind it for Recycling Hub, a DOE-registered e-waste collector serving households and businesses across the Klang Valley, Malaysia.",
      "Built separate customer journeys for individuals (free doorstep pickup booking) and businesses (bulk collection quotes for offices, warehouses, and factories).",
      "Developed lead capture through pickup booking, bulk quote requests, and a callback form with individual/business segmentation and international phone input.",
      "Delivered a bilingual English and Bahasa Malaysia experience with WhatsApp integration for direct customer contact.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://recyclinghub.eco/",
      },
    ],
  },
  {
    title: "Palestinian Forum Malaysia Website",
    category: "Frontend Projects",
    description: "Product Manager & Frontend Developer",
    location: "Palestinian Forum Malaysia (PFM)",
    image: "/assets/imgs/PFMY_Website.png",
    featured: true,

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
  {
    title: "Confidential Client Project — Partner Management Platform",
    category: "Frontend Projects",
    description: "Full-time · Frontend Developer",
    location: "Unibexs",
    image: "/assets/imgs/unibexs-dashboard.avif",
    featured: true,

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
    category: "Frontend Projects",
    description: "Product Manager & Frontend Developer",
    location: "Freelance Project",
    image: "/assets/imgs/IKA_EDU.png",
    featured: true,

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
    title: "Investment Management System",
    category: "Full Stack Projects",
    description: "Full Stack Developer",
    location: "COMMERCE DOT COM",
    image: "/assets/imgs/Investment_Management_System.png",
    descriptions: [
      "Developed and implemented an Investment Management System to track member investments, share transactions, and registration payments, reducing manual administrative tasks by 60%.",
      "Designed interactive dashboards displaying total transactions, account balances, share allocations, registration payments, member statuses, expected profits, and investment completion.",
      "Created member-specific sub-dashboards for personalized financial tracking.",
    ],
    links: [],
  },
  {
    title: "AIU Hostel Management System",
    category: "Frontend Projects",
    description: "Frontend Developer",
    location: "Albukhary International University",
    image: "/assets/imgs/AIU_Hostel_Management_System.png",
    featured: true,

    descriptions: [
      "Developed responsive dashboard and management interfaces supporting room allocation, billing workflow, and maintenance request handling.",
      "Reduced manual administrative operations by 50% through interface automation and optimized data presentation.",
      "Improved resident and staff system usability, contributing to a 30% increase in operational satisfaction metrics.",
    ],

    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://www.aiuhms.pro/home",
      },
    ],
  },
  {
    title: "IESCO Scholarship Application",
    category: "Frontend Projects",
    description: "Frontend Developer",
    location:
      "International Educational Scientific and Cultural Organization (IESCO)",
    image: "/assets/imgs/IESCO_Scholarship_Application.png",

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
    title: "Al Awda Mosque Website",
    category: "Full Stack Projects",
    description: "Backend Developer",
    location: "Side Project",
    image: "/assets/imgs/masjid_website.png",
    descriptions: [
      "Built official website for Al Awda Mosque focusing on responsive design and community engagement.",
      "Integrated dynamic prayer times, multi-language support, and video gallery.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://masjid-albukhary.github.io/masjid-frontend/",
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = PROJECTS_INPUT.map((item) => ({
  ...item,
  slug: slugify(item.title),
}));

export const PROJECT_CATEGORY_NAMES: string[] = [
  ...new Set(PROJECTS.map((p) => p.category)),
];

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featured);
}
