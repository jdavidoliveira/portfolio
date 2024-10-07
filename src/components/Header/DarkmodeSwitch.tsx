'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkmodeSwitch() {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const darkMode =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && userPrefersDark)

    setIsDark(darkMode)

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  function switchTheme() {
    const newMode = !isDark
    setIsDark(newMode)

    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button onClick={switchTheme}>{isDark ? <MoonIcon /> : <SunIcon />}</button>
  )
}
