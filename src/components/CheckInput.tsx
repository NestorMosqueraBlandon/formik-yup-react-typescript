import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const PasswordInput = ({value, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <InputText id='password' name='password' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="password" className={classNames({ 'p-error': getFormErrorMessage()  })}>Password*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
