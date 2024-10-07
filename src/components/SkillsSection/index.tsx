'use client'

import Image from 'next/image'
import StackCard from './StackCard'

export default function SkillsSection() {
  return (
    <section className="w-full flex flex-col py-48 items-center justify-center bg-white dark:bg-primary-dark">
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-3xl font-medium dark:text-white">
            Algumas tecnologias que uso no meu dia-a-dia
          </h1>
          <div className="bg-primary-black flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6 h-32 sm:p-10 p-6 rounded-lg">
            <StackCard
              name="TypeScript"
              photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            ></StackCard>
            <StackCard
              name="React"
              photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            ></StackCard>
            <StackCard
              name="Next"
              className="invert"
              photoUrl="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"
            />
            <StackCard
              name="Node"
              photoUrl="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
            />
            <StackCard
              name="AWS"
              className="invert"
              photoUrl="https://www.softsell.com.br/wp-content/uploads/2022/12/Amazon_Web_Services-Logo.wine_.png"
            />
          </div>
        </div>
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="mt-6 text-lg dark:text-white hover:underline"
      >
        ver mais...
      </button>
    </section>
  )
}
