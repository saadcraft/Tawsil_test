"use client"

import React , {useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function HeroSection() {
    

  return (
    <div id="home" className="pt-20 w-full">
        <div className="max-w-6xl text-center rounded-b-[80px] mx-auto bg-gradient-to-b from-transparent to-fifth pt-32 pb-52">
            <h1 className="font-bold text-6xl mb-8">We are on the <span className="text-third">Road!</span></h1>
            <p className="max-w-md mx-auto mb-8">Lorem ipsum milogi in. Kogans studsmattesjuka treping, megaitet Rerat dissade och pseudopiv fast sesa.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 pb-4 px-5">
                <div className="flex items-center justify-center py-2 px-9 transition-all cursor-pointer bg-right-bottom hover:text-white hover:bg-left-bottom bg-gradient-to-right-red-blue bg-200-100 rounded-lg gap-2">
                    <FaApple className="text-4xl"/>
                    <div>
                        <p className="text-sm text-left">Download on the</p>
                        <p className="font-bold text-left">App Store</p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-2 px-10 transition-all cursor-pointer bg-right-bottom hover:text-white hover:bg-left-bottom bg-gradient-to-right-red-blue bg-200-100 rounded-lg gap-2">
                    <FaGooglePlay className="text-3xl"/>
                    <div>
                    <p className="text-sm text-left">Get in on</p>
                    <p className="font-bold text-left">Play Store</p>
                    </div>
                </div>
            </div>
        </div>
            <div className='relative md:w-full max-w-5xl h-screen -top-24 mx-auto'>
                <Swiper 
                    slidesPerView={1.1}
                    spaceBetween={10}
                    initialSlide={1} // Start with the center slide 
                    breakpoints={{
                    760: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    
                    }}
                    className="mySwiper">
                    <SwiperSlide className='md:ml-20 ml-[110px] mt-10'><img className="" src="./iPhone 14 Pro (2).png" alt=""/></SwiperSlide>
                    <SwiperSlide ><img className="md:-ml-14 -ml-16" src="./iPhone 14 Pro.png" alt=""/></SwiperSlide>
                    <SwiperSlide ><img className="mt-10 md:-ml-16 -ml-[96px]" src="./iPhone 14 Pro (1).png" alt=""/></SwiperSlide>
                </Swiper>
            </div>
        </div>
  )
}