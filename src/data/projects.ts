import { IProject } from '@/@types/IProject'

// A ideia é trocar isso daqui por dados vindos de uma API, seja uma API própria ou a do GitHub
export const projects: IProject[] = [
  {
    title: 'Barber Shop',
    description:
      'Landing page de uma barbearia fictícia, com a funcionalidade de troca de tema.',
    stack: ['React', 'Context API', 'Vite'],
    repoUrl: 'https://github.com/jdavidoliveira/barbershop',
    liveProjectUrl: 'https://barbershop-one.vercel.app/',
    category: 'FRONTEND'
  },
  {
    title: 'Pass In',
    description:
      'O pass.in é uma aplicação de gestão de participantes em eventos presenciais, desenvolvida durante a NLW Unite, aperfeiçoada por mim.',
    stack: ['Node', 'Prisma', 'TypeScript', 'SQLite'],
    repoUrl: 'https://github.com/jdavidoliveira/pass-in-backend',
    category: 'BACKEND'
  },
  {
    title: 'Live Polls',
    description:
      'Backend sobre um sistema de enquetes, onde um usuário pode criar enquetes com opções, votar nelas, e consultar uma enquete em tempo real.',
    stack: ['Node', 'WebSockets', 'TypeScript', 'Redis', 'SQL'],
    repoUrl: 'https://github.com/jdavidoliveira/live-polls-backend',
    category: 'BACKEND'
  },
  {
    title: "AJJD Love's",
    description:
      'Uma aplicação com uma galeria de imagens e um contador, e alguns texto para minha namorada em comemoração ao nosso 1 º ano de namoro',
    stack: ['React', 'TypeScript', 'Vite'],
    liveProjectUrl: 'https://ajjd-counter.vercel.app/',
    category: 'FRONTEND'
  }
]
