interface StackContainerProps {
    title: string
    children: React.ReactNode
}

export default function StackContainer({ children, title }: StackContainerProps) {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            <h1 className="text-3xl font-medium">{title}</h1>
            <div className="bg-primary-black flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6 h-32 sm:p-10 p-6 rounded-lg">
                {children}
            </div>
        </div>
    )
}