import { Canvas } from "@react-three/fiber"
import GithubIcon from "./GithubIcon"
import LinkedInIcon from "./LinkedInIcon"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-5">
            <img src="/header-logo.svg" className="w-[8vw]" />

            {/* 3D Social Icons */}
            <div className="w-[18vw]">
                <Canvas
                    orthographic camera={{ position: [0,0,0], zoom: 50}}
                >
                    <ambientLight intensity={3} />
                    <GithubIcon />
                    <LinkedInIcon />
                </Canvas>
            </div>
        </div>
    )
}
export default Navbar