import type { ProjectItem } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
