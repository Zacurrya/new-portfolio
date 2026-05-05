import { useGLTF } from '@react-three/drei'
import { useRef } from 'react' 
import { useSocialIcon } from '@hooks/useSocialIcon'

const GithubIcon = () => {
    const { scene } = useGLTF('/models/github.glb')
    const meshRef = useRef()
    const { handlePointerOver, handlePointerOut, handleClick } = useSocialIcon(
        'https://github.com/Zacurrya', 
        meshRef
    )

    return <primitive 
        ref = {meshRef}
        object={scene} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        position={[-1.3,0,-2]} 
    />
};

export default GithubIcon;