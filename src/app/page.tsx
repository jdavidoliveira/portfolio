import Header from "@/components/Header/Header";
import IntroductionSection from "@/components/IntroductionSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  )
}
