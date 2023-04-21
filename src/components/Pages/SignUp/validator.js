import * as Yup from 'yup'

export const createSignUpFormValidationScheme = Yup.object({
  email: Yup.string().email('Incorrect email').required('Email required'),
  group: Yup.string().required('You must enter a group name'),
  password: Yup.string()
    .min(6, 'Please enter more than 6 characters')
    .max(15, 'Your password is too long')
    .required('Password required'),
})
