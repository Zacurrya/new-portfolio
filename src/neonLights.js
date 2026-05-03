const green = "#00ff99"
const magenta = "#ff00ff"
const cyan = "#00ffff"
const orange = "#ff3300"
const purple = "#9900ff"
const yellow = "#ffff00"
const pink = "#ff0066"
const blue = "#0066ff"

const neonLights = [
  // close lights
  { offset: [-5, 15, -40], intensity: 2000, color: magenta },
  { offset: [40, 15, -40], intensity: 2000, color: cyan },
  { offset: [-10, 15, 20], intensity: 2000, color: orange },
  { offset: [20, 10, 40], intensity: 2000, color: purple },
  { offset: [-40, 10, 10], intensity: 2000, color: green },
  { offset: [10, 20, -10], intensity: 1000, color: yellow },
  { offset: [-20, 5, -15], intensity: 2000, color: pink },
  { offset: [30, 8, 30], intensity: 2000, color: blue },
  // far lights
  { offset: [-100, 20, -120], intensity: 8000, color: magenta },
  { offset: [150, 20, -80], intensity: 8000, color: cyan },
  { offset: [-80, 15, 80], intensity: 8000, color: purple },
  { offset: [130, 15, 100], intensity: 8000, color: pink },
  { offset: [200, 25, 50], intensity: 8000, color: blue },
  { offset: [-200, 25, -50], intensity: 8000, color: green },
  { offset: [0, 30, -100], intensity: 12000, color: orange },
  { offset: [0, 30, 200], intensity: 9000, color: yellow },
]
export default neonLights