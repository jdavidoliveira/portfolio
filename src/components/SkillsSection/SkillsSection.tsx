import StackCard from "./StackCard";
import StackContainer from "./StackContainer";

export default function SkillsSection() {
    return (
        <section className="w-full flex py-60 items-center justify-center">
            <div className="w-11/12 flex items-center justify-center">
                <StackContainer title="Minha Stack">
                    <StackCard name="TypeScript" photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" />
                    <StackCard name="React" photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                    <StackCard name="Next" photoUrl="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png" />
                    <StackCard name="Node" photoUrl="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" />
                    <StackCard name="React" photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                </StackContainer>
            </div>
        </section>
    )
}