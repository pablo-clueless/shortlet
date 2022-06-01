import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Bookings, Home, Notfound, Product, Search } from './pages'
import { theme } from './theme'
import { Navbar } from './components'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App