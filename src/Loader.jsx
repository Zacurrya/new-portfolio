import { useProgress } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Loader = () => {
    const { progress } = useProgress()
    const maxProgress = useRef(0) // Ensures the progress bar never visually goes back
    const revealRef = useRef(null)

    // renders more of the non-transparent logo as loading progress increases
    useEffect(() => {
        if (!revealRef.current) return
        if (progress <= maxProgress.current) return
        maxProgress.current = progress
        revealRef.current.style.clipPath = `inset(0 ${100 - maxProgress.current}% 0 0)`
    }, [progress])

    return (
        <div className="flex flex-col items-center text-center h-full bg-gray-800">
            <img src="/images/tokyo-night.jpg" className="absolute top-0" style={{ filter: 'blur(1px)'}}/>
            <img src="/images/london-night.jpg" className="absolute bottom-0" style={{ filter: 'blur(1px)'}}/>
            <div className="relative w-40 h-40 z-3 mt-120">
                <img
                    className="block w-40 h-40 opacity-20"
                    src="/logo-w-tagline.svg"
                    alt="Logo"
                />
                <div
                    ref={revealRef}
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                    <img
                        className="block w-40 h-40"
                        src="/logo-w-tagline.svg"
                        alt="Logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Loader