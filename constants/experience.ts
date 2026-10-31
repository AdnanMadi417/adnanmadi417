export interface ExperienceStep {
  title: string;
  company: string;
  companyUrl?: string;
  companyFullName?: string;
  date: string;
  description: string;
}

export const EXPERIENCE: ExperienceStep[] = [
  {
    title: "Software Engineer",
    company: "Unibexs",
    companyUrl: "https://www.unibexs.com/",
    date: "[TODO: Start Month Year] – Present",
    description: `Working on Unibexs' SaaS product across the full stack — building features end to end, from API and data model to UI, and turning product requirements into reliable, maintainable software.`,
  },
  {
    title: "Front End Developer",
    company: "Unibexs",
    companyUrl: "https://www.unibexs.com/",
    date: "Sep 2025 – [TODO: End Month Year]",
    description: `Developing high-performance, scalable front-end applications with a strong focus on user experience. Collaborating with cross-functional teams to implement design systems, optimize responsiveness, and integrate seamlessly with back-end services, ensuring reliable and polished applications.`,
  },
  {
    title: "Front End Developer (Freelance)",
    company: "Code & Canvas",
    date: "Oct 2025 – Mar 2026",
    description: `Designed and delivered modern, responsive user interfaces by translating UI/UX designs into clean front-end components. Partnered with clients to improve usability, visual consistency, and overall digital experience.`,
  },
  {
    title: "Web Development Intern",
    company: "Commerce Dot Com (CDC)",
    date: "Mar 2025 – Aug 2025",
    description: `Automated previously manual web processes, improving workflow efficiency for both users and administrators. Built responsive and user-centric interfaces that enhanced usability across multiple devices.`,
  },
  {
    title: "Front End Developer",
    company: "IESCO",
    companyFullName:
      "The International Educational Scientific and Cultural Organization",
    date: "Apr 2024 – Aug 2024",
    description: `Spearheaded the development of a Scholarship Registration System that streamlined application workflows, reducing submission time by 40% and processing time by 30%. Designed intuitive interfaces that increased successful applicant registrations by 25%.`,
  },
];
