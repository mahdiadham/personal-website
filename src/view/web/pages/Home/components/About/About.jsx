import { motion } from "motion/react";
import { aboutMe } from "../../../../../../data/data.json";
import AboutUsImage from "../../../../../../assets/images/elements/about-us-image.webp";
import "./style.css";

const About = () => {
    return (
        <div className="container pt-45 flex justify-between items-center" id="about">
            <div className="basis-1/2">
                <motion.h2
                    className="capitalize text-4xl text-white font-ubuntuBold mb-5"
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {aboutMe?.title}
                </motion.h2>
                <motion.p
                    className="text-white text-justify capitalize text-base leading-8"
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {aboutMe?.description}
                </motion.p>
                <motion.div
                    className="flex justify-start items-baseline"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0 }}
                >
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
                </motion.div>
            </div>
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src={AboutUsImage} alt="about-us-image" />
            </motion.div>
        </div>
    );
}

export default About;