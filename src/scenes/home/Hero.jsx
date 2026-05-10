import NavButtons from "./NavButtons"

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-44 sm:mt-64 md:mt-64 lg:mt-72 xl:mt-80 gap-4">
            <div className="relative w-full h-16 md:h-24 lg:h-30 xl:h-40 flex items-center justify-center">
                <h1 className="absolute inset-0 text-center text-7xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-10xl text-white font-scoreboard z-10">
                    Zaky Yusuf
                </h1>
                <h1 className="absolute inset-0 text-center translate-x-2 translate-y-1 text-7xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-10xl text-[#003879d2] font-scoreboard">
                    Zaky Yusuf
                </h1>
            </div>
            <div className="relative w-full -mt-4 sm:-mt-4 md:-mt-6 lg:-mt-10 xl:-mt-18 h-6 sm:h-7 md:h-8 lg:h-9 flex items-center justify-center">
                <p className="absolute inset-0 text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-white font-orbitron tracking-wide z-10">
                    Software Engineer
                </p>
                <p className="absolute inset-0 text-center translate-x-1 translate-y-0.5 text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-[#003879d2] font-orbitron tracking-wide">
                    Software Engineer
                </p>
            </div>
            <div className="mt-10 sm:mt-14 md:mt-14 lg:mt-18">
                <NavButtons />
            </div>
        </div>        
    )
}            

export default Hero