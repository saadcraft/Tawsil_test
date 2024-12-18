import { LinkStyle } from "../styles/link_style"
import { IoIosArrowDown } from "react-icons/io";


export default function Header() {
  return (
    <div className="fixed z-50 w-full bg-gradient-to-r from-primer to-second shadow-md">
        <div className="py-2 text-white max-w-8xl mx-auto flex justify-between items-center">
            <img className="w-16 cursor-pointer" src="./tawsil.png" alt=""/>
            <div className="flex gap-4">
                <LinkStyle>Home</LinkStyle>
                <LinkStyle>About us</LinkStyle>
                <LinkStyle>Services</LinkStyle>
                <LinkStyle>Jobs</LinkStyle>
                <LinkStyle>Partner</LinkStyle>
                <LinkStyle>Contact us</LinkStyle>
            </div>
            <div className="flex items-center gap-4">
              <LinkStyle>
                <p className="flex items-center"><IoIosArrowDown />En</p>
              </LinkStyle>
              <button className="py-2 px-5 rounded-lg bg-gradient-to-r from-third to-fourth hover:bg-gradient-to-l ">Connect</button>
            </div>
        </div>
    </div>
  )
}
