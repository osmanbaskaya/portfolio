import {
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useEffect, useState } from 'react'
import PreviousExperience from '../components/PreviousExperience'

const goodreads_api =
  'https://goodreads-currently-reading-klxvdojwta-uc.a.run.app'
const learning = ['Français 🇫🇷', 'Tango Dancing', 'Product Discovery']
const hobbies = [
  'Tennis 🎾',
  'Hiking',
  'Backpacking',
  'Traveling',
  'Mind & Language',
  'Cognitive Science',
  'Behavioral Economics',
  'Psychology',
  'Philosophy',
]

function showBooks(books) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        display: 'inline-block',
      }}
    >
      {books.length !== 0 ? (
        books.map((book) => (
          <ListItem key={book.title}>
            <ListItemText
              primary={<Typography variant="h6">{book.title}</Typography>}
              secondary={
                <Typography variant="body1" sx={{ color: '#616161' }}>
                  {book.author}
                </Typography>
              }
              sx={{ textAlign: 'center' }}
            />
          </ListItem>
        ))
      ) : (
        <CircularProgress />
      )}
    </List>
  )
}

function listActivities(activities) {
  return (
    <Grid container spacing={1} justifyContent="center">
      {activities.map((activity, index) => (
        <Grid item key={index}>
          <Chip
            label={activity}
            sx={{
              fontSize: 'large',
              fontFamily: 'inherit',
            }}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default function About() {
  const randomBooks = [
    {
      author: 'Patton, Jeff',
      title:
        'User Story Mapping: Discover the Whole Story, Build the Right Product',
    },
    {
      author: 'Patton, Jeff',
      title:
        'User Story Mapping: Discover the Whole Story, Build the Right Product',
    },
  ]

  const [books, setBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])
  useEffect(() => {
    fetch(goodreads_api + '?shelf=currently-reading&k=3')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
      })
  }, [books])

  useEffect(() => {
    fetch(goodreads_api + '?shelf=read&k=3')
      .then((res) => res.json())
      .then((data) => {
        setReadBooks(data)
      })
  }, [readBooks])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 0.5,
            margin: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Box
            m="0 auto"
            display="block"
            component="img"
            sx={{
              //   overflow: ' hidden',
              //   maxHeight: { xs: 250, md: 450 },
              maxWidth: { xs: '100%' },
            }}
            alt="Osman"
            src="hero.jpg"
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper
          sx={{
            p: 1,
            margin: 'auto',
            //   flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Typography variant="h6" marginBottom={2}>
            Currently, Osman is managing a team that develops and maintains
            Autopilot, a conversational AI Platform, at Twilio. Previously, he
            was a Senior Machine Learning Engineer in the same company for 3
            years. Before than, he was a research Engineer at Totient & Seven
            Bridges Genomics in Boston, and Huawei Research in Istanbul.
          </Typography>

          <Typography variant="h6">
            Osman was born in İzmir (a city on the West Coast of Turkey) and
            moved to Istanbul for college. He got his Computer Engineering and
            Mathematics degrees from Bahçeşehir University. He continued his
            education by joining Artificial Intelligence Lab at Koç University,
            where he focused on Machine learning and Natural Language
            Processing. After getting his Master’s degree, Osman decided on a
            career in the industry and worked in start-ups and big companies. In
            2016, he moved to the United States. After living in Boston for one
            year, he moved to the Bay Area. Currently, he lives in San
            Francisco.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <PreviousExperience></PreviousExperience>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" mb={1} textAlign={'center'}>
          Stuff I Love
        </Typography>

        {listActivities(hobbies)}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" textAlign={'center'} mb={1}>
          Currently Learning
        </Typography>
        {listActivities(learning)}
      </Grid>
      <Grid item xs={12} md={6} mb={1} textAlign={'center'}>
        <Typography variant="h4" textAlign={'center'}>
          Books: Currently Reading
        </Typography>
        {showBooks(books)}
      </Grid>
      <Grid item xs={12} md={6} mb={1} textAlign={'center'}>
        <Typography variant="h4">Books: Recently finished</Typography>
        {showBooks(readBooks)}
      </Grid>
    </Grid>
  )
}
