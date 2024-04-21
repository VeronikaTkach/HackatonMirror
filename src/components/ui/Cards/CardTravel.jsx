import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/travels_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/travels_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/travels_card3.jpg';
import { useTranslation } from 'react-i18next';

export const CardTravel = ({title, travel, moto, price, img, ...props}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cn(s.component, s.size1, s.str)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={s.info}>
            <div className={s.info__block}>
              <div className={s.info__title_tr}>{t(title)}</div>
              <div className={s.info__travel_tr}>{t(travel)}</div>
              <div className={s.info__moto}>{t(moto)}</div>
              <div className={s.info__price}>{price}</div>
            </div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'cardtravel.types', travel: 'cardtravel.kiteSurfing', moto: 'cardtravel.FEEL_THE_FREEDOM_WITH_KITESURFING', price: '6750$', img: img1},
  {title: 'cardtravel.types', travel: 'cardtravel.skiing', moto: 'cardtravel.CONQUER_THE_PEAKS_WITH_US', price: '6750$', img: img2},
  {title: 'cardtravel.types', travel: 'cardtravel.islandRetreat', moto: 'cardtravel.DIVE_INTO_A_TROPICAL_PARADISE', price: '6750$', img: img3}
];

const cardTravels = titles.map((item, index) => (
  <CardTravel key={index} {...item} />
));

export default cardTravels;