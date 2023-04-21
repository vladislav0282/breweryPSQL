/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './merchItem.module.css'

export function MerchItem({ id, name, picture, picture2, discount, price, tags }) {
  const [over, setOver] = useState(false)
  const navigate = useNavigate()

  const priceDiscount = Math.round(price * (1 - discount / 100))

  const clickDetailPage = () => {
    navigate(`/merch/${id}`)
  }

  return (
    <div className={styles.card}>
      <div onClick={clickDetailPage} className={styles.image__body}>
        {discount ? (
          <div className={styles.discount}>
            <p>{discount}% OFF</p>
          </div>
        ) : null}
        {tags ? (
          <div className={styles.tag}>
            <p>{tags}</p>
          </div>
        ) : null}
        {picture2 ? (
          <img
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            src={!over ? picture : picture2}
            className={styles.card__image}
            alt="картинка"
          />
        ) : (
          <img src={picture} className={styles.card__image} alt="картинка" />
        )}
      </div>
      <div className={styles.card__body}>
        <div onClick={clickDetailPage} className={styles.merchName}>
          <p>{name}</p>
        </div>
        {!discount ? (
          <div className={styles.priceWr}>
            {' '}
            <p>€{price} </p>
          </div>
        ) : (
          <div className={styles.priceDiscountWr}>
            <p>€{priceDiscount}</p>
            <div>
              <p>€{price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
