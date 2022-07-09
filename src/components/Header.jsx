import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Stack, Typography } from '@mui/material'

import { InputField } from './index'

import useStyles from '../styles'

const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()
 
  return (
    <Container className={classes.header}>
      <Stack direction='column' mt={12} px={2}>
        <Typography variant='h2' color='text.primary'>
          Affordable Most Reliable
        </Typography>
        <Typography variant='h2' color='text.primary' gutterBottom>
          Short-let in Lagos.
        </Typography>
        <Typography variant='body1' color='text.info'>
          We are a reliable short-let company that offers short-let services in Nigeria.
        </Typography>
        <Typography variant='body1' color='text.info'>
        Find a variety of short-lets that suits you easily.
        </Typography>
        <Stack direction='row' alignItems='center' spacing={2} my={2}>
          <InputField type='text' onFocus={() => navigate('/search')} placeholder='Search shortlets by location' />
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
    </Container>
  )
}

export default Header