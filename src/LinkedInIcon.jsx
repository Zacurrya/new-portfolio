import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react' 

const LinkedInIcon = () => {
    const { scene } = useGLTF('/models/linkedin.glb')
    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.y -= 0.01
    })

    return <primitive 
        ref = {meshRef}
        object={scene} 
        position={[1.3,0,-2.2]} 
    />
};

export default LinkedInIcon;