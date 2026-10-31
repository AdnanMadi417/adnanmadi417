import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";

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
      </div>

      <div className="flex flex-col gap-1.5 p-6">
        <h3 className="text-lg font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="text-sm text-muted">
          {project.location} • {project.description}
        </p>
        <p className="mt-1.5 text-sm leading-[1.6] text-ink">
          {project.summary}
        </p>
        {project.outcome && (
          <p className="mt-1 text-xs font-semibold tracking-wide text-blue-600">
            {project.outcome}
          </p>
        )}
        {project.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-card px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
