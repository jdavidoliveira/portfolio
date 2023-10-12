import Image from "next/image";

interface StackCardProps {
    photoUrl: string
    name: string
}

export default function StackCard({ name, photoUrl }: StackCardProps) {
    return (
        <div className="flex flex-col items-center justify-between w-20 h-24 hover:scale-105 transition duration-250">
            <div className="w-full flex items-center justify-center">
                <Image width={400} height={400} src={photoUrl} alt="Icone da stack" className="w-5/6" />
            </div>
            <span className="w-full text-center text-white font-sans font-medium">{name}</span>
        </div>
    )
}