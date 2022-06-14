import { InputNumber } from 'primereact/inputnumber'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: number,
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const NumberInput = ({value, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
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
