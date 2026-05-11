import { useGLTF, useEnvironment } from '@react-three/drei'
import { useEffect } from 'react'

const src = 'https://pub-a9f4733fc04d4c05981b0e992bdddbd0.r2.dev/tokyo-skytree.glb'

const TokyoSkytree = () => {
    const { scene } = useGLTF(src)
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
            <primitive 
                object={scene} 
                position={[500,0,500]}
            /> 
    )
};

export default TokyoSkytree