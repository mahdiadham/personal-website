import { Link } from "react-router";

const PortfolioCard = ({ data }) => {
    const { name, shortDescription, technologies, image, link, date } = data || {};

    return (
        <div className="min-w-67 max-w-67 xs:!min-w-85 xs:!max-w-85 h-115 max-xs:!h-120 px-4 py-6 rounded-2xl flex flex-col justify-start items-start bg-gradient-to-bl from-[#151b29] to-[#0b0f19] transition hover:-translate-y-2 hover:border-teal-700 duration-300 text-white border border-slate-800 relative">
                        <h4 className="text-2xl font-ubuntuMedium capitalize">
                            {name}
                        </h4>
                        <p className="text-sm text-slate-400 capitalize mt-1">
                            {shortDescription}
                        </p>
                        <div className="overflow-hidden rounded-lg my-4 w-full h-50 relative cursor-pointer">
                            <img src={image} alt={name || "portfolio"} className="rounded-lg size-full object-cover transition-all duration-300 hover:scale-110" />
                            <Link to={link} className="absolute z-90 bg-teal-700 bottom-3 left-3 py-1.5 px-4 rounded-md transition-all duration-300 hover:-translate-y-1">
                                view project
                            </Link>
                        </div>
                        {technologies?.length &&
                            <div className="flex justify-start items-center flex-wrap mt-1">
                                {technologies?.map(tech =>
                                    <span key={tech} className="bg-teal-800 text-white text-sm font-ubuntuMedium px-2 py-1 rounded-lg mr-2 mb-2">
                                        {tech}
                                    </span>
                                )}
                            </div>
                        }
                        <span className="font-ubuntuMedium text-slate-600 absolute bottom-4 text-sm bg-slate-600/18 rounded-md px-2 py-1">
                            {date}
                        </span>
                    </div>
    );
}

export default PortfolioCard;