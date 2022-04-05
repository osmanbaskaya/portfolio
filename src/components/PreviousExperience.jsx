import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function PreviousExperience() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Twilio</Typography>
          <Typography
            sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}
          >
            Engineering Manager
          </Typography>
          <Typography sx={{ width: '33%', flexShrink: 0, textAlign: 'end' }}>
            June 21' - Present
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Managing a team responsible for the Twilio Autopilot.
          </Typography>
          <Typography>
            - Leading organization-wide infrastructural modernization programs.
          </Typography>
          <Typography>
            - In addition to be an engineering manager, playing different roles
            (Product Manager & Tech lead) within the team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Twilio</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Senior Machine Learning Engineer (July 18' - June 21')
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Designed and led Asset Manager Service that addresses the
            lifecycle of audio and text assets at Twilio AI Team.
          </Typography>
          <Typography>
            - Designed and built Transformer Service that runs on Kubernetes,
            which can be used to train highly accurate and light models with a
            few examples.
          </Typography>
          <Typography>
            - Designed and built a Machine Learning Metadata service to address
            the shared need for principled registration, promotion, and rollback
            of machine learning models and servables across different
            environments in a reliable and traceable manner.
          </Typography>
          <Typography>
            - Designed and built Data preparation Service for Autopilot.
          </Typography>
          <Typography>
            - Designed algorithms for Natural Language Understanding system used
            in Twilio AutoPilot.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Seven Bridges Genomics
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Research Engineer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Worked on finding better representations using neural networks for
            processes such as tobacco smoking and UV-light that result in
            cancer.
          </Typography>
          <Typography>
            - Developed benchmarking tool for somatic variant caller analysis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Huawei Research
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Research Engineer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Used Deep Learning to solve NLP problems such as Morphological
            Disambiguation, Named Entity Recognition, Sentiment Analysis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
