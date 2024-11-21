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

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center text-white font-semibold w-full px-5 md:px-20 lg:px-32 xl:px-52">
            <div className="flex flex-col items-center justify-center gap-5 lg:gap-10"> 
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
                        
                        <div className="flex items-center justify-center">
                            <IconsTec icons={[pb_react, pb_tailwind, pb_typescript, pb_html, pb_css, pb_bootstrap, pb_kotlin, pb_js]} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold" >- Desenvolvedor de automações | <a href="https://www.grupocarmais.com.br/" target="_blank" className="hover:text-red-500" rel="noopener noreferrer">Grupo Carmais</a> | 2024 - Atualmente.</h1>
                        <p className="mt-2">Atualmente, atuo como desenvolvedor de automações de sistemas. Utilizamos Robotic Process Automation (RPA) com Python para reduzir
                         consideravelmente a necessidade de os trabalhadores executarem tarefas de grande volume baseadas em regras. Usamos Selenium para controlar o navegador e automatizar a execução de tarefas, Pyautogui para controlar o mouse, teclado, capturar e processar imagens.</p>
                        <div className="flex items-center justify-center">
                            <IconsTec icons={[pb_python, pb_selenium]}/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )}
             
