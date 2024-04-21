import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/ghana.jpg';
import img2 from '../../../assets/images/africa_countries/namibia.jpg';
import img3 from '../../../assets/images/africa_countries/botsvana.jpg';
import img4 from '../../../assets/images/africa_countries/uganda.jpg';
import img5 from '../../../assets/images/africa_countries/kenia.jpg';
import img6 from '../../../assets/images/africa_countries/kabo_verde.jpg';
import img7 from '../../../assets/images/africa_countries/tanzania.jpg';
import img8 from '../../../assets/images/africa_countries/madagascar.jpg';
import img9 from '../../../assets/images/africa_countries/zimbabve.jpg';
import { useTranslation } from 'react-i18next';

export const CardCountriesList = ({text_h1, description, img, ...props}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cn(s.component, s.size__countries, s.shd)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={cn(s.info, s.info__countriesList)}>
            <div className={s.info__text_h1}>{t(text_h1)}</div>
            <div className={s.info__description}>{t(description)}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  { text_h1: 'cardcountrieslist.Ghana', description: 'cardcountrieslist.GhanaDesc', img: img1 },
  { text_h1: 'cardcountrieslist.Namibia', description: 'cardcountrieslist.NamibiaDesc', img: img2 },
  { text_h1: 'cardcountrieslist.Botswana', description: 'cardcountrieslist.BotswanaDesc', img: img3 },
  { text_h1: 'cardcountrieslist.Uganda', description: 'cardcountrieslist.UgandaDesc', img: img4 },
  { text_h1: 'cardcountrieslist.Kenya', description: 'cardcountrieslist.KenyaDesc', img: img5 },
  { text_h1: 'cardcountrieslist.CapeVerde', description: 'cardcountrieslist.CapeVerdeDesc', img: img6 },
  { text_h1: 'cardcountrieslist.Tanzania', description: 'cardcountrieslist.TanzaniaDesc', img: img7 },
  { text_h1: 'cardcountrieslist.Madagascar', description: 'cardcountrieslist.MadagascarDesc', img: img8 },
  { text_h1: 'cardcountrieslist.Zimbabwe', description: 'cardcountrieslist.ZimbabweDesc', img: img9 }
];

const cardCountriesList = titles.map((item, index) => (
  <CardCountriesList key={index} {...item} />
));

export default cardCountriesList;