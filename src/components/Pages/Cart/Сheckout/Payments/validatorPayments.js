import * as Yup from 'yup'

export const validatorPayments = Yup.object({
  number: Yup.string().min(19).max(24).required('you need to enter number cart'),
  date: Yup.string().required('you need to enter cart date'),
  cvc: Yup.string().min(3).max(4).required('you need to enter CVC'),
})
