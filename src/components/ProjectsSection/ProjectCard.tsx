import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
    title: string
    description: string
    stack: string[]
    imageUrl: string
}
export default function ProjectCard({ title, description = "", stack = [], imageUrl }: Props) {

    const finalTitle = title.length > 14 ? title.slice(0, 14) + '...' : title
    const finalDescription = description && description.length > 50 ? description.slice(0, 50) + '...' : description

    return (
        <div className='flex items-center w-[40vw] aspect-[21/9] justify-center bg-[#dedede]'>
            <div className='w-1/2 h-full flex flex-col gap-2 p-4 items-start bg-white'>
                <h1 className='text-2xl'>{finalTitle}</h1>
                <p className='text-sm h-16 hover:overflow-y-auto transition overflow-hidden leading-4'>{finalDescription}</p>
                <div>
                    {stack.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
                <div className='flex items-center mt-4 w-full gap-2'>
                    <Link href='https://github.com/lordaval' className='border p-2 rounded-3xl min-w-[85px] flex items-center justify-center hover:bg-[#dedede] transition' target='_blank'>
                        Repositório
                    </Link>
                    <Link href='https://github.com/lordaval' className='border p-2 rounded-3xl min-w-[85px] flex items-center justify-center bg-primary-black hover:bg-orange-500 transition text-white' target='_blank'>
                        Acessar
                    </Link>

                </div>
            </div>
            <div className='w-1/2 h-full relative'>
                <Image src={imageUrl} alt={title} fill className='object-cover' />
            </div>
        </div>
    )
}
