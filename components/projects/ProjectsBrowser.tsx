"use client";

import { PROJECTS } from "@/constants/projects";
import { useProjectCategoryFilter } from "@/hooks/useProjectCategoryFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import CategoryFilterTabs from "./CategoryFilterTabs";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsBrowser() {
  const { categories, selectedCategory, setSelectedCategory, visibleProjects } =
    useProjectCategoryFilter(PROJECTS);

  return (
    <section className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12">
      <div className="mb-10">
        <SectionHeading
          eyebrow="Portfolio"
          headline="Projects"
          subtext="A selection of frontend, full-stack, backend, WordPress, and Figma projects I've built and shipped"
        />
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
