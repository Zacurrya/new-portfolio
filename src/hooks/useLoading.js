import { useProgress } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'


const useLoading = () => {
    const { progress } = useProgress()
    const [isLoading, setIsLoading] = useState(true)
    const hasCompleted = useRef(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (hasCompleted.current) return
        if (progress >= 99.9) {
            hasCompleted.current = true
            timeoutRef.current = setTimeout(() => setIsLoading(false), 0)
        }
    }, [progress])

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return isLoading
}

export default useLoading