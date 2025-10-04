import { useState, useEffect, useCallback } from "react";
import MiniLogo from "../../../assets/logo/mini-logo.webp";
import { menu } from "../../../data/data.json";
import { Link } from "react-router";
import { useLocation } from "react-router";

const Header = () => {
    const [ isScroll, setIsScroll ] = useState(false);
    

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
        <header className="sticky top-6 left-0 right-0 z-20">
            <div className={`container flex justify-between items-center py-3 px-6 ${isScroll && "bg-white/10 backdrop-blur-2xl rounded-xl shadow-neon-sm"}`}>
                <div>
                    <Link to={"/"}>
                        <img src={MiniLogo} alt="logo" className={"w-18"} />
                    </Link>
                </div>
                <div className={`flex justify-center items-center font-ubuntuMedium gap-10 text-white capitalize *:transition-colors *:duration-150 *:hover:text-emerald-600 ${!isScroll && "bg-white/10 backdrop-blur-2xl py-5 px-12 rounded-xl shadow-neon-sm"}`}>
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
                <div className="text-black capitalize bg-white rounded-lg py-2 px-4 font-ubuntuMedium">
                    <a href={"#contact"}>
                        contact me
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;