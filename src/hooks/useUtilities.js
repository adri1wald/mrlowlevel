import { useRef, useEffect } from 'react'

export const useLogMountTime = (id) => {
  const t0 = performance.now()
  useEffect(() => {
    console.log(`MOUNT FOR ${id} TOOK ${performance.now() - t0}MS`)
  }, []) // eslint-disable-line
  return
}

export const useLogRenders = (id) => {
  const rendersRef = useRef(1)
  useEffect(() => {
    console.log(`RENDERED ${id} ${rendersRef.current++} TIMES`)
  })
  return
}

export const useLogWhyDidYouUpdate = (name, props) => {
  const previousProps = useRef()
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      // Use this object to keep track of changed props
      const changesObj = {}
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          }
        }
      })
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[WHY DID YOU UPDATE]', name, changesObj)
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props
  })
}