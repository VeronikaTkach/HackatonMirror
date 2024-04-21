import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './style.module.scss';
import image1 from '../../../assets/images/africa_countries/AboutAfrica_pyramid.jpg';
import image2 from '../../../assets/images/africa_countries/AboutAfrica_man.jpg';
import image3 from '../../../assets/images/africa_countries/AboutAfrica_looking_woman.jpg';
import image4 from '../../../assets/images/africa_countries/AboutAfrica_trees.jpg';

export const AboutAfrica = () => {
  const { t } = useTranslation();

  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { width, height } = target.getBoundingClientRect();

    const xTilt = (-(offsetX - (width / 2)) / 3) / 3;
    const yTilt = ((offsetY - (height / 2)) / 3) / 3;

    setTiltStyle({
      '--xTilt': `${xTilt}deg`,
      '--yTilt': `${yTilt}deg`
    });
  };

  return (
    <div className={s.aboutAfrica}>
      <div className={s.firstColumn}>
        <div className={`${s.pyramidImage} ${s.imageContainer}`} onMouseMove={handleMouseMove}>
          <img src={image1} alt={'photo1'} style={tiltStyle} />
        </div>
        <div className={s.description}>
          <p>{t('aboutAfrica.description1')}</p>
          <p>{t('aboutAfrica.description2')}</p>
        </div>
      </div>
      <div className={s.secondColumn} onMouseMove={handleMouseMove}>
        <img className={s.manImage} src={image2} alt={'photo2'} style={tiltStyle} />
        <img className={s.womanImage} src={image3} alt={'photo3'} style={tiltStyle} />
      </div>
      <div className={s.text}>
        <div>
          <div className={s.title}>{t('aboutAfrica.title')}</div>
          <div className={s.name}>
            <span className={s.highlight}>{t('aboutAfrica.uniqueTours')}</span>
            <span><br />{t('aboutAfrica.toAmazingCorners')}</span>
          </div>
        </div>
        <div className={`${s.treesImage} ${s.imageContainer}`} onMouseMove={handleMouseMove}>
          <img src={image4} alt={'photo4'} style={tiltStyle} />
        </div>
      </div>
    </div>
  );
};