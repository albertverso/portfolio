import PreviewProjects from "../components/PreviewProjects";
import teste from "../assets/background.png"

export default function Projects() {
    return (
        <div className="flex relative flex-col justify-center items-center text-white pb-10 w-full px-5 md:px-20 lg:px-32 xl:px-52 gap-10">
            <PreviewProjects images={[teste, teste]} />
        </div>
    )
}