import { Box, Grid, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import * as React from 'react'
import { styled } from '@mui/material/styles'

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

const HeroTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.125rem',
  },
}))

export default function Hero() {
  return (
    <Box sx={{ flex: 1 }}>
      <Grid
        container
        alignItems="center"
        sx={{ justifyContent: { xs: 'center', md: 'space-around' } }}
      >
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              overflow: ' hidden',
              maxHeight: { xs: 300, md: 400 },
              maxWidth: { xs: '100%' },
            }}
            alt="Hero"
            src="assets/img/hero7.png"
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            minWidth: { sm: '350px', xs: '250px' },
          }}
        >
          <HeroTypography marginBottom="1rem">
            Hello! I'm Osman, an
          </HeroTypography>

          <Box height={50} overflow={'hidden'} mb="1rem">
            <Box
              sx={{
                animation: `${move} 3s infinite ease-in-out alternate`,
              }}
              color={'green'}
              textAlign={'left'}
            >
              <HeroTypography height="50px">Engineering Manager</HeroTypography>
              <HeroTypography height="50px">ML Expert</HeroTypography>
            </Box>
          </Box>
          <HeroTypography> based in San Francisco.</HeroTypography>
        </Grid>
      </Grid>
    </Box>
  )
}
