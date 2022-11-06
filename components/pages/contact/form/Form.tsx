import styles from './Form.module.css';
import { FormProps } from './Form.props';
import cn from 'classnames';
import { Checkbox } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { contactSchema } from '../../../schemas/contact-validity';

interface Values {
  name: string
  phoneNumber: string
  emailAddress: string
  hear: string
  message: string
}

const initialValues = {
  name: '',
  phoneNumber: '',
  emailAddress: '',
  hear: '',
  message: ''
}

export const ContactForm = ({ className, ...props }: FormProps): JSX.Element => {
  const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    console.log(values)
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={contactSchema}
      >
        {(handlers) => (
          <Form>
            <div className={cn(styles.wrapperForm, className)} {...props}>
              <p className={styles['desc-please']}>/ Please use the form below to send us your feedback, questions, bug reports, or any other issue we may be able to help with /</p>
              <p>Please let us know what services you subscribe to:</p>

              <div className={styles['checkbox-form']}>
                <label className={styles['label-checkbox']} >
                  <Checkbox defaultChecked sx={{
                    color: '#1B1B1B',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <p>Speculator's Digest</p>
                </label>

                <label className={styles['label-checkbox']}>
                  <Checkbox sx={{
                    color: '#1B1B1B',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <p>My Take</p></label>

                <label className={styles['label-checkbox']}>
                  <Checkbox sx={{
                    color: '#1B1B1B',
                    '&.Mui-checked': {
                      color: '#1B1B1B',
                    },
                  }} />
                  <p>The Independent Speculator</p>
                </label>
              </div>
              <p>Please fill information:</p>

              <div className={styles['wrapper-field']}>
                <div className={styles['wrap-input']}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your name' name='name' type="text" onChange={handlers.handleChange} className={styles.input} />
                  <ErrorMessage className={styles.error} name="name" component="span" />
                </div>

                <div className={styles['wrap-input']}>
                  <label className={styles.label} htmlFor="phoneNumber">PhoneNumber</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your phone' name='phoneNumber' type="tel" onChange={handlers.handleChange} className={styles.input} />
                  <ErrorMessage className={styles.error} name="phoneNumber" component="span" />
                </div>
              </div>
              <div className={styles['wrapper-field']}>
                <div className={styles['wrap-input']}>
                  <label className={styles.label} htmlFor="emailAddress">Email address</label>
                  <Field onBlur={handlers.handleBlur} placeholder='Enter your email address' name='emailAddress' type="text" onChange={handlers.handleChange} className={styles.input} />
                  <ErrorMessage className={styles.error} name="emailAddress" component="span"/>
                </div>

                <div className={styles['wrap-input']}>
                  <label className={styles.label} htmlFor="hear">Where did you hear about us </label>
                  <Field as="select" name="hear" className={styles.select} >
                    <option value="red">Internet</option>
                    <option value="green">Magazine</option>
                    <option value="blue">See</option>
                  </Field>
                </div>

              </div>
              <div className={styles['wrap-input-msg']}>
                <label className={styles.label} htmlFor="message">You message</label>
                <Field as="textarea" onBlur={handlers.handleBlur} placeholder='Enter  your message' name='message' type="text" onChange={handlers.handleChange} className={styles.message} />
                <ErrorMessage className={styles.error} name="message" component="span"  />
              </div>
              <button className={styles.btn} type="submit" disabled={!handlers.isValid}>
                Submit
              </button>
            </div >
          </Form>
        )}
      </Formik>
    </div>
  )
};
