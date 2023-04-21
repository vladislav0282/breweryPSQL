import * as Yup from 'yup'

// eslint-disable-next-line max-len
const phoneRegExp = /^\+((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const bookingFormValidationSchema = Yup.object({
  date: Yup.string()
    .required('Fill in the field'),
  personName: Yup.string()
    .max(30, 'The field must contain no more than 30 characters')
    .required('Fill in the field'),
  person: Yup.number()
    .required('Fill in the field'),
  email: Yup.string()
    .email('Incorrect mail format')
    .required('Fill in the field'),
  tel: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(phoneRegExp, {
      message: 'Invalid phone number',
      excludeEmptyString: false,
    })
    .required()
    .min(8),
})
