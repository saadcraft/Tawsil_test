"use client"

import React, { useState } from 'react';  
import { LinkStyle, LinkStyleClick } from "../styles/link-style";
import Image from 'next/image';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed z-50 w-full bg-gradient-to-r from-primer to-second shadow-md">
        <div className="py-2 text-white max-w-8xl mx-auto flex justify-between items-center">
            <Image width={100} height={100} className="w-16 cursor-pointer" src="/tawsil.png" alt=""/>
            <div className="sm:flex hidden gap-4">
                <LinkStyle href="#home">Home</LinkStyle>
                <LinkStyle href="#about">About us</LinkStyle>
                <LinkStyle href="#service">Services</LinkStyle>
                <LinkStyle href="#hiring">Jobs</LinkStyle>
                <LinkStyle href="#partner">Partner</LinkStyle>
                <LinkStyle href="#contact">Contact us</LinkStyle>
            </div>
            <div className="sm:flex hidden items-center gap-4">
              <button className="py-2 px-5 rounded-lg bg-gradient-to-r from-third to-fourth hover:bg-gradient-to-l ">Connect</button>
            </div>
            <div onClick={handleMenu} className='relative right-2 flex flex-col justify-center gap-y-1  w-6 h-5 cursor-pointer sm:hidden'>
                <div className={`relative w-full h-1 bg-third transition-all duration-500 ${isMenuOpen ? 'top-2 -rotate-45' : ''} `}></div>
                <div className={`w-full h-1 bg-third transition-all duration-500 ${isMenuOpen ? ' -rotate-45' : ''} `}></div>
                <div className={`relative w-full h-1 bg-third transition-all duration-500 ${isMenuOpen ? '-top-2  rotate-45' : ''} `}></div>
            </div>
        </div>
        <div className={`md:hidden transition-all duration-500 w-full overflow-auto max-h-0 ${isMenuOpen ? "max-h-screen p-5" : ""} flex flex-col items-center gap-y-6`}>
            <LinkStyleClick click={handleMenu} href="#home">Home</LinkStyleClick>
            <LinkStyleClick click={handleMenu} href="#about">About us</LinkStyleClick>
            <LinkStyleClick click={handleMenu} href="#service">Services</LinkStyleClick>
            <LinkStyleClick click={handleMenu} href="#hiring">Jobs</LinkStyleClick>
            <LinkStyleClick click={handleMenu} href="#partner">Partner</LinkStyleClick>
            <LinkStyleClick click={handleMenu} href="#contact">Contact us</LinkStyleClick>
            <button className="py-2 px-5 rounded-lg bg-gradient-to-r text-white from-third to-fourth hover:bg-gradient-to-l ">Connect</button>
        </div>
    </div>
  )
}