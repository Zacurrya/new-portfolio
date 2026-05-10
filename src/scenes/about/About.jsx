const About = () => {
    return (
        <div className="flex flex-col items-center mt-28">
            <div className='font-inter max-w-[80%] bg-blue-200/20 backdrop-blur-md rounded-2xl p-6'>
                
                {/* Header */}
                <h1 className="font-orbitron font-bold text-4xl text-white mb-1 drop-shadow-lg">About Me</h1>
                <div className="w-16 h-1 bg-blue-400 rounded-full mb-6" />

                {/* Intro */}
                <p className='text-lg leading-relaxed text-white/80 mb-8 drop-shadow-lg'>
                    I'm Zaky, a Computer Science student and full-stack developer with a passion for 
                    building meaningful software. I'm driven by the belief that technology, when done 
                    right, can genuinely improve people's lives — and I want my work to reflect that.
                </p>

                <div className="grid grid-cols-2 gap-8">

                    {/* What drives me */}
                    <div>
                        <h2 className="font-orbitron font-semibold text-xl text-blue-50 mb-4 drop-shadow-lg">What Drives Me</h2>
                        <ul className="space-y-3">
                            {[
                                { icon: '⚡', text: 'Solving complex problems and seeing tangible results' },
                                { icon: '🌍', text: 'Building products that reach and help as many people as possible' },
                                { icon: '🤝', text: 'Collaborating and connecting with a diverse range of people' },
                                { icon: '😊', text: 'Exploring my external interests and hobbies through my work and personal projects' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="drop-shadow-lg">{item.text}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-white/20">
                                    <span className="text-xl">🤑</span>
                                    <span className="text-xl">Money</span>
                            </li>
                        </ul>
                    </div>

                    {/* Currently */}
                    <div>
                        <h2 className="font-orbitron font-semibold text-xl text-blue-50 mb-4 drop-shadow-lg">Currently..</h2>
                        <ul className="space-y-3">
                            {[
                                { icon: '🎓', text: 'Studying Computer Science at Queen Mary, University of London' },
                                { icon: '🖥️', text: 'Building FDM Relocate - a platform for relocating consultants to find properties and connect with colleagues' },
                                { icon: '📍', text: 'Based in London, UK' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <span className="text-xl drop-shadow-lg">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Tech interests */}
                <div className="mt-8">
                    <h2 className="font-orbitron font-semibold text-xl text-blue-50 mb-4">Interests</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Full-Stack Development', 'AI & Machine Learning', '3D Web Experiences', 
                        'Badminton', 'Open Source', 'Travel', 'Finance & Trading', 'Politics', 'Urban Planning'].map((tag, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 bg-blue-500/50 border border-blue-400/20 rounded-full text-sm text-white"
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

export default About