import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Stack, Typography } from '@mui/material'

import { LocationList as locations, ProductData } from '../data'
import { InputField, Modal } from '../components'
import useStyles from '../styles'
import { openModal } from '../redux/features/modalSlice'

const initialState = { name: '', email: '', location: '', date: '', product: '', quantity: 0, total: 0}

const Bookings = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isOpen } = useSelector(state => state.modal)
  const [form, setForm] = useState(initialState)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const date = new Date()
  const products = ProductData.map((product) => product.name)
  const quantity = Array.from((Array(11).keys()))

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    let subtotal = 0
    const { quantity, product } = form
    if (form.product !== '') {
      subtotal = ProductData.find(p => p.name === product)?.price * quantity
    }
    let serviceCharge = 0
    if (subtotal > 0) {
      serviceCharge = subtotal * 0.1
    }
    setForm({...form, total:(subtotal + serviceCharge)})
  },[form.quantity, form.product])

  const handleReset = () => {
    window.location.reload()
  }

  const handlePreview = (e) => {
    e.preventDefault()

    const {name, email, location, date, product, quantity, total} = form
    
    if(!name || !email || !location || !product || !date) {
      return setError('Please fill all fields.')
    }

    if(quantity == 0) {
      return setError("Please choose a valid number of nights.")
    }

    const data = {name, email, location, date, product, quantity, total}
    setData(data)
    dispatch(openModal())
  }
  
  const handleBooking = () => {
    alert('Booking Successful')
    handleReset()
  }

  setTimeout(() => {
    setError(null)
  }, 5000)
  
  return (
    <>
    {error && <Alert severity='error' style={{position:'absolute',top:'10%',left:'5%',zIndex:3}}>{error}</Alert>}
    {isOpen && (<Modal data={data} handleBooking={handleBooking} />)}
    <Stack className={classes.bookingsPage} direction='column' spacing={2} mt={10} p={2}>
      <Typography variant='h4'>
        Book a Short-let
      </Typography>
      <form className={classes.form} onSubmit={handlePreview}>
       <InputField label='Name' type='text' name='name' onChange={handleChange} fullWidth labelBg='#E9E8E4' />
       <InputField label='Email' type='email' name='email' onChange={handleChange} fullWidth labelBg='#E9E8E4' />

       <Stack direction={{xs:'column',sm:'row',md:'row'}} spacing={2}>
        <InputField label='Location' type='select' name='location' onChange={handleChange} data={locations} labelBg='#E9E8E4' />
        <InputField label='Products' type='select' name='product' onChange={handleChange} data={products} labelBg='#E9E8E4' />
       </Stack>

       <Stack direction={{xs:'column',sm:'row',md:'row'}} spacing={2}>
        <InputField label='Date' type='date' name='date' onChange={handleChange} labelBg='#E9E8E4' />
        <InputField label='No of Nights' type='select' name='quantity' onChange={handleChange} data={quantity} labelBg='#E9E8E4' />
       </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' spacing={1}>
          <Typography variant='h5'>
            Total: ${form.total}
          </Typography>
          <Typography variant='caption'>
            (inclusive of 10% service charge)
          </Typography>
          </Stack>
          <Button type='button' variant='contained' onClick={handleReset}>
            Reset
          </Button>
        </Stack>
        <Button type='submit' variant='contained'>
          Preview
        </Button>
      </form>
    </Stack>
    </>
  )
}

export default Bookings