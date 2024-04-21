import React, { useState, useRef, useEffect } from 'react';
import s from './style.module.scss';
import { useTranslation } from 'react-i18next';
import africaVideo from '../../../assets/video/elephants_slider.mov'; // Путь к видео
import europe from '../../../assets/images/continents/europe.jpg';
import asia from '../../../assets/images/continents/asia.jpg';
import america from '../../../assets/images/continents/america.jpg';
import australia from '../../../assets/images/continents/australia.jpg';

const continents = [
  { name: 'continents.africa', media: africaVideo, link: '/africa' }, // Использование видео
  { name: 'continents.europe', image: europe, link: '/inprogress' },
  { name: 'continents.asia', image: asia, link: '/inprogress' },
  { name: 'continents.america', image: america, link: '/inprogress' },
  { name: 'continents.australia', image: australia, link: '/inprogress' },
];

export const Continents = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrent(current === continents.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? continents.length - 1 : current - 1);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Определяет, насколько видимый должен быть целевой элемент, чтобы вызвать обратный вызов
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Если слайдер видим, запускаем видео
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          // Если слайдер не видим, останавливаем видео
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, [videoRef]);

  return (
    <div className={s.carousel}>
      {continents[current].media ? (
        <video ref={videoRef} autoPlay muted className={s.video}>
          <source src={continents[current].media} type="video/mp4" />
          {t('continents.video_not_supported')}
        </video>
      ) : (
        <img src={continents[current].image} alt={continents[current].name} className={s.image} />
      )}
      <a href={continents[current].link} className={s.continentName}>
        {t(continents[current].name)}
      </a>
      <div className={s.controls}>
        <button className={`${s.controlButton} ${s.left}`} onClick={prevSlide}>
          ← {/* Замените символ для левой стрелки */}
        </button>
        <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
          → {/* Замените символ для правой стрелки */}
        </button>
      </div>
    </div>
  );
};