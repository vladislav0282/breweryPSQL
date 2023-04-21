/* eslint-disable object-curly-newline */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import styles from './SignUp.module.css'
import logo from '../../../images/signUp1.jpg'
import { breweryApi } from '../../../API/BreweryApi'
import { Loader } from '../../Loader/Loader'
import { createSignUpFormValidationScheme } from './validator'
import { EmailInput } from '../../EmailInput/EmailInput'
import { GroupInput } from '../../GroupInput/GroupInput'
import { PasswordInput } from '../../PasswordInput/PasswordInput'

const initialRegisterValues = {
  email: '',
  group: '',
  password: '',
}

export function SignUp() {
  const navigate = useNavigate()
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: (values) => breweryApi.signUp(values),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    navigate('/signin')
  }
  if (isError) {
    return (
      <div className={styles.errorMessage}>
        <div className={styles.error}>
          <p className={styles.errorText}>{error.message}</p>
          <Link to="/">/ home page</Link>
        </div>
      </div>
    )
  }

  if (isLoading) return <Loader />

  return (
    <div className={styles.wr}>
      <div className={styles.imageBox}>
        <img className={styles.logo} src={logo} alt="signUpLogo" />
        <div className={styles.bgLogo}>
          <span className={styles.title}>Join us</span>
        </div>
        <div className={styles.bgTextOne}>
          <span className={styles.textOne}>the most interesting is yet to come</span>
        </div>
        <div className={styles.bgTextTwo}>
          <span className={styles.text}>
            After registration, you will be able to add bars to your favorites, follow the news,
            view beers, and so on.
          </span>
        </div>
      </div>
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={createSignUpFormValidationScheme}
        onSubmit={submitHandler}
      >
        <div className={styles.formBox}>
          <Form className={styles.formSignUp}>
            <EmailInput />
            <GroupInput />
            <PasswordInput />
            <button className={styles.formBtn} disabled={isLoading} type="submit">
              registration
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  )
}
