import { MdEmail } from "react-icons/md";
import { PiGithubLogoBold, PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center text-white gap-5 lg:gap-20 font-semibold lg:py-5 w-full px-5 md:px-20 lg:px-32 xl:px-52">
            <div className="border-t w-full">

            </div>
            <div className="flex flex-col lg:pt-20 gap-5 lg:gap-20 lg:flex-row">
                <a href="http://www.github.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogoBold className="text-white hover:text-red-500 group-hover:text-red-500  text-7xl"/>
                    <p className="group-hover:text-red-500 ">Github</p>
                </a>
                <a href="http://www.linkedin.com/in/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiLinkedinLogoBold className="text-white text-7xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Linkedin</p>
                </a>
                <a href="http://www.instagram.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiInstagramLogoBold className="text-white text-7xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Instagram</p>
                </a>
                <a href="mailto:alsguert@gmail.com" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center">
                    <TfiEmail className="text-white text-7xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Email</p>
                </a>
            </div>
        </div>
    )
}