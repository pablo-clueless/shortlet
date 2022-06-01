import React from 'react'
import { Grid, Typography } from '@mui/material'

import ProductCard from './ProductCard'
import useStyles from '../styles'
import { ProductData as products } from '../product-data'

const ProductLayout = () => {
  const classes = useStyles()
  return (
    <section className={classes.layout}>
      <Typography variant="h2">
        Closests to your location
      </Typography>
      <Typography variant="h6">
        Find the best short-lets in your area
      </Typography>
      <Grid container spacing={2} mt={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default ProductLayout