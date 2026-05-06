import { useProgress } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'

const Loader = () => {
    const maxSize = 0.9
    const minSize = 0.8
    const [scale, setScale] = useState(1)
    const scaleRef = useRef(minSize)
    const { progress } = useProgress()
    let isGrowing = useRef(true)

    useEffect(() => {
        const interval = setInterval(() => {
            // grow
            if (isGrowing.current) {
                if (scaleRef.current <= maxSize) scaleRef.current += 0.0025
                else isGrowing.current = false
            }
            // shrinking
            else {
                if (scaleRef.current >= minSize) scaleRef.current -= 0.0025
                else isGrowing.current = true
            }

            setScale(scaleRef.current)

        }, 16)        
        console.log("Progress:",progress)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center text-center h-full bg-gray-800">
            <img src="/images/tokyo-night.jpg" className="absolute top-13" />
            <img src="/images/london-night.jpg" className="absolute bottom-13" />
            <div className="mt-140">
                <img
                    className="w-52 z-3"
                    src="/header-logo.svg"
                    alt="Logo"
                    style={{
                        transform: `scale(${scale})`,
                    }}
                />
            </div>
            <h1 className="text-4xl z-3 mt-2 font-sans font-bold text-blue-50">{progress.toPrecision(2)}/100</h1>
        </div>
    )
}

export default Loader