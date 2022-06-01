import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

import useStyles from '../styles'

const ReviewCard = ({ name, image, date, rating, review }) => {
  const classes = useStyles()

  return (
    <div className={classes.reviewCard}>
      <Avatar src={image} sx={{ width: 100, height: 100, margin: '1rem 0' }} />
      <Stack direction='column' spacing={2}>
        <Typography variant='subtitle2'>
          {review}
        </Typography>
        <Typography variant='body1'>
          {name}
        </Typography>
        <Typography variant='caption'>
          {date}
        </Typography>
      </Stack>
    </div>
  )
}

export default ReviewCard