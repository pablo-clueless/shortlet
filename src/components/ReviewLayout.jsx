import React from 'react'
import { Stack, Typography } from '@mui/material'

import useStyles from '../styles'
import { ReviewData as reviews } from '../review-data'
import ReviewCard from './ReviewCard'

const ReviewLayout = () => {
  const classes = useStyles()

  return (
    <section className={classes.layout}>
      <Typography variant="h2">
        Reviews
      </Typography>
      <Typography variant="h6">
        Shortlet is committed to providing you with the best experience possible.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} my={2}>
        {reviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Stack>
    </section>
  )
}

export default ReviewLayout