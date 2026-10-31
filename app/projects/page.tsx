import type { Metadata } from "next";
import ProjectsView from "@/views/ProjectsView";

export const metadata: Metadata = {
  title: "Projects — Adnan Madi",
  description:
    "Web products I've built and shipped end to end, from API and data model to UI.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
