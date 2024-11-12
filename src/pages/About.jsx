import pb_js from "../assets/iconsPB/pb_js.png";
import pb_react from "../assets/iconsPB/pb_react.png";
import pb_tailwind from "../assets/iconsPB/pb_tailwind.png";
import pb_typescript from "../assets/iconsPB/pb_typescript.png";
import pb_kotlin from "../assets/iconsPB/pb_kotlin.png";
import pb_css from "../assets/iconsPB/pb_css3.png";
import pb_bootstrap from "../assets/iconsPB/pb_bootstrap.png";
import pb_html from "../assets/iconsPB/pb_html.png";
import pb_python from "../assets/iconsPB/pb_python.png";
import pb_selenium from "../assets/iconsPB/pb_selenium.png";

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center text-white font-semibold lg:py-5 w-full px-5 md:px-20 lg:px-32 xl:px-52">
            <div className="border-t w-full">
            </div> 
            <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 mt-8"> 
                <div className="flex w-full flex-col items-start justify-center text-lg gap-5 border rounded-lg lg:p-10 p-5">
                    <h1 className="text-3xl mb-5">Sobre</h1>
                    <p>
                    Meu nome é <strong>Carlos Alberto</strong>, sou desenvolvedor fullstack e moro em Fortaleza, CE, Brasil. Estou cursando Análise 
                    e Desenvolvimento de Sistemas e tenho 2 anos de experiência em desenvolvimento. Minha carreira 
                    começou como desenvolvedor web front-end em uma fintech, e, no início de 2024, concluí um curso especializado em 
                    desenvolvimento fullstack pela <strong> <a href="http://digitalcollege.com.br" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Digital College</a></strong>, 
                    ampliando meus conhecimentos nas áreas de front e back-end. Atualmente, trabalho como desenvolvedor de automações 
                    no <strong> <a href="Shttps://carmais.com.br/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Grupo Carmais</a></strong>, onde aplico minhas habilidades em tecnologia para otimizar processos e criar 
                    soluções inovadoras.
                    </p>
                </div>
                <div className="flex w-full flex-col items-start justify-center text-lg gap-5 border rounded-lg lg:p-10 p-5">
                    <h1 className="text-3xl mb-5">Experiência</h1>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold">- Desenvolvedor Frontend | <a href="https://www.somoscontapaga.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">ContaPaga</a> | 2022 - 2023.</h1>
                        <p className="mt-2">Atuei no desenvolvimento de interfaces web, dashboard e plataformas responsivas para o sistema financeiro da empresa. Utilizei React, TypeScript e Tailwind para garantir a criação de interfaces rápidas e funcionais, sempre alinhadas às melhores práticas de UX/UI.</p>
                        <div className="flex flex-row">

                        </div>
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="flex flex-row gap-1 md:gap-2 rounded-3xl px-1 py-4 md:px-4 md:py-5 lg:p-5">
                                <div className="relative group">
                                    <img src={pb_react} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm">REACT</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_kotlin} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">KOTLIN</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_js} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">JAVASCRIPT</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_tailwind} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">TAILWIND</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_typescript} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">TYPESCRIPT</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_css} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">CSS</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_html} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">HTML</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_bootstrap} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">BOOTSTRAP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold" >- Desenvolvedor de automações | <a href="https://www.grupocarmais.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Grupo Carmais</a> | 2024 - Atualmente.</h1>
                        <p className="mt-2">Atualmente, atuo como desenvolvedor de automações de sistemas. Utilizamos Robotic Process Automation (RPA) com Python para reduzir
                         consideravelmente a necessidade de os trabalhadores executarem tarefas de grande volume baseadas em regras. Usamos Selenium para controlar o navegador e automatizar a execução de tarefas, Pyautogui para controlar o mouse, teclado, capturar e processar imagens.</p>
                        <div className="flex flex-row">

                        </div>
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="flex flex-row gap-1 md:gap-2 rounded-3xl px-1 py-4 md:px-4 md:py-5 lg:p-5">
                                <div className="relative group">
                                    <img src={pb_python} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm">PYTHON</span>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pb_selenium} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                        <span className="text-black text-sm font-bold">SELENIUM</span>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )}
             
