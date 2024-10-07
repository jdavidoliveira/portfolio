'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ComponentProps, useState } from 'react'

import { experience } from '@/data/experience'
import { twMerge } from 'tailwind-merge'
import { IExperience } from '@/@types/IExperience'

export default function ExperiencieSection() {
  const [currentExperience, setCurrentExperience] = useState<IExperience>(
    experience[0]
  )

  return (
    <section className="w-full px-10 flex flex-col items-center justify-center bg-white dark:bg-primary-dark">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center w-fit gap-6"
        >
          <h1 className="text-3xl font-medium dark:text-white md:text-left text-center">
            Experiências
          </h1>
          <div className="flex md:flex-row flex-col items-start">
            <div className="flex md:flex-col md:mx-0 mx-auto md:mb-0 mb-6 flex-row h-full">
              {experience.map((experience) => (
                <TabButton
                  onClick={() => setCurrentExperience(experience)}
                  key={experience.company}
                  title={experience.company}
                  active={currentExperience.company === experience.company}
                />
              ))}
            </div>
            <div className="flex flex-col h-full px-10 pb-10">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-2xl dark:text-white">
                  {currentExperience.roll}
                </h2>
                <span className="dark:text-white">
                  {currentExperience.date}
                </span>
              </div>
              <span className="dark:text-white">
                {currentExperience.company}{' '}
                {currentExperience.location &&
                  ` (${currentExperience.location})`}
              </span>
              <p className="max-w-3xl min-h-44 mt-2 dark:text-white">
                {currentExperience.description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

interface TabButtonProps extends ComponentProps<'button'> {
  title: string
  active?: boolean
}

function TabButton({ title, active, ...props }: TabButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'dark:text-white p-4 shadow-sm md:text-left text-center md:min-w-56',
        active && 'bg-black text-white dark:bg-white dark:text-black'
      )}
    >
      {title}
    </button>
  )
}
