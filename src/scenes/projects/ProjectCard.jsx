const ProjectCard = ({ image, title, description, skills, repo }) => {
    const imageSrc = Array.isArray(image) ? image[0] : image
    const resolvedSrc = imageSrc ? `/project-images/${imageSrc}` : ''
    const repoUrl = repo ? `https://github.com/Zacurrya/${repo}` : null

    return (
        <a
            href={repoUrl ?? '#'}
            target={repoUrl ? '_blank' : undefined}
            rel={repoUrl ? 'noreferrer' : undefined}
            className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-[#0b2a55]/70 via-[#0b2a55]/60 to-[#0a1f3a]/70 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-1"
            aria-label={repoUrl ? `Open ${title} on GitHub` : undefined}
        >
            <div className="relative bg-black/30">
                {resolvedSrc && (
                    <img
                        src={resolvedSrc}
                        alt={title}
                        className="h-52 w-full object-contain sm:h-60"
                    />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-orbitron text-xl sm:text-2xl text-white drop-shadow">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="space-y-4 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs sm:text-sm text-white/90"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard