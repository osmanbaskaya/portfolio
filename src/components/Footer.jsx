import { Grid, Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer>
      <Box
        // marginTop={'4rem'}
        // spacing={1}
        sx={{
          // display: 'absolute',
          height: '3rem',
          bottom: 0,
          width: '100%',
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
            opacity: [0.9],
          },
        }}
      >
        <Grid container alignItems={'center'} height="100%">
          <Grid item xs={12}>
            <Typography variant={'body1'} align={'center'} color="white">
              © 2021-{new Date().getFullYear()} | Osman Başkaya | All Rights
              Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}
