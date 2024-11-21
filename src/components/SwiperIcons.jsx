import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useLocation } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/index.css"

export default function SwiperIcons({images, spaceBetween = 0, size='md', view = 0}) {
    const location = useLocation();

    return (
        <>
            <Swiper 
                slidesPerView={view}
                spaceBetween={spaceBetween}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                
                className={`mySwiperIcon overflow-visible md:px-5 ${ location.pathname === '/home' && 'left-2 md:left-6 lg:left-10'}  `}>
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className={`flex items-center justify-center relative group ${size === 'sm' && 'h-8' }`}>
                            <img src={image} alt={`Slide ${index + 1}`} className={`transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer`} />
                            <div className="absolute hidden -bottom-11 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 lg:flex items-center justify-center transition-opacity duration-300 z-10">
                                <span className={` ${size === 'sm' && 'text-sm'} text-black font-bold uppercase`}>{image.split('/').pop().split('.')[0]}</span>
                            </div>
                        </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}