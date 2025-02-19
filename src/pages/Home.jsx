import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import titleBr from "../assets/titulo.png";
import titleEn from "../assets/title.png";
import background from "../assets/background.png";
import profile from "../assets/profile.png";
import SwiperIcons from "../components/SwiperIcons";
import About from "../components/About";
import Contact from "../components/Contact";
import LazyLoad from "react-lazy-load";
import { useRef } from "react";
import { useTranslation } from "react-i18next";


export default function Home() {
    const { t, i18n } = useTranslation(); // Hook para acessar traduções

    const imgTitle = i18n.language === 'en' ? titleEn : titleBr;

    console.log(t.language);
    const handleDownloadCV = () => {
        const pathCV = '/CV.pdf';
        const link = document.createElement('a');
        link.href = pathCV;
        link.download = 'Carlos_Alberto.pdf';
        link.click();
    }

    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col justify-center items-center text-white lg:pb-5 w-full px-5 md:px-20 lg:px-32 xl:px-42 lg:gap-10">
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 text-center">
                <LazyLoad>
                    <picture>
                        <source srcSet={imgTitle} type="image/webp" />
                        <img loading="lazy" src={imgTitle} />
                    </picture>
                </LazyLoad>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center justify-center text-justify gap-4 lg:gap-10 lg:px-10">
                        <p className="">{t("text_home_1")}</p>
                        <p className="">{t("text_home_2")}</p>
                        <div className=" flex flex-col items-center justify-center font-semibold">
                            <button onClick={handleDownloadCV} className="flex flex-row mb-5 w-full items-center justify-center gap-2 border border-white rounded-md p-2 hover:border-red-500 hover:text-red-500">
                                <p className="w-full text-center">
                                    {t("download_cv")}
                                </p>
                            </button>
                            <Link  onClick={scrollToSection} className=" flex border-b-[1px] hover:border-red-500 hover:text-red-500 items-center justify-center">
                                <p className="text-nowrap uppercase">
                                    {t("contact_us")}
                                </p>
                                <IoIosArrowRoundForward size={20}/>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="flex items-center  justify-center bg-white w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]  md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden relative">
                            <img src={background} alt="" loading="lazy" className="bg-cover w-full h-full bg-center" />
                            <img src={profile} alt="" loading="lazy" className="hover:scale-110 transition-transform duration-300 absolute h-[300px] sm:h-[430px] md:h-[460px] lg:h-[500px] -bottom-2 left-6 md:left-3 lg:left-4 -rotate-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative justify-center items-center text-white w-full px-10 -right-3 mb-10 mt-5 lg:mb-5">
                <SwiperIcons size="md" view={10} spaceBetween={10} />
            </div>   
            <About/>
            <Contact sectionRef={sectionRef}/>
        </div>
    )
}