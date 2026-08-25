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

type ProjectItemInput = Omit<ProjectItem, "slug" | "category">;

interface ProjectCategoryInput {
  title: string;
  items: ProjectItemInput[];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const PROJECT_CATEGORIES_INPUT: ProjectCategoryInput[] = [
  {
    title: "Frontend Projects",
    items: [
      {
        title: "IKA EDU Platform",
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
        title: "IESCO Scholarship Application",
        description: "Frontend Developer",
        location:
          "International Educational Scientific and Cultural Organization (IESCO)",
        image: "/assets/imgs/IESCO_Scholarship_Application.png",
        featured: true,

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
        title: "AIU Hostel Management System",
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
    ],
  },
  {
    title: "Full Stack Projects",
    items: [
      {
        title: "Investment Management System",
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
        title: "Al Awda Mosque Website",
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
          {
            buttonText: "Frontend GitHub",
            buttonLink: "https://github.com/masjid-albukhary/masjid-frontend.git",
          },
          {
            buttonText: "Backend GitHub",
            buttonLink: "https://github.com/masjid-albukhary/masjid-backend.git",
          },
        ],
      },
      {
        title: "Masjid Albukhary KL Website",
        description: "WordPress Developer",
        location: "COMMERCE DOT COM (CDC)",
        image: "/assets/imgs/masjid_website.png",
        descriptions: [
          "Developed the official website for Masjid Albukhary KL using WordPress, focusing on responsive design and community engagement.",
          "Built essential pages, including Home, About, Contact Us, Services, Facilities, and Gallery, with multi-language support.",
          "Integrated multimedia content through a Gallery page with YouTube video support.",
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://masjidalbukharykl.com/",
          },
        ],
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = PROJECT_CATEGORIES_INPUT.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    slug: slugify(item.title),
  })),
);

export const PROJECT_CATEGORY_NAMES: string[] = PROJECT_CATEGORIES_INPUT.map(
  (cat) => cat.title,
);

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featured);
}
