import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react'

const SectionTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.25rem',
  },
}))

export default function SectionTitle(props) {
  return <SectionTypography>{props.children}</SectionTypography>
}
