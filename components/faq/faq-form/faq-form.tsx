import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { contactUsSchema } from '../../schemas/contact-us-validity'
import cl from './faq.module.css'

const initialValues = {
  name: '',
  email: '',
  message: ''
}

export const FaqForm = () => {
  const onSubmit = () => {

  }

  return (
    <div className={cl.wrapper}>
      <div className='container'>
        <p className={cl.title}>Contact Us </p>
        <div className={cl.form}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={contactUsSchema}
          >
            {(handlers) => (
              <Form>
                <div className={cl['wrapper-field']}>
                  <div className={cl['wrap-input']}>
                    <label className={cl.label} htmlFor="name">Name</label>
                    <Field onBlur={handlers.handleBlur} placeholder='Enter your Name' name='name' type="text" onChange={handlers.handleChange} className={cl.input} />
                    <ErrorMessage className={cl.error} name="name" component="span" />
                  </div>
                  <div className={cl['wrap-input']}>
                    <label className={cl.label} htmlFor="email">Email</label>
                    <Field onBlur={handlers.handleBlur} placeholder='Enter your Email' name='email' type="text" onChange={handlers.handleChange} className={cl.input} />
                    <ErrorMessage className={cl.error} name="email" component="span" />
                  </div>
                  <div className={cl['wrap-input']}>
                    <label className={cl.label} htmlFor="message">Message</label>
                    <Field onBlur={handlers.handleBlur} placeholder='Enter Message' as='textarea' name='message' type="" onChange={handlers.handleChange} className={`${cl.input} ${cl.message}`} />
                    <ErrorMessage className={cl.error} name="message" component="span" />
                  </div>
                </div>
                <button className={cl.btn} type="submit" disabled={!handlers.isValid}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
