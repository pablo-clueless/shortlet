import React from 'react'

import useStyles from '../styles'

const InputField = ({ type, label, name, value, onChange, onFocus, placeholder, fullWidth, min, max, data }) => {
  const classes = useStyles()

  if(type === 'select') {
    return (
      <div className={classes.formControl} style={{width: fullWidth ? '100%' : '50%'}}>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={onChange}>
          <option value="">- Select -</option>
          {data?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className={classes.formControl} style={{width: fullWidth ? '100%' : '50%'}}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} onFocus={onFocus} placeholder={placeholder} min={min} max={max} />
    </div>
  )
}

export default InputField