/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'
import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'
import logo1 from '../../images/test1.jpeg'
import logo2 from '../../images/test2.png'
import logo3 from '../../images/test3.jpg'

export function Footer() {
  const navigate = useNavigate()

  const navigateToBeer = () => {
    navigate('/#beer')
    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 0)
  }

  return (
    <footer className={styles.wr}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGroup}>
          <Link to="/bars">
            <span className={styles.footerSpan}>BARS</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/bars">BROUWERIJ DE HALVE MAAN</Link>
            <Link to="/bars">THE ROYAL OAK</Link>
            <Link to="/bars">HOFBRÄUHAUS</Link>
            <Link to="/bars">FLAVA</Link>
            <Link to="/bars">SEAN ONEILL PUB</Link>
            <Link to="/bars">AF BREW TAPROOM</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/">
            <span className={styles.footerSpan} onClick={navigateToBeer}>
              BEER
            </span>
          </Link>
          <div className={styles.footerLinks} onClick={navigateToBeer}>
            <Link to="/">WHEAT BEER</Link>
            <Link to="/">AMR. LAGER</Link>
            <Link to="/">ENGLISH IPA</Link>
            <Link to="/">ENGLISH BROWN ALE</Link>
            <Link to="/">BROWN PORTER</Link>
            <Link to="/">OATMEAL STOUT</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/news">
            <span className={styles.footerSpan}>NEWS</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/news">OCTOBERFEST</Link>
            <Link to="/news">PARTYANDBULSHIT</Link>
            <Link to="/news">BEER FEST</Link>
            <Link to="/news">MOSCOW CIDER DAYS 2023</Link>
            <Link to="/news">BREWCOM 2022</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/">
            <span className={styles.footerSpan}>USER</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/signin">LOGIN</Link>
            <Link to="/signup">SIGN-UP</Link>
            <Link to="/user">PERSONAL PAGE</Link>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faVk} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.footerContainerBottom}>
        <div className={styles.footerContainerBottomLeft}>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo1} alt="logo1" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo2} alt="logo1" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo3} alt="logo1" />
          </a>
        </div>
        <div className={styles.footerContainerBottomRight}>
          <ul className={styles.footerContainerBottomRightUl}>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/TnC_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Conditions of Use
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://www.diageoprivacycentre.com/en-row?pp=https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Diageo Privacy Centre
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/UGC_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                UGC Policy
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/www.guinness.com_en-row_final_accessibility.html"
                target="_blank"
                rel="noreferrer"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Settings
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Privacy and Cookie Notice
              </a>
            </li>
            <li>
              <a href="https://responsibledrinking.eu/" target="_blank" rel="noreferrer">
                Responsible Drinking
              </a>
            </li>
            <li>
              <a href="https://www.drinkiq.com/" target="_blank" rel="noreferrer">
                DrinkIQ
              </a>
            </li>
            <li>
              <a href="https://www.thebar.com/" target="_blank" rel="noreferrer">
                theBar.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export const FooterMemo = memo(Footer)
