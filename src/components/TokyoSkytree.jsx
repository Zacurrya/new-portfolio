import { useGLTF } from '@react-three/drei'

const src = '/models/tokyo-skytree.glb'

const TokyoSkytree = () => {
    const { scene } = useGLTF(src)
    return (
        <>
            <hemisphereLight
                intensity={0.25}
                color="#7db5ff"
                groundColor="#0c0a14"
            />
            <directionalLight
                position={[620, 240, 620]}
                intensity={0.7}
                color="#a4d6ff"
            />
            <pointLight
                position={[520, 30, 520]}
                intensity={0.6}
                color="#88ccff"
                distance={300}
            />
            <primitive 
                object={scene} 
                position={[500,0,500]}
            /> 
        </>
    )
};

useGLTF.preload(src)

export default TokyoSkytree