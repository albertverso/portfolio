import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import IconsTec from "./IconsTec";
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/index.css"
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function PreviewProjects({title,images, description, icons, repo, site}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="flex flex-col justify-center items-start overflow-hidden text-white font-semibold w-full text-lg border rounded-lg lg:p-10 p-5">
            <h1 className="text-3xl mb-5">{title}</h1>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'rgba(255, 255, 255, 0.2)',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Thumbs, Autoplay]}
                className="mySwiper2 cursor-grab"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} />
                    </SwiperSlide>
                    
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={images.length}
                watchSlidesProgress={true}
                modules={[ Thumbs]}
                className="mySwiper cursor-pointer lg:mt-2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex mt-2'>
                <p>
                    Descrição: {description}
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center mt-2 items-center lg:items-start gap-4 lg:gap-20">
                <div className='flex flex-col items-center justify-start gap-6'>
                    <p>Links:</p>
                    <div className='flex flex-row gap-4'>
                        <a href={site} className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                            <BsArrowUpRightSquare className="text-white text-4xl"/>
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-sm uppercase">SITE</span>
                            </div>
                        </a>
                        <a href={repo} className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="text-white text-4xl"/>
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center transition-opacity duration-300">
                                <span className="text-black text-sm uppercase">REPOSITORIO</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>Tecnologias:</p>
                    <IconsTec icons={icons}/>
                </div>
            </div>
        </div>
    )
}