/* eslint-disable max-len */
import wheatBeer from '../images/beersCards/wheatBeer.png'
import wheatBeerWheat from '../images/beersCards/wheat.png'
import lagerBeer from '../images/beersCards/lagerBeer.png'
import lagerBeerSun from '../images/beersCards/sunBeer.png'
import aleBeer from '../images/beersCards/aleBeer.png'
import aleBeerAmber from '../images/beersCards/amber3.png'
import ipaBeer from '../images/beersCards/ipaBeer1.png'
import ipaBeerHops from '../images/beersCards/hops.png'
import porterBeer from '../images/beersCards/porterBeer2.png'
import porterBeerMoon from '../images/beersCards/moon.png'
import stoutBeer from '../images/beersCards/stoutBeer1.png'
import stoutBeerRose from '../images/beersCards/rose.png'

export const dataCardsBeer = [
  {
    _id: '601fc862-2ef5-4b56-8680-1664e11f81cd',
    pictures: wheatBeer,
    pictures2: wheatBeerWheat,
    name: 'WHEAT BEER',
    discription: 'Wheat beer in the traditional Bavarian style',
    SRM: '4',
    IBU: '10',
    AlC: '4.8%',
    rating: '5',
    bgColor: '#c607078e',
    bgColorInfo: '#C60708',
  },
  {
    _id: 'aaec443c-4d9f-4f24-aba6-91b9e7baed94',
    pictures: lagerBeer,
    pictures2: lagerBeerSun,
    name: 'AMR. LAGER',
    discription: 'Light lager with moderate bitterness according to traditional recipes of American light lager',
    SRM: '2',
    IBU: '11',
    AlC: '4%',
    rating: '5',
    bgColor: '#ffe10080',
    bgColorInfo: '#f3a600',
  },
  {
    _id: 'cfe97c19-f376-4f14-ac0b-4904d6e88445',
    pictures: ipaBeer,
    pictures2: ipaBeerHops,
    name: 'ENGLISH IPA',
    discription: 'English IPA pleasant bitterness and rich hop aroma',
    SRM: '8',
    IBU: '48',
    AlC: '5.5%',
    rating: '5',
    bgColor: '#ff44008f',
    bgColorInfo: '#E43D00',
  },
  {
    _id: 'a993a197-5788-4e8b-9b2a-93061a38dbff',
    pictures: aleBeer,
    pictures2: aleBeerAmber,
    name: 'ENGLISH BROWN ALE',
    discription: 'Soft, elegant maltiness, with a delicate velvety consistency',
    SRM: '13',
    IBU: '22',
    AlC: '4.6%',
    rating: '5',
    bgColor: '#00ff3c86',
    bgColorInfo: '#41BA3B',
  },
  {
    _id: '8dd1b920-2e32-404b-8d08-beff1b8a0587',
    pictures: porterBeer,
    pictures2: porterBeerMoon,
    name: 'BROWN PORTER',
    discription: 'English dark ale with limited roasted properties',
    SRM: '28',
    IBU: '20',
    AlC: '5.1%',
    rating: '5',
    bgColor: '#2e2e2eb1',
    bgColorInfo: '#383837',
  },
  {
    _id: 'eb3ee46c-72e9-454d-b948-69313cd047fb',
    pictures: stoutBeer,
    pictures2: stoutBeerRose,
    name: 'OATMEAL STOUT',
    discription: 'The soft aroma of roasted grains and a light sweetness that resembles coffee with cream',
    SRM: '38',
    IBU: '30',
    AlC: '5.5%',
    rating: '5',
    bgColor: '#000000b1',
    bgColorInfo: '#000000',
  },
]
