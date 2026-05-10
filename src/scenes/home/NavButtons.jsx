import useScene from "@hooks/useScene"

const NavButtons = () => {
    const { transitionTo } = useScene()
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-10">
                <button 
                    onClick={() => transitionTo('about')}
                    className='px-5 py-2 bg-blue-400/40 backdrop-blur-md text-2xl md:text-3xl lg:text-4xl text-white font-orbitron rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.5)] transition-all duration-200' 
                >About</button>
                <button
                    onClick={() => transitionTo('projects')}
                    className='px-5 py-2 bg-white/40 backdrop-blur-md text-2xl md:text-3xl lg:text-4xl text-white font-orbitron rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.5)] transition-all duration-200' 
                >View Work</button>
            </div>
        </>
    )
}

export default NavButtons