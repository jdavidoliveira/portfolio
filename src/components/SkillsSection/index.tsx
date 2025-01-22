'use client'

import StackCard from './StackCard'
import { useState } from 'react'

export default function SkillsSection() {
  const [showMore, setShowMore] = useState(true)

  return (
    <section className="w-full flex flex-col sm:py-48 py-10 items-center justify-center bg-primary-bg dark:bg-dark-primary-bg">
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="sm:text-3xl text-xl font-medium dark:text-white text-center px-5">
            Principais tecnologias que uso no meu dia-a-dia
          </h1>
          <div className="bg-secondary-bg flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6 sm:h-32 sm:p-10 p-4 sm:rounded-lg">
            <StackCard
              name="TypeScript"
              photoUrl="/stacks/typescript.png"
            ></StackCard>
            <StackCard name="React" photoUrl="/stacks/react.png"></StackCard>
            <StackCard name="Next" className="" photoUrl="/stacks/nextjs.png" />
            <StackCard name="Node" photoUrl="/stacks/node.png" />
            <StackCard name="Tailwind" photoUrl="/stacks/tailwind.png" />
          </div>
          {showMore && (
            <>
              <h1 className="sm:text-3xl text-xl font-medium dark:text-white text-center px-5">
                Banco de dados
              </h1>
              <div className="bg-secondary-bg flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6 sm:h-32 sm:p-10 p-4 sm:rounded-lg">
                <StackCard
                  name="MongoDB"
                  photoUrl="/stacks/mongodb.png"
                ></StackCard>
                <StackCard
                  name="Prisma"
                  photoUrl="/stacks/prisma.png"
                ></StackCard>
                <StackCard name="MySQL" photoUrl="/stacks/mysql.png" />
                <StackCard name="Postgres" photoUrl="/stacks/postgres.png" />
                <StackCard name="Redis" photoUrl="/stacks/redis.svg" />
              </div>
              <h1 className="sm:text-3xl text-xl font-medium dark:text-white text-center px-5">
                Algumas ferramentas
              </h1>
              <div className="bg-secondary-bg flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6 sm:h-32 sm:p-10 p-4 sm:rounded-lg">
                <StackCard
                  name="Trello"
                  photoUrl="/stacks/trello.png"
                ></StackCard>
                <StackCard name="AWS" photoUrl="/stacks/aws.png"></StackCard>
                <StackCard name="Docker" photoUrl="/stacks/docker.png" />
                <StackCard name="Vercel" photoUrl="/stacks/vercel.png" />
                <StackCard name="Git" photoUrl="/stacks/git.png" />
              </div>
            </>
          )}
        </div>
      </div>
      <button
        onClick={() => setShowMore((prev) => !prev)}
        className="mt-6 text-lg dark:text-white hover:underline"
      >
        {showMore ? 'ver menos' : 'ver mais...'}
      </button>
    </section>
  )
}
