import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

export default function Services() {
  return (
    <div className="max-w-7xl mt-14 mx-auto lg:flex items-center justify-center gap-6 mb-32">
        <div>
            <div className="relative bg-slate-50 flex flex-col justify-center rounded-3xl mx-auto px-14 pb-10">
                <div className="relative -top-20">
                    <img src="./TAWSILSTAR.svg" alt="" className="w-72" />
                </div>
                <div className="text-center -mt-20 mb-10">
                    <h1 className="font-semibold text-xl mb-4">Lorem ipsum</h1>
                    <p className="w-72 text-sm text-slate-500">Lorem ipsum jaren transgyen: podade ask. Nekaling sdev dekolte R-tol, amesode. Komsocial totera beror Funa vypisk der Tresaskateskochor Du kan</p>
                </div>
                    <button className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><FiDownload /> Get Started</button>
            </div>
        </div>
        <div className="bg-gradient-to-l w-1/2 from-transparent rounded-s-3xl p-10 to-fifth">
            <div className="text-5xl font-bold pt-44 pb-36">
                <p>Our</p>
                <p className="text-third">Services</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowBack /></span>
                <span className="p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowForward /></span>
                <span className="flex hover:bg-slate-50 cursor-pointer items-center text-sm py-2 px-5 text-slate-600 bg-slate-100 rounded-full"><FaArrowRight /><p className="underline">View more services</p></span>
            </div>
        </div>
    </div>
  )
}
