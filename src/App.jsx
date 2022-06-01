import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Home, Product } from './pages'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App