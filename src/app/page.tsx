import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationsSection'
import ExperiencieSection from '@/components/ExperienceSection'
import IntroductionSection from '@/components/IntroductionSection'
import ProjectsSection from '@/components/ProjectsSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import SkillsSection from '@/components/SkillsSection'
import UezSection from '@/components/UezSection'

export default function Home() {
  return (
    <main className="bg-gray-50">
      <ScrollToTopButton />
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencieSection />
      <EducationSection />
      <UezSection />
      <ContactSection />
    </main>
  )
}
