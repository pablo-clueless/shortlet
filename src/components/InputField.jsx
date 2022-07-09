import React from 'react'

import useStyles from '../styles'

const InputField = ({ type, label, name, value, onChange, onFocus, placeholder, fullWidth, min, max, data, labelBg }) => {
  const classes = useStyles()

  if(type === 'select') {
    return (
      <div className={classes.formControl} style={{width: fullWidth ? '100%' : '50%'}}>
        <label htmlFor={name} style={{background:labelBg}}>{label}</label>
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

  if(type === 'textarea') {
    return (
      <div className={classes.formControl} style={{width: fullWidth ? '100%' : '50%', height: 150}}>
        <label htmlFor={name} style={{background:labelBg,top:'-7%'}}>{label}</label>
        <textarea name={name} value={value} onChange={onChange} onFocus={onFocus} placeholder={placeholder} min={min} max={max} />
      </div>
    )
  }

  return (
    <div className={classes.formControl} style={{width: fullWidth ? '100%' : '50%'}}>
      <label htmlFor={name} style={{background:labelBg}}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} onFocus={onFocus} placeholder={placeholder} min={min} max={max} />
    </div>
  )
}

export default InputField