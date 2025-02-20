import pb_js from "../assets/iconsPB/javascript.png";
import pb_react from "../assets/iconsPB/react.png";
import pb_tailwind from "../assets/iconsPB/tailwind.png";
import pb_typescript from "../assets/iconsPB/typescript.png";
import pb_kotlin from "../assets/iconsPB/kotlin.png";
import pb_css from "../assets/iconsPB/css.png";
import pb_bootstrap from "../assets/iconsPB/bootstrap.png";
import pb_html from "../assets/iconsPB/HTML.png";
import pb_python from "../assets/iconsPB/python.png";
import pb_selenium from "../assets/iconsPB/selenium.png";
import IconsTec from "../components/IconsTec";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";

export default function About() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center text-white font-semibold">
            <div className="flex flex-col items-center justify-center gap-5 lg:gap-10"> 
                <div className="flex w-full flex-col items-start justify-center text-lg gap-1 lg:gap-5 text-justify">
                    <h1 className="text-3xl mb-5 underline underline-offset-4 hover:text-red-500 hover:cursor-pointer "> {t("about")}</h1>
                        {i18n.language === 'en' ? 
                            <p className="px-5">
                            My name is <strong>Carlos Alberto</strong>, I am a fullstack developer, and I live in Fortaleza, CE, Brazil. I am currently studying Systems Analysis and Development and have two years of experience in development. My career began as a front-end web developer at a fintech, and in early 2024, I completed a specialized fullstack development course at 
                            <strong> <a href="http://digitalcollege.com.br" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Digital College</a></strong>, 
                            expanding my knowledge in both front-end and back-end areas. Currently, I work as an automation developer at <strong> <a href="https://carmais.com.br/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Grupo Carmais</a></strong>, where I apply my technology skills to optimize processes and create 
                            innovative solutions.
                            </p>
                            :
                            <p className="px-5">
                            Meu nome é <strong>Carlos Alberto</strong>, sou desenvolvedor fullstack e moro em Fortaleza, CE, Brasil. Estou cursando Análise 
                            e Desenvolvimento de Sistemas e tenho 2 anos de experiência em desenvolvimento. Minha carreira 
                            começou como desenvolvedor web front-end em uma fintech, e, no início de 2024, concluí um curso especializado em 
                            desenvolvimento fullstack pela <strong> <a href="http://digitalcollege.com.br" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Digital College</a></strong>, 
                            ampliando meus conhecimentos nas áreas de front e back-end. Atualmente, trabalho como desenvolvedor de automações 
                            no <strong> <a href="https://carmais.com.br/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Grupo Carmais</a></strong>, onde aplico minhas habilidades em tecnologia para otimizar processos e criar 
                            soluções inovadoras.
                            </p>
                        }
                </div>
                <div className="flex w-full flex-col lg:flex-row items-center text-lg gap-5 ">
                    <div className="flex flex-col items-start gap-1 lg:gap-5 lg:w-3/4 text-justify">
                        <h1 className="text-3xl mb-5 underline underline-offset-4 hover:text-red-500 hover:cursor-pointer">Experiência</h1>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold">- {t("frontend_developer")} | <a href="https://www.somoscontapaga.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">ContaPaga</a> | 2022 - 2023.</h1>
                            <p className="mt-2">{t("frontend_description")}</p>
                            
                            <div className="flex flex-col items-center justify-center">
                                <IconsTec icons={[{name: "React", image: pb_react}, {name: "Tailwind", image: pb_tailwind}, {name: "Typescript", image: pb_typescript}, {name: "HTML", image: pb_html}, {name: "CSS", image: pb_css}, {name: "Bootstrap", image: pb_bootstrap}, {name: "Kotlin", image: pb_kotlin}, {name: "Javascript", image: pb_js}]} />
                            </div>
                        </div>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold" >- {t("automation_developer")} | <a href="https://www.grupocarmais.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Grupo Carmais</a> | 2024 - {t("currently")}.</h1>
                            <p className="mt-2">{t("automation_description_1")}</p>
                            <div className="flex flex-col items-center justify-center">
                                <IconsTec icons={[{name: "Python", image: pb_python}, {name: "Selenium", image: pb_selenium}]}/>
                            </div>
                        </div>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold" >- {t("automation_developer")} | <a href="https://www.silicontech.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Silicontech</a> | 2025 - Freelancer ({t("remote")})</h1>
                            <p className="mt-2">{t("automation_description_2")}</p>
                            <div className="flex flex-col items-center justify-center">
                                <IconsTec icons={[{name: "Python", image: pb_python}, {name: "Selenium", image: pb_selenium}]}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                            },
                        }}
                        >
                            <TimelineItem>
                                <TimelineOppositeContent >
                                2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: "#ef4444" }} />
                                <TimelineConnector sx={{ height: "80px" }} />
                                </TimelineSeparator>
                                <TimelineContent>{t("frontend_developer")}</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent >
                                2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: "#ef4444" }} />
                                <TimelineConnector sx={{ height: "80px" }} />
                                </TimelineSeparator>
                                <TimelineContent>{t("automation_developer")}</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent >
                                2025
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: "#ef4444" }} />
                                </TimelineSeparator>
                                <TimelineContent>{t("automation_developer")}(Freelancer)</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div> 
        </div>
    )}
             
