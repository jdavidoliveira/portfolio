import { GithubIcon, Linkedin, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedH1 from "./AnimatedH1";
import AnimatedH2 from "./AnimatedH2";

export default function IntroductionSection() {

    return (<>
        <section className="w-full flex py-40 items-center justify-center relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
                <Rocket size={300} className="w-6 h-6 absolute bottom-full right-full animate-float" />
                <Image width={300} height={300} alt="Foto do João David" src="https://github.com/lordaval.png" className="rounded-lg w-56" />
                <div className="flex flex-col items-center md:items-start gap-1">
                    <h3 className="text-lg sm:text-xl font-bold">João David de Oliveira</h3>
                    <AnimatedH1 />
                    <h2 className="text-xl sm:text-3xl font-medium">Um programador capaz de <span className="bg-clip-text text-transparent animate-color-change bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">tudo</span></h2>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-xl text-black/80">📍 Rio de Janeiro - Brasil</span>
                    </div>
                    <nav className="flex items-center gap-3 p-1">
                        <Link href="https://github.com/lordaval" target="_blank" title="Acessar GitHub"><GithubIcon className="hover:scale-105" /></Link>
                        <Link href="https://linkedin.com/in/joao-david-de-oliveira-carneiro" target="_blank" title="Acessar LinkedIn"><Linkedin className="hover:scale-105" /></Link>
                    </nav>
                </div>
            </div>
        </section>
        <section className="w-full flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
                <p className="text-xl font-bold text-center">Prazer, meu nome é David, tenho 17 anos, e sou um desenvolvedor Full-Stack.</p>
            </div>
        </section>
    </>
    )
}