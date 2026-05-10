import { Canvas, useThree, useFrame } from '@react-three/fiber'
import TokyoSkytree from './components/TokyoSkytree'
import BromleyByBow from './components/BromleyByBow'
import ShibuyaScramble from './components/ShibuyaScramble'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useEffect, useRef, Suspense } from 'react'


const CameraController = ({ target, radius, startPhi, startTheta, rotationMultiplier }) => {
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
        startPhi + rotationMultiplier * mouse.current.y * 0.1
      )
    )
    const theta = startTheta + rotationMultiplier * mouse.current.x * 0.1

    // place camera on sphere surface around target
    camera.position.set(
      target.x + radius * Math.sin(phi) * Math.sin(theta),
      target.y + radius * Math.cos(phi),
      target.z + radius * Math.sin(phi) * Math.cos(theta)
    )

    // always look at target
    camera.lookAt(target.x, target.y, target.z)
    camera.updateProjectionMatrix()
    
  })

  return null
}

const Scene = ({ target, radius, zoom, startPhi, startTheta, ambientLightColour, ambientLightIntensity, rotationMultiplier}) => {

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
          zoom: zoom,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={ambientLightIntensity} color={ambientLightColour} />
          <color attach="background" args={['#000011']} />
          
          {/* Conditionally renders the models and their unique things*/}
          <ShibuyaScramble target={target} /> 
          <BromleyByBow />
          <TokyoSkytree />

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
            rotationMultiplier={rotationMultiplier}
          />
        </Suspense>
      </Canvas>
      
    </div>
  )
}

export default Scene