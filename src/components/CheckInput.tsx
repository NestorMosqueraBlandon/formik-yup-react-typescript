import { Checkbox } from 'primereact/checkbox'
import { classNames } from 'primereact/utils'

interface InputProps {
    checked: boolean,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const CheckInput = ({checked, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <Checkbox id='accept' name='accept' checked={checked} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="accept" className={classNames({ 'p-error': getFormErrorMessage()  })}> </label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
