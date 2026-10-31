import { PROJECTS } from "@/constants/projects";
import { PageHero } from "@/components/ui/hero/PageHero";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsBrowser() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        headline="Projects"
        description="Web products I've built and shipped end to end"
      />

      <section className="mx-auto max-w-6xl px-8 py-20 max-[600px]:px-4 max-[600px]:py-12">
        <div data-aos="fade-up" data-aos-delay="100">
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </section>
    </>
  );
}
