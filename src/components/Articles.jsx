import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Article from './Article'
import ArticleImages from './ArticleImages'

const articles = [
  {
    url: 'assets/img/paper.png',
    title: 'State of the art word sense disambiguation',
    width: '33%',
  },
  {
    url: 'assets/img/paper.png',
    title:
      'AI-KU: Using Subsituite Vectors and Co-occurrence Modeling for Word Sense Disambiguation',
    width: '33%',
  },
  {
    url: 'assets/img/paper.png',
    title:
      'AI-KU: Using Subsituite Vectors and Co-occurrence Modeling for Word Sense Disambiguation',
    width: '33%',
  },
]

export default function Articles() {
  return (
    <Box>
      <Box
        gap={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="img"
          sx={{
            overflow: ' hidden',
            height: '80px',
            justifyContent: 'flex-start',
          }}
          alt="twilio"
          src="assets/img/hero5.png"
        ></Box>
        <Typography variant="h2">Research articles</Typography>
        <Typography variant="body1">
          Articles related to Machine Learning, Natural Language Programming,
          and Recommender Systems
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="space-evenly">
        {/* {articles.map((article, index) => (
          <Grid item xs={12} sm={6} key={index} md={4}>
            <Article></Article>
          </Grid>
        ))} */}

        <ArticleImages articles={articles}></ArticleImages>
      </Grid>
    </Box>
  )
}
