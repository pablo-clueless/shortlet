import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton, Menu, MenuItem} from '@mui/material'
import { MoreVert } from '@mui/icons-material'

import useStyles from '../styles'

const menus = ['bookings', 'locations', 'about', 'contact']

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <div className={classes.menuButton}>
    <IconButton onClick={handleClick}>
      <MoreVert/>
    </IconButton>
    <Menu className={classes.menu} anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
      {menus.map(menu => (
        <MenuItem key={menu} onClick={() => setAnchorEl(null)}>
          <Link to={`/${menu}`}>
            {menu}
          </Link>
        </MenuItem>
      ))}
    </Menu>
    </div>
  )
}

export default HamburgerMenu