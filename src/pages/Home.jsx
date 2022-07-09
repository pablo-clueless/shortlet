import React from 'react'
import { Stack } from '@mui/material'

import { Header, ProductLayout, ReviewLayout } from '../components'

const Home = () => {

  return (
    <Stack>
      <Header />
      <ProductLayout />
      <ReviewLayout />
    </Stack>
  )
}

export default Home