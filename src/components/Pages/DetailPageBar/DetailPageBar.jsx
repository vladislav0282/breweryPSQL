/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import classNames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage, Field, Form, Formik, useField, useFormikContext } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import { toast, Toaster } from 'react-hot-toast'
import { Modal } from '../../Modal/Modal'
import styles from './detailPageBar.module.css'
import { getIniteState } from '../../../redux/initState'
import { addItemInFavourite, deleteItemFromFavourite } from '../../../redux/slices/favouriteSlice'
import { Loader } from '../../Loader/Loader'
import { barsApi } from '../../../API/BarsApi'
import { bookingFormValidationSchema } from './bookingFormValidator'

const initialValues = {
  date: '', // string, обязательное
  email: '',
  tel: '',
  personName: '',
  person: 0,
}

function DatePickerField({ ...props }) {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <ReactDatePicker
      className={styles.dataPicker}
      autoComplete="off"
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      showTimeSelect
      minTime={new Date(0, 0, 0, 12, 0)}
      maxTime={new Date(0, 0, 0, 23, 0)}
      excludeTimes={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      placeholderText="select date"
      onChange={(val) => {
        setFieldValue(field.name, val)
      }}
    />
  )
}

export function DetailPageBar() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const { barId } = useParams()
  const dispatch = useDispatch()

  const {
    user: { token },
  } = getIniteState()

  const itemsFavourite = useSelector((state) => state.favourite)
  const isItemInFavourite = itemsFavourite.some((item) => item.id === +barId)

  const closeDeleteModalHandler = () => {
    document.body.style.overflow = ''
    setIsOpenDeleteModal(false)
  }

  const openDeleteModalHandler = () => {
    document.body.style.overflow = 'hidden'
    setIsOpenDeleteModal(true)
  }

  const getQueryDetailPageKey = (id) => ['detailPage', id]

  const { data, isLoading, isError } = useQuery({
    queryKey: getQueryDetailPageKey(+barId),
    queryFn: () => barsApi.getBarById(+barId),
    enabled: !!barId,
  })

  if (isLoading) return <Loader />
  if (isError) return <h1>Error happend</h1>

  const clickFavouriteHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (isItemInFavourite) {
      dispatch(deleteItemFromFavourite(+barId))
    } else {
      dispatch(addItemInFavourite(+barId))
    }
  }

  const submitHandler = async () => {
    document.body.style.overflow = ''
    setIsOpenDeleteModal(false)
    toast('booking request sent')
  }

  return (
    <div className={styles.wr}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <div
            style={{
              backgroundImage: `url(${data.pictureMain})`,
              backgroundRepeat: 'no-repeat',
            }}
            className={styles.image1}
          />
          <div className={styles.imageWrRight}>
            <div
              style={{
                backgroundImage: `url(${data.picture_1})`,
                backgroundRepeat: 'no-repeat',
              }}
              className={styles.image2}
            />
            <div
              style={{
                backgroundImage: `url(${data.picture_2})`,
                backgroundRepeat: 'no-repeat',
              }}
              className={styles.image3}
            />
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardName}>
            <h3>{data.name}</h3>
          </div>
          <div className={styles.descriptionWr}>
            <div className={styles.cardDescription}>
              <p>{data.description_2}</p>
              <p>
                Address: {data.city}, {data.address}
              </p>
              <div className={styles.iconsWr}>
                <div className={styles.rating}>
                  <i className={classNames('bi bi-star-fill', styles.gradient)} />
                  <p className={styles.gradient}>5</p>
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
            <div className={styles.timeWorking}>
              <p>12:00 – 01:00</p>
              <button
                onClick={openDeleteModalHandler}
                className={styles.aboutMeBtnBottom}
                type="button"
              >
                Book now
              </button>
            </div>
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
          <div className={styles.formikWr}>
            <Formik
              initialValues={initialValues}
              validationSchema={bookingFormValidationSchema}
              onSubmit={submitHandler}
            >
              <Form className={styles.form}>
                <div className={styles.formInputs}>
                  <label htmlFor="date">Select date</label>
                  <DatePickerField name="date" autocomplete="off" />
                  <ErrorMessage component="p" className="error" name="date" />

                  <label htmlFor="personName">Name</label>
                  <Field name="personName" placeholder="enter your Name" type="text" />
                  <ErrorMessage component="p" className="error" name="personName" />

                  <label htmlFor="person">Number of persons</label>
                  <Field name="person" placeholder="number of persons" type="number" min="1" />
                  <ErrorMessage component="p" className="error" name="person" />

                  <label htmlFor="email">e-mail</label>
                  <Field name="email" placeholder="e-mail" type="email" />
                  <ErrorMessage component="p" className="error" name="email" />

                  <label htmlFor="tel">phone number</label>
                  <Field name="tel" placeholder="phone number" type="tel" />
                  <ErrorMessage component="p" className="error" name="tel" />
                </div>
                <div className={styles.buttonModalWr}>
                  <button className={styles.btnDelete} type="submit">
                    Book
                  </button>
                </div>
              </Form>
            </Formik>
            <div className={styles.btnDeleteBox} />
          </div>
        </div>
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
