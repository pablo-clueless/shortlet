import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { About, Bookings, Home, Notfound, Location, Product, Search } from './pages'
import { lightTheme, darkTheme } from './theme'
import { Footer, Navbar } from './components'
import { useTheme } from './contexts/ThemeProvider'

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
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