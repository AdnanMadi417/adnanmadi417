export interface Service {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

export const SERVICES: Service[] = [
  {
    icon: "mdi:palette",
    title: "Interface Engineering",
    description:
      "Transform design concepts into production-quality interfaces with attention to accessibility, responsiveness, and interaction polish using modern frontend frameworks.",
    delay: "0",
  },
  {
    icon: "mdi:code-braces",
    title: "Full Stack Platform Development",
    description:
      "Develop scalable web platforms end-to-end, including dashboards, administrative systems, and content-driven applications, spanning component-based frontends, backend services, and database design.",
    delay: "100",
  },
  {
    icon: "mdi:server",
    title: "API & Backend Integration",
    description:
      "Implement secure communication between frontend applications and backend services, supporting authentication flows, data management, and structured state synchronization.",
    delay: "200",
  },
  {
    icon: "mdi:architecture",
    title: "Workflow Automation Systems",
    description:
      "Build interface-driven automation platforms that simplify administrative operations such as application tracking, program management, and partner workflow coordination.",
    delay: "300",
  },
];
