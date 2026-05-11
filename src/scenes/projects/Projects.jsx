import ProjectCard from './ProjectCard'
import { projects } from '@utils/projects.js'

const Projects = () => {
    return (
        <section className="mx-auto mt-32 w-full max-w-6xl px-6 sm:px-10 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]">
                        Projects
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                        Some of my recent work
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        skills={project.skills}
                        link={project.repo}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
