import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getIniteState } from '../../../../../redux/initState'
import {
  addItemInFavourite,
  deleteItemFromFavourite,
} from '../../../../../redux/slices/favouriteSlice'
import styles from './barsItem.module.css'

export function BarsItem({
  id,
  name,
  pictureMain,
  description,
  rating,
  address,
  city,
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    user: { token },
  } = getIniteState()

  const itemsFavourite = useSelector((state) => state.favourite)
  const isItemInFavourite = itemsFavourite.some((item) => item.id === id)

  const clickFavouriteHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (isItemInFavourite) {
      dispatch(deleteItemFromFavourite(id))
    } else {
      dispatch(addItemInFavourite(id))
    }
  }

  const clickDetailPage = (e) => {
    if (e.target.dataset.hello === 'hello' || e.target.dataset.helloname === 'helloName') {
      navigate(`/bars/${id}`)
    }
  }

  return (
    <div onClick={clickDetailPage} className={styles.card}>
      <div
        data-hello="hello"
        style={{
          backgroundImage: `url(${pictureMain})`,
          backgroundRepeat: 'no-repeat',
        }}
        className={styles.cardImage}
      >
        <div className={styles.cardName}>
          <h3 data-helloname="helloName">{name}</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>{description}</p>
          <div>
            <p>
              Address:
              {' '}
              {city}
              ,
              {' '}
              {address}
            </p>
            <div className={styles.iconsWr}>
              <div className={styles.rating}>
                <i className={classNames('bi bi-star-fill', styles.gradient)} />
                <p className={styles.gradient}>{rating}</p>
              </div>
              {token ? (
                <Link onClick={clickFavouriteHandler} to="/#">
                  <i
                    className={classNames(
                      {
                        'bi bi-heart-fill': isItemInFavourite,
                        'bi bi-heart': !isItemInFavourite,
                      },
                      styles.icon,
                    )}
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
