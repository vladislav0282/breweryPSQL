/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { breweryApi } from '../../../../API/BreweryApi'
import { getTokenSelector } from '../../../../redux/slices/userSlice'
import { Loader } from '../../../Loader/Loader'
import { validatorAvatar } from './EditAvatarUserValidator'
import styles from './EditAvatarUser.module.css'

export function EditAvatarUser({ closeModalHandler, avatar }) {
  const token = useSelector(getTokenSelector)
  const queryClient = useQueryClient()
  const initAvatarValue = {
    avatar,
  }
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (value) => breweryApi.editUserAvatar(token, value),
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
        validationSchema={validatorAvatar}
        onSubmit={submitAvatarHandler}
      >
        <Form className={styles.wr}>
          <div className={styles.inputBox}>
            <label htmlFor="avatar">Link</label>
            <Field name="avatar" placeholder="Url img" type="text" />
            <div className={styles.errorMessage}>
              <ErrorMessage component="p" className={styles.error} name="avatar" />
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            EDIT
          </button>
        </Form>
      </Formik>
    </>
  )
}
