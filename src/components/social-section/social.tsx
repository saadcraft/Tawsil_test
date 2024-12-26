import { SocialStyle } from "../styles/social-style";
import Social from "./social-data";
import Link from "next/link";

export default function SocialMedia() {

   const social = Social.map((social, index) => {
    return (
        <Link href={social.url} target="_blank" className={`flex items-center transition-all justify-center p-4 sm:py-4 sm:px-10 bg-slate-50 rounded-lg gap-2 hover:text-white ${social.style}`} key={index}>
            {social.icon}
            <SocialStyle>
                <p className="text-sm text-left">{social.name}</p>
            </SocialStyle>
        </Link>
    )
   });

  return (
    <div className='max-w-4xl mx-auto'>
       <h1 className="text-5xl font-bold text-center p-20">Find Out <span className="text-third">More</span></h1>
       <div className="flex flex-wrap justify-center gap-6 p-5">
            {social}
       </div>
    </div>
  )
}
