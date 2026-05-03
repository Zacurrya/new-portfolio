import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import ShibuyaScramble from './ShibuyaScramble'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { useEffect, useRef } from 'react'
import neonLights from './neonLights'

const CameraController = ({target}) => {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const radius = useRef(null)

  useEffect(() => {
    // calculate initial distance from camera to target
    const dx = camera.position.x - target.x
    const dy = camera.position.y - target.y
    const dz = camera.position.z - target.z
    radius.current = Math.sqrt((dx * dx) + (dy * dy) + (dz * dz))

    // gets mouse position
    const getMousePos = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', getMousePos)
    return () => window.removeEventListener('mousemove', getMousePos)
  }, [camera])

  useFrame(() => {
    if (radius.current === null) return

    // vertical (clamps value between ceiling and floor)
    const phi = Math.min(
      Math.PI / 2.5, // ceiling
      Math.max(
        Math.PI / 8, // floor
        Math.PI / 2 + mouse.current.y * 0.3
      )
    )
    const theta = mouse.current.x * 0.02 // horizontal
    
    // position camera on sphere around target
    camera.position.x = -5 + target.x + radius.current * Math.sin(phi) * Math.sin(theta)
    camera.position.y = target.y + radius.current * Math.cos(phi)
    camera.position.z = target.z + radius.current * Math.sin(phi) * Math.cos(theta)
    
    camera.lookAt(target.x, target.y, target.z)
  })

  return null
}

const Scene = () => {
  // Position of camera target
  const target = {
    x: -236,
    y: -30,
    z: 85
  }
  
  const cameraHeight = 120

  return (
    <div className="w-full h-full overflow-hidden">
    <Canvas 
        style={{ width: '100%', height: '100%' }}
        orthographic camera={{ 
          position: [target.x, cameraHeight + target.y, target.z], 
          zoom: 17,
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

      <Environment preset="night" />
      <color attach="background" args={['#000011']} />

      {/* Models */}      
      <ShibuyaScramble />

      {/* Post processing */}
      <EffectComposer>
        <DepthOfField bokehScale={5} />
        <Bloom 
          intensity={2}
          luminanceThreshold={0.01}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
      </EffectComposer>

      <CameraController target={target} />
    </Canvas>
    </div>
  )
}

export default Scene