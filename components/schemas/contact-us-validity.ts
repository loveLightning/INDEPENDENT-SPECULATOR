import * as yup from 'yup';

export const contactUsSchema = yup.object().shape({
    name: yup
        .string()
        .required('This is a required field'),
    email: yup.string().email('Not a proper email').required('This is a required field'),
    message: yup.string().required("This is a required field")
})


