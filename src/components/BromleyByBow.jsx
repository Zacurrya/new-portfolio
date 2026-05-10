import { useGLTF, useEnvironment } from '@react-three/drei'
import { useEffect } from 'react'

const src = '/models/bromley-by-bow.glb'

const BromleyByBow = () => {
    const { scene } = useGLTF(src)
    const modelPosition = [1000, 0, 0]
    const envMap = useEnvironment({ preset: 'city' })

    useEffect(() => {
        scene.traverse((child) => {
            if (!child.isMesh || !child.material) return
            child.material.envMap = envMap
            child.material.envMapIntensity = 1
            child.material.needsUpdate = true
        })
    }, [scene, envMap])
    return (
        <>
            <primitive 
                object={scene} 
                position={modelPosition}
            /> 
        </>
    )
};

useGLTF.preload(src)

export default BromleyByBow