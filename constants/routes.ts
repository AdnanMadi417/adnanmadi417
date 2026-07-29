export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}

// Anchors carry a leading "/" so they resolve correctly from any route
// (Header renders on "/", "/projects", and "/projects/[slug]"), not just "/".
export const NAV_ITEMS: NavItem[] = [
  { href: "/#landing", label: "Home" },
  { href: "/#about", label: "About Me" },
  { href: "/#skills", label: "Technical Skills" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#working-timeline", label: "Work Experience" },
];

export const ROUTES = {
  home: "/",
  projects: "/projects",
  projectDetail: (slug: string) => `/projects/${slug}`,
} as const;
