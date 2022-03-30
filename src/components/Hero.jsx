import { Box, Grid, Typography } from '@mui/material'
import { keyframes } from '@mui/system'

const move = keyframes`
 
   25% {
     transform: translateY(-50px)
   }
   50% {
     transform: translateY(-100px)
   }
   75% {
     transform: translateY(-150px)
   }
   100% {
     transform: translateY(-200px)
   }
`

export default function Hero() {
  return (
    <Box
      sx={{
        fontFamily: 'Lora serif',
      }}
    >
      <Grid container justifyContent="space-between" alignItems={'center'}>
        <Grid item>
          <Box
            component="img"
            sx={{
              overflow: ' hidden',
              maxHeight: { xs: 300, md: 600 },
              maxWidth: { xs: '100%', md: '100%' },
              justifyContent: 'flex-end',
            }}
            alt="Hero"
            src="assets/img/hero7.png"
          />
        </Grid>

        <Grid item minWidth="300px">
          <Typography variant="h3" textAlign={'left'}>
            Hello. My name is Obi.
          </Typography>

          <Box height={50} overflow={'hidden'}>
            <Box
              sx={{
                animation: `${move} 8s infinite ease-in-out alternate`,
              }}
              color={'green'}
              textAlign={'left'}
            >
              <Typography variant="h5" height="50px" width={'100%'}>
                Engineering Manager.
              </Typography>
              <Typography variant="h5" height="50px" width={'100%'}>
                Machine Learning Expert.
              </Typography>
              <Typography variant="h5" height="50px">
                Tennis player.
              </Typography>
              <Typography variant="h5" height="50px">
                Tango dancer.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
