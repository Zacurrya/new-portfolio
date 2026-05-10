import NavButtons from "./NavButtons"

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-[25vh]">
            <div className='relative w-[80%]'>
            <h1 className="absolute z-2 text-[12vw] text-white font-scoreboard">Zaky Yusuf</h1>
            <h1 className="absolute z-1 top-1.5 left-3 text-[12vw] text-[#003879d2] font-scoreboard">Zaky Yusuf</h1>
            </div>
            <NavButtons />
        </div>        
    )
}            

export default Hero