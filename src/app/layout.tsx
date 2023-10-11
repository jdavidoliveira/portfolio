import './globals.css'
import type { Metadata } from 'next'
import { Quantico, M_PLUS_Rounded_1c } from 'next/font/google'

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico',
})

const roundedMplus = M_PLUS_Rounded_1c({
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-rounded-mplus',
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
