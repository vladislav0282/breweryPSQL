/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@tanstack/react-query'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breweryApi } from '../../../API/BreweryApi'
import { EmailInput } from '../../EmailInput/EmailInput'
import { Loader } from '../../Loader/Loader'
import { PasswordInput } from '../../PasswordInput/PasswordInput'
import styles from './SignIn.module.css'
import { createSignInFormValidationScheme } from './validator'
import logo from '../../../images/signUp1.jpg'
import { setUser } from '../../../redux/slices/userSlice'

const initialLoginValues = {
  email: '',
  password: '',
}

export function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: (values) =>
      breweryApi.signIn(values).then((data) => {
        dispatch(setUser(data))
      }),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => {
      navigate('/')
    }, 0)
  }
  if (isError) {
    return (
      <div className={styles.errorMessage}>
        <div className={styles.error}>
          <p>{error.message}</p>
          <Link to="/">/ home page</Link>
        </div>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={styles.wr}>
      <div className={styles.imageBox}>
        <img className={styles.logo} src={logo} alt="signUpLogo" />
        <div className={styles.bgLogo}>
          <span className={styles.title}>Everything will start soon</span>
        </div>
        <div className={styles.bgTextTwo}>
          <span className={styles.text}>
            One step left, and you will be able to use all the functionality of the site.
          </span>
        </div>
      </div>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={createSignInFormValidationScheme}
        onSubmit={submitHandler}
      >
        <div className={styles.formBox}>
          <Form className={styles.formSignUp}>
            <EmailInput />
            <PasswordInput />
            <button className={styles.formBtn} disabled={isLoading} type="submit">
              login
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  )
}
