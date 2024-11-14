import SwiperIcons from "../components/SwiperIcons";
import pb_kotlin from "../assets/iconsPB/pb_kotlin.png";
import pb_css from "../assets/iconsPB/pb_css3.png";
import pb_bootstrap from "../assets/iconsPB/pb_bootstrap.png";
import pb_html from "../assets/iconsPB/pb_html.png";

export default function Projects() {
    return (
        <div className="flex relative flex-col justify-center items-center text-white lg:py-5 pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-52 gap-10">
            <SwiperIcons images={[pb_kotlin, pb_css, pb_bootstrap, pb_html]}/>
        
        </div>
    )
}