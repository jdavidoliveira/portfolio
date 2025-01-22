import { IProject } from '@/@types/IProject'
import { AppWindow, Database, TabletSmartphone, Wallpaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  project: IProject
}
export default function ProjectCard({
  project: {
    title,
    description,
    stack,
    repoUrl,
    liveProjectUrl,
    imageUrl,
    category
  }
}: Props) {
  const formattedTitle = title.length > 20 ? title.slice(0, 20) + '...' : title
  const formattedDescription =
    description && description.length > 150
      ? description.slice(0, 150) + '...'
      : description

  const iconFromCategory = () => {
    switch (category) {
      case 'FRONTEND':
        return <Wallpaper className="dark:text-white" />
      case 'BACKEND':
        return <Database className="dark:text-white" />
      case 'DESKTOP':
        return <AppWindow className="dark:text-white" />
      case 'MOBILE':
        return <TabletSmartphone className="dark:text-white" />
      default:
        return '🌐'
    }
  }

  return (
    <div className="flex items-center w-full justify-center bg-[#dedede] dark:bg-[#333] relative rounded-xl">
      <div
        className="absolute top-4 right-4 hover:scale-105 transition duration-250"
        title={category}
      >
        {iconFromCategory()}
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-6 dark:bg-[#333] rounded-xl dark:text-white bg-primary-bg">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">{formattedTitle}</h1>
          <p className="text-base font-medium h-16 hover:overflow-y-auto transition overflow-hidden leading-5">
            {formattedDescription}
          </p>
          <div className="w-full flex flex-col gap-1">
            <h2 className="">Tecnologias usadas:</h2>
            <div className="flex items-center gap-1.5 gap-y-1 flex-grow flex-wrap">
              {stack.map((stack) => (
                <Stack key={stack} name={stack} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-4 w-full gap-2">
          {repoUrl && (
            <Link
              href={repoUrl}
              className="border py-2 px-3 rounded-3xl min-w-[85px] sm:w-auto w-full flex items-center justify-center hover:bg-[#dedede] transition"
              target="_blank"
            >
              Repositório
            </Link>
          )}
          {liveProjectUrl && (
            <Link
              href={liveProjectUrl}
              className="border p-2 rounded-3xl min-w-[85px] sm:w-auto w-full flex items-center justify-center bg-secondary-bg hover:bg-accent transition text-white"
              target="_blank"
            >
              Acessar
            </Link>
          )}
        </div>
      </div>
      {imageUrl && (
        <div className="w-1/2 h-full relative hidden lg:block">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
    </div>
  )
}

function Stack({ name }: { name: string }) {
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className="border py-1.5 px-2 rounded-xl cursor-default hover:bg-[#dedede] transition"
    >
      {name}
    </button>
  )
}
