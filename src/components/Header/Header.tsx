'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

export default function Header() {
  const [hours, setHours] = useState<string>('Loading')
  const [showHeader, setShowHeader] = useState<boolean>(true)
  const [lastScrollPos, setLastScrollPos] = useState<number>(0)

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

    const interval = setInterval(setCurrentTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
      setLastScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPos])

  return (
    <header
      className={`fixed w-full h-20 bg-secondary-bg flex z-50 justify-center group items-center text-white transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full ml-8 mr-0 flex items-center justify-between">
        <h1 className="font-bold justify-self-start w-1/12">J. David</h1>
        <nav className="hidden items-center justify-center group-hover:flex transition duration-200">
          <ul className="flex w-full items-center justify-between gap-4 list-none">
            <li>
              <Link href="/#introduction" className="hover:text-accent">
                Introdução
              </Link>
            </li>
            <li>
              <Link href="/projetos" className="hover:text-accent">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-accent">
                Contato
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
      </div>
    </header>
  )
}
