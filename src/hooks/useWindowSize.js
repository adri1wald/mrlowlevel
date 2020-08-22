import { useState, useEffect, useCallback, useMemo } from 'react'

const useWindowSize = () => {
  const isClient = useMemo(() => typeof window === 'object', [])

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }, [ isClient ])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }
    function handleResize() {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ getSize, isClient ])

  return windowSize
}

export default useWindowSize