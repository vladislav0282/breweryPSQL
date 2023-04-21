/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { validatorInfo } from './EditUserInfoValidator'
import { Loader } from '../../../Loader/Loader'
import { getTokenSelector } from '../../../../redux/slices/userSlice'
import { breweryApi } from '../../../../API/BreweryApi'
import styles from './EditUserInfo.module.css'

export function EditUserInfo({ closeModalHandler, name, about }) {
  const token = useSelector(getTokenSelector)
  const queryClient = useQueryClient()
  const initAvatarValue = {
    name,
    about,
  }
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (value) => breweryApi.editUserInfo(token, value),
  })

  const submitAvatarHandler = async (value) => {
    await mutateAsync(value)
    closeModalHandler()
    queryClient.invalidateQueries({
      queryKey: ['user'],
    })
  }

  if (isLoading) return <Loader />

  return (
    <>
      <Formik
        initialValues={initAvatarValue}
        validationSchema={validatorInfo}
        onSubmit={submitAvatarHandler}
      >
        <Form className={styles.wr}>
          <div className={styles.inputBox}>
            <label htmlFor="name">Name</label>
            <Field name="name" placeholder="Name" type="text" />
            <div className={styles.errorMessage}>
              <ErrorMessage component="p" className={styles.error} name="name" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="about">About</label>
            <Field name="about" placeholder="About" type="text" />
            <div className={styles.errorMessage}>
              <ErrorMessage component="p" className={styles.error} name="about" />
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            Edit
          </button>
        </Form>
      </Formik>
    </>
  )
}
