import ExperiencieSection from '@/components/ExperienceSection'
import IntroductionSection from '@/components/IntroductionSection'
import ProjectsSection from '@/components/ProjectsSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import SkillsSection from '@/components/SkillsSection'
import UezSection from '@/components/UezSection'

export default function Home() {
  return (
    <main>
      <ScrollToTopButton />
      <IntroductionSection />
      <SkillsSection />
      <ExperiencieSection />
      <ProjectsSection />
      <UezSection />
    </main>
  )
}
