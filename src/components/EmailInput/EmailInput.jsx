import { ErrorMessage, Field } from 'formik'
import styles from './EmailInput.module.css'

export function EmailInput() {
  return (
    <>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <Field className={styles.input} name="email" placeholder="Email" type="text" />
      <hr className={styles.hr} />
      <div className={styles.errorMessage}>
        <ErrorMessage component="p" className="error" name="email" />
      </div>
    </>
  )
}
