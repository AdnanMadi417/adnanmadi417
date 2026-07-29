import type { Metadata } from "next";
import ProjectsView from "@/views/ProjectsView";

export const metadata: Metadata = {
  title: "Projects — Adnan Madi",
  description:
    "A selection of frontend, full-stack, backend, WordPress, and Figma projects I've built and shipped.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
