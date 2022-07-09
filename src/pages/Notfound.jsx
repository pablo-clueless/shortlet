import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const Notfound = () => {

  return (
    <Stack direction='column' textAlign='center' mt={36} p={2}>
      <Typography variant='h3'>
        This page is under construction.
      </Typography>
      <Typography variant='body1' mb={6}>
        No short-lets here, let's go back home.
      </Typography>
      <Link to='/'>
        <Button variant='contained'>
          &larr; Home
        </Button>
      </Link>
    </Stack>
  )
}

export default Notfound