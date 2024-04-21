import React, { useState } from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/directions_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/directions_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/directions_card3.jpg';
import { useTranslation } from 'react-i18next';

export const CardDirection = ({ title, date, direction, img, description_dir, price, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={cn(s.component, s.size, s.dir)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} className={s.img} alt={"img"} />
      <div className={s.info}>
        <div className={s.info__title}>{t(title)}</div>
        <div className={s.info__offer}>
          <div className={s.info__date}>{t(date)}</div>
          <div className={s.info__direction}>{t(direction)}</div>
          {isHovered && (
            <div className={s.info__description_dir}>
              <div className={s.info__description_text}>{t(description_dir)}</div>
              <div className={s.info__price}>{price}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const titles = [
  {
    title: 'carddirection.America',
    date: 'carddirection.date1',
    direction: 'carddirection.PowellLakeGlenCanyon',
    description_dir: 'carddirection.PowellLakeGlenCanyonDesc',
    price: '6575 $',
    img: img1
  },
  {
    title: 'carddirection.Indonesia',
    date: 'carddirection.date2',
    direction: 'carddirection.weekendInBali',
    description_dir: 'carddirection.weekendInBaliDesc',
    price: '6575 $',
    img: img2
  },
  {
    title: 'carddirection.Malaysia',
    date: 'carddirection.date3',
    direction: 'carddirection.KualaLumpurBorneo',
    description_dir: 'carddirection.KualaLumpurBorneoDesc',
    price: '6575 $',
    img: img3
  }
];

const cardDirections = titles.map((item, index) => (
  <CardDirection key={index} {...item} />
));

export default cardDirections;