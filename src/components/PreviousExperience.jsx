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
            Engineering Manager (June 21' - Present)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Built a new team with a huge ambition to improve Twilio Autopilot,
            created training materials for quick ramp-up and developed a
            long-term vision and roadmap to mitigate the risks before moving to
            the sunsetting stage of the product. The team has reduced the
            incidents and on-call duties of the GA product by 80%.
          </Typography>
          <Typography>
            - Leading the End Of Life effort of Twilio Autopilot: owned the
            whole process from planning to execution, collaborated effectively
            with the leaders in the company from Product to Finance, PS to GTM,
            Sales Enablement to Developer Experience, communicated with the
            customers for a smooth migration.{' '}
          </Typography>
          <Typography>
            - Overseeing a team of software engineers and ML scientists
            responsible for building a central ML platform for the company and
            improving the state-of-the-art speech engine.
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
            Staff Machine Learning Engineer (July 18' - June 21')
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Developed a rule-free, fully generalizable, T5-based
            classify-extract-normalize model to recognize the receipt numbers
            and improved the F1 score of the previous model by 35%, led a first
            big customer to sign a contract.
          </Typography>
          <Typography>
            - Designed and built a Machine Learning Metadata service to address
            the shared need for principled registration, promotion, and rollback
            of machine learning models and servables across different
            environments in a reliable and traceable manner.
          </Typography>
          <Typography>
            - Designed and led Asset Manager Service that addresses the
            lifecycle of audio and text assets at Twilio AI Team.
          </Typography>

          <Typography>
            - Designed and built Transformer Service that runs on Kubernetes,
            which can be used to train highly accurate and light models with a
            few examples.
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
            Research Engineer (Oct 16' - May 17')
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
            Research Engineer (Sept 15' - Aug 16')
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
