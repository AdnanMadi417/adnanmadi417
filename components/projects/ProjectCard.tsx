import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={ROUTES.projectDetail(project.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-card bg-white no-underline shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(3,72,209,0.1)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="pill" className="absolute top-3 left-3">
          {project.category}
        </Badge>
      </div>

      <div className="flex flex-col gap-1.5 p-6">
        <h3 className="text-lg font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="text-sm text-muted">
          {project.location} • {project.description}
        </p>
      </div>
    </Link>
  );
}
