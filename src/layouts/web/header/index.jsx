import { useState, useEffect, useCallback } from "react";
import MiniLogo from "../../../../public/assets/logo/mini-logo.webp";
import { menu } from "../../../data/data.json";
import { Link, useLocation } from "react-router";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";

const Header = () => {
    const { pathname } = useLocation();

    if (pathname === "/404") return null;

    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 0;
        setIsScroll(prev => prev !== scrolled ? scrolled : prev);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollHome = () => {
        window.scrollTo(0, 0)
    }


    return (
        <>
            <header className="sticky top-6 left-0 right-0 z-100 container">
                {menu?.length &&
                    <div className={`container flex flex-col justify-start items-center px-6 py-1 rounded-2xl absolute top-28 left-0 w-50 bg-white/10 backdrop-blur-lg border-1 border-teal-900 text-white capitalize transition-all duration-300 overflow-hidden lg:hidden ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"} divide-y-1 divide-slate-700 *:w-full *:text-center *:py-3`}>
                        {menu?.map(item =>
                            item?.path === "/" ?
                                <Link to={item.path} key={item.title} onClick={() => {
                                    handleScrollHome(); setIsOpen(!isOpen);
                                }}>
                                    {item.title}
                                </Link> :
                                <a href={item.path} key={item.title} onClick={() => setIsOpen(!isOpen)}>
                                    {item.title}
                                </a>
                        )}
                    </div>
                }
                <div className={`relative flex justify-between items-center py-3 px-6 ${isScroll && "bg-white/10 backdrop-blur-2xl rounded-xl shadow-neon-sm"}`}>
                    <button className={`text-white cursor-pointer lg:hidden border border-teal-700 p-2 size-10 rounded-lg ${!isScroll && "bg-white/13 backdrop-blur-2xl"}`} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ?
                            <HiMiniXMark size={22} /> :
                            <FaBars size={22} />
                        }
                    </button>
                    <Link to={"/"} className="size-13 xs:!size-18" onClick={handleScrollHome}>
                        <img src={MiniLogo} alt="logo" />
                    </Link>
                    {menu?.length &&
                        <div className={`hidden lg:flex justify-center items-center font-ubuntuMedium gap-10 text-white capitalize *:transition-colors *:duration-150 *:hover:text-emerald-600 ${!isScroll && "bg-white/10 backdrop-blur-2xl py-5 px-12 rounded-xl shadow-neon-sm"}`}>
                            {menu?.map(item =>
                                item?.path === "/" ?
                                    <Link to={item.path} key={item.title} onClick={handleScrollHome}>
                                        {item.title}
                                    </Link> :
                                    <a href={item.path} key={item.title}>
                                        {item.title}
                                    </a>
                            )}
                        </div>
                    }
                    <a href="#contact" className="flex justify-center items-center text-black lg:bg-white capitalize rounded-lg lg:py-2 lg:px-4 font-ubuntuMedium">
                        <span className="max-lg:hidden">
                            contact me
                        </span>
                        <FaPhone size={20} className={`lg:hidden text-white border border-teal-700 p-2 size-10 rounded-lg ${!isScroll && "bg-white/13 backdrop-blur-2xl"}`} />
                    </a>
                </div>
            </header>
            {isOpen &&
                <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-90" onClick={() => setIsOpen(!isOpen)} />
            }
        </>
    );
}

export default Header;