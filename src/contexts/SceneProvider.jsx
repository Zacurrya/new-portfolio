import { useState } from "react"
import SceneContext from "./SceneContext"

// scene dictionary
const SCENES = {
    main: 'main',
    about: 'about',
    projects: 'projects'
}

export const SceneProvider = ({children}) => {
    const [activeScene, setActiveScene] = useState(SCENES.main)
    const [transitioning, setTransitioning] = useState(false)

    const transitionTo = (targetScene) => {
        if (transitioning || targetScene === activeScene) return
        setTransitioning(true)
        setTimeout(() => {
            setActiveScene(targetScene)
            setTransitioning(false)
        }, 500)
    }

    return (
        <SceneContext.Provider value={{ activeScene, transitioning, transitionTo }}>
            {children}
        </SceneContext.Provider>
    )
}