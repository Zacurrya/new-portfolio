import { useContext } from "react"
import SceneContext from '@contexts/SceneContext'

const useScene = () => useContext(SceneContext)
export default useScene
