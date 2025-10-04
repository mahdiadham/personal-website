import { aboutMe } from "../../../../../../data/data.json";
import AboutUsImage from "../../../../../../assets/images/elements/about-us-image.webp";

const About = () => {
    return (
        <div className="container mt-40 flex justify-between items-center" id="about">
            <div className="basis-1/2">
                <h2 className="capitalize text-3xl text-white font-ubuntuBold mb-5">
                    {aboutMe?.title}
                </h2>
                <p className="text-white text-justify capitalize text-base leading-8">
                    {aboutMe?.description}
                </p>
                <div className="flex justify-start items-center gap-20 mt-7">
                    <div className="flex flex-col justify-center items-center font-ubuntuBold gap-2">
                        <span className="text-white text-5xl">+110</span>
                        <span className="text-emerald-900 capitalize text-lg">projects done :</span>
                    </div>
                    <div className="flex flex-col justify-center items-center font-ubuntuBold gap-2">
                        <span className="text-white text-5xl">+5</span>
                        <span className="text-emerald-900 capitalize text-lg">years of experience :</span>
                    </div>
                </div>
            </div>         
            <div>
                <img src={AboutUsImage} alt="about-us-image" />
            </div>
        </div>
    );
}

export default About;