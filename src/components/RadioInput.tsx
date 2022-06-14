import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: boolean,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const RadioInput = ({value, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <RadioButton id='radio' name='radio' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="radio" className={classNames({ 'p-error': getFormErrorMessage()  })}>Radio*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
