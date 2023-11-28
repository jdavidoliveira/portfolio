"use client"

import React, { useState } from 'react'

export default function AnimatedH2() {

    const colors = ["from-sky-400 via-rose-400 to-lime-400", "from-green-300 via-blue-500 to-purple-600", "from-pink-500 via-red-500 to-yellow-500", "from-red-300 via-yellow-500 to-pink-600", "from-indigo-300 via-purple-500 to-pink-600"]
    const [currentColor, setCurrentColor] = useState(0)

    setTimeout(() => {
        setCurrentColor((currentColor + 1) % colors.length)
    }, 100)

  return (
    <h2 className="text-xl sm:text-3xl font-medium">Um programador capaz de <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors[currentColor]}`}>{"tudo"}</span></h2>
  )
}
