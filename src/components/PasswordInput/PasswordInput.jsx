/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ErrorMessage, Field } from 'formik'
import { useState } from 'react'
import styles from './PasswordInput.module.css'

export function PasswordInput() {
  const [isShowPassword, setIsShowPassword] = useState(false)

  return (
    <>
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <div className={styles.inputPassword}>
        <Field
          className={styles.input}
          id="passwordInput"
          name="password"
          placeholder="Password"
          type={isShowPassword === true ? 'text' : 'password'}
        />
        <img
          src={
            isShowPassword === true
              ? 'https://snipp.ru/demo/495/no-view.svg'
              : 'https://snipp.ru/demo/495/view.svg'
          }
          alt="hide"
          onClick={() => setIsShowPassword(!isShowPassword)}
          className={styles.passwordControl}
        />
      </div>
      <hr className={styles.hr} />
      <div className={styles.errorMessage}>
        <ErrorMessage component="p" className="error" name="password" />
      </div>
    </>
  )
}
