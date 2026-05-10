import { useGLTF } from '@react-three/drei'
import neonLights from '../neonLights';
import useScene from '@hooks/useScene'

const src = '/models/shibuya-scramble-crossing.glb'

const ShibuyaScramble = ({ target }) => {
    const { activeScene } = useScene()
    const { scene } = useGLTF(src)
    return (
        <>
            <hemisphereLight
                intensity={5}
                color="#1b2b5c"
                groundColor="#0b0b12"
            />
            <directionalLight
                position={[target.x + 120, target.y + 180, target.z + 80]}
                intensity={0}
                color="#8cc9ff"
            />
            {/* Neon lights */}
            {activeScene === 'main' && (
                neonLights.map((light, i) => (
                    <pointLight
                        key={i}
                        position={[
                        target.x + light.offset[0],
                        target.y + light.offset[1],
                        target.z + light.offset[2]
                        ]}
                        intensity={light.intensity}
                        color={light.color}
                    />
                    )
                )
                )
            }
                <primitive object={scene} /> 
        </>
    )
};

useGLTF.preload(src)

export default ShibuyaScramble;
