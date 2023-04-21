/* eslint-disable consistent-return */
/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './News.module.css'

import { listPicturesNews } from '../../../API/newsApi'

export function News() {
  const [imageIndex, setImageIndex] = useState(0)

  const des = listPicturesNews.map((el) => el.img)
  const des2 = listPicturesNews.map((el) => el.name)
  const des3 = listPicturesNews.map((el) => el.discription)

  useEffect(() => {
    setInterval(() => {
      setImageIndex((prev) => (
        prev === des.length - 1 ? 0 : prev + 1
      ))
    }, 6000)
  }, [])

  return (
    <>
      <div className={styles.newsContainer}>
        <div className={styles.changeImgContantainer}>
          <div
            className={styles.changeImgContant}
          >
            <div>
              <h1
                className={styles.newsHeader}
              >
                NEWS
              </h1>
              <hr />
            </div>
            <motion.img
              className={styles.changeImg}
              src={des[imageIndex]}
              alt="logo"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1.5, repeatDelay: 4.5, repeat: Infinity }}

            />
            <motion.h1
              initial={{ opacity: 0, x: 1000 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.changeImgHeader}
            >
              {des2[imageIndex]}

            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -1000 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.changeImgDiscription}
            >
              {des3[imageIndex]}

            </motion.h1>
          </div>
        </div>
      </div>

      <div className={styles.newsCardsContantainer}>
        <hr className={styles.hrNewsCards} />
        <div className={styles.newsCards}>
          {listPicturesNews.map((el) => (
            <div key={el.id} className={styles.newsCardsContent}>
              <h1 className={styles.newsCardsH1}>{el.name}</h1>
              <img
                className={styles.newsCardsImg}
                src={el.img}
                alt=""
              />
              <p className={styles.newsCardsDiscription}>{el.discription}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
