import { useGLTF } from '@react-three/drei'
import useScene from '@hooks/useScene'

const src = 'https://pub-a9f4733fc04d4c05981b0e992bdddbd0.r2.dev/red-post-box.glb'

const PostBox = () => {
    const { activeScene } = useScene()
    const { scene } = useGLTF(src)

    if (activeScene !== 'email') return null

    return (
        <>
            <hemisphereLight
                intensity={0.6}
                color="#ffffff"
                groundColor="#9aa3ad"
            />
            <directionalLight
                position={[-80, 180, 260]}
                intensity={0.9}
                color="#ffffff"
            />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0, -10, 460]} receiveShadow>
                <planeGeometry args={[900, 900]} />
                <meshStandardMaterial color="#7f858b" roughness={0.95} metalness={0.05} />
            </mesh>
            <primitive object={scene} position={[-460, 0, 0]} />
        </>
    )
}

useGLTF.preload(src)

export default PostBox
