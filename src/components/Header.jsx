import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

import Navbar from './Navbar'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    
    if(!search) return alert('Please enter a search term')
    console.log(search)
    setSearch('')
  }

  return (
    <header className={classes.header}>
      <Navbar />
      <Stack direction='column' mt={12} px={2}>
        <Typography variant='h2' color='textPrimary'>
          Affordable Most Reliable
        </Typography>
        <Typography variant='h2' color='textSecondary' gutterBottom>
          Short-let in Nigeria
        </Typography>
        <Typography variant='body1'>
          We are a reliable short-let company that offers short-let services in Nigeria.
        </Typography>
        <Typography variant='body1'>
        Find a variety of short-lets that suits you easily.
        </Typography>
        <Stack direction='row' alignItems='center' spacing={2} my={2}>
          <form className={classes.form} onSubmit={handleSearch}>
            <TextField className={classes.inputField} type='text' label='Search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for short-lets' />
            <Button type='submit' variant='contained'>
              Search
            </Button>
          </form>
        </Stack>
        <Stack direction='row' spacing={2} textAlign='center'>
            <Stack direction='column'>
              <Typography variant='h4'>
                10k
              </Typography>
              <Typography variant='body1'>
                Suitable <br/> outlets
              </Typography>
            </Stack>
            <Stack direction='column'>
            <Typography variant='h4'>
                7k
              </Typography>
              <Typography variant='body1'>
                Happy <br/> customers
              </Typography>
            </Stack>
            <Stack direction='column'>
            <Typography variant='h4'>
                24/7
              </Typography>
              <Typography variant='body1'>
                Customer <br/> support
              </Typography>
            </Stack>
          </Stack>
      </Stack>
    </header>
  )
}

export default Header