/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleCheck, faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { validatorCheckout } from './validatorCheckout'
import styles from './Сheckout.module.css'
import { Payments } from './Payments/Payments'
import {
  getCheckedMerch,
  getMerchtSelector,
} from '../../../../redux/slices/merchSlice'

export function Сheckout() {
  const [form, setForm] = useState('SHIPPING ADDRESS')

  const checkedMerch = useSelector(getCheckedMerch)
  const merch = useSelector(getMerchtSelector)

  const filteredMerch = merch.filter(({ id }) =>
    checkedMerch.map(({ id: checkedId }) => checkedId).includes(id),
  )

  const initCheckoutValues = {
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    phone: '',
  }

  const submitHandler = () => {
    setForm('REVIEW & PAYMENTS')
    window.scrollTo(0, 0)
  }

  const getTotalPrice = () => {
    const priceSelectedProduct = checkedMerch.reduce(
      (sum, product) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        Math.round(product.price * product.count * ((100 - product.discount) / 100) + sum),
      0,
    )
    return priceSelectedProduct
  }

  return (
    <>
      <div className={styles.checkout}>
        <div className={styles.checkoutLeft}>
          <div className={styles.headerCheckoutLeft}>
            <div className={styles.btnCheckoutLeft}>
              {form === 'SHIPPING ADDRESS' && (
                <FontAwesomeIcon icon={faCheck} className={styles.check} />
              )}
              SHIPPING
            </div>
            <div className={styles.btnCheckoutLeft}>
              {form === 'REVIEW & PAYMENTS' && (
                <FontAwesomeIcon icon={faCheck} className={styles.check} />
              )}
              REVIEW & PAYMENTS
            </div>
          </div>
          <p className={styles.textA}>{form}</p>
          <div>
            {form === 'SHIPPING ADDRESS' && (
              <Formik
                initialValues={initCheckoutValues}
                validationSchema={validatorCheckout}
                onSubmit={submitHandler}
              >
                <Form className={styles.wr}>
                  <div className={styles.inputBox}>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <Field name="email" placeholder="must be email" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="email" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="firstname">FIRST NAME</label>
                    <Field name="firstname" placeholder="add your first name" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="firstname" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="lastname">LAST NAME</label>
                    <Field name="lastname" placeholder="add your last name" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="lastname" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="address">ADDRESS</label>
                    <Field name="address" placeholder="add your address" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="address" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="country">COUNTRY</label>
                    <Field name="country" placeholder="add your country" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="country" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="state">STATE/PROVINCE</label>
                    <Field name="state" placeholder="add your state" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="state" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="city">CITY</label>
                    <Field name="city" placeholder="add your city" type="text" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="city" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="zip">ZIP/POSTAL CODE</label>
                    <Field name="zip" placeholder="add your zip" type="number" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="zip" />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <Field name="phone" placeholder="add your phone" type="number" />
                    <div className={styles.errorMessage}>
                      <ErrorMessage component="p" className={styles.error} name="phone" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={styles.btnNext}
                  >
                    NEXT
                  </button>
                </Form>
              </Formik>
            )}
            {form === 'REVIEW & PAYMENTS' && <Payments />}
          </div>
        </div>
        <div className={styles.checkoutRight}>
          <div className={styles.priceBox}>
            <p className={styles.textOrder}>ORDER SUMMARY</p>
            <div className={styles.totalPrice}>{getTotalPrice()} &#8364;</div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.checkoutRightBox}>
            <div className={styles.checkoutRightSum}>
              <p className={styles.textInCart}>SELECTED ITEM</p>
            </div>
            <div className={styles.countItem}>
              {filteredMerch.map((el) => (
                <div key={el.id} className={styles.itemCart}>
                  <img src={el.picture} alt="pic" className={styles.img} />
                  <div className={styles.nameBox}>
                    <p className={styles.name}>{el.name}</p>
                  </div>
                  <p className={styles.price}>
                    {el.discount > 0 && `${(el.price * el.count * (100 - el.discount)) / 100} €`}
                    {el.discount === 0 && `${el.price * el.count} €`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.text}>
          <FontAwesomeIcon icon={faMobileScreen} className={styles.img} />
          <div className={styles.textBox}>
            <p className={styles.textOne}>GET IN TOUCH</p>
            <p className={styles.textTwo}>CHAT WITH US LIVE</p>
          </div>
        </div>
        <hr className={styles.hrD} />
        <div className={styles.text}>
          <FontAwesomeIcon icon={faTruck} className={styles.img} />
          <div className={styles.textBox}>
            <p className={styles.textOne}>FREE SHIPPING</p>
            <p className={styles.textTwo}>OVER €80.00</p>
          </div>
        </div>
        <hr className={styles.hrD} />
        <div className={styles.text}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.img} />
          <div className={styles.textBox}>
            <p className={styles.textOne}>WE&apos;VE GOT YOU COVERED</p>
            <p className={styles.textTwo}>AMAZING CUSTOMER SERVICE</p>
          </div>
        </div>
      </div>
    </>
  )
}
