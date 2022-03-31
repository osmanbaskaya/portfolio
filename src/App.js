import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Lora',
    },
  },
})

export default class App extends Component {
  render() {
    let routes = (
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<Typography></Typography>} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <Typography>Existential crisis for this page.</Typography>
            </main>
          }
        />
      </Routes>
    )
    return (
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Layout child={routes}></Layout>
        </ScrollToTop>
      </ThemeProvider>
    )
  }
}
