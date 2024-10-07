'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={twMerge(
        'fixed bottom-4 right-4 z-50 dark:bg-black bg-white hover:opacity-80 p-1 rounded-full shadow-lg border transition duration-700 animate-bounce',
        !showButton && 'hidden'
      )}
    >
      <ArrowUp className="w-6 h-6 text-orange-500" />
    </button>
  )
}

export default ScrollToTopButton

/*
`${
  showButton
  ? 'opacity-100 visible translate-y-0'
  : 'invisible opacity-0 translate-y-6'
} bg-black dark:bg-white hover:opacity-80 p-1 rounded-full  shadow-lg transition duration-700 animate-bounce`
 */
