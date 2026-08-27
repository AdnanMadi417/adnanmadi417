import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import Approach from "@/components/approach/Approach";
import Stats from "@/components/stats/Stats";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import Differentiators from "@/components/differentiators/Differentiators";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import TimeLineWorkingExperience from "@/components/timeline/TimeLineWorkingExperience";
import Faq from "@/components/faq/Faq";
import CtaBanner from "@/components/cta/CtaBanner";

export default function HomeContent() {
  return (
    <>
      <Landing />
      <About />
      <Approach />
      <Stats />
      <Skills />
      <Services />
      <Differentiators />
      <FeaturedProjects />
      <TimeLineWorkingExperience />
      <Faq />
      <CtaBanner />
    </>
  );
}
