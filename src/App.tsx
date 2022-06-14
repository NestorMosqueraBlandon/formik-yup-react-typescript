import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import './App.css'

import { object, string } from 'yup'
import { Form, Formik, FormikProps, useFormik } from 'formik';
import { Button } from 'primereact/button'
import { useState } from 'react';
import { TextInput } from './components/TextInput';
import { classNames } from 'primereact/utils';


interface FormStatus {
  message: string
  type: string
}

interface FormStatusProps {
  [key: string]: FormStatus
}

interface FormValues {
  name: string,
  email: string,
  password: string,
  accept: boolean
}

function App() {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    accept: false
  }


  const formStatusProps: FormStatusProps = {
    success: {
      message: 'Form sent successfully.',
      type: 'success',
    },
    error: {
      message: 'Something went wrong. Please try again.',
      type: 'error',
    },
  }


  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: '',
  })

  const sendForm = async (data: FormValues, resetForm: Function) => {
    try {
      if (data) {
        console.log('ENTRO QAQUI')
        alert(JSON.stringify(data))
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error: any) {

      setFormStatus(formStatusProps.error)
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div className="flex mt-10 justify-content-center">
      <Formik initialValues={initialValues} onSubmit={(values: FormValues, actions) => {
        sendForm(values, actions.resetForm)
        alert(JSON.stringify(values))
        setTimeout(() => {
          actions.setSubmitting(false)
        }, 500)
      }}
        validationSchema={object().shape({
          name: string().required('Please enter full name'),
          email: string().email().required('Enter valid email'),
          password: string()
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            )
            .required(
              'Please valid password. One uppercase, one lowercase, one special character and no spaces'
            ),
        })}
      >
        {(props: FormikProps<FormValues>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props
          return (
            <Form className='p-fluid'>

              <TextInput value={values.name} touched={touched} handleBlur={handleBlur} helperText={
                errors.name && touched.name
                  ? errors.name
                  : 'Enter your full name.'
              } error={errors.name && touched.name ? errors.name : 'Enter a correct name'} handleChange={handleChange} />

              <div className="field">
                <span className='p-float-label'>
                  {/* <Password id='name' name='name' value={formik.values.name} onChange={formik.handleChange} autoFocus /> */}
                  {/* <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label> */}
                </span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )
        }}


      </Formik>

      <div>
          {displayFormStatus && (
            <div className="formStatus">
              {formStatus.type === 'error' ? (
                <p

                  className={classNames({ 'p-message': true })}

                >
                  {formStatus.message}
                </p>
              ) : formStatus.type ===
                'success' ? (
                <p
                  className={classNames({ 'p-error': true })}

                >
                  {formStatus.message}
                </p>
              ) : null}
            </div>
          )}
        </div>


    </div>
  )
}

export default App
