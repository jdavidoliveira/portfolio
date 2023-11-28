"use client"

import React, { useState } from 'react'

export default function AnimatedH1() {

    const texts = ["Full-Stack", "Front-End", "Back-End", "Mobile", "Desktop"]
    const [currentText, setCurrentText] = useState(0)

    setTimeout(() => {
        setCurrentText((currentText + 1) % texts.length)
    }, 1000)

  return (
    <h1 className="text-2xl sm:text-4xl font-extrabold w-full">Desenvolvedor <span>{texts[currentText]}</span></h1>
  )
}
