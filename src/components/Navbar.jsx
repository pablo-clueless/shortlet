import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Toolbar } from '@mui/material'

import useStyles from '../styles'
import HamburgerMenu from './HamburgerMenu'
import logo from '../logo.png'

const menus = ['bookings', 'locations', 'about', 'contact']

const Navbar = () => {
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="logo" />
        <ul>
          {menus.map(menu => (
            <li key={menu}>
              <Link to={`/${menu}`}>
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        <HamburgerMenu />
      </Toolbar>
    </nav>
  )
}

export default Navbar