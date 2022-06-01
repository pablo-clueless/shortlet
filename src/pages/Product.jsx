import React from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import { ProductData as products } from '../product-data'
import useStyles from '../components/styles'

const Product = () => {
  const classes = useStyles()
  const id = useParams().id

  const product = products.find(product => product.id === id)

  return (
    <Stack className={classes.product} direction='column' spacing={2} mt={12} px={2}>
      <Typography variant='h3'>
        {product.name}
      </Typography>
      <img src={product.image} alt={product.name} />
      <Typography variant='h5'>
        {product.price}/night
      </Typography>
      <Typography variant='h5'>
        {product.location}
      </Typography>
      <Stack direction='row' spacing={4}>
        <Typography variant='h6'>
          Living Room: {product.living_room}
        </Typography>
        <Typography variant='h6'>
          Bedroom: {product.bedroom}
        </Typography>
        <Typography variant='h6'>
          Bathroom: {product.bathroom}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Product