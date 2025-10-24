import { useState, useEffect, useCallback } from "react";
import MiniLogo from "../../../assets/logo/mini-logo.webp";
import { menu } from "../../../data/data.json";
import { Link, useLocation } from "react-router";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import "./style.css";

const Header = () => {
    const { pathname } = useLocation();

    if (pathname === "/404") return null;

    const [ isScroll, setIsScroll ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

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
        <header className="sticky top-6 left-0 right-0 z-100">
            <div className={`container relative flex justify-between items-center py-3 px-6 ${isScroll && "bg-white/10 backdrop-blur-2xl rounded-xl shadow-neon-sm"}`}>
                <button className="text-white cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <HiMiniXMark size={22} /> :
                        <FaBars size={22} />
                    }
                </button>
                {menu?.length &&
                    <div className={`floating-menu flex flex-col justify-start items-center gap-y-4 px-6 py-4 rounded-2xl absolute w-50 bg-white/13 border-1 border-teal-900 text-white capitalize transition overflow-hidden ${isOpen ? "left-0 top-25" : "-left-100"}`}>
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
                <Link to={"/"}>
                    <img src={MiniLogo} alt="logo" className={"w-18"} />
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
                <a href="#contact" className="text-black capitalize bg-white rounded-lg py-2 px-4 font-ubuntuMedium">
                    contact me
                </a>
            </div>
        </header>
    );
}

export default Header;