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
import React, { useEffect, useState } from 'react'
import PreviousExperience from '../components/PreviousExperience'

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
    {
      author: 'Patton, Jeff',
      title:
        'User Story Mapping: Discover the Whole Story, Build the Right Product',
    },
  ]

  const [books, setBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])
  useEffect(() => {
    fetch(
      'http://goodreads-currently-reading-klxvdojwta-uc.a.run.app?shelf=currently-reading&k=3',
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        setBooks(data)
      })
  }, [])

  useEffect(() => {
    fetch(
      'http://goodreads-currently-reading-klxvdojwta-uc.a.run.app?shelf=read&k=3',
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReadBooks(data)
      })
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 0.5,
            margin: 'auto',
            //   flexGrow: 1,
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

      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 1,
            margin: 'auto',
            //   flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Typography variant="h5">
            Osman was born in İzmir (the city in the ) and moved to Istanbul for
            college. He got my Computer Engineering and Mathematics degrees from
            Bahçeşehir University. He continued his education by joining
            Artificial Intelligence Lab at Koç University, where he focused on
            Machine learning and Natural Language Processing. After getting my
            Master’s degree, Osman decided on a career in the industry and
            worked in start-ups (e.g., Seven Bridges Genomics) and big companies
            (e.g., Huawei, Twilio).
          </Typography>
        </Paper>
      </Grid>

      {/* <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider> */}

      <Grid item xs={12}>
        <PreviousExperience></PreviousExperience>
      </Grid>
      {/* <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider> */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" mb={1} textAlign={'center'}>
          What Else I Like
        </Typography>

        <Grid container spacing={1}>
          {hobbies.map((hobby, index) => (
            <Grid item>
              <Chip
                label={hobby}
                key={index}
                sx={{
                  fontSize: 'small',
                  fontFamily: 'BIZ UDPMincho, serif',
                }}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" textAlign={'center'} mb={1}>
          What I am learning nowadays
        </Typography>
        <Grid container spacing={1}>
          {learning.map((hobby, index) => (
            <Grid item>
              <Chip
                label={hobby}
                key={index}
                sx={{
                  fontSize: 'small',
                  fontFamily: 'BIZ UDPMincho, serif',
                }}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} mb={1} textAlign={'center'}>
        <Typography variant="h4" textAlign={'center'}>
          Books I am currently reading
        </Typography>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            display: 'inline-block',
          }}
        >
          {books.map((book) => (
            <ListItem key={book.title}>
              <ListItemText
                primary={book.title}
                secondary={book.author}
                sx={{ textAlign: 'center' }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6} mb={1} textAlign={'center'}>
        <Typography variant="h4">Books I recently finished</Typography>

        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            display: 'inline-block',
          }}
        >
          {readBooks.map((book) => (
            <ListItem key={book.title}>
              <ListItemText
                primary={book.title}
                secondary={book.author}
                sx={{ textAlign: 'center' }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
