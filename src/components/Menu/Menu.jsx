/* eslint-disable jsx-a11y/no-static-element-interactions */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTokenSelector, removeUser } from '../../redux/slices/userSlice'
import styles from './Menu.module.css'

export function Menu({ active, setActive }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(getTokenSelector)

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.key === 'Escape') {
        document.body.style.overflow = ''
        setActive(false)
      }
    }
    document.addEventListener('keyup', closeMenu)
    return () => {
      document.removeEventListener('keyup', closeMenu)
    }
  }, [setActive])

  const closeMenuByClickWrapper = (e) => {
    if (e.target !== e.currentTarget) {
      document.body.style.overflow = ''
      setActive(false)
    }
  }

  const closeMenu = () => {
    document.body.style.overflow = ''
    setActive(false)
  }

  const deleteUser = () => {
    dispatch(removeUser())
  }

  const navigateToBeer = () => {
    navigate('/#beer')
    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 0)
  }

  return (
    <>
      {active && <div className={styles.menuContentBlur} onClick={closeMenu} />}
      <div className={active ? styles.menuActive : styles.menu}>
        <div className={styles.menuContent} onClick={closeMenuByClickWrapper}>
          <motion.div
            whileHover={{ rotate: [0, 90] }}
            transition={{ duration: 0.3 }}
            className={styles.menuX}
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faXmark} />
          </motion.div>
          <ul className={styles.menuList}>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
            >
              <Link to="/about">ABOUT</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
            >
              <Link to="/bars">BARS</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
              onClick={navigateToBeer}
            >
              <Link to="/">BEER</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
            >
              <Link to="/news">NEWS</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
            >
              <Link to="/merch">MERCH</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.menuListA}
            >
              <Link to="/user">USER</Link>
            </motion.div>
          </ul>
          <ul className={styles.menuListTwo}>
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className={styles.reg}
            >
              <Link to="/signup">SIGN-UP</Link>
            </motion.div>
            {token ? (
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }}
                className={styles.reg}
              >
                <Link to="/signin" onClick={deleteUser}>
                  SIGN-OUT
                </Link>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }}
                className={styles.reg}
              >
                <Link to="/signin">LOG-IN</Link>
              </motion.div>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
