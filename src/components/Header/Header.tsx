'use client'
import { ChevronDown, MoonIcon } from 'lucide-react'

import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-20 bg-primary-black flex justify-center items-center text-white group transition duration-200">
            <div className="w-full mx-8 flex items-center justify-between">
                <h1 className="font-bold justify-self-start">J. David</h1>
                <nav className="hidden items-center justify-center justify-self-center group-hover:flex transition duration-200">
                    <ul className="flex w-full items-center justify-between list-none">
                        <li><Link href="#" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="#" className="hover:text-orange-500">Projetos</Link></li>
                        <li><Link href="#" className="hover:text-orange-500">Sobre</Link></li>
                        <li><Link href="#" className="hover:text-orange-500">Contato</Link></li>
                        <li><Link href="#" className="hover:text-orange-500 flex flex-row items-center">Página <ChevronDown /> </Link></li>
                    </ul>
                </nav>
                <nav className="flex items-center justify-betweeen justify-self-end">
                    <div className="flex items-center justify-betweeen border-r border-white px-4 py-2">
                        <MoonIcon />
                    </div>
                    <div className="flex items-center justify-betweeen border-l border-white px-4 py-2">
                        21:04
                    </div>

                </nav>
                {/* <p>Desenvolvido por <a href="https://github.com/lordaval">João David de Oliveira Carneiro</a></p> */}
            </div>
        </header>
    )
}
