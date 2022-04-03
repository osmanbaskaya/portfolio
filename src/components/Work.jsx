import { Fingerprint } from '@mui/icons-material'
import { Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'

function Section(props) {
  return (
    <Box width="100%">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} width="100%">
            <Box
              component="img"
              sx={{
                height: '80px',
                justifyContent: 'flex-end',
              }}
              alt="twilio"
              src="assets/img/twilio.png"
            ></Box>
            <Typography variant="h3">{props.title}</Typography>
          </Box>

          <Grid container flexDirection="column">
            {/* <Grid item marginBottom={1}>
              {props.roles.map((role, index) => (
                <Chip
                  label={role}
                  sx={{ fontSize: 'small', fontFamily: 'BIZ UDPMincho, serif' }}
                  key={index}
                  variant="outlined"
                />
              ))}
            </Grid> */}

            <Grid item>
              <Typography variant="body1" fontStyle="italic">
                Autopilot is Twilio’s conversational AI platform for building
                bots, IVRs, voice assistants, and more. Autopilot combines
                Twilio’s Natural Language Understanding engine and Autopilot
                Actions API.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <Paper
            sx={{
              m: 0.5,
              p: 1,
              margin: 'auto',
              //   flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Stack direction="column">
              <Typography
                variant="body1"
                fontSize="1.5rem"
                component="p"
                fontWeight="300"
                fontFamily="BIZ UDPMincho, serif"
              >
                {props.description}
              </Typography>
              <IconButton
                aria-label="fingerprint"
                // color="secondary"
                sx={{
                  '&:hover': {
                    background: 'none',
                    color: '#b09191',
                    // opacity: [0.9],
                  },
                }}
              >
                <Fingerprint />

                <Typography
                  component="a"
                  href="https://www.twilio.com/blog/introducing-twilio-autopilot-a-conversational-ai-platform-to-build-bots-that-work"
                  variant="h6"
                  sx={{ textDecoration: 'none' }}
                  // color="green"
                  fontFamily="BIZ UDPMincho, serif"
                >
                  Learn More.
                </Typography>
              </IconButton>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Work() {
  return (
    <Box>
      <Section
        title="Twilio Autopilot"
        short="Omnichannel AI assistant"
        description="I manage a team responsible for Twilio Autopilot. Currently, I am an engineering manager who often wears product manager and tech lead hats."
        roles={['Natural Language Understanding', 'Chat bots']}
      ></Section>
    </Box>
  )
}
