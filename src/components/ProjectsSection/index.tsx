'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'
import { Search } from 'lucide-react'

export default function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProjects(filtered)
  }, [search])

  return (
    <section className="w-full relative z-0 pb-20 min-h-screen flex flex-col items-center bg-primary-black">
      <StarBackground />
      <div className="w-full flex items-center justify-center mt-20 gap-4">
        <Image
          src="/star.png"
          alt="Estrela"
          width={300}
          height={300}
          className="md:size-20 size-10 invert animate-rotate"
        />
        <h1 className="md:text-7xl text-5xl text-white">Projetos</h1>
        <Image
          src="/star.png"
          alt="Estrela"
          width={300}
          height={300}
          className="md:size-20 size-10 invert animate-rotate"
        />
      </div>
      <div className="mt-20 w-10/12 mx-auto flex items-center gap-2 justify-center">
        <Search className="size-6 text-white/80" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por um projeto"
          className="appearance-none bg-transparent border-b w-64 px-1 border-white/20 outline-none text-white"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:px-20 px-10 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  )
}

function StarBackground() {
  const starsQuantity = 10

  return (
    <div className="w-full h-full -z-10 absolute">
      <Image
        src="/star.png"
        alt="Estrela"
        width={300}
        height={300}
        className="size-10 invert animate-rotate absolute top-[30px] left-[30px]"
      />
      <Image
        src="/star.png"
        alt="Estrela"
        width={300}
        height={300}
        className="size-10 invert animate-rotate absolute top-[170px] right-[90px]"
      />
    </div>
  )
}
