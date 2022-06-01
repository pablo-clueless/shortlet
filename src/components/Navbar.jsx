import React from 'react'
import { Button, Toolbar } from '@mui/material'

import useStyles from './styles'
import HamburgerMenu from './HamburgerMenu'
import logo from '../logo.png'

const Navbar = () => {
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="logo" />

        <ul className={classes.navList}>
          <li>
            <a href="#" className={classes.navItem}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={classes.navItem}>
              Locations
            </a>
          </li>
          <li>
            <a href="#" className={classes.navItem}>
              Become an Agent
            </a>
          </li>
          <li>
            <a href="#" className={classes.navItem}>
              About Us
            </a>
          </li>
          <li>
            <Button variant='contained'>
              Contact Us
            </Button>
          </li>
        </ul>

        <HamburgerMenu />
      </Toolbar>
    </nav>
  )
}

export default Navbar