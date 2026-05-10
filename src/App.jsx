import Navbar from './components/Navbar'
import Loader from './Loader'
import useLoading from '@hooks/useLoading.js'
import SceneManager from './SceneManager'
import useScene from '@hooks/useScene'
import About from './scenes/about/About'
import Hero from './scenes/home/Hero'
import Projects from './scenes/projects/Projects'
import GoogleMapsCoords from './components/GoogleMapsCoords'

import { motion, AnimatePresence } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'

const App = () => {
  const isLoading = useLoading()
  const { activeScene, transitionTo, transitioning } = useScene()

  const slideVariants = {
    initial: (custom) => ({ x: custom.enter, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (custom) => ({ x: custom.exit, opacity: 0 })
  }
  
  return (
    <div className="max-w-full">
      {/* -- 3D MODEL SCENE MANAGER -- 
        Outside of conditional rendering as we need to mount the canvas in order to load the models
      */}
      <div className={`fixed inset-0 -z-20 ${isLoading ? 'invisivble':''}`}>
        <SceneManager />
      </div>

      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <BackgroundEffects />

            {/* Navbar */}
            <Navbar handleClick={() => transitionTo('main')} />
            {/* World Coords of 3D models */}
            <GoogleMapsCoords />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeScene}
                custom={activeScene === 'main'
                  ? { enter: '-100%', exit: '-100%' }
                  : { enter: '100%', exit: '100%' }
                }
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {/* -- MAIN SCREEN CONTENT -- */}
                {activeScene === 'main' && (
                  <>
                    <Hero />
                  </>
                )}

                {/* -- ABOUT SCREEN CONTENT -- */}
                {activeScene === 'about' && (
                  <About />
                )} 

                {/* -- PROJECT SCREEN CONTENT -- */}
                {activeScene === 'projects' && (
                  <Projects />
                )}
              </motion.div>
            </AnimatePresence>
        </>
      )}
    </div>
  )

}

export default App;