import { Fingerprint } from '@mui/icons-material'
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import HomeDivider from './HomeDivider'

function Section(props) {
  return (
    <Box width="100%">
      <Paper
        elevation={3}
        sx={{
          m: 0.5,
          marginBottom: 2,
          p: 1,
          margin: 'auto',
          //   flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }} width="100%">
              <Box
                component="img"
                sx={{
                  height: '70px',
                  justifyContent: 'flex-end',
                }}
                alt="twilio"
                src="assets/img/twilio.png"
              ></Box>
              <Typography variant="h3">{props.title}</Typography>
            </Box>

            <Grid item>
              <Typography variant="body1" fontStyle="italic">
                {props.summary}
              </Typography>
              <Grid container flexDirection="column">
                <Grid item>
                  {props.roles.map((role, index) => (
                    <Chip
                      label={role}
                      color="success"
                      sx={{
                        fontSize: 'medium',
                        margin: '3px',
                        // fontFamily: 'BIZ UDPMincho, serif',
                      }}
                      key={index}
                      // variant="outlined"
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}>
            {/* <Paper
            sx={{
              m: 0.5,
              p: 1,
              margin: 'auto',
              //   flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          > */}
            <Stack direction="column">
              <Typography
                variant="body1"
                fontSize="1.3rem"
                component="p"
                fontWeight="300"
                // fontFamily="BIZ UDPMincho, serif"
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
                  // component="a"
                  href={props.url}
                  variant="h6"
                  fontSize={'3rem'}
                  sx={{ textDecoration: 'none' }}
                  color="green"
                  // fontFamily="BIZ UDPMincho, serif"
                >
                  Learn More
                </Typography>
              </IconButton>
            </Stack>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default function Work() {
  return (
    <Box>
      <Section
        title="Central AI Platform"
        short="Centralized Machine Learning"
        url="https://www.twilio.com/speech-recognition"
        description="I manage a team of software engineers and ML scientists responsible for building a central
ML platform for the company and improving its state-of-the-art speech engine."
        roles={['Engineering Manager', 'Machine Learning Platform']}
        summary="A platform that harnesses Machine Learning and enables the teams withing the company from Twilio Voice to Flex to build more intelligent products."
      ></Section>
      {/* <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider> */}
      <Section
        title="Autopilot"
        short="Omnichannel AI assistant"
        url="https://www.twilio.com/blog/introducing-twilio-autopilot-a-conversational-ai-platform-to-build-bots-that-work"
        description="I lead the team and am the owner of the whole process of sunsetting Twilio Autopilot."
        roles={[
          'Product Management',
          'Engineering Manager',
          'Natural Language Understanding',
          'Technical Leader',
          'Chat bots',
        ]}
        summary="Autopilot is Twilio’s conversational AI platform for building
                bots, IVRs, voice assistants, and more. Autopilot combines
                Twilio’s Natural Language Understanding engine and Autopilot
                Actions API."
      ></Section>
    </Box>
  )
}
