'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

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
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: showButton ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={twMerge(
        'fixed bottom-10 right-10 animate-float z-50 dark:bg-black bg-primary-bg hover:opacity-80 p-2 rounded-full shadow-lg dark:border-none border transition duration-500',
        !showButton && 'hidden'
      )}
    >
      <ArrowUp className="size-7 text-accent" />
    </motion.button>
  )
}

export default ScrollToTopButton

/*
`${
  showButton
  ? 'opacity-100 visible translate-y-0'
  : 'invisible opacity-0 translate-y-6'
} bg-black dark:bg-primary-bg hover:opacity-80 p-1 rounded-full  shadow-lg transition duration-700 animate-bounce`
 */
