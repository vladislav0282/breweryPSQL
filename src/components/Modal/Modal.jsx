/* eslint-disable import/no-duplicates */
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import styles from './Modal.module.css'

const modalWrVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  visable: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
}

const modalContentVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
  visable: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
}

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }
    document.addEventListener('keyup', closeModalByEscape)
    return () => {
      document.removeEventListener('keyup', closeModalByEscape)
    }
  }, [closeHandler])

  return (
    <motion.div className={styles.modalInner} variants={modalContentVariants}>
      {children}
    </motion.div>
  )
}

export const Modal = ({ closeHandler, children, isOpen = false }) => {
  const closeModalByClickWrapper = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler()
    }
  }
  const renderContent = () => {
    if (!isOpen) return null

    return (
      <motion.div
        className={styles.modalWr}
        onMouseDown={closeModalByClickWrapper}
        variants={modalWrVariants}
        initial="hidden"
        animate="visable"
        exit="hidden"
      >
        <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
      </motion.div>
    )
  }

  return createPortal(
    <AnimatePresence>{renderContent()}</AnimatePresence>,
    document.getElementById('modal-root'),
  )
}
