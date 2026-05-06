import { useEffect, useRef } from 'react'
import Scene from './scene'
import Navbar from './Navbar'
import MainMenu from './MainMenu'


const App = () => {
  const blurRef = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      const gradient = `radial-gradient(circle 300px at ${x}px ${y}px, transparent 0%, black 100%)`
      blurRef.current.style.backdropFilter = 'blur(4px)'
      blurRef.current.style.maskImage = gradient
      blurRef.current.style.webkitMaskImage = gradient
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Background scene */}
      <div className="fixed inset-0 -z-20">
        <Scene />
      </div>

      {/* Blur overlay with hole at mouse */}
      <div
        ref={blurRef}
        className="fixed inset-0 -z-10"
        style={{ backdropFilter: 'blur(4px)'}}
      />

      {/* Neon light overlay */}
      <div className="fixed inset-0 neon-overlay z-10" />

      <Navbar className="fixed top-0" />

      <div className="flex-col text-center mt-[25vh]">
        <h1 className="text-[12vw] text-white font-scoreboard">Zaky Yusuf</h1>
        {/*<MainMenu />*/}

        <h1 className="text-[7vw] text-red-500 mt-[38vh] font-neon">Projects</h1>
      </div> 

    </>
  )
}

export default App;