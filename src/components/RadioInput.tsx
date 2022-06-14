import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: boolean,
    error: any,
    handleChange: any,
    helperText: any,
} 

export const RadioInput = ({value, error, handleChange, helperText} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <RadioButton inputId='terms'  id='terms' name='terms' checked={value} value="Terms and conditions" onChange={handleChange} autoFocus />
      <label htmlFor="terms" className={classNames({ 'p-error': getFormErrorMessage()  })}></label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
