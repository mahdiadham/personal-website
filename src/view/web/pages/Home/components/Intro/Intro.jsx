import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { introText, status } from "../../../../../../data/data.json";
import IntroGif from "../../../../../../assets/images/elements/intro-gif.gif";
import ResumePDF from "../../../../../../assets/docs/mahdi-adham-resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "motion/react";

const Intro = () => {
    const [ loading, setLoading ] = useState(false);

    const handleDownload = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return (
        <div className="container flex max-sm:flex-col justify-between items-center gap-y-20 sm:mt-35 mt-20">
            <motion.div
                className="flex flex-col justify-start items-start gap-y-6"
                initial={{x: -300, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex justify-start items-center gap-3">
                    <div className={`size-11 overflow-hidden flex justify-center items-center rounded-md ${status ? "shadow-neon-sm" : "shadow-red-neon-sm"}`}>
                        <img src={IntroGif} alt="intro-image" />
                    </div>
                    <div className={`size-3 ${status ? "bg-emerald-700" : "bg-red-500"} rounded-full flex justify-center items-center`}>
                        <div className={`${status ? "bg-emerald-700" : "bg-red-500"} rounded-full size-3 animate-ping`} />
                    </div>
                    <span className="capitalize text-gray-600 text-sm">
                        {status ? "open to work" : "busy"}
                    </span>
                </div>
                <div>
                    <TypeAnimation className="font-ubuntuMedium text-white text-4xl lg:text-6xl capitalize custom-title-leading w-70 xs:w-80 lg:w-130 h-45 xs:h-35 lg:h-50 leading-13 lg:leading-17"
                        sequence={[
                            600,
                            introText?.firstText,
                            1000,
                            introText?.secondText,
                            1000,
                            introText?.thirdText,
                            1000
                        ]}
                        wrapper="h2"
                        speed={30}
                        repeat={Infinity}
                    />
                </div>
                <div className="flex justify-start items-center gap-4 mt-5">
                    <a href={ResumePDF} download className="bg-emerald-700 border-2 border-emerald-700 flex justify-center items-center gap-3 rounded-lg px-2 lg:px-5 max-md:text-sm max-xs:!text-xs h-12 capitalize hover:bg-transparent hover:text-emerald-600 transition-all duration-300 font-ubuntuMedium hover:*:border-emerald-600 hover:*:border-t-transparent" onClick={handleDownload}>
                        download cV
                        {loading ?
                            <div className="animate-spin size-5 border-2 border-black border-b-transparent rounded-full"></div>
                            : <MdOutlineFileDownload size={25} />
                        }
                    </a>
                    <a href="#about" className="bg-slate-800 border-2 border-slate-800 transition-all duration-300 hover:bg-transparent hover:text-slate-500 text-white flex justify-center items-center gap-3 rounded-lg px-2 lg:px-5 max-md:text-sm max-xs:!text-xs h-12 capitalize">
                        scroll down
                        <IoMdArrowDown size={22} />
                    </a>
                </div>
            </motion.div>
            <motion.div
                className="rounded-custom shadow-custom-neon overflow-hidden w-1/3 max-md:w-2/5 max-sm:w-2/3 max-xs:!w-3/4"
                initial={{y: 300, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{duration: 0.6}}
            >
                <img src={IntroGif} alt="intro-image" />
            </motion.div>
        </div>
    );
}

export default Intro;