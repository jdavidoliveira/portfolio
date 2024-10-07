import { GithubIcon, Linkedin, Rocket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedH1 from './AnimatedH1'
import AnimatedH2 from './AnimatedH2'

export default function IntroductionSection() {
  return (
    <>
      <section className="w-full flex md:py-40 py-20 items-center justify-center relative bg-white dark:bg-primary-dark">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
          {/* <Rocket
            size={300}
            className="w-6 h-6 absolute bottom-full right-full animate-float"
          /> */}
          <Image
            width={300}
            height={300}
            alt="Foto do João David"
            src="https://github.com/jdavidoliveira.png"
            className="rounded-full h-full"
          />
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="text-lg sm:text-xl font-bold dark:text-white">
              João David de Oliveira C.
            </h3>
            <AnimatedH1 />
            <h2 className="text-xl sm:text-3xl font-medium dark:text-white">
              Um programador capaz de{' '}
              <span className="bg-clip-text text-transparent animate-color-change bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
                tudo
              </span>
            </h2>
            <div className="flex items-center gap-1">
              <span className="font-bold text-xl dark:text-white text-black/80">
                📍 Rio de Janeiro - Brasil
              </span>
            </div>
            <nav className="flex items-center gap-3 p-1">
              <Link
                href="https://github.com/jdavidoliveira"
                target="_blank"
                title="Acessar GitHub"
              >
                <GithubIcon className="hover:scale-105 dark:invert" />
              </Link>
              <Link
                href="https://linkedin.com/in/joao-david-de-oliveira-carneiro"
                target="_blank"
                title="Acessar LinkedIn"
              >
                <Linkedin className="hover:scale-105 dark:invert" />
              </Link>
            </nav>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-white dark:bg-primary-dark">
        <div className="w-10/12 flex items-center justify-center">
          <p className="text-xl font-bold text-center dark:text-white">
            Prazer, meu chamo David e sou um desenvolvedor de software. Crio
            soluções eficientes para diversas plataformas e infraestruturas.
          </p>
        </div>
      </section>
    </>
  )
}
