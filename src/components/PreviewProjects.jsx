import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/index.css"

export default function PreviewProjects({images}) {
    return (
        <div className="flex flex-col justify-center items-start overflow-hidden text-white font-semibold w-full text-lg gap-5 border rounded-lg lg:p-10 p-5">
            <h1 className="text-3xl mb-5">TITLE</h1>
            <Swiper 
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                
                className={`mySwiper`}>
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className={`flex items-center justify-center group`}>
                            <img src={image} alt={`Slide ${index + 1}`} className={`hover:cursor-pointer`} />
                        </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}