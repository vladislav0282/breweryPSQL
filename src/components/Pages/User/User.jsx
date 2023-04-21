/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { barsApi } from '../../../API/BarsApi'
import { breweryApi } from '../../../API/BreweryApi'
import { dataCardsBeer } from '../../../API/dataCardsBeer'
import { deleteItemFromFavourite, getFavouriteSelector } from '../../../redux/slices/favouriteSlice'
import { getTokenSelector } from '../../../redux/slices/userSlice'
import { Loader } from '../../Loader/Loader'
import { Modal } from '../../Modal/Modal'
import { EditAvatarUser } from './EditAvatarUser/EditAvatarUser'
import { EditUserInfo } from './EditUserInfo/EditUserInfo'
import styles from './User.module.css'
import { getQueryBarKey } from './utils'

function FavouriteBar({ id, name }) {
  const dispatch = useDispatch()
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const deleteFavouritesBarHandler = () => {
    document.body.style.overflow = ''
    dispatch(deleteItemFromFavourite(id))
  }

  const closeDeleteModalHandler = () => {
    document.body.style.overflow = ''
    setIsOpenDeleteModal(false)
  }

  const openDeleteModalHandler = () => {
    document.body.style.overflow = 'hidden'
    setIsOpenDeleteModal(true)
  }

  return (
    <div>
      <div className={styles.barLink}>
        <div>
          <p className={styles.text}>{name?.toUpperCase()}</p>
        </div>
        <div className={styles.but_link}>
          <motion.div
            className={styles.bars_button}
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon
              onClick={openDeleteModalHandler}
              icon={faTrashCan}
              className={styles.btnTrash}
            />
          </motion.div>
          <div className={styles.bars_link}>
            <Link to={`/bars/${id}`}>
              <button type="button">go to bar</button>
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenDeleteModal} closeHandler={closeDeleteModalHandler}>
        <FontAwesomeIcon
          className={styles.close}
          icon={faXmark}
          onClick={closeDeleteModalHandler}
        />
        <div className={styles.modal}>
          <div>
            <p className={styles.textDelete}>
              Are you sure you want to remove <span>&laquo;{name}&raquo;</span> from your favorites?
            </p>
            <div className={styles.btnDeleteBox}>
              <button
                className={styles.btnDelete}
                type="submit"
                onClick={deleteFavouritesBarHandler}
              >
                Yes
              </button>
              <button className={styles.btnDelete} type="button" onClick={closeDeleteModalHandler}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export const User = () => {
  const navigate = useNavigate()
  const token = useSelector(getTokenSelector)
  const [isOpenModalAvatar, setIsOpenModalAvatar] = useState(false)
  const [isOpenModalInfo, setIsOpenModalInfo] = useState(false)
  const favouritesBarId = useSelector(getFavouriteSelector)

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token])

  const closeModalAvatarHandler = () => {
    document.body.style.overflow = ''
    setIsOpenModalAvatar(false)
  }
  const openModalAvatarHandler = () => {
    document.body.style.overflow = 'hidden'
    setIsOpenModalAvatar(true)
  }
  const closeModalInfo = () => {
    document.body.style.overflow = ''
    setIsOpenModalInfo(false)
  }
  const openModalInfo = () => {
    document.body.style.overflow = 'hidden'
    setIsOpenModalInfo(true)
  }

  const { data: favouritesBar = [] } = useQuery({
    queryKey: [getQueryBarKey(favouritesBarId.lenght)],
    queryFn: () =>
      barsApi.getBarsByIds(
        favouritesBarId.map((product) => product.id),
        token,
      ),
    keepPreviousData: true,
    enabled: !!token,
  })

  const bars = favouritesBarId.map((bar) => {
    const barFromBack = favouritesBar.find((productBack) => productBack.id === bar.id)
    if (barFromBack) {
      return { ...bar, ...barFromBack }
    }
    return bar
  })

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => breweryApi.getUserByToken(token),
    enabled: !!token,
    keepPreviousData: true,
  })

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  }

  const navigateToBeer = () => {
    navigate('/#beer')
    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 0)
  }

  return (
    <div className={styles.wr}>
      <div className={styles.headerUser}>
        <div className={styles.headerUserLeft}>
          <p className={styles.textTitle}>WELCOME TO PERSONAL PAGE</p>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoLeft}>
          <div className={styles.avatarBox}>
            <img className={styles.avatarFull} src={data.avatar} alt="avatarFull" />
          </div>
          <div className={styles.btnAvatar}>
            <button className={styles.aboutMeBtn} type="button" onClick={openModalAvatarHandler}>
              Edit avatar
            </button>
          </div>
          <p className={styles.aboutMeTitle}>MY PROFILE</p>
          <div className={styles.about}>
            <p className={styles.aboutMe}>
              First Name: <span>{data.name.split(' ', 1)}</span>
            </p>
            <p className={styles.aboutMe}>
              Last Name: <span>{data.name.split(' ').slice(1, 2)}</span>
            </p>
            <p className={styles.aboutMe}>
              About: <span>{data.about.toLowerCase()}</span>
            </p>
            <p className={styles.aboutMe}>
              Email: <span>***** {data.email.substring(5)}</span>
            </p>
          </div>
          <div className={styles.btnAvatar}>
            <button className={styles.aboutMeBtnBottom} type="button" onClick={openModalInfo}>
              Edit User
            </button>
          </div>
        </div>
        <div className={styles.userInfoRight}>
          <div className={styles.userInfoRightBottom}>
            <div className={styles.userInfoRightTitleDiv}>
              <p className={styles.userInfoRightTitle}>BEER FROM OUR BREWERY</p>
            </div>
            <hr />
            {dataCardsBeer.map((el) => (
              <div key={el._id}>
                <div className={styles.barLink}>
                  <p className={styles.text}>{el.name}</p>
                  <Link to="/">
                    <button type="button" onClick={navigateToBeer}>
                      go to beer
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {!bars[0] && (
            <div>
              <p className={styles.userInfoNoBars}>NO FAVORITE BARS</p>
              <hr />
              <Link to="/bars" className={styles.userInfoGoToHomePage}>
                / Go to bars page
              </Link>
            </div>
          )}
          {bars[0] && (
            <div>
              <div className={styles.userInfoRightTitleDiv}>
                <p className={styles.userInfoRightTitle}>FAVORITES BARS</p>
              </div>
              <hr />
              {bars.map((bar) => (
                <FavouriteBar favouritesBar={bars} key={bar.id} id={bar.id} name={bar.name} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isOpenModalAvatar} closeHandler={closeModalAvatarHandler}>
        <FontAwesomeIcon
          className={styles.close}
          icon={faXmark}
          onClick={closeModalAvatarHandler}
        />
        <EditAvatarUser closeModalHandler={closeModalAvatarHandler} avatar={data.avatar} />
      </Modal>
      <Modal isOpen={isOpenModalInfo} closeHandler={closeModalInfo}>
        <FontAwesomeIcon className={styles.close} icon={faXmark} onClick={closeModalInfo} />
        <EditUserInfo closeModalHandler={closeModalInfo} name={data.name} about={data.about} />
      </Modal>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid white',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0)',
            padding: '4px',
            color: 'white',
          },
        }}
      />
    </div>
  )
}
