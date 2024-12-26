import { SmallLinkStyle } from "../styles/link-style"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";
import Image from "next/image";

export default function Footer() {
  return (
    <div className='bg-gradient-to-r from-primer to-second'>
        <div className='max-w-7xl mx-auto pt-16 pb-5 px-5'>
            <div className='flex items-center md:items-start flex-col md:flex-row justify-between gap-y-14 text-center md:text-left'>
                <div className='w-full max-w-80 text-white'>
                    <Image width={100} height={100}  src="/TAWSILSTAR5.png" alt="Perfect-room Logo" className='py-4 w-40'/>
                </div>
                <div className='grid grid-cols-2 md:gap-x-20 md:gap-y-20 gap-x-6 gap-y-6'>
                    <div className='flex flex-col'>
                        <div className='text-slate-50 text-lg font-semibold mb-3'>Company</div>
                        <SmallLinkStyle href="#" >Home</SmallLinkStyle>
                        <SmallLinkStyle href="#">About Us</SmallLinkStyle>
                        <SmallLinkStyle href="#">Services</SmallLinkStyle>
                        <SmallLinkStyle href="#">Jobs</SmallLinkStyle>
                        <SmallLinkStyle href="#">Partners</SmallLinkStyle>
                        <SmallLinkStyle href="#">Contact Us</SmallLinkStyle>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-slate-50 text-lg font-semibold mb-3'>Stay up to date</div>
                        <input type="text" className="p-2 rounded-md font-awsome" placeholder="Your email address      	&#xf1d8;" />
                        <div className="flex flex-col gap-2 text-slate-400 text-sm mt-14">
                            <p className="flex items-center gap-3"><FaPhoneAlt /> +213 645 545 4545</p>
                            <p className="flex items-center gap-3"><IoMail /> support@tawsilstar.com</p>
                            <p className="flex items-center gap-3"><IoLocation /> algerie, alger, alger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-slate-600 flex justify-center items-center flex-col sm:flex-row pt-6 mt-14'>
                <p className='text-slate-50 font-light text-sm'>Copyright © 20XX Tawsil Star. All rights reserved </p>
            </div>
        </div>
    </div>
  )
}