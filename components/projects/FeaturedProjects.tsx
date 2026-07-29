import { getFeaturedProjects } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import Button from "@/components/ui/Button";
import ProjectsGrid from "./ProjectsGrid";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section
      id="featured-projects"
      className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12"
    >
      <div className="mb-10 text-center" data-aos="fade-up">
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-ink">
          Featured Projects
        </h2>
        <p className="text-base text-muted">
          A selection of work I&apos;ve built and shipped
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ProjectsGrid projects={featured} />
      </div>

      <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="200">
        <Button variant="solid" href={ROUTES.projects} className="px-6 py-2.5 text-sm">
          View All Projects
        </Button>
      </div>
    </section>
  );
}
