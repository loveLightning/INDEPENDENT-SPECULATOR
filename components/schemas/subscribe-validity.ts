import * as yup from 'yup';

export const subscribeSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('This is a required field'),
    lastName: yup
        .string()
        .required('This is a required field'),
    password: yup
        .string()
        .required('This is a required field'),
    emailAddress: yup.string().required("This is a required field").email('Not valid email'),
})

