import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Card, Container, Stack, Typography } from '@mui/material'

import { InputField } from './index'
import { LocationList as locations } from '../data'
import useStyles from '../styles'

const Header = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [error, setError] = useState(null)

  const getQuery = async(text) => {
    try {
      const res = locations.filter(location => location.toLowerCase().includes(text.toLowerCase()))
      if(!text || text === '') setResult([])
      if(res.length) setResult(res)
    } catch (error) {}
  }

  const onSearch = (e) => {
    e.preventDefault()

    setSearch(e.target.value)
    getQuery(e.target.value)
  }

  const clearError = () => setError(null)

  return (
    <>
    {error && (<Alert severity='error' style={{position:'absolute',top:'10%',left:'40%',zIndex:3}} onClose={clearError}>
      {error}
      </Alert>)}
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
          <InputField type='text' label='Search' value={search} onChange={onSearch} placeholder='Search shortlets by location' />
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
    </>
  )
}

export default Header