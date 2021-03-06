import React from 'react'
import { Avatar, Card, Rating, Stack, Typography } from '@mui/material'

import useStyles from '../styles'

const ReviewCard = ({ name, image, date, rating, review }) => {
  const classes = useStyles()

  return (
    <Card className={classes.reviewCard}>
      <Avatar src={image} sx={{ width: 100, height: 100, margin: '1rem 0' }} />
      <Stack direction='column' spacing={2}>
        <Typography variant='subtitle2'>
          {review.substring(0,100)}
        </Typography>
        <Typography variant='body1' color='var(--color-warning)'>
          {name}
        </Typography>
        <Typography variant='caption'>
          {date}
        </Typography>
      </Stack>
      <Rating value={rating} precision={0.1} readOnly />
    </Card>
  )
}

export default ReviewCard