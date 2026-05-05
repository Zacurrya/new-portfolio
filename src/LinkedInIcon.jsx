import { useGLTF } from '@react-three/drei'
import { useRef } from 'react' 
import { useSocialIcon } from '@hooks/useSocialIcon'

const LinkedInIcon = () => {
    const { scene } = useGLTF('/models/linkedin.glb')
    const meshRef = useRef()
    const { handlePointerOver, handlePointerOut, handleClick } = useSocialIcon(
        'https://www.linkedin.com/in/zakariya-yusuf/', 
        meshRef
    )
    
    return <primitive 
        ref = {meshRef}
        object={scene} 
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={[1.3,0,-2]} 
    />
};

export default LinkedInIcon;