"use client"

import React , {useEffect , useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack, IoIosSend } from "react-icons/io";
import Data from './services-data';
import Image from "next/image"


import "swiper/css";
import "swiper/css/navigation";


export default function Services() {

    const [showFirstSlide, setShowFirstSlide] = useState(true);
    
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 760) {
                    setShowFirstSlide(true);
                } else {
                    setShowFirstSlide(false);
                }
            };
    
            window.addEventListener('resize', handleResize);
    
            // Initial check
            handleResize();
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const swiperData = Data.map((service, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className="relative z-20 top-20 flex justify-center">
                        <Image width={100} height={100} src={service.img} alt="" className="w-72" />
                    </div>
                    <div className="relative -top-20 bg-slate-50 flex flex-col w-full justify-center rounded-3xl mx-auto pt-40 px-5 pb-5"> 
                        <div className="text-center">
                            <h1 className="font-semibold text-xl mb-4">{service.name}</h1>
                            <p className="text-sm text-slate-500 mb-4">{service.desc}</p>
                        </div>
                        <Link href="#contact" className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><IoIosSend /> Contact us</Link>
                    </div>
                </SwiperSlide>
            )
        });
    
    return (
      <div id="service" className="w-full mt-14 md:flex items-center  gap-6 mb-32">
          <div className='flex gap-4 md:w-1/2'>
          <Swiper
            slidesPerView={1.7}
            centeredSlides={true}
            spaceBetween={20}
            grabCursor={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper relative z-0 w-full h- py-10"
            style={{ direction: 'rtl' }}
            >
  {/* Slide 1 */}
            {showFirstSlide && (
                <SwiperSlide className='bg-gradient-to-l w-full from-transparent rounded-e-3xl -mr-10 to-fifth hidden md:block'>
                <div className="text-5xl text-left pl-10 font-bold pt-56 pb-36">
                    <p>Our</p>
                    <p className="text-third">Services</p>
                </div>
                </SwiperSlide >
            )}
            {swiperData}
        </Swiper>
          </div>
          <div className="bg-gradient-to-l w-full from-transparent rounded-s-3xl p-10 to-fifth hidden md:block">
              <div className="text-5xl font-bold pt-44 pb-36">
                  <p>Our</p>
                  <p className="text-third">Services</p>
              </div>
              <div className="flex items-center gap-3">
                  <span className="custom-next p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowBack /></span>
                  <span className="custom-prev p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowForward /></span>
                  <span className="flex hover:bg-slate-50 cursor-pointer items-center text-sm py-2 px-5 text-slate-600 bg-slate-100 rounded-full"><p className="underline">View more services</p></span>
              </div>
          </div>
      </div>
    )
  }