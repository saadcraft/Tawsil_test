import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="pt-20">
        <div className="max-w-6xl text-center rounded-b-[80px] mx-auto bg-gradient-to-b from-transparent to-fifth pt-32 pb-52">
            <h1 className="font-bold text-6xl mb-8">We are on the <span className="text-third">Road!</span></h1>
            <p className="max-w-md mx-auto mb-8">Lorem ipsum milogi in. Kogans studsmattesjuka treping, megaitet Rerat dissade och pseudopiv fast sesa.</p>
            <div className="flex justify-center gap-5 pb-4">
                <div className="flex items-center py-2 px-9 bg-six rounded-lg gap-2">
                    <FaApple className="text-4xl"/>
                    <div>
                        <p className="text-sm text-left">Download on the</p>
                        <p className="font-bold text-left">App Store</p>
                    </div>
                </div>
                <div className="flex items-center py-2 px-10 bg-six rounded-lg gap-2">
                    <FaGooglePlay className="text-3xl"/>
                    <div>
                    <p className="text-sm text-left">Get in on</p>
                    <p className="font-bold text-left">Play Store</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative -top-36 -mb-32 max-w-[22rem] mx-auto flex justify-center items-center">
            <img className="" src="./TAWSILSTAR4.png" alt=""/>
            <img className="" src="./TAWSILSTAR2.png" alt=""/>
            <img className="" src="./TAWSILSTAR3.png" alt=""/>
        </div>
    </div>
  )
}
