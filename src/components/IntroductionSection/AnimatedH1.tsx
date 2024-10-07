'use client'

import React, { useState, useEffect } from 'react'

export default function AnimatedH1() {
  const texts = ['Front-End', 'Back-End', 'Mobile', 'Desktop']
  const [currentText, setCurrentText] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(50) // Velocidade de digitação

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentText]

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
        setSpeed(50) // Velocidade ao apagar
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
        setSpeed(100) // Velocidade ao escrever
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000) // Espera antes de apagar
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setCurrentText((currentText + 1) % texts.length)
      }
    }

    const timer = setTimeout(handleTyping, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting])

  return (
    <h1 className="text-2xl sm:text-4xl font-extrabold w-full dark:text-white">
      Desenvolvedor <span>{displayedText}</span>
    </h1>
  )
}
