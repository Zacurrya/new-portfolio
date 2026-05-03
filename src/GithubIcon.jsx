import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react' 

const GithubIcon = () => {
    const { scene } = useGLTF('/models/github.glb')
    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.y -= 0.01
    })

    return <primitive 
        ref = {meshRef}
        object={scene} 
        position={[-1.3,0,-2.2]} 
    />
};

export default GithubIcon;