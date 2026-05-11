const About = () => {
    const skillGroups = [
        {
            title: 'Languages & Runtimes',
            items: [
                { label: 'JavaScript', icon: 'javascript-plain' },
                { label: 'TypeScript', icon: 'typescript-plain' },
                { label: 'Python', icon: 'python-plain' },
                { label: 'Java', icon: 'java-plain' },
                { label: 'Node.js', icon: 'nodejs-plain' },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            items: [
                { label: 'React', icon: 'react-original' },
                { label: 'Next.js', icon: 'nextjs-original' },
                { label: 'Express', icon: 'express-original' },
                { label: 'FastAPI', icon: 'fastapi-plain' },
                { label: 'PyTorch', icon: 'pytorch-original' },
                { label: 'Unity', icon: 'unity-original' },
            ],
        },
        {
            title: 'Databases & Tools',
            items: [
                { label: 'PostgreSQL', icon: 'postgresql-plain' },
                { label: 'MySQL', icon: 'mysql-plain' },
                { label: 'Prisma', icon: 'prisma-original' },
                { label: 'Docker', icon: 'docker-plain' },
                { label: 'Git', icon: 'git-plain' },
                { label: 'Vercel', icon: 'vercel-original' },
            ],
        },
        {
            title: 'Design & Testing',
            items: [
                { label: 'Figma', icon: 'figma-plain' },
                { label: 'Selenium', icon: 'selenium-original' },
                { label: 'Postman', icon: 'postman-plain' },
                { label: 'Tailwind CSS', icon: 'tailwindcss-plain' },
            ],
        },
    ]

    const educationItems = [
        {
            title: 'Queen Mary University of London',
            subtitle: 'BSc, Computer Science',
            timeframe: 'Exp. May 2027',
            description:
                'Focused on Object-Oriented Programming, data structures & algorithms, systems design, and software engineering fundamentals.',
            image: '/images/education/qmul-building.jpg',
            logo: '/images/education/qmul-logo.png',
        },
        {
            title: 'Nanyang Technological University',
            subtitle: 'AI for Social Good Exchange Program',
            timeframe: '2025',
            description:
                'Studied neural networks while collaborating on NutriWise, an AI app aligned with the UN Sustainable Development Goals.',
            image: '/images/education/ntu-building.jpg',
            logo: '/images/education/ntu-logo.png',
        },
    ]

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

                {/* Skills */}
                <div className="mt-10 md:mt-12">
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 md:p-6">
                        <h2 className="font-orbitron font-semibold text-lg md:text-xl lg:text-2xl text-white mb-1">Technical Skills</h2>
                        <div className="w-10 md:w-12 h-1 bg-pink-400 rounded-full mb-6" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillGroups.map((group) => (
                                <div key={group.title}>
                                    <h3 className="font-orbitron text-sm md:text-base text-white/80 mb-3">
                                        {group.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item.label}
                                                className="px-3 py-1 bg-white/90 text-slate-800 rounded-xl text-xs md:text-sm shadow-sm flex items-center gap-2"
                                            >
                                                <i className={`devicon-${item.icon} text-base`} aria-hidden="true" />
                                                <span>{item.label}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-8 md:mt-10">
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 md:p-6">
                        <h2 className="font-orbitron font-semibold text-lg md:text-xl lg:text-2xl text-blue-200 mb-1">Education</h2>
                        <div className="w-10 md:w-12 h-1 bg-blue-300 rounded-full mb-6" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {educationItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[220px]"
                                >
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10" />
                                    <div className="relative p-5 md:p-6 text-white">
                                        <div className="flex items-center gap-3 mb-3">
                                            <img
                                                src={item.logo}
                                                alt={`${item.title} logo`}
                                                className="h-10 w-10 rounded-lg bg-white/80 p-1"
                                            />
                                            <div>
                                                <p className="font-orbitron text-sm md:text-base">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs md:text-sm text-white/80">{item.timeframe}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold text-sm md:text-base">{item.subtitle}</p>
                                        <p className="mt-2 text-xs md:text-sm text-white/80">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;