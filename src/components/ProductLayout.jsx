import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

import ProductCard from './ProductCard'
import useStyles from '../styles'
import { ProductData as products } from '../data'
import { useTheme } from '../contexts/ThemeProvider'

const ProductLayout = () => {
  const classes = useStyles()
  const { theme } = useTheme()
  
  return (
    <Container className={classes.layout} style={{backgroundColor: theme === 'light' ? '#fff' : '#757575'}}>
      <Typography variant="h4">
        Check out our exclusive shortlets across Lagos
      </Typography>
      <Typography variant="body1" color='var(--color-info)'>
        Find the best short-lets in your area
      </Typography>
      <Grid container spacing={2} mt={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductLayout