import { copyright } from "../../../data/data.json";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    const iconsMap = {
        "CiLinkedin": CiLinkedin,
        "TbBrandGithubFilled": TbBrandGithubFilled,
        "FaInstagram": FaInstagram
    }

    return (
        <footer className="border-t-2 border-t-slate-800 mt-10">
            <div className="container flex max-sm:flex-col justify-between items-center py-4 gap-y-5">
                <span className="text-slate-500 capitalize text-base font-ubuntuBold text-center">
                    © {year} {copyright.author} - all rights reserved.
                </span>
                {copyright?.socialMedia?.length &&
                    <div className="flex justify-center items-center gap-6">
                        {copyright?.socialMedia?.map(media => {
                            const IconComponent = iconsMap[media.icon];
                            return (
                                <a href={media?.url} className="block text-white border-1 border-teal-900 rounded-lg p-1 bg-gray-900">
                                    <IconComponent size={30} />
                                </a>
                            );
                        })}
                    </div>
                }
            </div>
        </footer>
    );
}

export default Footer;