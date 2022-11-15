import React from 'react'
import cl from './sign-up.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Checkbox } from '@mui/material'
import Link from 'next/link'
import { subscribeSchema } from '../../schemas/subscribe-validity'
import { useRouter } from 'next/router'

interface Values {
  firstName: string
  lastName: string
  password: string
  emailAddress: string
}


const initialValues: Values = {
  firstName: '',
  lastName: '',
  password: '',
  emailAddress: '',
}

export const SignUp: React.FC = () => {
  const router = useRouter()

  const onSubmit = () => {
    router.push('/sign-up/choose')
  }

  return (
    <>
      <div className={cl.content}>
        <h2 className={cl.title}><span className={cl['title-one']}>Welcome to</span> <br /><span className={cl['title-two']}>Independent Speculator</span> </h2>
        <div className={cl.line}>
          <div className={cl['line-one']}></div>
          <div className={cl['line-two']}></div>
        </div>
      </div>
      <div className={cl.form}>
        <h2 className={cl.title}>Choose service</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={subscribeSchema}
        >
          {(handlers) => (
            <Form>
              <div className={cl['wrapper-field']}>
                <div className={cl['wrap-wrap']}>
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
                </div>
                <div className={cl['wrap-wrap']}>
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
              </div>

              <div className={cl['checkbox-form']}>
                <label className={cl['label-checkbox']} >
                  <Checkbox sx={{
                    color: '#BEC0C6',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <div className={cl.privacy}>I agree to the No Refunds policy, all other <Link href="/"><a className={cl.link}>Terms & Conditions</a></Link> and <Link href="/"><a className={cl.link}> Privacy Policy</a></Link></div>
                </label>

                <label className={cl['label-checkbox']}>
                  <Checkbox sx={{
                    color: '#BEC0C6',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <p className={cl.privacy}>I am resident of Puerto Rico.</p>
                </label>
              </div>
              <div className={cl.flex}>
                <button className={cl.btn} type="submit" disabled={!handlers.isValid}>
                  Next
                </button>
                <div className={cl.al}>
                  <p className={cl.already}>Already have an account?  <Link href={'/'}><a className={cl.lin}>Log in</a></Link></p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={cl.cont}>
        <p className={cl.p}>This site is prote cted by reCAPTCHA and the Google</p>
        <p className={cl.p}><Link href="/"><a className={cl.link}> Privacy Policy</a></Link> and <Link href="/"><a className={cl.link}>Terms of Service</a></Link> apply.</p>
      </div>
    </>
  )
}


