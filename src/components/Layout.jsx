import Footer from './Footer'
import Navbar from './Navbar'

import React from 'react'
import { Box } from '@mui/material'

export default function Layout(props) {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar></Navbar>
      <Box sx={{ width: '80%', maxWidth: '1200px', margin: '1rem auto' }}>
        {props.child}
      </Box>
      <Footer></Footer>
    </Box>
  )
}
