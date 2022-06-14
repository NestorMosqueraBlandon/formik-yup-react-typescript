import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    inputId: string
} 

export const RadioInput = ({value, error, handleChange, helperText, inputId} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <RadioButton inputId={inputId} name='terms' value="Accept Terms" checked={value === 'Accept Terms'} onChange={handleChange} autoFocus />
      <label htmlFor="terms" className={classNames({ 'p-error': getFormErrorMessage()  })}></label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
