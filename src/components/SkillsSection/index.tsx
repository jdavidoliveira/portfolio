import Image from "next/image";
import StackCard from "./StackCard";
import StackContainer from "./StackContainer";

export default function SkillsSection() {
    return (
        <section className="w-full flex py-48 items-center justify-center">
            <div className="w-full flex items-center justify-center">
                <StackContainer title="Minha Stack">
                    <StackCard
                        name="TypeScript"
                        photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    >
                        <div className="flex items-center flex-col justify-center gap-2">
                            <h1 className="text-3xl font-bold">+</h1>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"} alt="Logo do JavaScript" className="w-10 h-10" width={200} height={200} />
                        </div>
                    </StackCard>
                    <StackCard 
                    name="React" 
                    photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"} alt="TailWind CSS" className="w-10 h-10 object-contain" width={200} height={200} />
                            <Image src={"https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png"} alt="Expo" className="w-10 h-10 object-contain p-1" width={200} height={200} />
                        </div>
                    </StackCard>
                    <StackCard name="Next" photoUrl="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png" />
                    <StackCard name="Node" photoUrl="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" />
                    <StackCard name="React" photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                </StackContainer>
            </div>
        </section>
    )
}