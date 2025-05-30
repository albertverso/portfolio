import { Link, useLocation } from "react-router-dom";
import A from '../assets/a.png';
import LanguageDropdown from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const { t } = useTranslation(); // Hook para acessar traduções

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="flex flex-col w-full py-5 px-5 md:px-20 lg:px-32 xl:px-42 gap-4 lg:gap-0 relative">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-row items-center justify-center mr-auto lg:mr-0">
                    <img src={A} alt="" width={50} />
                    <div className="flex flex-row relative font-black -left-2">
                        <p className="text-white text-xl">LBERT</p>
                        <p className="text-white text-xl mt-4 ml-[58px] absolute">VERSO</p>
                    </div>
                </div>
                <div className="flex flex-row mt-4 gap-10 lg:mt-0 text-start lg:justify-end lg:items-end lg:text-end justify-center lg:ml-auto text-white uppercase font-black lg:gap-8 text-xs lg:text-sm mr-3">
                    <Link to="/home" className={`hover:text-red-500 ${activePath === '/home' && 'text-red-500 transform scale-125 transition-transform duration-300'}`}>{t('header_home')}</Link>
                    <Link to="/projects" className={`hover:text-red-500 ${activePath === '/projects' && 'text-red-500 transform scale-125 transition-transform duration-300'}`}>{t('header_projects')}</Link>
                    {/* <Link to="/about" className={`hover:text-red-500 ${activePath === '/about' && 'text-red-500 transform scale-110 transition-transform duration-300'}`}>SOBRE</Link>
                    <Link to="/contact" className={`hover:text-red-500 ${activePath === '/contact' && 'text-red-500 transform scale-110 transition-transform duration-300'}`}>CONTATO</Link> */}
                </div>
                <LanguageDropdown />
            </div>
            <div className={`border-t w-full lg:mt-5 ${location.pathname == '/home' && 'hidden'}`}>
            </div>
        </nav>
    )
}