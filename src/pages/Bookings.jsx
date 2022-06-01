import React, { useState } from 'react'
import { Stack, TextField, Typography } from '@mui/material'

import { LocationList as locations } from '../location'
import { InputField } from '../components'
import useStyles from '../styles'

const Bookings = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  
  return (
    <Stack direction='column' spacing={2} mt={12} px={2}>
      <Typography variant='h3'>
        Book a Short-let
      </Typography>
      <form className={classes.form}>
        <InputField type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email.' />
      </form>
    </Stack>
  )
}

export default Bookings