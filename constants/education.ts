export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  description?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    institution: "Universiti Malaya",
    degree: "Master of Software Engineering",
    date: "In progress, 2026 – Present",
  },
  {
    institution: "Albukhary International University",
    degree: "Bachelor of Computer Science (Honours)",
    date: "2025",
    description:
      "Graduated with a Bachelor of Computer Science (Honours). Built a strong foundation in software development and contributed to projects such as a Hostel Management System to improve administrative efficiency.",
  },
];
