import PropTypes from "prop-types";

export default function IconsTec({icons= []}) {
    return (
        <div className="flex flex-row gap-1 md:gap-2 rounded-3xl px-1 py-4 md:px-4 md:py-5 lg:p-5">
            {icons.map((icon, index) => 
                <div className="relative group" key={index}>
                    <img src={icon.image} alt="" className="h-[30px] lg:h-[40px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                        <span className="text-black text-sm uppercase">{icon.name}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

IconsTec.propTypes = {
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
};