import { Checkbox } from '@mui/material'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import Link from 'next/link'
import React from 'react'
import { subscribeSchema } from '../../../schemas/subscribe-validity'
import cl from './form.module.css'

interface Values {
  name: string
  phoneNumber: string
  emailAddress: string
  hear: string
  message: string
}

const initialValues: Values = {
  name: '',
  phoneNumber: '',
  emailAddress: '',
  hear: '',
  message: ''
}

export const FormReg = () => {
  const onSubmit = () => {

  }

  return (
    <div className={cl.container}>
      <div className={cl.wrap}><p className={cl.desc}>Please register here to get started.</p>
        <p className={cl.desc}>We will approve your affiliate account ASAP, and get you started. Let us know if you want help with banners or if you have any questions.</p><br /> <p className={cl.desc}>We’re keen to work with you.</p></div>
      <div className={cl.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={subscribeSchema}
        >
          {(handlers) => (
            <Form>
              <div><h3 className={cl.title}>Registration form</h3></div>

              <div className={cl['wrapper-field']}>
                <div className={cl['wrap-input']}>
                  <label className={cl.label} htmlFor="firstName">First name</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your First name' name='firstName' type="text" onChange={handlers.handleChange} className={cl.input} />
                  <ErrorMessage className={cl.error} name="firstName" component="span" />
                </div>
                <div className={cl['wrap-input']}>
                  <label className={cl.label} htmlFor="lastName">Last name</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your Last name' name='lastName' type="text" onChange={handlers.handleChange} className={cl.input} />
                  <ErrorMessage className={cl.error} name="lastName" component="span" />
                </div>
                <div className={cl['wrap-input']}>
                  <label className={cl.label} htmlFor="password">Password</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your Password' name='password' type="text" onChange={handlers.handleChange} className={cl.input} />
                  <ErrorMessage className={cl.error} name="password" component="span" />
                </div>
                <div className={cl['wrap-input']}>
                  <label className={cl.label} htmlFor="emailAddress">Email address</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your Email address' name='emailAddress' type="text" onChange={handlers.handleChange} className={cl.input} />
                  <ErrorMessage className={cl.error} name="emailAddress" component="span" />
                </div>
              </div>

              <div className={cl['checkbox-form']}>
                <label className={cl['label-checkbox']} >
                  <Checkbox style={{
                    width: '14px',
                    height: '14px'
                  }} sx={{
                    color: '#BEC0C6',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <p className={cl.linkov}>I agree to the No Refunds policy, all other <Link href="/"><a className={cl.link}>Terms & Conditions</a></Link> and <Link href="/"><a className={cl.link}> Privacy Policy</a></Link></p>
                </label>

                <p className={cl.linkov}>This site is protected by reCAPTCHA and the Google
                  <Link href="/"><a className={cl.link}> Privacy Policy </a></Link>
                  and
                  <Link href="/"><a className={cl.link}> Terms of Service </a></Link>
                  apply.</p>
              </div>

              <button className={cl.btn} type="submit" disabled={!handlers.isValid}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div >
  )
}
