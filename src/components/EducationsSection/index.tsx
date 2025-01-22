// Import necessary modules
import { educationData } from '@/data/education'
import React from 'react'

const EducationSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-secondary-bg py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Formação Acadêmica
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
  description
}) => {
  return (
    <div className="bg-white dark:bg-[#333] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        {institution}
      </h3>
      <p className="text-gray-500 dark:text-gray-100">{degree}</p>
      <span className="text-sm text-gray-400 dark:text-gray-400">{period}</span>
      <p className="text-gray-600 dark:text-gray-100 mt-3">{description}</p>
    </div>
  )
}
