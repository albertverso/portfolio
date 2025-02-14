import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import title from "../assets/titulo.png";
import background from "../assets/background.png";
import profile from "../assets/profile.png";
import SwiperIcons from "../components/SwiperIcons";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
    const handleDownloadCV = () => {
        const pathCV = '/CV.pdf';
        const link = document.createElement('a');
        link.href = pathCV;
        link.download = 'Carlos_Alberto.pdf';
        link.click();
    }

    return (
        <div className="flex flex-col justify-center items-center text-white lg:pb-5 w-full px-5 md:px-20 lg:px-32 xl:px-42 gap-10">
            <div className="flex flex-col gap-4 lg:gap-8 text-center">
                <img src={title}/>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center justify-center gap-4 lg:gap-10 lg:px-10">
                        <p className="">Sou desenvolvedor fullstack com 2 anos de experiência, focado em criar soluções eficientes e escaláveis. Combinando habilidades de frontend e backend, busco sempre melhorar a experiência do usuário.</p>
                        <p className="">Atualmente, atuo como desenvolvedor de automações de sistemas para o Grupo Carmais, grupo líder no segmento de concessionárias no Nordeste e uma das maiores do Brasil, que continua buscando aprimorar suas tecnologias.</p>
                        <div className=" flex flex-col items-center justify-center font-semibold">
                            <button onClick={handleDownloadCV} className="flex flex-row mb-5 w-full items-center justify-center gap-2 border border-white rounded-md p-2 hover:border-red-500 hover:text-red-500">
                                Baixar CV
                            </button>
                            <Link to="/contact" className=" flex border-b-[1px] hover:border-red-500 hover:text-red-500 items-center justify-center">
                                <p className="text-nowrap">
                                    ENTRE EM CONTATO
                                </p>
                                <IoIosArrowRoundForward size={20}/>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="flex items-center  justify-center bg-white w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]  md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden relative">
                            <img src={background} alt="" className="bg-cover w-full h-full bg-center" />
                            <img src={profile} alt="" className="hover:scale-110 transition-transform duration-300 absolute h-[300px] sm:h-[430px] md:h-[460px] lg:h-[500px] -bottom-2 left-1 lg:left-4 -rotate-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative justify-center items-center text-white w-full px-10 -right-3 mb-2">
                <SwiperIcons size="md" view={10} spaceBetween={10} />
            </div>   
            <About/>
            <Contact />
        </div>
    )
}