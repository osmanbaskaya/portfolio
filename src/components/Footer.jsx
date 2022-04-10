import { Grid, Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const FooterLink = styled(Link)`
  textdecoration: 'none';
  color: 'inherit';
`

function FooterLinkComponent(props) {
  return (
    <FooterLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </FooterLink>
  )
}

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          // display: 'absolute',
          height: '4rem',
          bottom: 0,
          width: '100%',

          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
            opacity: [0.9],
          },
        }}
      >
        <Grid
          container
          alignItems={'center'}
          justifyContent={'space-between'}
          height="100%"
          margin="0 auto"
          width={'80%'}
        >
          <Grid item xs={4} display="flex">
            <Grid
              container
              spacing={{ sx: '4px', md: '5px' }}
              alignItems="center"
            >
              <Grid item>
                <Typography
                  id="contact"
                  sx={{ scrollMarginTop: '1rem' }}
                  color="white"
                  variant="h5"
                >
                  Contact:
                </Typography>
              </Grid>
              <Grid item>
                <FooterLinkComponent href="mailto:osbaskaya@gmail.com?subject=[homepage] Hi there!">
                  <EmailIcon sx={{ color: 'white' }} />
                </FooterLinkComponent>
              </Grid>
              <Grid item>
                <FooterLinkComponent href="https://github.com/osmanbaskaya">
                  <GitHubIcon sx={{ color: 'white' }} />
                </FooterLinkComponent>
              </Grid>

              <Grid item>
                <FooterLinkComponent href="https://www.linkedin.com/in/osmanbaskaya">
                  <LinkedInIcon sx={{ color: 'white' }} />
                </FooterLinkComponent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={'body1'} align={'center'} color="white">
              © 2021-{new Date().getFullYear()} | All rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}
