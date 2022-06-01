import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Paper, Stack, Typography } from '@mui/material'

import useStyles from '../styles'
import logo from '../logo.png'
import { closeModal } from '../redux/features/modalSlice'

const Modal = ({ data }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(closeModal())
  }

  return (
    <div className={classes.backdrop}>
      <Paper elevation={3}>
        <Stack direction='column' spacing={2} p={2}>
          <img src={logo} alt="logo" width={200} />
          <Typography variant='h3'>
            Booking Details
          </Typography>
          <Typography variant='body1'>
            Name: {data.name}
          </Typography>
          <Typography variant='body1'>
            Email: {data.email}
          </Typography>
          <Typography variant='body1'>
            Location: {data.location}
          </Typography>
          <Typography variant='body1'>
            Date: {data.date}
          </Typography>
          <Typography variant='body1'>
            Product: {data.product}
          </Typography>
          <Typography variant='body1'>
            Nights: {data.quantity}
          </Typography>
          <Typography variant='body1'>
            Total: ${data.total}
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='space-between' mt={4}>
            <Button type='button' variant='outlined' onClick={() => dispatch(closeModal())}>
              Close
            </Button>
            <Button type='button' variant='contained' onClick={handleSubmit}>
              Confirm
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </div>
  )
}

export default Modal