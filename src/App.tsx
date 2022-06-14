import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import './App.css'

import { number, object, string, boolean } from 'yup'
import { Form, Formik, FormikProps } from 'formik';
import { Button } from 'primereact/button'
import { useState } from 'react';
import { TextInput } from './components/TextInput';
import { classNames } from 'primereact/utils';
import { PasswordInput } from './components/PasswordInput';
import { EmailInput } from './components/EmailInput';
import { CheckInput } from './components/CheckInput';
import { NumberInput } from './components/NumberInput';
import { SelectInput } from './components/SelectInput';
import { RadioInput } from './components/RadioInput';

interface FormValues {
  name: string,
  email: string,
  age: number,
  password: string,
  accept: boolean,
  country: string,
  terms: ''
}

interface FormStatus {
  message: string
  type: string
}

interface FormStatusProps {
  [key: string]: FormStatus
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

const App = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: '',
  })

  const sendForm = async (data: FormValues, resetForm: Function) => {
    try {
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error: any) {

      setFormStatus(formStatusProps.error)
    } finally {
      setDisplayFormStatus(true)
    }
  }

  const initialValues: FormValues = {
    name: '',
    email: '',
    age: 0,
    password: '',
    country: '',
    accept: false,
    terms: ''
  }

  const options = [
    {
      label: 'United States',
      value: 'USA'
    },
    {
      label: 'Canada',
      value: 'CAD'
    }
  ]

  return (
    <div className="flex mt-10 justify-content-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValues, actions) => {
          sendForm(values, actions.resetForm);
          alert(JSON.stringify(values))
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={object().shape({
          name: string().required('Please enter full name'),
          email: string().email().required('Enter valid email'),
          country: string().required('Select a country'),
          age: number().required('Enter valid age'),
          terms: string(),
          accept: boolean(),
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

              <TextInput
                value={values.name}
                handleBlur={handleBlur}
                helperText={
                  errors.name && touched.name
                    ? errors.name
                    : 'Enter your full name.'
                } error={errors.name && touched.name ? errors.name : ''} handleChange={handleChange} />


              <EmailInput
                value={values.email}
                handleBlur={handleBlur}
                helperText={
                  errors.email && touched.email
                    ? errors.email
                    : 'Enter a email.'
                } error={errors.email && touched.email ? errors.email : ''} handleChange={handleChange} />

              <NumberInput
                value={values.age}

                handleBlur={handleBlur}
                helperText={
                  errors.age && touched.age
                    ? errors.age
                    : 'Enter a age.'
                } error={errors.age && touched.age ? errors.age : ''} handleChange={handleChange} />



              <PasswordInput value={values.password} handleBlur={handleBlur} helperText={
                errors.password && touched.password
                  ? errors.password
                  : 'Enter a password.'
              } error={errors.password && touched.password ? true : false} handleChange={handleChange} />


              <CheckInput checked={values.accept} touched={touched} handleChange={handleChange} handleBlur={handleBlur} helperText={
                errors.accept && touched.accept
                  ? errors.accept
                  : ''
              } error={errors.accept && touched.accept ? true : false} />

              <SelectInput value={values.country} options={options} helperText={
                errors.country && touched.country
                  ? errors.country
                  : 'Select a country'
              } error={errors.country && touched.country ? true : false} handleChange={handleChange} />

              <RadioInput inputId='id2' value={values.terms} helperText={
                errors.terms && touched.terms
                  ? errors.terms
                  : ''
              } error={errors.terms && touched.terms ? true : false} handleChange={handleChange} />

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
