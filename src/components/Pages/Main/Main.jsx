/* eslint-disable max-len */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import styles from './Main.module.css'
import video from '../../../videos/beer5.mp4'
import { dataCardsBeer } from '../../../API/dataCardsBeer'
import { Slider } from './Sliders/Slider'
import picnicImg from '../../../images/picnic.jpg'
import solodImg from '../../../images/solod.jpg'
import { getTokenSelector } from '../../../redux/slices/userSlice'
import hoops from '../../../images/beersCards/hops.png'

export function Main() {
  const token = useSelector(getTokenSelector)
  const myRef = useRef()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.fullScreen}>
          <div className={styles.fullScreenBody}>
            <div className={styles.fullScreenTitle}>
              brewery
              <span className={styles.span}>[</span>
              mountain
              <span className={styles.span}>]</span>
            </div>
            <div className={styles.fullScreenText}>ONLY BEER AND NOTHING BUT!</div>
          </div>
          <video preload="auto" autoPlay muted loop className={styles.fullScreenVideo}>
            <source type="video/mp4" src={video} />
          </video>
        </div>
      </div>
      <div ref={myRef} id="beer" className={styles.sliderContainer}>
        <div className={styles.sliderСontent}>
          <h3 className={styles.headingSlider}>OUR QUALITY PRODUCTS</h3>
          <Slider sliders={dataCardsBeer} />
        </div>
      </div>
      <div>
        <hr className={styles.hrMain} />
      </div>
      <div className={styles.picnicContainer}>
        <div className={styles.picnicContant}>
          <div className={styles.picnicContantText}>
            <div>
              <h1 className={styles.picnicHeaderH1}>PICNICE TIME</h1>
              <h3 className={styles.picnicHeaderH3}>NICE EXPERIENCE</h3>
            </div>
            <div className={styles.picnicContantParagraph}>
              <p>
                I believe, it is very important to have a break from the city life. Unfortunately,
                my family doesn`t have a country house. Nevertheless, we really enjoy spending time
                in quiet and peaceful places. Going for a picnic in a park is an ideal way for us to
                relax!
              </p>
            </div>
          </div>
          <div>
            <img className={styles.picnicImgLogo} src={picnicImg} alt="logo" />
            <h2 className={styles.picnicHeaderH2}>TIME WITH MOUNTAIN</h2>
          </div>
        </div>
      </div>
      <div className={styles.solodContainer}>
        <div className={styles.solodContant}>
          <div>
            <img className={styles.solodImgLogo} src={solodImg} alt="logo" />
            <h2 className={styles.solodHeaderH2}>ESTABLISHED TRADITIONS</h2>
          </div>
          <div className={styles.solodContantText}>
            <div>
              <h1 className={styles.solodHeaderH1}>THE WIND OF CHANGE</h1>
              <h3 className={styles.solodHeaderH3}>CENTURY-OLD HISTORY</h3>
            </div>
            <div>
              <p className={styles.solodContantParagraph}>
                From grandfathers to fathers, from fathers to sons. The whole history of the
                MOUNTAIN brewery is in a special section. Sincerely, your MOUNTAIN team.
              </p>
            </div>
            <ul className={styles.solodLink}>
              <div className={styles.solodLinkA}>
                <Link to="/about">ABOUT</Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {!token && (
        <>
          <div>
            <hr className={styles.hrMain} />
          </div>
          <div className={styles.signUpInMainContainer}>
            <div className={styles.signUpInMainContant}>
              <p className={styles.signUpInMainP}>
                Go through registration to access all the functionality.
              </p>
              <ul className={styles.signUpInMainLink}>
                <div className={styles.signUpInMainLinkA}>
                  <Link to="/signup">SIGN-UP</Link>
                </div>
                <img className={styles.imgHoops1} src={hoops} alt="logo" />
                <img className={styles.imgHoops2} src={hoops} alt="logo" />
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}
