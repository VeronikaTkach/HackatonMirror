import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/africa_countries_photo_1.svg';
import img2 from '../../../assets/images/africa_countries/africa_coutries_photo_2.png';

export const CountriesInfo = () => {
  const { t, i18n } = useTranslation();
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const offsetX = (e.clientX - left) / width * 100;
    const offsetY = (e.clientY - top) / height * 100;

    setZoomStyle({
      transformOrigin: `${offsetX}% ${offsetY}%`
    });
  };
  
  return (
    <div className={s.countriesInfo}>
      <div className={s.text}>
        <div className={s.title}>{t('countriesAfrica.title')}</div>
        <div className={s.name}>
          <span>{t('countriesAfrica.AFRICA')}</span>
          <span className={s.highlight}>{t('countriesAfrica.DREAM')}</span>
          <br/>
          <span>{t('countriesAfrica.TRAVELER')}</span>
          <br/>
          <span className={s.highlight}>{t('countriesAfrica.EXPLORE')} </span>
          <span>{t('countriesAfrica.HER_UNRESTRICTED')}</span>
        </div>
        <p className={s.description}>
          {t('countriesAfrica.description1')}
          <br/>
          <br/>
          {t('countriesAfrica.description2')}
        </p>
        <div className={s.countriesInfo__img_small}>
          <div className={s.imgContainer} onMouseMove={handleMouseMove}>
            <img className={`${s.imgZoom} ${s.img}`} src={img1} alt={'desert'} style={zoomStyle}/>
          </div>
        </div>
      </div>
      
      <div className={s.countriesInfo__img}>
        <div className={s.imgContainer} onMouseMove={handleMouseMove}>
          <img className={`${s.imgZoom} ${s.img}`} src={img2} alt={'beach'} style={zoomStyle}/>
        </div>
      </div>
    </div>
  )
}