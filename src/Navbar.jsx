import { Canvas } from "@react-three/fiber"
import GithubIcon from "./GithubIcon"
import LinkedInIcon from "./LinkedInIcon"
import { Suspense } from "react"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-5 z-100">
            <img src="/header-logo.svg" className="mb-4 w-24" />

            {/* 3D Social Icons */}
            <div className="w-56">
                <Canvas
                    orthographic camera={{ position: [0,0,0], zoom: 45}}
                >
                    <Suspense fallback={null}>
                        <ambientLight intensity={3} />
                        <GithubIcon />
                        <LinkedInIcon />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
export default Navbar