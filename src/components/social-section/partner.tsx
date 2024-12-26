import { FaUser, FaCrown, FaArrowRight } from "react-icons/fa";

export default function Partner() {
  return (
    <div id='partner' className='max-w-6xl mx-auto'>
           <h1 className="text-5xl font-bold text-center p-20">Our <span className="text-third">Partners</span></h1>
           <div className="flex flex-col md:flex-row justify-center gap-4 p-5">
                <div className="flex items-center rounded-full pr-10 bg-slate-50 gap-4">
                    <div className="relative p-2 flex  bg-slate-200 border-2 border-[#ffd700] rounded-full">
                        <FaUser className="text-5xl"/>
                        <span className="absolute bottom-1 right-0">
                            <FaCrown className="rounded-full bg-[#ffd700] text-white p-0.5" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-left">Partner Name</h1>
                        <p className="text-sm text-left text-slate-500 underline">City or place Name</p>
                    </div>
                </div>
                <div className="flex items-center rounded-full pr-10 bg-slate-50 gap-4">
                    <div className="relative p-2 flex  bg-slate-200 border-2 border-[#ffd700] rounded-full">
                        <FaUser className="text-5xl"/>
                        <span className="absolute bottom-1 right-0">
                            <FaCrown className="rounded-full bg-[#ffd700] text-white p-0.5" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-left">Partner Name</h1>
                        <p className="text-sm text-left text-slate-500 underline">City or place Name</p>
                    </div>
                </div>
                <div className="flex items-center rounded-full pr-10 bg-slate-50 gap-4">
                    <div className="relative p-2 flex  bg-slate-200 border-2 border-[#ffd700] rounded-full">
                        <FaUser className="text-5xl"/>
                        <span className="absolute bottom-1 right-0">
                            <FaCrown className="rounded-full bg-[#ffd700] text-white p-0.5" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-left">Partner Name</h1>
                        <p className="text-sm text-left text-slate-500 underline">City or place Name</p>
                    </div>
                </div>
           </div>
           <div className="flex flex-col md:flex-row justify-center gap-4 px-5">
                <div className="flex items-center rounded-full pr-10 bg-slate-50 gap-4">
                    <div className="relative p-2 flex  bg-slate-200 border-2 border-[#ffd700] rounded-full">
                        <FaUser className="text-5xl"/>
                        <span className="absolute bottom-1 right-0">
                            <FaCrown className="rounded-full bg-[#ffd700] text-white p-0.5" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-left">Partner Name</h1>
                        <p className="text-sm text-left text-slate-500 underline">City or place Name</p>
                    </div>
                </div>
                <div className="flex items-center rounded-full pr-10 bg-slate-50 gap-4">
                    <div className="relative p-2 flex  bg-slate-200 border-2 border-[#ffd700] rounded-full">
                        <FaUser className="text-5xl"/>
                        <span className="absolute bottom-1 right-0">
                            <FaCrown className="rounded-full bg-[#ffd700] text-white p-0.5" />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-bold text-left">Partner Name</h1>
                        <p className="text-sm text-left text-slate-500 underline">City or place Name</p>
                    </div>
                </div>
           </div>
           <div className="flex justify-center gap-4 p-5">
                <div className="flex items-center rounded-full px-5 py-3 bg-slate-50 gap-4">
                    <p className="text-slate-500 text-sm underline flex justify-center items-center gap-3 cursor-pointer"><FaArrowRight /> View all Partners</p>
                </div>
           </div>
        </div>
  )
}