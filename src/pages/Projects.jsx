import PreviewProjects from "../components/PreviewProjects";
import django from "../assets/iconsPB/django.png";
import js from "../assets/iconsPB/javascript.png";
import python from "../assets/iconsPB/python.png";
import react from "../assets/iconsPB/react.png";
import tailwind from "../assets/iconsPB/tailwind.png";
import css from "../assets/iconsPB/css.png";
import bootstrap from "../assets/iconsPB/bootstrap.png";
import html from "../assets/iconsPB/HTML.png";
import t_home_menu from "../assets/prints/todolist/home_menu.png";
import t_home_page from "../assets/prints/todolist/home.png";
import t_login_page from "../assets/prints/todolist/login.png";
import t_task_page from "../assets/prints/todolist/tarefas.png";
import t_profile_page from "../assets/prints/todolist/perfil.png";
import t_loading_page from "../assets/prints/todolist/loading.png";
import d_home_page from "../assets/prints/dripstore/home.png";
import d_home_page2 from "../assets/prints/dripstore/home_2.png";
import d_login_page from "../assets/prints/dripstore/login.png";
import d_products_page from "../assets/prints/dripstore/produtos.png";
import e_added_product from "../assets/prints/ecommerce/adicionar.png";
import e_home_page from "../assets/prints/ecommerce/home.png";
import e_login_page from "../assets/prints/ecommerce/login.png";
import e_home_menu from "../assets/prints/ecommerce/home_menu.png";
import e_edit_product from "../assets/prints/ecommerce/editar.png";
import ia_home_page from "../assets/prints/ia_gemini/home.png";
import ia_login_page from "../assets/prints/ia_gemini/login.png";
import ia_register_page from "../assets/prints/ia_gemini/cadastro.png";
import ia_seach_page from "../assets/prints/ia_gemini/busca.png";

export default function Projects() {
    return (
        <div className="flex relative flex-col justify-center items-center text-white pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-42 gap-1">
            <PreviewProjects 
                title={"DripStore"}
                images={[d_home_page, d_home_page2, d_login_page, d_products_page]} 
                description={ 
                    `
                    DripStore é um projeto web de vendas de produtos, onde eu 
                    utilizei React + Vite para construção do frontend, com estilização em 
                    Tailwind CSS, crinado páginas totalmente resposivas. A aplicação inclui funcionalidades
                    de login, cadastro e autenticação de usuários com JWT. No backend, utilizei Node.js 
                    com Express.js para a conexão com banco de dados, e Sequelize para criação das tabelas
                    e interações com o banco de dados.
                    `
                } 
                icons={[{name: "React", image: react}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}, {name: "Bootstrap", image: bootstrap}]}
                repo={"https://github.com/albertverso/dripstore"}
                site={"https://dripstore-neon.vercel.app/Home"}  
            />
            <PreviewProjects 
                title={"IA Gemini"}
                images={[ia_home_page, ia_login_page, ia_register_page, ia_seach_page]} 
                description={`
                    IA Gemini é uma aplicação web projetada para otimizar a busca por informações de veículos em concessionárias, 
                    utilizando a inteligência artificial Gemini para identificar placas de carros a partir de fotos. Com essa tecnologia, 
                    as placas são reconhecidas e os dados relacionados são automaticamente buscados no sistema, proporcionando informações 
                    precisas e essenciais de forma ágil e eficiente. O frontend foi desenvolvido com React e Vite, combinado com a estilização 
                    em Tailwind CSS, garantindo páginas totalmente responsivas e uma experiência de usuário moderna e intuitiva. A aplicação 
                    inclui funcionalidades como identificação de placas através de imagens, busca automatizada de informações, além de login de
                    usuários, permitindo o cadastro de novas placas e a adição de informações diretamente no sistema. No backend, Python foi 
                    utilizado com integração à API do Google para explorar os recursos da IA Gemini, oferecendo um desempenho robusto e 
                    confiável. Essa solução combina inovação tecnológica e praticidade, tornando-se uma ferramenta indispensável para 
                    concessionárias que desejam modernizar seus processos e melhorar a eficiência no gerenciamento de informações veiculares.
                    `} 
                icons={[{name: "Python", image: python}, {name: "Javascript", image: js}, {name: "React", image: react}, {name: "HTML", image: html}, {name: "Tailwind", image: tailwind}, {name: "CSS", image: css}]}
                repo={"https://github.com/albertverso/API_Gemini_IA_Recognition"}
                site={"https://vehicle-consultation.vercel.app/"}  
            />
            <PreviewProjects 
                title={"To-do List"}
                images={[t_login_page, t_home_page, t_home_menu, t_task_page, t_profile_page, t_loading_page]}
                description={`
                    Este é um projeto de lista de tarefas (to-do list) desenvolvido com React e Vite, estilizado com Tailwind CSS para uma 
                    interface moderna e responsiva. Utilizei React para criar interfaces dinâmicas e Vite para otimizar o desenvolvimento com 
                    tempos de carregamento rápidos. A estilização foi feita com Tailwind CSS, proporcionando uma personalização flexível dos componentes.
                    A lógica do projeto foi implementada com JavaScript, e utilizei dotenv para gerenciar variáveis de ambiente de forma segura. 
                    A navegação entre páginas é feita com ReactRouter Dom e a integração de login com JWT Decode permite autenticação através de contas 
                    do Google, garantindo segurança e praticidade.
                    A aplicação é eficiente, fácil de usar e baseada em tecnologias modernas, proporcionando uma boa experiência ao usuário.
                    `} 
                icons={[{name: "React", image: react}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}, {name: "Bootstrap", image: bootstrap}]}
                repo={"https://github.com/albertverso/to-do-list"}
                site={"https://to-do-list-ashy-five-92.vercel.app/"}    
            />
            <PreviewProjects 
                title={"Ecommerce"}
                images={[ e_login_page, e_home_page, e_home_menu, e_added_product, e_edit_product]} 
                description={`
                    Desenvolvi um gerenciador de vendas de frutas utilizando Python e Django, projetado para oferecer uma plataforma funcional e organizada, 
                    com um sistema de autenticação robusto que diferencia entre três tipos de usuários: administradores, vendedores e usuários comuns.
                    Os administradores desempenham um papel central na gestão do sistema, com permissões para cadastrar novas frutas, 
                    disponibilizá-las para venda e criar contas para usuários do tipo vendedor, garantindo o controle total sobre os produtos e a estrutura da plataforma.
                    Os vendedores têm acesso a ferramentas específicas para gerenciar as vendas, permitindo o acompanhamento das frutas cadastradas pelos 
                    administradores e o controle das transações relacionadas.
                    Já os usuários comuns podem explorar as frutas disponíveis, visualizar informações detalhadas e realizar compras diretamente no sistema, 
                    oferecendo uma experiência prática e eficiente.
                    Essa aplicação foi desenvolvida com foco na separação clara de responsabilidades entre os tipos de usuários, proporcionando uma solução 
                    organizada, segura e escalável para gerenciar a comercialização de frutas de maneira profissional e acessível.
                    
                    `} 
                icons={[{name: "Python", image: python}, {name: "Django", image: django}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}]}
                repo={"https://github.com/albertverso/ecommerce-fruit-sales"}
                site={"https://ecommerce-fruit-sales.onrender.com/"}  
            />
        </div>
    )
}