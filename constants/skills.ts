export interface Skill {
  title: string;
  icon: string;
  color: string;
  year: string;
}

export const SKILLS: Skill[] = [
  // Core Stack
  { title: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6", year: "Core" },
  { title: "Next.js", icon: "simple-icons:nextdotjs", color: "#000000", year: "Meta" },
  { title: "React", icon: "mdi:react", color: "#61DAFB", year: "Framework" },
  { title: "Django", icon: "simple-icons:django", color: "#092E20", year: "Backend" },
  { title: "PostgreSQL", icon: "simple-icons:postgresql", color: "#4169E1", year: "Database" },
  { title: "Django REST Framework", icon: "devicon-plain:djangorest", color: "#A30000", year: "Backend" },
  { title: "Tailwind CSS", icon: "simple-icons:tailwindcss", color: "#06B6D4", year: "Styling" },

  // Core Frontend
  { title: "JavaScript", icon: "mdi:language-javascript", color: "#F7DF1E", year: "Core" },
  { title: "HTML", icon: "mdi:language-html5", color: "#E44D26", year: "Core" },
  { title: "CSS", icon: "mdi:language-css3", color: "#264DE4", year: "Core" },
  { title: "SASS", icon: "mdi:sass", color: "#CC6699", year: "Styling" },

  // Frontend Frameworks
  { title: "Vue.js", icon: "mdi:vuejs", color: "#4FC08D", year: "Framework" },
  { title: "Nuxt.js", icon: "simple-icons:nuxtdotjs", color: "#00DC82", year: "Meta" },

  // UI / Design
  { title: "Bootstrap", icon: "simple-icons:bootstrap", color: "#7952B3", year: "Framework" },
  { title: "Figma", icon: "simple-icons:figma", color: "#F24E1E", year: "Design" },

  // Backend
  { title: "Node.js", icon: "mdi:nodejs", color: "#339933", year: "Backend" },
  { title: "Laravel", icon: "simple-icons:laravel", color: "#FF2D20", year: "Backend" },

  // Databases
  { title: "MySQL", icon: "simple-icons:mysql", color: "#4479A1", year: "Database" },

  // Testing
  { title: "Playwright", icon: "simple-icons:playwright", color: "#2EAD33", year: "Testing" },

  // Hosting / Cloud
  { title: "Vercel", icon: "simple-icons:vercel", color: "#000000", year: "Hosting" },
  { title: "DigitalOcean", icon: "simple-icons:digitalocean", color: "#0080FF", year: "Hosting" },

  // Integration / Supporting Tech
  { title: "API", icon: "mdi:api", color: "#0096FF", year: "Integration" },
  { title: "WordPress", icon: "simple-icons:wordpress", color: "#21B3EB", year: "CMS" },
];
