import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { ProjectItem } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/buttons/Button";

interface ProjectDetailProps {
  project: ProjectItem;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="mx-auto max-w-4xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12">
      <Link
        href={ROUTES.projects}
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 no-underline hover:underline"
      >
        <Icon icon="mdi:arrow-left" />
        All Projects
      </Link>

      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_60%)]"></div>
        {project.featured && (
          <Badge variant="pill" dotted className="absolute top-4 left-4">
            Featured Project
          </Badge>
        )}
      </div>

      <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight text-ink">
        {project.title}
      </h1>
      <p className="mt-1 mb-8 flex flex-wrap gap-1.5 text-base text-muted">
        <span>{project.location}</span>
        <span className="opacity-40">•</span>
        <span>{project.description}</span>
      </p>

      {project.descriptions.length > 0 && (
        <ul className="mb-10 flex flex-col gap-3">
          {project.descriptions.map((desc, i) => (
            <li key={i} className="list-disc pl-4 text-base leading-[1.65] text-ink">
              {desc}
            </li>
          ))}
        </ul>
      )}

      {project.sections?.map((section) => (
        <div key={section.heading} className="mb-10">
          <h2 className="mb-3 text-xl font-bold tracking-tight text-ink">
            {section.heading}
          </h2>
          <div className="flex flex-col gap-3">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.65] text-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 border-t border-card pt-6">
          {project.links.map((link) =>
            link.buttonLink ? (
              <Button
                key={link.buttonText}
                variant="primary"
                href={link.buttonLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 text-sm"
              >
                {link.buttonText}
              </Button>
            ) : null,
          )}
        </div>
      )}
    </section>
  );
}
