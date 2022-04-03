import { Grid, Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer>
      <Box
        // marginTop={'4rem'}
        // spacing={1}
        sx={{
          // display: 'absolute',
          height: '2rem',
          bottom: 0,
          width: '100%',
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
            opacity: [0.9],
          },
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant={'body2'} align={'center'} color="white">
              Osman Başkaya © 2021-{new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}
