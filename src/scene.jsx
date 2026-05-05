import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import ShibuyaScramble from './ShibuyaScramble'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useEffect, useRef } from 'react'
import neonLights from './neonLights'

const CameraController = ({ target, radius, startPhi, startTheta }) => {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const getMousePos = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', getMousePos)
    return () => window.removeEventListener('mousemove', getMousePos)
  }, [])

  useFrame(() => {
    const phi = Math.min(
      Math.PI / 2.5, // ceiling angle
      Math.max(
        Math.PI / 8, // floor angle
        startPhi + mouse.current.y * 0.1
      )
    )
    const theta = startTheta + mouse.current.x * 0.1

    // place camera on sphere surface around target
    camera.position.set(
      target.x + radius * Math.sin(phi) * Math.sin(theta),
      target.y + radius * Math.cos(phi),
      target.z + radius * Math.sin(phi) * Math.cos(theta)
    )

    // always look at target
    camera.lookAt(target.x, target.y, target.z)

    // required for orthographic — updates the frustum after position change
    camera.updateProjectionMatrix()
  })

  return null
}

const Scene = () => {
  const target = { x: -236, y: -30, z: 85 }
  const radius = 300 // controls the orthographic camera's 'far' distance
  const startPhi = Math.PI / 3 // starting vertical angle
  const startTheta = Math.PI / -9 // starting horizontal angle

  return (
    <div className="w-full h-full overflow-hidden">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        orthographic camera={{
          position: [
            target.x,
            target.y + radius * Math.cos(startPhi),
            target.z + radius * Math.sin(startPhi)
          ],
          zoom: 13,
        }}
      >
        <ambientLight intensity={70} color="#000033" />

        {/* Neon lights */}
        {neonLights.map((light, i) => (
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
        ))}

        {/* Background */}
        <Environment preset="night" />
        <color attach="background" args={['#000011']} />

        <ShibuyaScramble />

        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>

        <CameraController 
        target={target} 
        radius={radius}
        startPhi={startPhi}
        startTheta={startTheta}
        />
      </Canvas>
    </div>
  )
}

export default Scene