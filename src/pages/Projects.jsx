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
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <div className="flex relative flex-col justify-center items-center text-white pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-42 gap-1">
            <PreviewProjects 
                title={"DripStore"}
                images={[d_home_page, d_home_page2, d_login_page, d_products_page]} 
                description={ 
                    t("project_dripstore")
                } 
                icons={[{name: "React", image: react}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}, {name: "Bootstrap", image: bootstrap}]}
                repo={"https://github.com/albertverso/dripstore"}
                site={"https://dripstore-neon.vercel.app/Home"}  
            />
            <PreviewProjects 
                title={"IA Gemini"}
                images={[ia_home_page, ia_login_page, ia_register_page, ia_seach_page]} 
                description={ 
                    t("project_iaGemini")} 
                icons={[{name: "Python", image: python}, {name: "Javascript", image: js}, {name: "React", image: react}, {name: "HTML", image: html}, {name: "Tailwind", image: tailwind}, {name: "CSS", image: css}]}
                repo={"https://github.com/albertverso/API_Gemini_IA_Recognition"}
                site={"https://vehicle-consultation.vercel.app/"}  
            />
            <PreviewProjects 
                title={"To-do List"}
                images={[t_login_page, t_home_page, t_home_menu, t_task_page, t_profile_page, t_loading_page]}
                description={
                    t("project_todolist")} 
                icons={[{name: "React", image: react}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}, {name: "Bootstrap", image: bootstrap}]}
                repo={"https://github.com/albertverso/to-do-list"}
                site={"https://to-do-list-ashy-five-92.vercel.app/"}    
            />
            <PreviewProjects 
                title={"Ecommerce"}
                images={[ e_login_page, e_home_page, e_home_menu, e_added_product, e_edit_product]} 
                description={ 
                    t("project_ecommerce")} 
                icons={[{name: "Python", image: python}, {name: "Django", image: django}, {name: "Javascript", image: js}, {name: "Tailwind", image: tailwind}, {name: "HTML", image: html}, {name: "CSS", image: css}]}
                repo={"https://github.com/albertverso/ecommerce-fruit-sales"}
                site={"https://ecommerce-fruit-sales.onrender.com/"}  
            />
        </div>
    )
}