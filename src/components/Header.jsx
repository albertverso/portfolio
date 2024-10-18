import { Link, useLocation } from "react-router-dom";
import A from '../assets/a.png';
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {
    const location = useLocation();
    return (
        <div className="flex flex-col lg:flex-row w-full py-5 px-5 md:px-20 lg:px-32 xl:px-52 gap-4 lg:gap-0 relative">
            <div className="flex flex-row items-center justify-center mr-auto lg:mr-0">
                <img src={A} alt="" width={70} />
                <div className="flex flex-row relative font-black -left-2">
                    <p className="text-white text-2xl">LBERT</p>
                    <p className="text-white text-2xl mt-4 ml-[58px] absolute">VERSO</p>
                </div>
            </div>
            <div className="flex flex-row text-start lg:justify-center lg:items-center lg:text-center justify-between lg:ml-auto text-white font-black lg:gap-10 text-lg">
                <Link to="/home" className={`hover:text-red-500 ${location.pathname === '/home' && 'text-red-500'}`}>Inicio</Link>
                <Link to="/projects" className={`hover:text-red-500 ${location.pathname === '/projects' && 'text-red-500'}`}>Projetos</Link>
                <Link to="/about" className={`hover:text-red-500 ${location.pathname === '/about' && 'text-red-500'}`}>Sobre</Link>
                <Link to="/contact" className={`hover:text-red-500 ${location.pathname === '/contact' && 'text-red-500'}`}>Contato</Link>
            </div>
            <LanguageDropdown />
        </div>
    )
}