import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {

    return (
        <section className='w-full relative z-0 h-screen flex flex-col items-center bg-primary-black'>
            <StarBackground />
            <div className='w-full flex items-center justify-center mt-20 gap-4'>
                <Image src="/star.png" alt="Estrela" width={300} height={300} className='w-20 h-20 dark:invert invert-0 animate-rotate' />
                <h1 className='text-7xl dark:text-white'>Projetos</h1>
                <Image src="/star.png" alt="Estrela" width={300} height={300} className='w-20 h-20 dark:invert invert-0 animate-rotate' />
            </div>
            <div className='w-full flex items-center justify-center mt-20 gap-4'>
                <div className='flex flex-col items-centergap-4'>
                    <ProjectCard title="Projeto 1" description="Programinha simples feito em python, para pedir alguém em namoro de uma maneira criativa e divertida!" stack={["React", ", Next.js"]} imageUrl="https://github.com/lordaval.png" />
                </div>
                <div className='flex flex-col items-centergap-4'>
                    <ProjectCard title="Projeto 1" description="Programinha simples feito em python, para pedir alguém em namoro de uma maneira criativa e divertida!" stack={["React", ", Next.js"]} imageUrl="https://github.com/lordaval.png" />
                </div>
            </div>

        </section>
    )
}

function StarBackground() {


    return (
        <div className='w-full h-full -z-10 absolute'>
            <Image src="/star.png" alt="Estrela" width={300} height={300} className="w-10 h-10 dark:invert invert-0 animate-rotate absolute top-[30px] left-[30px]" />
            <Image src="/star.png" alt="Estrela" width={300} height={300} className="w-10 h-10 dark:invert invert-0 animate-rotate absolute top-[170px] right-[90px]" />
        </div>
    )

}