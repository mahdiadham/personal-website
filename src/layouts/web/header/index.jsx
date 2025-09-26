import { useState, useEffect, useCallback } from "react";
import MiniLogo from "../../../assets/logo/mini-logo.webp";
import { menu } from "../../../data/data.json";
import { Link } from "react-router";

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
    

    return (
        <header className="sticky top-6 left-0 right-0">
            <div className={`container flex justify-between items-center ${isScroll && "bg-white/10 backdrop-blur-2xl px-6 rounded-xl shadow-neon-sm"}`}>
                <div>
                    <Link to={"/"}>
                        <img src={MiniLogo} alt="logo" className={`w-18 ${isScroll && "py-3"}`} />
                    </Link>
                </div>
                <div className={`flex justify-center items-center gap-10 text-white capitalize *:transition-colors *:duration-150 *:hover:text-emerald-600 ${!isScroll && "bg-white/10 backdrop-blur-2xl py-5 px-12 rounded-xl shadow-neon-sm"}`}>
                    {menu?.map(item =>
                        <Link to={item.path} key={item.title}>
                            {item.title}
                        </Link>
                    )}
                </div>
                <div className="text-black capitalize bg-white rounded-lg py-2 px-4">
                    <Link to={"#contact"}>
                        contact us
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;