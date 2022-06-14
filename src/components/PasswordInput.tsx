import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
} 

export const PasswordInput = ({value, error, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };

  return (
    <div className="field">
    <span className='p-float-label'>
      <Password id='password' name='password' autoComplete='off' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="password" className={classNames({ 'p-error': getFormErrorMessage()  })}>Password*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
