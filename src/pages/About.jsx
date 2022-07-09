import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Stack, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

import { InputField, RatingsInput } from '../components'
import { ReviewData as reviews } from '../data'
import useStyles from '../styles'

const About = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [error, setError] = useState(null)

    const handleSubmitRating = (e) => {
        e.preventDefault()

        if(!review || !rating) {
            return setError('Please add rating and review')
        }
        
        const today = new Date().toISOString()
        
        const data = {id: uuidv4(), name, image: '', date: today, review, rating}
        reviews.push(data)
        localStorage.setItem('reviews', reviews)
        navigate('/')
    }

    setTimeout(() => {
        setError(null)
    }, 5000)

  return (
    <>
    {error && <Alert severity='error' style={{position:'absolute',top:'10%',left:'5%',zIndex:3}}>{error}</Alert>}
    <Stack className={classes.aboutPage} mb={4}>
        <Stack direction='column' alignItems='center' spacing={2} my={2} px={10}>
            <Typography variant='h4' color='text.primary'>
                About Shortlet
            </Typography>
            <Typography variant='body1' color='text.secondary'>
                Shortlet is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales, for lodging, primarily homestays for vacation rentals, and tourism activities. Based in Lagos, the platform is accessible via website . Inspect properties, choose from a wide range of options that meet your needs and pocket.
            </Typography>
        </Stack>
        <Stack direction='column' width='80%' alignItems='center' spacing={2} px={2}>
            <Typography variant='h4' color='text.primary'>
                Leave us a rating
            </Typography>
            <form onSubmit={handleSubmitRating} className={classes.form}>
                <InputField label='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} fullWidth labelBg='#fff' />
                <InputField label='Review' type='textarea' value={review} onChange={(e) => setReview(e.target.value)} fullWidth labelBg='#F6F6F9' />
                <RatingsInput value={rating} setValue={setRating} />
                <Button type='submit' variant='contained'>
                    Submit
                </Button>
            </form>
        </Stack>
    </Stack>
    </>
  )
}

export default About