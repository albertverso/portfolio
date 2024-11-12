import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import title from "../assets/titulo.png";
import background from "../assets/background.png";
import profile from "../assets/profile.png";
import pb_django from "../assets/iconsPB/pb_django.png";
import pb_js from "../assets/iconsPB/pb_js.png";
import pb_python from "../assets/iconsPB/pb_python.png";
import pb_react from "../assets/iconsPB/pb_react.png";
import pb_tailwind from "../assets/iconsPB/pb_tailwind.png";
import pb_typescript from "../assets/iconsPB/pb_typescript.png";
import pb_kotlin from "../assets/iconsPB/pb_kotlin.png";
import pb_css from "../assets/iconsPB/pb_css3.png";
import pb_bootstrap from "../assets/iconsPB/pb_bootstrap.png";
import pb_html from "../assets/iconsPB/pb_html.png";
import pb_selenium from "../assets/iconsPB/pb_selenium.png";

export default function Home() {
    const handleDownloadCV = () => {
        const pathCV = '/CV.pdf';
        const link = document.createElement('a');
        link.href = pathCV;
        link.download = 'Carlos_Alberto.pdf';
        link.click();
    }

    return (
        <div className="flex flex-col justify-center items-center text-white lg:py-5 lg:pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-52 gap-10">
            <div className="flex flex-col gap-5 lg:gap-10 text-center">
                <img src={title}/>
                <div className="flex flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-10">
                    <p className="lg:w-2/5">Sou desenvolvedor fullstack com 2 anos de experiência, focado em criar soluções eficientes e escaláveis. Combinando habilidades de frontend e backend, busco sempre melhorar a experiência do usuário.</p>
                    <p className="lg:w-2/5">Atualmente, atuo como desenvolvedor de automações de sistemas para o Grupo Carmais, grupo líder no segmento de concessionárias no Nordeste e uma das maiores do Brasil, que continua buscando aprimorar suas tecnologias.</p>
                    <div className="lg:w-1/5 flex flex-col items-center justify-center font-semibold lg:mt-auto">
                        <button onClick={handleDownloadCV} className="flex flex-row mb-5 w-full items-center justify-center gap-2 border border-white rounded-md p-2 hover:border-red-500 hover:text-red-500">
                            Download CV
                        </button>
                        <Link className=" flex border-b-[1px] hover:border-red-500 hover:text-red-500 items-center justify-center">
                            <p className="text-nowrap">
                                ENTRE EM CONTATO
                            </p>
                            <IoIosArrowRoundForward size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
                <div className="flex items-center  justify-center bg-white w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]  md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden relative">
                    <img src={background} alt="" className="bg-cover w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]  md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] bg-center" />
                    <img src={profile} alt="" className="hover:scale-125 transition-transform duration-300 absolute h-[400px] sm:h-[550px] md:h-[600px] lg:h-[650px] -bottom-2 left-1 lg:left-4 -rotate-3" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-row gap-1 md:gap-2 rounded-3xl px-1 py-4 md:px-4 md:py-5 lg:p-5">
                        <div className="relative group">
                            <img src={pb_python} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute hidden -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black font-bold">PYTHON</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_react} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">REACT</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_kotlin} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">KOTLIN</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_js} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">JAVASCRIPT</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_tailwind} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">TAILWIND</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_typescript} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">TYPESCRIPT</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_django} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">DJANGO</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_css} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">CSS</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_html} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">HTML</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_bootstrap} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">BOOTSTRAP</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={pb_selenium} alt="" className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-lg font-bold">SELENIUM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}