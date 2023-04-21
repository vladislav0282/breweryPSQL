import * as Yup from 'yup'

export const validatorAvatar = Yup.object({
  avatar: Yup.string()
    .url('There must be a link')
    .required('You need to insert the url of the image'),
})
