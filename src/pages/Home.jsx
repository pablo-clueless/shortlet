import React, { useState } from 'react'

import { Header, Footer, ProductLayout, ReviewLayout } from '../components'

const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <>
    <Header />
    <ProductLayout />
    <ReviewLayout />
    <Footer />
    </>
  )
}

export default Home