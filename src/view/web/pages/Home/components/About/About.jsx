import { Link } from "react-router";
import { aboutMe } from "../../../../../../data/data.json";
import AboutUsImage from "../../../../../../assets/images/elements/about-us-image.webp";
import "./style.css";

const About = () => {
    return (
        <div className="container mt-45 flex justify-between items-center" id="about">
            <div className="basis-1/2">
                <h2 className="capitalize text-4xl text-white font-ubuntuBold mb-5">
                    {aboutMe?.title}
                </h2>
                <p className="text-white text-justify capitalize text-base leading-8">
                    {aboutMe?.description}
                </p>
                <div className="flex justify-between items-baseline">
                    <Link to="/about-me" className="capitalize border-2 border-emerald-600 text-emerald-600 h-12 px-10 flex justify-center items-center rounded-lg font-ubuntuMedium transition-all duration-300 hover:bg-emerald-600 hover:text-black">
                        see more
                    </Link>
                    <div className="flex justify-end items-center font-ubuntuBold gap-20 mt-7">
                        <div className="skills">
                            <span>+110</span>
                            <span>projects done :</span>
                        </div>
                        <div className="skills">
                            <span>+5</span>
                            <span>years of experience :</span>
                        </div>
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