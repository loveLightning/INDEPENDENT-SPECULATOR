import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactSchema = yup.object().shape({
    name: yup
        .string()
        .required('This is a required field'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This is a required field'),
    emailAddress: yup.string().required("This is a required field").email('Not valid email'),
    message: yup.string().required("This is a required field")
})


