/* eslint-disable no-debugger */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeMerchFromCart, setChecked } from '../../../../redux/slices/merchSlice'
import styles from './CartItem.module.css'

export function CartItem({ id, name, picture, price, discount, count, isChecked }) {
  const dispatch = useDispatch()

  const deleteItemHandler = () => {
    dispatch(removeMerchFromCart(id))
  }

  const onSelectProduct = (event) => {
    dispatch(setChecked({ isChecked: event.target.checked, id }))
    // один выбранный товар
  }

  return (
    <>
      <div className={styles.wr}>
        <div className={styles.itemBoxInput}>
          <input
            className={styles.itemInput}
            type="checkbox"
            onChange={onSelectProduct}
            checked={isChecked}
          />
        </div>
        <div className={styles.itemBoxImg}>
          <Link to={`./${id}`}>
            <img className={styles.cartImg} src={picture} alt="pic" />
          </Link>
        </div>
        <div className={styles.itemBox}>
          <Link to={`./${id}`}>
            <h5 className={styles.cartName}>{name}</h5>
          </Link>
        </div>
        <div className={styles.itemBoxPrice}>
          <div className={styles.itemBoxA}>
            <p className={styles.textCount}>count:</p>
            <p className={styles.price}>{count}</p>
          </div>
          <div className={styles.itemBoxA}>
            <p className={styles.textCount}>price:</p>
            <h4 className={styles.price}>
              {discount > 0 && `${(price * count * (100 - discount)) / 100} €`}
              {discount === 0 && `${count * price} €`}
            </h4>
          </div>
        </div>
        <div className={styles.itemBoxBtn}>
          <button className={styles.cartBtn} type="button" onClick={deleteItemHandler}>
            delete
          </button>
        </div>
      </div>
      <hr className={styles.hrB} />
    </>
  )
}
