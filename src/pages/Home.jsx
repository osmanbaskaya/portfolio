import { Chip, Divider } from '@mui/material'
import Articles from '../components/Articles'
import Hero from '../components/Hero'
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
      >
        <Chip
          id={'work'}
          label="WORK"
          style={{ fontSize: 'large', scrollMarginTop: '5rem' }}
        />
      </Divider>
      <Work></Work>
      <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      >
        <Chip
          id="research"
          label="RESEARCH"
          style={{ fontSize: 'large', scrollMarginTop: '5rem' }}
        />
      </Divider>
      <Articles />
    </>
  )
}
