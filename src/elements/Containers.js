import React, { forwardRef } from 'react'
import {
  Box as BOX
} from '@material-ui/core'

export const Box = forwardRef(({
  overflowX = 'visible',
  overflowY = 'visible',
  children,
  style,
  ...props
}, ref) => (
  <BOX
    style={{
      overflowX,
      overflowY,
      ...style
    }}
    ref={ref}
    {...props}
  >
    {children}
  </BOX>
))

export const FullPageContainer = forwardRef(({ children, ...props }, ref) => (
  <BOX
    ref={ref}
    width='100%'
    height='100vh'
    overflow='scroll'
    {...props}
  >
    {children}
  </BOX>
))

export const ScrollingContainer = forwardRef(({ height, children, ...props }, ref) => (
  <Box
    ref={ref}
    overflowX='scroll'
    height={height || '100%'}
    {...props}
  >
    {children}
  </Box>
))