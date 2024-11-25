import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/index.css"

const images = [
    { name: 'Django', image: django },
    { name: 'Javascript', image: js },
    { name: 'Python', image: python },
    { name: 'React', image: react },
    { name: 'Tailwind', image: tailwind }, 
    { name: 'Typescript', image: typescript },
    { name: 'Kotlin', image: kotlin },
    { name: 'CSS', image: css },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'HTML', image: html },
    { name: 'Selenium', image: selenium },  
]

export default function SwiperIcons({spaceBetween = 0, size='md', view = 0}) {
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
                            <img src={image.image} alt={`Slide ${index + 1}`} className={`transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer`} />
                            <div className="absolute hidden -bottom-11 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 lg:flex items-center justify-center transition-opacity duration-300 z-10">
                                <span className={` ${size === 'sm' && 'text-sm'} text-black font-bold uppercase`}>{image.name}</span>
                            </div>
                        </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}