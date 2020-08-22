import { useLayoutEffect, useRef } from 'react'

const usePrevious = value => {
  const ref = useRef()
  
  useLayoutEffect(() => {
    ref.current = value;
  }, [value])
  
  return ref.current
}

export default usePrevious