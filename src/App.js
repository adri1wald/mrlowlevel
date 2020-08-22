import React, { Fragment } from 'react'
import './App.css'
import { Typography, Box } from '@material-ui/core'
import { FullPageContainer } from './elements'
import { useScrollInfo } from './hooks'
import { perc2color } from './utils'

const transform = (frac, thres, h=10) => {
  return frac**h / (frac**h + thres**h)
}

function App() {
  const [ {
    y: {
      percentage: frac
    }
  }, setRef ] = useScrollInfo()
  const backgroundColor = `rgb(${perc2color(
    [255, 255, 51],
    [130, 255, 255],
    transform(frac, 0.4, 1)
  )})`

  console.log(backgroundColor)
  const top = transform(frac, 0.5, 50)
  return (
    <Fragment>
      <FullPageContainer
        ref={setRef}
        style={{backgroundColor}}
      >
        <Box height='200vh' flexShrink='0'>
          <Box pt='100vh'>
            <Box p={2}>
            <Typography
                variant='h1'
              >
                Under construction...
              </Typography>
            </Box>
          </Box>
        </Box>
      </FullPageContainer>
      <FullPageContainer
        position='absolute'
        top={`${-top*100}vh`}
        display='flex'
        justifyContent='center'
        alignItems='center'
        style={{backgroundColor: 'black'}}
        height='100vh'
        width='100%'
      >
        <Typography
          variant='h1'
          style={{color: backgroundColor}}
        >
          Mr Low Level
        </Typography>
      </FullPageContainer>
    </Fragment>
  )
}

export default App
