import React, { useState } from 'react'
import { Alert, Card, Stack, Typography } from '@mui/material'

import { LocationList as locations } from '../data'
import { InputField } from '../components'
import useStyles from '../styles'

const Search = (props) => {
  const [result, setResult] = useState([])
  const [error, setError] = useState(null)
  const classes = useStyles()

  const getQuery = async(text) => {
    try {
      const res = locations.filter(location => location.toLowerCase().includes(text.toLowerCase()))
      if(res.length) setResult(res)
    } catch (error) {}
  }

  const onSearch = (e) => {
    e.preventDefault()
    getQuery(e.target.value)
  }

  const clearError = () => setError(null)

  return (
    <>
    {error && (<Alert severity='error' style={{position:'absolute',top:'10%',left:'40%',zIndex:3}} onClose={clearError}>
      {error}
      </Alert>)}
      <Stack direction='column' className={classes.searchPage}>
        <Typography variant='h4' color='text.primary' mt={2} gutterBottom>
          Search for a location
        </Typography>

        <Stack direction='row' width={{sm:'80%',md:'50%'}} mt={2}>
          <InputField type='text' onChange={onSearch} placeholder='Search for a location' fullWidth />
        </Stack>

        <Card className={classes.results}>
          {result.length && result.map(location => (
            <Stack direction='row' alignItems='center' spacing={2} key={location}>
              <span style={{width:5,height:5,background:'#8484F0',borderRadius:'50%'}}></span>
              <Typography variant='h6' color='text.primary'>
                {location}
              </Typography>
            </Stack>
          ))}
        </Card>
      </Stack>
    </>
  )
}

export default Search