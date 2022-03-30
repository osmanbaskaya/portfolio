import { Grid, Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer>
      <Box
        marginTop={'auto'}
        spacing={1}
        p={'1em'}
        sx={{
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
