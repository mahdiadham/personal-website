import { Link } from "react-router";
import { aboutMe } from "../../../../../../data/data.json";
import AboutUsImage from "../../../../../../assets/images/elements/about-us-image.webp";
import "./style.css";

const About = () => {
    return (
        <div className="container pt-45 flex justify-between items-center" id="about">
            <div className="basis-1/2">
                <h2 className="capitalize text-4xl text-white font-ubuntuBold mb-5">
                    {aboutMe?.title}
                </h2>
                <p className="text-white text-justify capitalize text-base leading-8">
                    {aboutMe?.description}
                </p>
                <div className="flex justify-start items-baseline">
                    <div className="flex justify-end items-center font-ubuntuBold gap-20 mt-7">
                        <div className="skills">
                            <span>
                                +{aboutMe?.projects}
                            </span>
                            <span>projects done :</span>
                        </div>
                        <div className="skills">
                            <span>
                                +{aboutMe?.yearsOfExperience}
                            </span>
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