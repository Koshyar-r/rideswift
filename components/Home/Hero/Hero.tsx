import SearchBox from "@/components/Helper/SearchBox"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="relative w-full h-[120vh] sm:h-[100vh]">
            {/* OVERLAY */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-70"></div>
            {/* VIDEO */}
            <video src="/videos/hero.mp4" autoPlay muted loop preload="metadata" className="w-full h-full object-cover"></video>
            {/* TEXT CONTENT */}
            <div data-aos="fade-up" className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <div data-aos="fade-up">
                        <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">
                            Lets Enjoy The Ride
                        </h1>
                        <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">Get the best prices on 2,000,000+ properties worldwide</p>
                    </div>

                    {/* SEARCH BOX */}
                    <SearchBox />
                    <Link href="#" className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform transform-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative font-bold">RENT</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero