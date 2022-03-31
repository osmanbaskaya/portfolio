import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Article from './Article'
import ArticleImages from './ArticleImages'

const articles = [
  {
    url: 'assets/img/papers/paper1.png',
    title: 'AI-KU: Using Co-occurrence for Semantic Similarity',
    width: '33%',
  },

  {
    url: 'assets/img/papers/paper3.png',
    title: 'Integrating Meaning into Quality Evaluation of Machine Translation',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper4.png',
    title: 'How Similar is Rating Similarity to Content Similarity?',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper5.png',
    title:
      'Semi-supervised Learning with induced Word Senses for State-of-the-art Word Sense Disambiguation',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper6.png',
    title:
      'AI-KU: Using Substitute Vectors and Co-occurrence Modeling for Word Sense Induction and Disambiguation',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper7.jpg',
    title:
      'Atrophy Measurement Biomarkers using Structural MRI for Alzheimer’s Disease',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper8.jpg',
    title:
      'Inter-hemispheric Atrophy Better Correlates with Expert Ratings Than Hemispheric Cortical Atrophy',
    width: '33%',
  },
  {
    url: 'assets/img/papers/paper2.jpg',
    title:
      'Concordance Between Computer-based Neuroimaging Findings and Expert Assessments in Dementia Grading',
    width: '33%',
  },
]

export default function Articles() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          component="img"
          sx={{
            height: '80px',
            width: '80px',

            justifyContent: 'flex-start',
          }}
          alt="twilio"
          src="assets/img/hero5.png"
        ></Grid>
        <Grid item pl={2} pb={2}>
          <Typography variant="h2">Research articles</Typography>
          <Typography variant="body1">
            Articles related to Machine Learning, Natural Language Programming,
            and Recommender Systems
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
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
