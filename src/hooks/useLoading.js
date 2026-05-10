import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'


const useLoading = () => {
    const { progress } = useProgress()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (progress === 100) {
            // delay to ensure no flickering between loading and main screen
            setTimeout(() => setIsLoading(false), 900)
        }
    }, [progress])

    return isLoading
}

export default useLoading