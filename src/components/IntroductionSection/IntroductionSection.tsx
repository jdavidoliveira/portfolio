import { GithubIcon, Linkedin, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionSection() {
    return (<>
        <section className="w-full flex pt-40 pb-40 items-center justify-center relative">
            <Rocket className="w-6 h-6 absolute top-[30%] left-[30%] animate-foguete " />
            <div className="flex items-center justify-center gap-4">
                <Image width={300} height={300} alt="Foto do João David" src="https://github.com/lordaval.png" className="rounded-lg w-56" />
                <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xl font-bold">João David de Oliveira</h3>
                    <h1 className="text-4xl font-extrabold">Desenvolvedor Full-Stack</h1>
                    <h2 className="text-3xl font-medium">Um programador capaz de tudo</h2>
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
            <div className="w-8/12 flex items-center justify-center">
                <p className="text-lg font-bold text-center">Prazer, meu nome é David, tenho 17 anos, e sou garoto de programa. Eu crio soluções para qualquer problema, para qualquer plataforma, e em qualquer infraestutura.</p>
            </div>
        </section>
    </>
    )
}