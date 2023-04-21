import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { dataCardsBeer } from '../../../../API/dataCardsBeer'

import sliderStyles from './Slider.module.css'

export function Slider({ sliders }) {
  const [current, setCurrent] = useState(0)
  const { length } = sliders

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(sliders) || sliders.length <= 0) {
    return null
  }

  return (
    <div className={sliderStyles.sliderContainer}>
      {dataCardsBeer.map((el, index) => (
        <div
          className={index === current ? sliderStyles.slideActive : sliderStyles.slide}
          key={el._id}
        >
          {index === current && (
            <div className={sliderStyles.cardBeerContainer}>
              <div>
                <img src={el.pictures} className={sliderStyles.img} alt="logo" />
                <img src={el.pictures2} className={sliderStyles.img2} alt="logo" />
                <h1
                  style={{
                    backgroundColor: el.bgColor,
                    position: 'absolute',
                    top: '83%',
                    left: '300px',
                    fontSize: '-10px',
                    padding: '20px',
                    color: 'white',
                  }}
                >
                  {el.name}
                </h1>
              </div>
              <div
                style={{
                  backgroundColor: el.bgColorInfo,
                  padding: '10px',
                  paddingTop: '60px',
                }}
              >
                <h3 className={sliderStyles.h3}>
                  <span>Discription: </span>
                  {el.discription}
                </h3>
                <h3 className={sliderStyles.h3}>
                  <span>SRM: </span>
                  {el.SRM}
                </h3>
                <h3 className={sliderStyles.h3}>
                  <span>IBU: </span>
                  {el.IBU}
                </h3>
                <h3 className={sliderStyles.h3}>
                  <span>ALC: </span>
                  {el.AlC}
                </h3>
                <h3 className={sliderStyles.h3}>
                  <span>Rating: </span>
                  {el.rating}
                </h3>
              </div>
            </div>
          )}
        </div>
      ))}
      <FontAwesomeIcon
        icon={faAngleRight}
        className={sliderStyles.arrowRight}
        onClick={nextSlide}
      />
      <FontAwesomeIcon icon={faAngleLeft} className={sliderStyles.arrowLeft} onClick={prevSlide} />
    </div>
  )
}
