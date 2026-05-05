import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'

export const useSocialIcon = (link: string, meshRef: React.RefObject<Object3D>) => {
    const [isHovering, setIsHovering] = useState(false)

    const handlePointerOver = () => { 
        setIsHovering(true)    
    }
    const handlePointerOut = () => {
        setIsHovering(false)
    }

    const handleClick = () => {
        window.open(link)
    }

    useFrame(() => {
        if (!isHovering) meshRef.current.rotation.y -= 0.01
    })

    return { 
        handlePointerOver,
        handlePointerOut,
        handleClick,
    }
}
