import { useGLTF } from '@react-three/drei'
import { useSocialIcon } from '@hooks/useSocialIcon'

const ModelLink = ({ meshRef, link, position }) => {
    const { scene } = useGLTF('/models/linkedin.glb')
    const { handlePointerOver, handlePointerOut, handleClick } = useSocialIcon(link, meshRef)

    return <primitive 
        ref = {meshRef}
        object={scene} 
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={position} 
    />
};

export default ModelLink;