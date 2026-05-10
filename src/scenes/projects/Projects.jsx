import { Canvas, useThree } from '@react-three/fiber'
import ProjectCard from './ProjectCard'
import { projects } from '@utils/projects.js'

const CameraController = () => {
    const target = [0,2,0]
    const { camera } = useThree()

    camera.lookAt(target.x, target.y, target.z)
    camera.updateProjectionMatrix()
}

const Projects = () => {
    return (
        <Canvas orthographic camera={{ position: [0, 0, -10], zoom: 100, near: -1000, far: 1000 }}>
            <CameraController />
            <ambientLight intensity={3} color="#ffffff" />  

            {/* List of projects */}   
            {
                projects.map((project, i) => {
                    return (
                        <ProjectCard
                            key={i} 
                            position={[i*1.2, i*2, 0]}
                            title={project.title}
                            image={'/project-images/'+project.image}
                            description={project.description}
                            skills={project.skills}
                        />   
                    )
                })
            }   
        </Canvas>
    )
}

export default Projects
