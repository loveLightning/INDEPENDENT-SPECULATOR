import React from 'react'
import cl from './subscribe.module.css'
import email from '../../../../public/email-yellow.svg'
import Image from 'next/image'
import { Checkbox } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { subscribeSchema } from '../../../schemas/subscribe-validity'
import Link from 'next/link'

interface Values {
  firstName: string
  lastName: string
  password: string
  emailAddress: string
}

const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  emailAddress: '',
}

export const ServiceSubscribe = () => {
  const onSubmit = () => { }

  return (
    <div className={cl.wrapper}>
      <div className='container'>
        <div className={cl.inner}>
          <div className={cl.left}>
            <div className={cl['wrap-title']}>
              <Image src={email} alt='Email' />
              <p className={cl.title}>Subscribe
                to our e-mail list today</p>
            </div>
            <div className={cl['wrap-desc']}>
              <p className={cl.desc}>Join us for updates on the best educational service for speculators online today. It's free. We won't spam you. And you can unsubscribe at any time.</p>
            </div>
          </div>
          <div>
            <div className={cl.right}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={subscribeSchema}
              >
                {(handlers) => (
                  <Form>
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
                        <Checkbox sx={{
                          color: '#BEC0C6',
                          '&.Mui-checked': {
                            color: '#1B1B1B',
                          },
                        }} />
                        <p>I agree to the No Refunds policy, all other <Link href="/"><a className={cl.link}>Terms & Conditions</a></Link> and <Link href="/"><a className={cl.link}> Privacy Policy</a></Link></p>
                      </label>

                      <label className={cl['label-checkbox']}>
                        <Checkbox sx={{
                          color: '#BEC0C6',
                          '&.Mui-checked': {
                            color: '#1B1B1B',
                          },
                        }} />
                        <p>I am resident of Puerto Rico.</p></label>

                    </div>

                    <button className={cl.btn} type="submit" disabled={!handlers.isValid}>
                      Subscribe
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className={cl.div}>
              <p className={cl.politics}>This site is protected by reCAPTCHA and the Google <Link href={'/'}><a className={cl['link-back']}>Privacy Policy</a></Link> and <Link href={'/'}><a className={cl['link-back']}>Terms of Service</a></Link> apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
