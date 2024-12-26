"use client"

import React , {useEffect , useState}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack , IoIosSend } from "react-icons/io";


import "swiper/css";
import "swiper/css/navigation";


export default function HiringSection() {

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
    
    return (
            <div id="hiring" className="w-full mt-14 md:flex items-center gap-6 mb-32">
                    <div className="bg-gradient-to-r w-full hidden md:block from-transparent rounded-e-3xl mr-auto p-10 to-fifth">
                        <div className="text-5xl text-right font-bold pt-44 pb-36">
                            <p>We are</p>
                            <p className="text-third">Hiring</p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <span className="custom-prev1 p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowBack /></span>
                            <span className="custom-next1 p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowForward /></span>
                        </div>
                    </div>
                <div className='flex gap-4 md:w-1/2 ml-auto'>
                <Swiper
                    slidesPerView={1.7}
                    centeredSlides={true}
                    spaceBetween={20}
                    grabCursor={true}
                    navigation={{
                        nextEl: ".custom-next1",
                        prevEl: ".custom-prev1",
                    }}
                    modules={[Navigation]}
                    className="mySwiper relative z-0 w-full py-10"
                    >
        {/* Slide 1 */}
                    {showFirstSlide  && (
                    <SwiperSlide className='bg-gradient-to-r md:w-full w-0 from-transparent rounded-e-3xl -mr-10 to-fifth'>
                        <div className="text-5xl pr-5 text-right md:hidden font-bold pt-56 pb-36">
                            <p>We are</p>
                            <p className="text-third">Hiring</p>
                        </div>
                    </SwiperSlide>
                    )}
                    <SwiperSlide >
                        <div className="relative z-20 top-20 flex justify-center">
                            <Image width={100} height={100} src="./TAWSILSTAR.svg" alt="" className="w-72" />
                        </div>
                        <div className="relative -top-20 bg-slate-50 flex flex-col w-full justify-center rounded-3xl mx-auto pt-40 px-5 pb-5"> 
                            <div className="text-center ">
                                <h1 className="font-semibold text-xl mb-4">Lorem ipsum</h1>
                                <p className="text-sm text-slate-500 mb-4">Lorem ipsum jaren transgyen: podade ask. Nekaling sdev dekolte R-tol, amesode. Komsocial totera beror Funa vypisk der Tresaskateskochor Du kan</p>
                            </div>
                            <Link href="#contact" className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><IoIosSend /> contact Us</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="relative z-20 top-20 flex justify-center">
                            <Image width={100} height={100}src="./TAWSILSTAR.svg" alt="" className="w-72" />
                        </div>
                        <div className="relative -top-20 bg-slate-50 flex flex-col w-full justify-center rounded-3xl mx-auto pt-40 px-5 pb-5"> 
                            <div className="text-center ">
                                <h1 className="font-semibold text-xl mb-4">Lorem ipsum</h1>
                                <p className="text-sm text-slate-500 mb-4">Lorem ipsum jaren transgyen: podade ask. Nekaling sdev dekolte R-tol, amesode. Komsocial totera beror Funa vypisk der Tresaskateskochor Du kan</p>
                            </div>
                            <Link href="#contact" className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><IoIosSend /> contact Us</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="relative z-20 top-20 flex justify-center">
                            <Image width={100} height={100} src="./TAWSILSTAR.svg" alt="" className="w-72" />
                        </div>
                        <div className="relative -top-20 bg-slate-50 flex flex-col w-full justify-center rounded-3xl mx-auto pt-40 px-5 pb-5"> 
                            <div className="text-center ">
                                <h1 className="font-semibold text-xl mb-4">Lorem ipsum</h1>
                                <p className="text-sm text-slate-500 mb-4">Lorem ipsum jaren transgyen: podade ask. Nekaling sdev dekolte R-tol, amesode. Komsocial totera beror Funa vypisk der Tresaskateskochor Du kan</p>
                            </div>
                            <Link href="#contact" className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><IoIosSend /> contact Us</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
    )
  }