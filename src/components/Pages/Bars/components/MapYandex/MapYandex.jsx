/* eslint-disable no-undef */
/* eslint-disable func-names */
import { useEffect } from 'react'
import styles from './mapYandex.module.css'

export function MapYandex({ data }) {
  useEffect(() => {
    function init() {
      // eslint-disable-next-line no-undef
      const map = new ymaps.Map('map', {
        center: [51.35846587348802, 16.04162565797728],
        zoom: 5,
      })

      const clusterer = new ymaps.Clusterer({
        // preset: 'islands#invertedVioletClusterIcons',
        clusterIconColor: 'black',
        // groupByCoordinates: false,
        clusterDisableClickZoom: true,
        // clusterHideIconOnBalloonOpen: true,
        // geoObjectHideIconOnBalloonOpen: false,
        showInAlphabeticalOrder: true,
      })

      data.forEach((el) => {
        // eslint-disable-next-line no-unused-vars

        // eslint-disable-next-line no-undef
        const placemark = new ymaps.Placemark([el.latitude_N, el.longitude_E], {
          balloonContentHeader: `${el.name}`,
          balloonContentBody: `${el.city}, ${el.address}`,
          balloonContentFooter: `rating ${el.rating}`,
          clusterCaption: `${el.name}`,
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/931/931949.png',
          iconImageSize: [30, 30],
          iconImageOffset: [0, 0],
          // balloonImageOffset: [-36, -90], // смещание балуна, если его необходимо подогнать
        })

        // map.geoObjects.add(placemark)
        clusterer.add(placemark)
      })

      map.geoObjects.add(clusterer)

      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      // map.controls.remove('zoomControl') // удаляем контрол зуммирования
    }
    // eslint-disable-next-line no-undef
    ymaps.ready(init)
  }, [])

  return (
    <div id="map" className={styles.map} />
  )
}
