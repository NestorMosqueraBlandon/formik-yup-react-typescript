import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import React from 'react'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const TextInput = ({value, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <InputText id='name' name='name' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="name" className={classNames({ 'p-error': getFormErrorMessage()  })}>Name*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
