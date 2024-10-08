'use client'
import { ChevronDown, MoonIcon, SunIcon } from 'lucide-react'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

export default function Header() {
  const [hours, setHours] = useState<string>('Loading')

  // AVISO DE QUE ESTÁ EM DESENVOLVIMENTO
  // const [avised, setAvised] = useState<boolean>(false)
  // useEffect(() => {
  //   if (avised) return
  //   setAvised(true)
  //   window.alert('Aviso, este portfolio ainda está em desenvolvimento.')
  // }, [])

  useEffect(() => {
    function setCurrentTime() {
      const dateInstance = new Date()
      const hours =
        dateInstance.getHours().toString().length > 1
          ? dateInstance.getHours().toString()
          : `0${dateInstance.getHours().toString()}`
      const minutes =
        dateInstance.getMinutes().toString().length > 1
          ? dateInstance.getMinutes().toString()
          : `0${dateInstance.getMinutes().toString()}`

      const finalDate = `${hours}:${minutes}`

      return setHours(finalDate)
    }

    setInterval(setCurrentTime, 1000)
  }, [])

  return (
    <header className="w-full h-20 bg-primary-black flex justify-center items-center text-white group transition duration-200">
      <div className="w-full ml-8 mr-0 flex items-center justify-between">
        <h1 className="font-bold justify-self-start w-1/12">J. David</h1>
        <nav className="hidden items-center justify-center justify-self-center group-hover:flex transition duration-200">
          <ul className="flex w-full items-center justify-between gap-4 list-none">
            <li>
              <Link href="#" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-500">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-500">
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 flex flex-row items-center"
              >
                Página <ChevronDown />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex items-center justify-betweeen justify-self-end">
          <div className="flex items-center justify-betweeen border-r border-white px-4 py-2">
            <DarkmodeSwitch />
          </div>
          <div className="flex items-center justify-betweeen border-l border-white px-4 py-2">
            {`${hours}`}
          </div>
        </nav>
        {/* <p>Desenvolvido por <a href="https://github.com/jdavidoliveira">João David de Oliveira Carneiro</a></p> */}
      </div>
    </header>
  )
}
