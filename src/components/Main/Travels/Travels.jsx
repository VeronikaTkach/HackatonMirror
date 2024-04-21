import React from 'react';
import s from './style.module.scss';
import cardTravels from '../../ui/Cards/CardTravel';
import { useTranslation } from 'react-i18next';

export const Travels = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.travels}>
        <div className={s.text}>
          <div className={s.title}>{t("travels.types")}</div>
          <div className={s.name}>
            <span>{t("travels.FIND")}</span>
            <br/>
            <span>{t("travels.TRIP")}</span> <span className={s.highlight}>{t("travels.taste")}</span>
          </div>
        </div>
        <div className={s.cards}>
          {cardTravels.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}