import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, InputBase, MenuItem, Select, Stack, Typography } from '@mui/material'

import { LocationList as locations } from '../location'
import { ProductData as products } from '../product-data'
import { InputField, Modal } from '../components'
import useStyles from '../styles'
import { openModal } from '../redux/features/modalSlice'

const Bookings = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isOpen } = useSelector(state => state.modal)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState(' ')
  const [date, setDate] = useState('')
  const [product, setProduct] = useState(' ')
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    let total = 0
    if (product !== ' ') {
      total = products.find(p => p.name === product)?.price * quantity
    }
    setTotal(total)
  },[quantity, product])

  const handleReset = () => {
    setEmail('')
    setLocation(' ')
    setDate('')
    setProduct(' ')
    setQuantity(0)
    setTotal(0)
  }

  const handlePreview = (e) => {
    e.preventDefault()

    if(!name || !email || !location || !date || !product || !quantity) return alert('Please fill all the fields')

    const data = {name, email, location, date, product, quantity, total}
    setData(data)
    dispatch(openModal())
  }
  
  return (
    <>
    {isOpen && (<Modal data={data} />)}
    <Stack direction='column' spacing={2} mt={12} px={2}>
      <Typography variant='h3'>
        Book a Short-let
      </Typography>
      <form className={classes.form} onSubmit={handlePreview}>
        <InputField type='text' label='Name' value={name} onChange={e => setName(e.target.value)} />
        <InputField type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email.' />
        <Select style={{ height: '50px', border: '1px solid var(--color-primary)' }} value={location} onChange={(e) => setLocation(e.target.value)}>
          <MenuItem value=' '>- Select Location -</MenuItem>
          {locations.sort((a,b) => a.localeCompare(b)).map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Select style={{ width: '70%', height: '50px', border: '1px solid var(--color-primary)' }} value={product} onChange={(e) => setProduct(e.target.value)}>
            <MenuItem value=' '>- Select Product -</MenuItem>
            {products.map((product) => (
              <MenuItem key={product.id} value={product.name}>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
              </MenuItem>
            ))}
          </Select>
          <Select style={{ width: '30%', height: '50px', border: '1px solid var(--color-primary)' }} value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {Array.from(Array(11).keys()).map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <InputBase classes={{ root: classes.datePicker }} type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>
            Total: ${total}
          </Typography>
          <Button type='button' variant='outlined' onClick={handleReset}>
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