import Hero from "@/components/Hero";
import About from "@/components/About";
import WorksGrid from "@/components/WorksGrid";
import Services from "@/components/Services";
import SkillsExperience from "@/components/SkillsExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorksGrid />
      <Services />
      <SkillsExperience />
      <Contact />
    </>
  );
}
