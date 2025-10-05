import SkillCard from "./components/SkillCards/SkillCard";
import { technologies } from "../../../../../../data/data.json";

const Skills = () => {
    return (
        <div className="container flex flex-col justify-start items-center mt-30">
            <h2 className="text-white capitalize text-5xl font-ubuntuBold">
                {technologies?.title}
            </h2>
            <p className="text-slate-600 capitalize font-ubuntuMedium mt-7 text-lg">
                {technologies?.description}
            </p>
            <div className="flex justify-start items-start gap-10 mt-10">
                {technologies?.list?.map(tech =>
                    <SkillCard key={tech?.name} data={tech} />
                )}
            </div>
        </div>
    );
}

export default Skills;