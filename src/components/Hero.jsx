import { Box, Grid, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const move = keyframes`
 
   100% {
     transform: translateY(-50px)
   }
  //  100% {
  //    transform: translateY(-100px)
  //  }
  //  75% {
  //    transform: translateY(-150px)
  //  }
  //  100% {
  //    transform: translateY(-200px)
  //  }
`

export default function Hero() {
  return (
    <Box sx={{ flex: 1 }}>
      <Grid
        container
        alignItems="center"
        sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
      >
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              overflow: ' hidden',
              maxHeight: { xs: 300, md: 400 },
              maxWidth: { xs: '100%', md: '100%' },
            }}
            alt="Hero"
            src="assets/img/hero7.png"
          />
        </Grid>
        <Grid item xs={5} minWidth="350px">
          <Typography variant="h4" marginBottom="1rem">
            Hello! I'm Osman, an
          </Typography>

          <Box height={50} overflow={'hidden'} mb="1rem">
            <Box
              sx={{
                animation: `${move} 4s infinite ease-in-out alternate`,
              }}
              color={'green'}
              textAlign={'left'}
            >
              <Typography variant="h4" height="50px">
                Engineering Manager
              </Typography>
              <Typography variant="h4" height="50px">
                ML Expert
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4">based in San Francisco!</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
