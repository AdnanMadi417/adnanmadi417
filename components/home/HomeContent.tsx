import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import Approach from "@/components/approach/Approach";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import TimeLineWorkingExperience from "@/components/timeline/TimeLineWorkingExperience";
import Faq from "@/components/faq/Faq";

export default function HomeContent() {
  return (
    <>
      <Landing />
      <About />
      <Approach />
      <Skills />
      <Services />
      <FeaturedProjects />
      <TimeLineWorkingExperience />
      <Faq />
    </>
  );
}
