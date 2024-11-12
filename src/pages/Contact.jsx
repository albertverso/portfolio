import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center text-white gap-5 lg:gap-20 font-semibold lg:py-5 w-full px-5 md:px-20 lg:px-32 xl:px-52">
            <div className="border-t w-full">

            </div>
            <div className="flex lg:flex-row flex-col w-full grid-flow-col gap-10">
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Nome</label>
                        <input type="text" className="outline-none bg-white p-1 focus:ring-2 focus:ring-red-500 rounded-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Email</label>
                        <input type="email" className="outline-none p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Assunto</label>
                        <input type="text" className="outline-none p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Mensagem</label>
                        <textarea className="outline-none resize-none p-1 bg-white focus:ring-2 h-48 focus:ring-red-500 rounded-md" />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 lg:gap-10 flex-row mt-5 lg:mt-0">
                <a href="http://www.github.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    
                <BsGithub className="text-white hover:text-red-500 group-hover:text-red-500 text-5xl"/>
                    <p className="group-hover:text-red-500 ">Github</p>
                </a>
                <a href="http://www.linkedin.com/in/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiLinkedinLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Linkedin</p>
                </a>
                <a href="http://www.instagram.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiInstagramLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Instagram</p>
                </a>
                <a href="mailto:alsguert@gmail.com" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center">
                    <MdOutlineEmail className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Email</p>
                </a>
            </div>
        </div>
    )
}