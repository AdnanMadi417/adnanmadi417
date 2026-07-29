import ProjectDetail from "@/components/projects/ProjectDetail";
import type { ProjectItem } from "@/constants/projects";

interface ProjectDetailViewProps {
  project: ProjectItem;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return <ProjectDetail project={project} />;
}
