import { useEffect, useState } from 'react'
import styles from './ModalWarning.module.css'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'
import logo from '../../images/logo2.png'

const STORAGE_NAME = 'test-message'
const CHANGE_VALUE = '1'

export function ModalWarning() {
  const [isTest, setIsTest] = useState(Boolean(window.localStorage.getItem(STORAGE_NAME)))

  useEffect(() => {
    if (isTest) {
      window.localStorage.setItem(STORAGE_NAME, CHANGE_VALUE)
      document.body.style.overflow = ''
    }
    if (!isTest) document.body.style.overflow = 'hidden'
  }, [isTest])

  const onSubmit = (e) => {
    e.preventDefault()
    setIsTest(true)
  }

  return (
    <ModalWrapper isOpen={!isTest}>
      <div className={styles.wr}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.textBox}>
          <p className={styles.warning}>AGE LIMIT 18+</p>
          <p className={styles.text}>This website is for persons over 18</p>
          <p className={styles.text}>Are you 18 or older?</p>
        </div>
        <div className={styles.btnBox}>
          <button type="submit" onClick={onSubmit} className={styles.btn}>
            I&apos;m already an old dog
          </button>
          <a className={styles.btn} href="https://animego.org/" target="_blank" rel="noreferrer">
            I&apos;m going to watch anime..
          </a>
        </div>
      </div>
    </ModalWrapper>
  )
}
