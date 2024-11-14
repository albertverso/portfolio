import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/index.css"


export default function SwiperIcons({images}) {
    return (
        <>
            <Swiper 
                slidesPerView={8}
                spaceBetween={0}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                
                className="mySwiper">
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className=" group">
                            <img src={image} alt={`Slide ${index + 1}`} className="h-[30px] lg:h-[60px] transform group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
                            <div className="absolute hidden -bottom-12 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black font-bold">{image.split('/').pop().split('.')[0]} sdfsdfsdfsdf</span>
                            </div>
                        </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}