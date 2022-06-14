import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import React from 'react'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
} 

export const EmailInput = ({value, error, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };


  return (
    <div className="field ">
    <span className='p-float-label '>
      <InputText id='email' name='email' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="email" className={classNames({ 'p-error': getFormErrorMessage()  })}>Email*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
