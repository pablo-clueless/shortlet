import React from 'react'
import { TextField } from '@mui/material'

import useStyles from '../styles'

const InputField = ({ type, label, name, value, onChange, onFocus, placeholder, fullWidth }) => {
  const classes = useStyles()

  return (
    <TextField fullWidth={fullWidth} type={type} label={label} name={name} value={value} onChange={onChange} onFocus={onFocus} placeholder={placeholder} size='small' classes={{ root: classes.root }} />
  )
}

export default InputField