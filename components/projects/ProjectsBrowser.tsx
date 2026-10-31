"use client";

import { PROJECTS } from "@/constants/projects";
import { useProjectCategoryFilter } from "@/hooks/useProjectCategoryFilter";
import { PageHero } from "@/components/ui/hero/PageHero";
import CategoryFilterTabs from "./CategoryFilterTabs";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsBrowser() {
  const { categories, selectedCategory, setSelectedCategory, visibleProjects } =
    useProjectCategoryFilter(PROJECTS);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        headline="Projects"
        description="Web products I've built and shipped end to end"
      />

      <section className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12">
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
    </>
  );
}
