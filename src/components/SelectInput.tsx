import { SelectButton } from 'primereact/selectbutton'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: string[],
    error: any,
    handleChange: any,
    helperText: any,
    handleBlur: any,
    touched: any
} 

export const SelectInput = ({value, error, touched, handleChange, helperText, handleBlur} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return helperText && <small className="p-error">{helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <SelectButton id='select' name='select' value={value} onChange={handleChange} onBlur={handleBlur} autoFocus />
      <label htmlFor="select" className={classNames({ 'p-error': getFormErrorMessage()  })}>Select*</label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
