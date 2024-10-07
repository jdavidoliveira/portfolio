import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface StackCardProps {
  photoUrl: string
  name: string
  children?: React.ReactNode
  className?: string
}

export default function StackCard({
  name,
  photoUrl,
  children,
  className
}: StackCardProps) {
  return (
    <div className="flex flex-col items-center justify-between w-16 h-18 sm:w-20 sm:h-24 hover:scale-105 transition duration-250 group">
      <div className="w-full flex items-center justify-center">
        <Image
          width={500}
          height={500}
          src={photoUrl}
          alt="Icone da stack"
          className={twMerge(
            'sm:w-5/6 w-4/6 aspect-square object-contain',
            className
          )}
        />
      </div>
      <span className="w-full text-center text-white text-sm sm:text-base font-sans font-medium">
        {name}
      </span>
      {children && <HoverCard />}
    </div>
  )

  function HoverCard() {
    return (
      <div className="w-[200%] items-center bg-primary-black border-2 border-orange-500 rounded-lg absolute top-full left-1/2 transform -translate-x-1/2 justify-center hidden group-hover:flex">
        <div className="w-8/12 flex flex-col p-2 items-center text-white justify-center">
          {children}
        </div>
      </div>
    )
  }
}
