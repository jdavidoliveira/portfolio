import Header from "@/components/Header/Header";
import { GithubIcon, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <Image width={300} height={300} alt="Foto do João David" src="https://github.com/lordaval.png" className="rounded-lg" />
            <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl font-bold">João David de Oliveira</h3>
                <h1 className="text-4xl font-extrabold">Desenvolvedor Full-Stack</h1>
                <h2 className="text-3xl font-medium">Um programador capaz de tudo</h2>
                <div className="flex items-center gap-1">
                  <MapPin />
                  <span className="font-bold text-xl text-black/80">Rio de Janeiro - Brasil</span>
                </div>
                <nav className="flex items-center gap-3">
                  <GithubIcon />
                  <Linkedin />
                </nav>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
