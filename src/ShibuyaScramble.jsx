import { useGLTF } from '@react-three/drei'

const ShibuyaScramble = () => {
    const { scene } = useGLTF('/models/shibuya_scramble_crossing.glb')
    return <primitive object={scene} />
};

export default ShibuyaScramble;