import { InputNumber } from 'primereact/inputnumber'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: number,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
} 

export const NumberInput = ({value, error, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <InputNumber id='number' name='number' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="number" className={classNames({ 'p-error': getFormErrorMessage()  })}>Number*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
