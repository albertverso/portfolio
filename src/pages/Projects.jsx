import PreviewProjects from "../components/PreviewProjects";
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

export default function Projects() {
    return (
        <div className="flex relative flex-col justify-center items-center text-white pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-52 gap-10">
            <PreviewProjects 
                title={"Projeto 1"}
                images={["https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-2.jpg", "https://swiperjs.com/demos/images/nature-3.jpg"]}
                description={ "Teste"} 
                icons={[django, js, python]}
                repo={"https://github.com/albertverso"}
                site={"https://github.com/albertverso"}    
            />
            <PreviewProjects 
                title={"Projeto 2"}
                images={["https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-2.jpg", "https://swiperjs.com/demos/images/nature-3.jpg"]} 
                description={ "Teste"} 
                icons={[django, js, python]}
                repo={"https://github.com/albertverso"}
                site={"https://github.com/albertverso"}  
            />
        </div>
    )
}