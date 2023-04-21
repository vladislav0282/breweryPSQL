import { ErrorMessage, Field } from 'formik'
import styles from '../EmailInput/EmailInput.module.css'

export function GroupInput() {
  return (
    <>
      <label className={styles.label} htmlFor="group">
        Enter your group
      </label>
      <Field className={styles.input} name="group" placeholder='"sm9"' type="text" />
      <hr className={styles.hr} />
      <div className={styles.errorMessage}>
        <ErrorMessage component="p" className="error" name="group" />
      </div>
    </>
  )
}
