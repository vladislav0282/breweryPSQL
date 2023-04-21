import * as Yup from 'yup'

export const validatorCheckout = Yup.object({
  email: Yup.string().email('must be email').required('you need to enter email'),
  firstname: Yup.string().required('add your first name'),
  lastname: Yup.string().required('add your last name'),
  address: Yup.string().required('add your address'),
  country: Yup.string().required('add your country'),
  state: Yup.string().required('add your state'),
  city: Yup.string().required('add your city'),
  zip: Yup.number().required('add your zip/postal code'),
  phone: Yup.number().required('add your phone'),
})
