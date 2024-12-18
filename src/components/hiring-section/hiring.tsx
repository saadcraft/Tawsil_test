import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

export default function Hiring() {
  return (
    <div className="max-w-7xl mt-14 mx-auto flex items-center justify-center gap-6">
        <div className="bg-gradient-to-r w-1/2 from-transparent rounded-e-3xl p-10 to-fifth">
            <div className="text-5xl text-right font-bold pt-44 pb-36">
                <p>We are</p>
                <p className="text-third">Hiring</p>
            </div>
            <div className="flex items-center justify-end gap-3">
                <span className="p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowBack /></span>
                <span className="p-3 hover:bg-slate-50 cursor-pointer bg-slate-100 rounded-full"><IoIosArrowForward /></span>
            </div>
        </div>
        <div>
            <div className="relative bg-slate-50 flex flex-col justify-center rounded-3xl mx-auto px-14 pb-10">
                <div className="relative -top-20">
                    <img src="./TAWSILSTAR2.svg" alt="" className="w-72" />
                </div>
                <div className="text-center -mt-20 mb-10">
                    <h1 className="font-semibold text-xl mb-4">Lorem ipsum</h1>
                    <p className="w-72 text-sm text-slate-500">Lorem ipsum jaren transgyen: podade ask. Nekaling sdev dekolte R-tol, amesode. Komsocial totera beror Funa vypisk der Tresaskateskochor Du kan</p>
                </div>
                    <button className="flex items-center justify-center w-full gap-3 border px-5 py-2 rounded-lg border-slate-500"><FiDownload /> Get Started</button>
            </div>
        </div>
    </div>
  )
}
