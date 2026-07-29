import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import TimeLineWorkingExperience from "@/components/timeline/TimeLineWorkingExperience";

export default function HomeContent() {
  return (
    <>
      <Landing />
      <About />
      <div className="bg-section">
        <Skills />
      </div>
      <Services />
      <div className="bg-section">
        <FeaturedProjects />
      </div>
      <TimeLineWorkingExperience />
    </>
  );
}
