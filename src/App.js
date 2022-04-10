import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Lora',
    },
    // h4: {
    //   fontSize: '2.125rem',
    // },
  },
})

theme = responsiveFontSizes(theme)

// theme.typography.h4 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// }

export default class App extends Component {
  render() {
    // let ga4react

    // if (!GA4React.isInitialized() && MEASUREMENT_ID) {
    //   ga4react = new GA4React(MEASUREMENT_ID)

    //   ga4react.initialize().then(
    //     (ga4) => {
    //       console.log('success')
    //       ga4.pageview(window.location.pathname)
    //     },
    //     (err) => {
    //       console.error(err)
    //     },
    //   )
    // }

    let routes = (
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
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
