import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'

import useStyles from '../styles'
import logo from '../logo.png'

const Footer = () => {
  const classes = useStyles()

  return (
    <Stack className={classes.footer} direction='column' mt={8} px={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} px={2}>
          <img src={logo} alt='logo' />
          <Typography variant='body1'>
            Your reliable and efficient shortlet service in Nigeria.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} textAlign='center'>
          <Typography variant='h5' mb={2}>About</Typography>
          <Typography variant='subtitle1'>About Us</Typography>
          <Typography variant='subtitle1'>Features</Typography>
          <Typography variant='subtitle1'>News & Blog</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} textAlign='center'>
          <Typography variant='h5' mb={2}>Company</Typography>
          <Typography variant='subtitle1'>How we work?</Typography>
          <Typography variant='subtitle1'>Be part of us?</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} textAlign='center'>
          <Typography variant='h5' mb={2}>Support</Typography>
          <Typography variant='subtitle1'>FAQs</Typography>
          <Typography variant='subtitle1'>support Center</Typography>
          <Typography variant='subtitle1'>Contact Us</Typography>
        </Grid>
      </Grid>
      <Stack direction='row' alignItems='center' justifyContent='space-between' my={2} px={2}>
        <Typography variant='body1'>
          &copy;2022 Shortlet. All rights reserved.
        </Typography>

        <Stack direction='row' spacing={2}>
          <Typography variant='body1'>
            Privacy Policy
          </Typography>
          <Typography variant='body1'>
            Terms & Conditions
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer