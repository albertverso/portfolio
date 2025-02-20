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
        technologies: "Technologies",
        contact: "Contact",
        messageSent: "Message sent successfully!",
        name_contact: "Name",
        email_contact: "Email",
        subject_contact: "Subject",
        message_contact: "Message",
        send_contact: "Send",
        project_dripstore: "DripStore is a web-based product sales project where I used React + Vite to build the frontend, with styling in Tailwind CSS, creating fully responsive pages. The application includes features such as login, registration, and user authentication with JWT. On the backend, I used Node.js with Express.js to connect to the database and Sequelize for table creation and database interactions.",
        project_iaGemini: "Gemini AI is a web application designed to optimize vehicle information searches in dealerships, using Gemini artificial intelligence to identify license plates from photos. With this technology, plates are recognized, and related data is automatically retrieved from the system, providing accurate and essential information quickly and efficiently. The frontend was developed with React and Vite, combined with Tailwind CSS for styling, ensuring fully responsive pages and a modern, intuitive user experience. The application includes features such as license plate identification through images, automated information retrieval, and user login, allowing new plates to be registered and information to be added directly to the system. On the backend, Python was used with integration to Google's API to leverage Gemini AI's capabilities, delivering robust and reliable performance. This solution combines technological innovation and practicality, making it an essential tool for dealerships looking to modernize their processes and improve efficiency in vehicle information management.",
        project_todolist: "This is a to-do list project developed with React and Vite, styled with Tailwind CSS for a modern and responsive interface. I used React to create dynamic interfaces and Vite to optimize development with fast loading times. The styling was done with Tailwind CSS, allowing flexible component customization. The project logic was implemented with JavaScript, and I used dotenv to securely manage environment variables. Navigation between pages is handled with React Router DOM, and login integration with JWT Decode enables authentication via Google accounts, ensuring security and convenience. The application is efficient, easy to use, and built with modern technologies, providing a great user experience.",
        project_ecommerce: "I developed a fruit sales manager using Python and Django, designed to provide a functional and organized platform with a robust authentication system that differentiates between three types of users: administrators, sellers, and regular users. Administrators play a central role in system management, with permissions to register new fruits, make them available for sale, and create seller accounts, ensuring full control over the products and platform structure. Sellers have access to specific tools for managing sales, allowing them to track fruits registered by administrators and manage related transactions. Regular users can explore the available fruits, view detailed information, and make purchases directly through the system, providing a practical and efficient experience. This application was developed with a strong focus on clearly separating user responsibilities, offering an organized, secure, and scalable solution for managing fruit sales professionally and accessibly.",
        repository: "Repository",
        site: "WebSite",
        description: "Description",
        loading: "Loading...",
        sending: "Sending...",
    },
  },
  pt: {
    translation: {
        developer: "Desenvolvedor FullStack",
        header_home: "Inicio",
        header_projects: "Projetos",
        text_home_1: "Sou desenvolvedor fullstack com 2 anos de experiência, focado em criar soluções eficientes e escaláveis. Combinando habilidades de frontend e backend, busco sempre melhorar a experiência do usuário.",
        text_home_2:"Atualmente, atuo como desenvolvedor de automações de sistemas para o Grupo Carmais, grupo líder no segmento de concessionárias no Nordeste e uma das maiores do Brasil, que continua buscando aprimorar suas tecnologias.",
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
        contact: "Contato",
        messageSent: "Mensagem enviada com sucesso!",
        name_contact: "Nome",
        email_contact: "E-mail",
        subject_contact: "Assunto",
        message_contact: "Mensagem",
        send_contact: "Enviar",
        project_dripstore: "DripStore é um projeto web de vendas de produtos, onde eu utilizei React + Vite para construção do frontend, com estilização em Tailwind CSS, crinado páginas totalmente resposivas. A aplicação inclui funcionalidades de login, cadastro e autenticação de usuários com JWT. No backend, utilizei Node.js com Express.js para a conexão com banco de dados, e Sequelize para criação das tabelas e interações com o banco de dados.",
        project_iaGemini: "IA Gemini é uma aplicação web projetada para otimizar a busca por informações de veículos em concessionárias, utilizando a inteligência artificial Gemini para identificar placas de carros a partir de fotos. Com essa tecnologia, as placas são reconhecidas e os dados relacionados são automaticamente buscados no sistema, proporcionando informações precisas e essenciais de forma ágil e eficiente. O frontend foi desenvolvido com React e Vite, combinado com a estilização em Tailwind CSS, garantindo páginas totalmente responsivas e uma experiência de usuário moderna e intuitiva. A aplicação inclui funcionalidades como identificação de placas através de imagens, busca automatizada de informações, além de login de usuários, permitindo o cadastro de novas placas e a adição de informações diretamente no sistema. No backend, Python foi utilizado com integração à API do Google para explorar os recursos da IA Gemini, oferecendo um desempenho robusto e confiável. Essa solução combina inovação tecnológica e praticidade, tornando-se uma ferramenta indispensável para concessionárias que desejam modernizar seus processos e melhorar a eficiência no gerenciamento de informações veiculares.",
        project_todolist: "Este é um projeto de lista de tarefas (to-do list) desenvolvido com React e Vite, estilizado com Tailwind CSS para uma interface moderna e responsiva. Utilizei React para criar interfaces dinâmicas e Vite para otimizar o desenvolvimento com tempos de carregamento rápidos. A estilização foi feita com Tailwind CSS, proporcionando uma personalização flexível dos componentes. A lógica do projeto foi implementada com JavaScript, e utilizei dotenv para gerenciar variáveis de ambiente de forma segura. A navegação entre páginas é feita com ReactRouter Dom e a integração de login com JWT Decode permite autenticação através de contas do Google, garantindo segurança e praticidade. A aplicação é eficiente, fácil de usar e baseada em tecnologias modernas, proporcionando uma boa experiência ao usuário.",
        project_ecommerce: "Desenvolvi um gerenciador de vendas de frutas utilizando Python e Django, projetado para oferecer uma plataforma funcional e organizada, com um sistema de autenticação robusto que diferencia entre três tipos de usuários: administradores, vendedores e usuários comuns. Os administradores desempenham um papel central na gestão do sistema, com permissões para cadastrar novas frutas, disponibilizá-las para venda e criar contas para usuários do tipo vendedor, garantindo o controle total sobre os produtos e a estrutura da plataforma. Os vendedores têm acesso a ferramentas específicas para gerenciar as vendas, permitindo o acompanhamento das frutas cadastradas pelos administradores e o controle das transações relacionadas. Já os usuários comuns podem explorar as frutas disponíveis, visualizar informações detalhadas e realizar compras diretamente no sistema, oferecendo uma experiência prática e eficiente. Essa aplicação foi desenvolvida com foco na separação clara de responsabilidades entre os tipos de usuários, proporcionando uma solução organizada, segura e escalável para gerenciar a comercialização de frutas de maneira profissional e acessível.",
        repository: "Repositório",
        site: "Site",
        description: "Descrição",
        loading: "Carregando...",
        sending: "Enviando...",
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