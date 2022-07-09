import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

import useStyles from '../styles'
import HamburgerMenu from './HamburgerMenu'
import logo from '../logo.png'
import { useTheme } from '../contexts/ThemeProvider'
import { Typography } from '@mui/material'

const menus = ['bookings', 'locations', 'about', 'contact']

const Navbar = () => {
  const classes = useStyles()
  const { theme, toggleTheme } = useTheme()

  return (
    <AppBar className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <Stack direction='row' alignItems='center' spacing={2}>
          {theme === 'light' ? 
          <IconButton onClick={toggleTheme}>
            <DarkMode />
          </IconButton> : 
          <IconButton onClick={toggleTheme}>
            <LightMode />
          </IconButton> }
          <ul>
            {menus.map(menu => (
              <li key={menu}>
                <NavLink to={`/${menu}`} className={({isActive}) => isActive ? classes.activeLink : ''}>
                  {menu}
                </NavLink>
              </li>
            ))}
          </ul>

          <HamburgerMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar