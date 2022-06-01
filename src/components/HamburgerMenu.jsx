import React, { useState } from 'react'
import { Button, IconButton, Menu, MenuItem} from '@mui/material'
import { MoreVert } from '@mui/icons-material'

import useStyles from './styles'

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
      <MenuItem onClick={() => setAnchorEl(null)}>Home</MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>Locations</MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>Becaome an Agent</MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>About Us</MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Button variant='contained'>
          Contact Us
        </Button>
      </MenuItem>
    </Menu>
    </div>
  )
}

export default HamburgerMenu