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

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center text-white font-semibold">
            <div className="flex flex-col items-center justify-center gap-5 lg:gap-10"> 
                <div className="flex w-full flex-col items-start justify-center text-lg gap-5 text-justify">
                    <h1 className="text-3xl mb-5 underline underline-offset-4 hover:text-red-500 hover:cursor-pointer ">Sobre</h1>
                    <p className="px-5">
                    Meu nome é <strong>Carlos Alberto</strong>, sou desenvolvedor fullstack e moro em Fortaleza, CE, Brasil. Estou cursando Análise 
                    e Desenvolvimento de Sistemas e tenho 2 anos de experiência em desenvolvimento. Minha carreira 
                    começou como desenvolvedor web front-end em uma fintech, e, no início de 2024, concluí um curso especializado em 
                    desenvolvimento fullstack pela <strong> <a href="http://digitalcollege.com.br" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Digital College</a></strong>, 
                    ampliando meus conhecimentos nas áreas de front e back-end. Atualmente, trabalho como desenvolvedor de automações 
                    no <strong> <a href="https://carmais.com.br/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Grupo Carmais</a></strong>, onde aplico minhas habilidades em tecnologia para otimizar processos e criar 
                    soluções inovadoras.
                    </p>
                </div>
                <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center text-lg gap-5 ">
                    <div className="flex flex-col items-start lg:gap-5 gap-1 w-3/4 text-justify">
                        <h1 className="text-3xl mb-5 underline underline-offset-4 hover:text-red-500 hover:cursor-pointer">Experiência</h1>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold">- Desenvolvedor Frontend | <a href="https://www.somoscontapaga.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">ContaPaga</a> | 2022 - 2023.</h1>
                            <p className="mt-2">Atuei no desenvolvimento de interfaces web, dashboard e plataformas responsivas para o sistema financeiro da empresa. Utilizei React, TypeScript e Tailwind para garantir a criação de interfaces rápidas e funcionais, sempre alinhadas às melhores práticas de UX/UI.</p>
                            
                            <div className="flex items-center justify-center">
                                <IconsTec icons={[{name: "React", image: pb_react}, {name: "Tailwind", image: pb_tailwind}, {name: "Typescript", image: pb_typescript}, {name: "HTML", image: pb_html}, {name: "CSS", image: pb_css}, {name: "Bootstrap", image: pb_bootstrap}, {name: "Kotlin", image: pb_kotlin}, {name: "Javascript", image: pb_js}]} />
                            </div>
                        </div>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold" >- Desenvolvedor de Automações | <a href="https://www.grupocarmais.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Grupo Carmais</a> | 2024 - Atualmente.</h1>
                            <p className="mt-2">Atualmente, atuo como desenvolvedor de automações de sistemas. Utilizamos Robotic Process Automation (RPA) com Python para reduzir
                            consideravelmente a necessidade de os trabalhadores executarem tarefas de grande volume baseadas em regras. Usamos Selenium para controlar o navegador e automatizar a execução de tarefas, Pyautogui para controlar o mouse, teclado, capturar e processar imagens.</p>
                            <div className="flex items-center justify-center">
                                <IconsTec icons={[{name: "Python", image: pb_python}, {name: "Selenium", image: pb_selenium}]}/>
                            </div>
                        </div>
                        <div className="flex flex-col px-5">
                            <h1 className="text-xl font-bold" >- Desenvolvedor de Automações | <a href="https://www.silicontech.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Silicontech</a> | 2025 - Freelancer (Remoto)</h1>
                            <p className="mt-2">Atuei no desenvolvimento de automações para o sistema de gestão empresarial (ERP) Bimer, focado na automatização do processo de baixa de saldos provenientes do site da Cielo. As automações foram desenvolvidas para operar exclusivamente com os bancos Banco do Brasil e Itaú, reduzindo o tempo de
                            execução e minimizando erros manuais. Utilizo Python e bibliotecas como PyAutoGUI, Pandas, Openpyxl e Selenium para otimizar a interação com os sistemas financeiros.</p>
                            <div className="flex items-center justify-center">
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
                                <TimelineContent>Desenvolvedor Frontend</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent >
                                2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: "#ef4444" }} />
                                <TimelineConnector sx={{ height: "80px" }} />
                                </TimelineSeparator>
                                <TimelineContent>Desenvolvedor de Automações</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent >
                                2025
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: "#ef4444" }} />
                                </TimelineSeparator>
                                <TimelineContent>Desenvolvedor de Automações (Freelancer)</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div> 
        </div>
    )}
             
