import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import title from "../assets/titulo.png";
import background from "../assets/background.png";
import profile from "../assets/profile.png";
import django from "../assets/iconsPB/django.png";
import js from "../assets/iconsPB/javascript.png";
import python from "../assets/iconsPB/python.png";
import react from "../assets/iconsPB/react.png";
import tailwind from "../assets/iconsPB/tailwind.png";
import typescript from "../assets/iconsPB/typescript.png";
import kotlin from "../assets/iconsPB/kotlin.png";
import css from "../assets/iconsPB/css.png";
import bootstrap from "../assets/iconsPB/bootstrap.png";
import html from "../assets/iconsPB/HTML.png";
import selenium from "../assets/iconsPB/selenium.png";
import SwiperIcons from "../components/SwiperIcons";

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
            <div className="flex flex-col gap-4 lg:gap-8 text-center">
                <img src={title}/>
                <div className="flex flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-10">
                    <p className="lg:w-2/5">Sou desenvolvedor fullstack com 2 anos de experiência, focado em criar soluções eficientes e escaláveis. Combinando habilidades de frontend e backend, busco sempre melhorar a experiência do usuário.</p>
                    <p className="lg:w-2/5">Atualmente, atuo como desenvolvedor de automações de sistemas para o Grupo Carmais, grupo líder no segmento de concessionárias no Nordeste e uma das maiores do Brasil, que continua buscando aprimorar suas tecnologias.</p>
                    <div className="lg:w-1/5 flex flex-col items-center justify-center font-semibold lg:mt-auto">
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
            </div>
            <div className="relative flex flex-col items-center justify-center px-10">
                <div className="flex items-center  justify-center bg-white w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]  md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden relative">
                    <img src={background} alt="" className="bg-cover w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]  md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] bg-center" />
                    <img src={"profile"} alt="" className="hover:scale-110 transition-transform duration-300 absolute h-[400px] sm:h-[550px] md:h-[600px] lg:h-[650px] -bottom-2 left-1 lg:left-4 -rotate-3" />
                </div>
            </div>
            <div className="flex relative justify-center items-center text-white w-full px-10 -right-3">
                <SwiperIcons size="md" view={10} spaceBetween={10} />
            </div>   
        </div>
    )
}