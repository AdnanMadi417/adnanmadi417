"use client";

import { PROJECTS } from "@/constants/projects";
import { useProjectCategoryFilter } from "@/hooks/useProjectCategoryFilter";
import CategoryFilterTabs from "./CategoryFilterTabs";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsBrowser() {
  const { categories, selectedCategory, setSelectedCategory, visibleProjects } =
    useProjectCategoryFilter(PROJECTS);

  return (
    <section className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12">
      <div className="mb-10 text-center" data-aos="fade-up">
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-ink">
          Projects
        </h2>
        <p className="text-base text-muted">
          A selection of frontend, full-stack, backend, WordPress, and Figma
          projects I&apos;ve built and shipped
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <CategoryFilterTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <ProjectsGrid projects={visibleProjects} />
      </div>
    </section>
  );
}
