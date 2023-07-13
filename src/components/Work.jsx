import { Fingerprint } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import HomeDivider from "./HomeDivider";
import { Fragment } from "react";

function Section(props) {
  return (
    <Box width="100%">
      <Paper
        elevation={3}
        sx={{
          m: 0.5,
          marginBottom: 2,
          p: 1,
          margin: "auto",
          //   flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={6}>
            <Box sx={{ display: "flex", alignItems: "center" }} width="100%">
              <Box
                component="img"
                sx={{
                  height: "70px",
                  justifyContent: "flex-end",
                }}
                alt={props.altText}
                src={props.logo}
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
                        fontSize: "12px",
                        margin: "3px",
                        fontFamily: "Lora",
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
                  "&:hover": {
                    background: "none",
                    color: "#b09191",
                    // opacity: [0.9],
                  },
                }}
              >
                <Fingerprint />

                <Typography
                  component="a"
                  href={props.url}
                  variant="h6"
                  sx={{ textDecoration: "none" }}
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
  );
}

export default function Work() {
  return (
    <Fragment>
      <HomeDivider id="work" label="Imagination AI"></HomeDivider>
      <Box>
        <Section
          title="Hard Hat"
          short="Productivity app for tradespeople"
          logo="assets/img/hardhat-logo.png"
          altText="Twilio"
          url="https://hardhat.imagination-ai.org"
          description="We have engaged in discussions with numerous electricians, plumbers, and HVAC professionals. Presently, we are diligently focusing on the development of our Minimum Viable Product."
          roles={["GenAI", "Productivity", "Tradespeople"]}
          summary="Hard Hat is a tradesperson productivity app to keep work moving. 
          The demand for trade services (e.g. plumbing, HVAC) is at an all-time high, 
          led by growth in residential development (up 15% YoY in 2022), but this demand can’t be fully realized 
          in an industry hamstrung by productivity challenges such as skilled worker shortage and supply chain disruption. 
          To realize this unmet demand tradespeople have to do more with less, a type of productivity problem that GenAI promises to help with."
        ></Section>
      </Box>

      <HomeDivider id="work" label="TWILIO"></HomeDivider>
      <Box>
        <Section
          title="Twilio AI"
          logo="assets/img/twilio.png"
          altText="Twilio"
          short="Centralized Machine Learning"
          url="https://www.twilio.com/speech-recognition"
          description="I manage a team of software engineers and ML scientists responsible for helping other teams to apply Machine Learning to problems such as Speech Recognition, Spam/Phishing, Propensity to Buy, Send Time Optimization, and so on. "
          roles={["Engineering Manager", "Machine Learning Platform"]}
          summary="A platform that harnesses Machine Learning and enables the teams within the company such as Twilio Voice, Flex, Consumer Trust, and Segment build more intelligent products."
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
          logo="assets/img/twilio.png"
          altText="Twilio"
          roles={[
            "Product Management",
            "Engineering Manager",
            "Natural Language Understanding",
            "Technical Leader",
            "Chat bots",
          ]}
          summary="Autopilot is Twilio’s conversational AI platform for building
                bots, IVRs, voice assistants, and more. Autopilot combines
                Twilio’s Natural Language Understanding engine and Autopilot
                Actions API."
        ></Section>
      </Box>
    </Fragment>
  );
}
