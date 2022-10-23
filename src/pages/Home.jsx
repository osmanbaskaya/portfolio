import { Chip, Divider, Typography } from '@mui/material'
import Articles from '../components/Articles'
import Hero from '../components/Hero'
import HomeDivider from '../components/HomeDivider'
import Work from '../components/Work'

export default function Home() {
  return (
    <>
      <Hero />
      <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider>
      <Typography variant="h5" fontStyle="italic">
        I am an <strong> engineering leader </strong> who believes only
        <strong> psychologically safe </strong> and{' '}
        <strong> empathetic </strong>
        teams can achieve their full potential.
      </Typography>
      <Typography variant="h5" marginTop={2} fontStyle="italic">
        I love growing and <strong> inspiring </strong> people, building
        <strong> autonomous</strong> and <strong> high-performing </strong>
        teams, and working with
        <strong> cross-functional organizations</strong> to help define the
        <strong> architecture, strategy, and roadmaps</strong> to ensure we
        deliver <strong>incremental value</strong> and
        <strong> exceptional</strong> products to the customers.
      </Typography>
      <HomeDivider id="work" label="MY WORK @ TWILIO"></HomeDivider>
      <Work></Work>
      <HomeDivider id="research" label="RESEARCH"></HomeDivider>
      <Articles />
    </>
  )
}
