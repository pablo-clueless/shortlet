import React from 'react'
import { Box, Rating } from '@mui/material'
import { Star } from '@mui/icons-material'

import useStyles from '../styles'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

const RatingsInput = ({value, setValue}) => {
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  return (
    <Box className={classes.ratings}>
        <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(e, newValue) => setValue(newValue)} onChangeActive={(event, newHover) => setHover(newHover)} emptyIcon={<Star style={{opacity: 0.55,color:'#757575'}} fontSize="inherit" />} />
        {value !== null && (
            <Box sx={{ml:2}}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
    </Box>
  )
}

export default RatingsInput
