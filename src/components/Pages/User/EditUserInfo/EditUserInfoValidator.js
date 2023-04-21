import * as Yup from 'yup'

export const validatorInfo = Yup.object({
  name: Yup.string().required('You must enter a name'),
  about: Yup.string().required('You must enter a about'),
})
