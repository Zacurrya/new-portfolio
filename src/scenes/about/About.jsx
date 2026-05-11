const About = () => {
    return (
        <div className="flex flex-col items-center mt-32 sm:mt-44 md:mt-44 lg:mt-44">
            <div className="font-inter w-11/12 md:w-4/5 max-w-5xl bg-blue-200/10 backdrop-blur-md rounded-2xl p-5 md:p-6 lg:p-8">
                
                {/* Header */}
                <h1 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-1 drop-shadow-lg">About Me</h1>
                <div className="w-12 md:w-16 h-1 bg-blue-400 rounded-full mb-5 md:mb-6" />

                {/* Intro */}
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-6 md:mb-8 drop-shadow-lg">
                    I'm Zaky, a Computer Science student and full-stack developer with a passion for 
                    building meaningful software. I'm driven by the belief that technology, when done 
                    right, can genuinely improve people's lives — and I want my work to reflect that.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* What drives me */}
                    <div>
                        <h2 className="font-orbitron font-semibold text-lg md:text-xl lg:text-2xl text-blue-50 mb-4 drop-shadow-lg">What Drives Me</h2>
                        <ul className="space-y-3">
                            {[
                                { icon: '⚡', text: 'Solving complex problems and seeing tangible results' },
                                { icon: '🌍', text: 'Building products that reach and help as many people as possible' },
                                { icon: '🤝', text: 'Collaborating and connecting with a diverse range of people' },
                                { icon: '😊', text: 'Exploring my external interests and hobbies through my work and personal projects' },
                            ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white">
                                        <span className="text-lg md:text-xl">{item.icon}</span>
                                    <span className="drop-shadow-lg">{item.text}</span>
                                </li>
                            ))}
                                <li className="flex items-start gap-3 text-white/20">
                                    <span className="text-lg md:text-xl">🤑</span>
                                    <span className="text-lg md:text-xl">Money</span>
                            </li>
                        </ul>
                    </div>

                    {/* Currently */}
                    <div>
                        <h2 className="font-orbitron font-semibold text-lg md:text-xl lg:text-2xl text-blue-50 mb-4 drop-shadow-lg">Currently..</h2>
                        <ul className="space-y-3">
                            {[
                                { icon: '🎓', text: 'Studying Computer Science at Queen Mary, University of London' },
                                { icon: '🖥️', text: 'Building FDM Relocate - a platform for relocating consultants to find properties and connect with colleagues' },
                                { icon: '📍', text: 'Based in London, UK' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <span className="text-lg md:text-xl drop-shadow-lg">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Tech interests */}
                <div className="mt-6 md:mt-8">
                    <h2 className="font-orbitron font-semibold text-lg md:text-xl lg:text-2xl text-blue-50 mb-4">Interests</h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {['Full-Stack Development', 'AI & Machine Learning', '3D Web Experiences', 
                        'Badminton', 'Open Source', 'Travel', 'Finance & Trading', 'Politics', 'Urban Planning'].map((tag, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 bg-blue-500/50 border border-blue-400/20 rounded-full text-xs md:text-sm text-white"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;