import { Dropdown } from 'primereact/dropdown'
import { classNames } from 'primereact/utils'

interface InputProps {
    value: string,
    error: any,
    handleChange: any,
    helperText: any,
    options: any
} 

export const SelectInput = ({value, error, options, handleChange, helperText} : InputProps ) => {
    
    const getFormErrorMessage = () => {
        return error && <small className="p-error">{error && helperText}</small>;
    };


  return (
    <div className="field">
    <span className='p-float-label'>
      <Dropdown id='country' optionValue='value' optionLabel='label' name='country' options={options} value={value} onChange={handleChange}   autoFocus placeholder='Select a country' />
      <label htmlFor="select" className={classNames({ 'p-error': getFormErrorMessage()  })}></label>
    </span>
    {getFormErrorMessage()}
  </div>
  )
}
