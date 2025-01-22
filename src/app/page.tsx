import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationsSection'
import ExperiencieSection from '@/components/ExperienceSection'
import IntroductionSection from '@/components/IntroductionSection'
import ProjectsSection from '@/components/ProjectsSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import SkillsSection from '@/components/SkillsSection'
import UezSection from '@/components/UezSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bem-vindo ao meu portfolio!',
  description:
    'Bem-vindo ao meu portfólio. Aqui você encontrará informações sobre minhas habilidades, projetos, experiência e educação.',
  keywords: [
    'portfólio',
    'desenvolvedor',
    'projetos',
    'habilidades',
    'experiência',
    'educação'
  ],
  authors: [
    {
      name: 'João David',
      url: 'https://github.com/jdavidoliveira'
    }
  ],
  robots: 'index, follow'
}

export default function Home() {
  return (
    <main className="bg-primary-bg">
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
