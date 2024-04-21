import React from 'react';
import s from './style.module.scss';
import cardCountriesList from '../../ui/Cards/CardCountriesList';
import { useTranslation } from 'react-i18next';

export const CountriesList = () => {
  const { t } = useTranslation();

  return (
    <div className={s.countrieslist}>
      <div className={s.cards}>
        {cardCountriesList.map((card, index) => (
            <div key={index} className={s.card}>
              {card}
            </div>
          ))}
      </div>
    </div>
  );
}