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
        return <Wallpaper />
      case 'BACKEND':
        return <Database />
      case 'DESKTOP':
        return <AppWindow />
      case 'MOBILE':
        return <TabletSmartphone />
      default:
        return '🌐'
    }
  }
  // const iconFromCategory = (category: string) => {
  //   switch (category) {
  //     case 'FRONTEND':
  //       return '🌐'
  //     case 'BACKEND':
  //       return '📦'
  //     case 'DESKTOP':
  //       return '💻'
  //     case 'MOBILE':
  //       return '📱'
  //     default:
  //       return '🌐'
  //   }
  // }

  return (
    <div className="flex items-center w-full justify-center bg-[#dedede] relative">
      <div
        className="absolute top-4 right-4 hover:scale-105 transition duration-250"
        title={category}
      >
        {iconFromCategory()}
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-6 dark:bg-[#333] dark:text-white bg-white">
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
              className="border p-2 rounded-3xl min-w-[85px] sm:w-auto w-full flex items-center justify-center hover:bg-[#dedede] transition"
              target="_blank"
            >
              Repositório
            </Link>
          )}
          {liveProjectUrl && (
            <Link
              href={liveProjectUrl}
              className="border p-2 rounded-3xl min-w-[85px] sm:w-auto w-full flex items-center justify-center bg-primary-black hover:bg-orange-500 transition text-white"
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
      className="border p-1.5 rounded-xl cursor-default hover:bg-[#dedede] transition"
    >
      {name}
    </button>
  )
}
