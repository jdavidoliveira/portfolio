import './globals.css'
import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header/Header'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import IntroductionSection from '@/components/IntroductionSection'
import SkillsSection from '@/components/SkillsSection'
import ExperiencieSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico'
})

export const metadata: Metadata = {
  title: 'Portfolio - João David',
  description:
    'Portfolio pessoal, pertencente á: João David de Oliveira Carneiro. GitHub: https://github.com/jdavidoliveira'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={quantico.className}>
        <Analytics />
        <SpeedInsights />
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
