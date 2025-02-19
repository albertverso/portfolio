import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem('selectedLanguage');

const resources = {
  en: {
    translation: {
        developer: "FullStack Developer",
        header_home: "Home",
        header_projects: "Projects",
        text_home_1: "I am a fullstack developer with 2 years of experience, focused on creating efficient and scalable solutions. By combining frontend and backend skills, I always strive to improve the user experience.",
        text_home_2:"Currently, I work as a systems automation developer for Grupo Carmais, a leading group in the dealership segment in the Northeast and one of the largest in Brazil, which continues to seek to enhance its technologies." ,
        download_cv: "Download CV",
        welcome: "Welcome to our website!",
        about: "About",
        Experience: "Experience",
        contact_us: "Contact us",
        frontend_developer: "Frontend Developer",
        automation_developer: "Systems Automation Developer",
        currently: "Currently",
        frontend_description: "I worked on the development of web interfaces, dashboards, and responsive platforms for the company's financial system. I used React, TypeScript, and Tailwind to ensure the creation of fast and functional interfaces, always aligned with the best UX/UI practices.",
        automation_description_1: "Currently, I work as a systems automation developer. We use Robotic Process Automation (RPA) with Python to significantly reduce the need for workers to perform high-volume, rule-based tasks. We use Selenium to control the browser and automate task execution, and PyAutoGUI to control the mouse and keyboard, as well as capture and process images.",
        automation_description_2: "I worked on developing automations for the Bimer enterprise resource planning (ERP) system, focusing on automating the process of reconciling balances from the Cielo website. The automations were designed to operate exclusively with Banco do Brasil and Itaú, reducing execution time and minimizing manual errors. I use Python and libraries such as PyAutoGUI, Pandas, Openpyxl, and Selenium to optimize interaction with financial systems.",
        remote: "Remote",
        Technologies: "Technologies",
    },
  },
  pt: {
    translation: {
        developer: "Desenvolvedor FullStack",
        header_home: "Inicio",
        header_projects: "Projetos",
        text_home_1: "Sou desenvolvedor fullstack com 2 anos de experiência, focado em criar soluções eficientes e escaláveis. Combinando habilidades de frontend e backend, busco sempre melhorar a experiência do usuário.",
        text_home_1:"Atualmente, atuo como desenvolvedor de automações de sistemas para o Grupo Carmais, grupo líder no segmento de concessionárias no Nordeste e uma das maiores do Brasil, que continua buscando aprimorar suas tecnologias.",
        download_cv: "Baixar CV",
        about: "Sobre",
        Experience: "Experiência",
        about: "Sobre",
        contact_us: "Entre em contato",
        frontend_developer: "Desenvolvedor Frontend",
        automation_developer: "Desenvolvedor de automações de sistemas",
        currently: "Atualmente",
        frontend_description: "Atuei no desenvolvimento de interfaces web, dashboard e plataformas responsivas para o sistema financeiro da empresa. Utilizei React, TypeScript e Tailwind para garantir a criação de interfaces rápidas e funcionais, sempre alinhadas às melhores práticas de UX/UI.",
        automation_description_1: "Atualmente, atuo como desenvolvedor de automações de sistemas. Utilizamos Robotic Process Automation (RPA) com Python para reduzir consideravelmente a necessidade de os trabalhadores executarem tarefas de grande volume baseadas em regras. Usamos Selenium para controlar o navegador e automatizar a execução de tarefas, Pyautogui para controlar o mouse, teclado, capturar e processar imagens.",
        automation_description_2: "Atuei no desenvolvimento de automações para o sistema de gestão empresarial (ERP) Bimer, focado na automatização do processo de baixa de saldos provenientes do site da Cielo. As automações foram desenvolvidas para operar exclusivamente com os bancos Banco do Brasil e Itaú, reduzindo o tempo de execução e minimizando erros manuais. Utilizo Python e bibliotecas como PyAutoGUI, Pandas, Openpyxl e Selenium para otimizar a interação com os sistemas financeiros.",
        remote: "Remoto",
        technologies: "Tecnologias",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "pt", // Idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;