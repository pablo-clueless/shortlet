import React from 'react'
import { Container, Stack, Typography } from '@mui/material'

import useStyles from '../styles'
import { ReviewData as reviews } from '../data'
import ReviewCard from './ReviewCard'
import { useTheme } from '../contexts/ThemeProvider'

const ReviewLayout = () => {
  const classes = useStyles()
  const { theme } = useTheme()

  return (
    <Container className={classes.layout} style={{backgroundColor: theme === 'light' ? '#fff' : '#757575'}}>
      <Typography variant="h4">Reviews</Typography>
      <Typography variant="body1" color='var(--color-info)'>
        Shortlet is committed to providing you with the best experience possible.
      </Typography>
      <div className={classes.reviewLayout}>
        {reviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </Container>
  )
}

export default ReviewLayout