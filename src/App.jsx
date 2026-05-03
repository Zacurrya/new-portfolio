import Scene from './scene'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      {/* 3D background */}
      <div className="fixed inset-0 -z-10">
        <Scene />
      </div>

      <Navbar />

      <div className="flex-row">
        {/* rest of your page content here, flows normally */}
      </div>
    </>
  )
}

export default App;