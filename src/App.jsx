import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Bookings, Home, Notfound, Location, Product, Search } from './pages'
import { theme } from './theme'
import { Footer, Navbar } from './components'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Location />} />
        <Route path='/location/:id' element={<Product />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App