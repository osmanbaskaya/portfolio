import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from '@mui/material'

var pages = [
  { url: '/', text: 'Home' },
  { url: '#work', text: 'Work' },
  { url: '#research', text: 'Research' },
  { url: 'http://osmanbaskaya.github.io/', text: 'Blog' },
  { url: '/about', text: 'About' },
]

// const pages = ['Home', 'Work', 'Research', 'Blog', 'About']

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            component="img"
            mr={1}
            sx={{
              maxWidth: '50px',
              maxHeight: '100%',
            }}
            alt="logo"
            src="assets/img/logo2.png"
          />
          <Typography
            variant="h3"
            component="div"
            noWrap
            sx={{
              display: { xs: 'none', md: 'flex', color: 'black' },
              fontFamily: 'Babylonica, cursive',
              lineHeight: 'unset',
            }}
          >
            <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Osman Başkaya
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page.url}
                  textAlign="center"
                  key={page.text}
                  sx={{ textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', color: 'black' },
              fontFamily: 'Babylonica, cursive',
              lineHeight: 'unset',
            }}
          >
            <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Osman Başkaya
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.text}
                component="a"
                href={page.url}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Typography
                  textAlign="center"
                  color="black"
                  sx={{ textDecoration: 'none' }}
                >
                  {page.text}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
