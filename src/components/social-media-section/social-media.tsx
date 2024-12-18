import { FaFacebookF, FaLinkedinIn, FaYoutube , FaWhatsapp, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className='max-w-6xl mx-auto'>
       <h1 className="text-5xl font-bold text-center p-20">Find Out <span className="text-third">More</span></h1>
       <div className="flex flex-col md:flex-row justify-center gap-4 p-5">
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaLinkedinIn className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Linkedin</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaFacebookF className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Facebook</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaXTwitter className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">X (Twitter)</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaYoutube className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Youtube</p>
                </div>
            </div>
       </div>
       <div className="flex flex-col md:flex-row justify-center gap-4 px-5">
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaWhatsapp className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Whatsapp</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaInstagram className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Instagram</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 px-10 bg-slate-50 rounded-lg gap-2">
                <FaPinterestP className="text-3xl"/>
                <div>
                    <p className="text-sm text-left">Pinterest</p>
                </div>
            </div>
       </div>
    </div>
  )
}
