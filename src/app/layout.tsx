import './globals.css'
import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico',
})


export const metadata: Metadata = {
  title: 'Portfolio - João David',
  description: 'Portfolio pessoal, pertencente á: João David de Oliveira Carneiro. GitHub: https://github.com/lordaval',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={quantico.className}>
        {children}
      </body>
    </html>
  )
}
