import Header from "@/components/Header/Header";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
        <SkillsSection />
      </main>
    </>
  )
}
