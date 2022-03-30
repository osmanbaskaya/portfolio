import { Fingerprint } from '@mui/icons-material'
import { Box, Chip, Grid, IconButton, Stack, Typography } from '@mui/material'

function Section(props) {
  return (
    <Box width="100%">
      <Grid container justifyContent="left">
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
            <Typography variant="h2">{props.title}</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            {props.roles.map((role, index) => (
              <Chip label={role} key={index} variant="outlined" />
            ))}
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Stack direction="column">
            <Typography variant="h5">{props.description}</Typography>
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              sx={{
                '&:hover': {
                  background: 'none',
                  color: '#b09191',
                  // opacity: [0.9],
                },
              }}
            >
              <Fingerprint />
              <Typography variant="h5">Learn more</Typography>
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Work() {
  return (
    <Box id={'job'}>
      <Section
        title="Twilio Autopilot"
        short="Omnichannel AI assistant"
        description="Autopilot is Twilio’s new conversational AI platform for building
            bots, IVRs, voice assistants, and more. Autopilot combines Twilio’s
            Natural Language Understanding engine and new Autopilot Actions API
            to help you effectively classify customer issues with sophisticated
            self-service workflows."
        roles={['Engineering Manager', 'Machine Learning Engineer']}
      ></Section>
    </Box>
  )
}
