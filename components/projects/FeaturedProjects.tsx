import { getFeaturedProjects } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import { ArrowButton } from "@/components/ui/buttons/ArrowButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProjectsGrid from "./ProjectsGrid";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section
      id="featured-projects"
      className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12"
    >
      <div className="mb-10">
        <SectionHeading
          eyebrow="Portfolio"
          headline="Featured Projects"
          subtext="A selection of work I've built and shipped"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ProjectsGrid projects={featured} />
      </div>

      <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="200">
        <ArrowButton href={ROUTES.projects}>View All Projects</ArrowButton>
      </div>
    </section>
  );
}
