import useScene from '@hooks/useScene'
import Scene from './scene.jsx'


// Configs for each scene
const CONFIGS = {
    main: {
        target: {x:-236, y:-30, z:85}, 
        radius: 300,
        zoom: 13,
        startPhi: Math.PI / 3, // starting vertical angle
        startTheta: Math.PI / -9, // starting horizontal angle
        environment: "night",
        ambientLightColor: "#330033",
        ambientLightIntensity: 0.5,
        rotationMultiplier: 0.9
    },
    about: {
        target: {x:760, y: 45, z:160},
        radius: 300,
        zoom: 1,
        startPhi: Math.PI / 2.8, // starting vertical angle
        startTheta: Math.PI / -2.4, // starting horizontal angle
        environment: "city",
        ambientLightColor: "#000000",
        ambientLightIntensity: 0,
        rotationMultiplier: 0.6
    },
    projects: {
        target: {x:320, y: 170, z:640},
        radius: 500,
        zoom: 1,
        startPhi: Math.PI / 6, // starting vertical angle
        startTheta: Math.PI / -3, // starting horizontal angle
        environment: "city",
        ambientLightColor: "#000000",
        ambientLightIntensity: 0,
        rotationMultiplier: 0.2
    }
}

const SceneManager = () => {
    const { activeScene } = useScene()

    const activeConfig = CONFIGS[activeScene] ?? CONFIGS.main

    return (
        <>
            <Scene {...activeConfig}/>
        </>
    )
}

export default SceneManager