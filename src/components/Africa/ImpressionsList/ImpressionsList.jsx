import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import s from './style.module.scss'; // Подключаем стили
import lion from '../../../assets/images/lion.jpg'; // Импортируем изображения
import sunset from '../../../assets/images/sunset.jpg';
import man from '../../../assets/images/man.jpg';
import icon from '../../../assets/images/“.png';

const review1 = 'impressionsList.review1';
const review2 = 'impressionsList.review2';
const review3 = 'impressionsList.review3';

const author1 = 'impressionsList.author1';
const author2 = 'impressionsList.author2';
const author3 = 'impressionsList.author3';

const impressionsList = [
  { name: 'imp1', icon: icon, image: lion, text: review1, author: author1 },
  { name: 'imp2', icon: icon, image: sunset, text: review2, author: author2 },
  { name: 'imp3', icon: icon, image: man, text: review3, author: author3 },
];

export const ImpressionsList = () => {
  const [current, setCurrent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const { t } = useTranslation()

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrent(current === impressionsList.length - 1 ? 0 : current + 1);
      setFadeOut(false);
    }, 500); // Задержка должна быть равна длительности анимации в CSS
  };

  return (
    <div className={s.container1}> {/* Главный блок */}
      <div className={s.container2}> {/* Блок 2 с отступами */}
        <div className={s.block3}> {/* Блок 3 с фотографией */}
          <img src={impressionsList[current].image} className={`${s.image} ${fadeOut ? s.fadeOut : ''}`} alt={impressionsList[current].name} />
        </div>
        <div className={s.block4}> {/* Блок 4 с текстом и кнопкой */}
          <div className={s.text}>
          <img src={impressionsList[current].icon} className={`${s.symbol} ${fadeOut ? s.fadeOut : ''}`} alt={impressionsList[current].name}/>
          <p className={`${s.impression} ${fadeOut ? s.fadeOut : ''}`}>{t(impressionsList[current].text)}</p>
            <div className={`${s.signature} ${fadeOut ? s.fadeOut : ''}`}>{t(impressionsList[current].author)}</div>
          </div>
          <div className={s.controls}>
            <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
              {"\u2192"} {/* Unicode символ для правой стрелки */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};