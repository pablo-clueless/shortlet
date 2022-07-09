import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

import { LocationList as locations } from '../data'

const Location = () => {
  return (
    <Stack direction='column' spacing={4} mt={12} p={2}>
        {locations.map((location, index) => (
            <Stack key={index} direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
                <Typography variant='h5'>
                    {location}
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='primary'>
                        View
                    </Button>
                    <Link to='/bookings'>
                        <Button variant='contained' color='secondary'>
                            Book
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        ))}
    </Stack>
  )
}

export default Location