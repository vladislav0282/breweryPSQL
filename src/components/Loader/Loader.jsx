import styles from './Loader.module.css'

export function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className={styles['lds-ellipsis']}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
