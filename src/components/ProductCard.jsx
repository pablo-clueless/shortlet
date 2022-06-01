import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Stack, Typography } from '@mui/material'

import useStyles from '../styles'

const ProductCard = ({ id, name, price, location, image, living_room, bedroom, bathroom }) => {
  const classes = useStyles()

  return (
    <Link to={`/products/${id}`}>
      <div className={classes.productCard}>
        <img src={image} alt={name} />
        <Stack direction='column' my={1} px={1}>
          <Typography variant="h6" textTransform='capitalize'>{name}</Typography>
          <Typography variant="subtitle1">${price}</Typography>
          <Typography variant="subtitle1">{location}</Typography>
          <Stack direction='row' spacing={2} color='GrayText'>
            <Typography variant="subtitle1">Living room: {living_room}</Typography>
            <Typography variant="subtitle1">Bedroom: {bedroom}</Typography>
            <Typography variant="subtitle1">Bathroom: {bathroom}</Typography>
          </Stack>
        </Stack>
      </div>
    </Link>
  )
}

export default ProductCard